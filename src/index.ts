import {Class, Item, Library, Loadout, ScoringFunction, Slot, Stats, Utility} from "./model";
import {ALL_ITEMS} from "./items";

const GEN_SIZE = 100;
const EVOLUTIONS = 100;

function main(): void {
    const clazz: Class = "warlock";
    const lib = libraryForClass(clazz);
    let generation = randomLoadouts(GEN_SIZE, clazz, lib);
    for (let gen=0; gen<EVOLUTIONS; gen++) {
        scoreMany(generation, scoreForLomm, 1.7);
        generation = sortGeneration(generation);
        generation = uniq(generation.slice(0, GEN_SIZE/2));
        const uniques = generation.length;
        for (let j=0; j<GEN_SIZE/4; j++) {
            const mutee = generation[Math.floor(Math.random() * uniques)];
            generation.push(mutate(mutee, lib));
        }
        while (generation.length < GEN_SIZE) {
            generation.push(randomLoadout(clazz, lib));
        }
        scoreMany(generation, scoreForLomm, 1.7);
        // console.log(generation.map(g => g.score));

        console.log(`Gen ${gen+1}`);
        printLoadout(generation[0]);
        console.log();
    }
    generation = uniq(generation);
    console.log("================================================ " + new Date());
    // for (let i=0; i<3 && i<generation.length; i++) {
    //     printLoadout(generation[i]);
    //     console.log();
    // }
    printLoadout(generation[0]);
}

function uniq(gen: Loadout[]): Loadout[] {
    const used: string[] = [];
    const result: Loadout[] = [];
    for (const l of gen) {
        if (used.indexOf(l.uniq!) >= 0) continue;
        used.push(l.uniq!);
        result.push(l);
    }
    return result;
}

function sortGeneration(gen: Loadout[]): Loadout[] {
    return gen.sort((a, b) => (b.score || 0) - (a.score || 0));
}

function findBest(loadouts: Loadout[]): Loadout {
    let bestScore = undefined;
    let best: Loadout;
    for (const l of loadouts) {
        if (bestScore === undefined) {
            bestScore = l.score;
            best = l;
        } else if (l.score && l.score > bestScore) {
            bestScore = l.score;
            best = l;
        }
    }
    return best!;
}

function randomLoadouts(howMany: number, clazz: Class, lib: Library): Loadout[] {
    const result: Loadout[] = [];
    for (let i=0; i<howMany; i++) {
        result.push(randomLoadout(clazz, lib));
    }
    return result;
}

function scoreMany(loadouts: Loadout[], fn: ScoringFunction, bonding: number) {
    for (const l of loadouts) {
        const stats = modifyStatsForCompanion(l.stats, l.items.companion, bonding);
        l.score = fn(stats, l.utility);
        l.uniq = uniqLoadout(l);
    }
}

function modifyStatsForCompanion(stats: Stats, companion: Item | Item[] | undefined, bonding: number): Stats {
    if (!companion || Array.isArray(companion)) return stats;
    const aug = !!companion.augment;
    const mult = (aug ? 1 : 0) + bonding;
    return {
        awareness: (stats.awareness || 0) + mult * (companion.stats.awareness || 0),
        critAvoid: (stats.critAvoid || 0) + mult * (companion.stats.critAvoid || 0),
        power: (stats.power || 0) + mult * (companion.stats.power || 0),
        armPen: (stats.armPen || 0) + mult * (companion.stats.armPen || 0),
        deflect: (stats.deflect || 0) + mult * (companion.stats.deflect || 0),
        combAdv: (stats.combAdv || 0) + mult * (companion.stats.combAdv || 0),
        accuracy: (stats.accuracy || 0) + mult * (companion.stats.accuracy || 0),
        critStrike: (stats.critStrike || 0) + mult * (companion.stats.critStrike || 0),
        defense: (stats.defense || 0) + mult * (companion.stats.defense || 0),
        maxHP: stats.maxHP
    }
}

function uniqLoadout(loadout: Loadout): string {
    let result = "";
    const slots: Slot[] = ["head", "armor", "arms", "main", "off", "feet", "neck", "ring", "waist", "shirt", "trousers", "artifact", "companion", "companion-equipment"];
    for (const slot of slots) {
        const si = loadout.items[slot];
        if (si) {
            if (Array.isArray(si)) {
                for (const i of si) result = result + i.name;
            } else {
                result = result + si.name;
            }
        }
    }
    return result;
}

function printLoadout(loadout: Loadout) {
    console.log(`Score: ${loadout.score}`);
    console.log(`    Max HP: ${loadout.stats.maxHP}`)
    console.log(`    Power: ${loadout.stats.power}`)
    console.log(`    Armour Penetration: ${loadout.stats.armPen}`)
    console.log(`    Defense: ${loadout.stats.defense}`)
    console.log(`    Critical Strike: ${loadout.stats.critStrike}`)
    console.log(`    Critical Avoidance: ${loadout.stats.critAvoid}`)
    console.log(`    Accuracy: ${loadout.stats.accuracy}`)
    console.log(`    Deflect: ${loadout.stats.deflect}`)
    console.log(`    Combat Advantage: ${loadout.stats.combAdv}`)
    console.log(`    Awareness: ${loadout.stats.awareness}`)
    console.log();
    const slots: Slot[] = ["head", "armor", "arms", "main", "off", "feet", "neck", "ring", "waist", "shirt", "trousers", "artifact", "companion", "companion-equipment"];
    for (const slot of slots) {
        if (slot === "companion") console.log("\nCompanion");
        if (slot === "artifact") console.log("\nArtifacts");
        const si = loadout.items[slot];
        if (si) {
            if (Array.isArray(si)) {
                for (const i of si) printItem(i);
            } else {
                printItem(si);
            }
        }
    }
    console.log();
    console.log("Bonuses");
    for (const b of loadout.bonuses) console.log(b);
}

function printItem(item: Item) {
    console.log(item.name);
}

function need(has: number | undefined, need: number): number {
    if (!has) has = 0;
    // TODO - some sort of "closer is better" formula
    if (has < need) return has - need;
    return 0;
}

function about(has: number | undefined, need: number): number {
    if (!has) has = 0;
    if (has >= need) return 0;
    const p = has / need;
    const p3 = p * p * p;
    return (need * (p3 - 1));
}

function scoreForLomm(stats: Stats, utility: Utility): number {
    let score = 0;
    score += about(stats.armPen, 60000);
    score += about(stats.accuracy, 60000) * 0.95;
    score += about(stats.critStrike, 60000) * 0.9;
    score += about(stats.combAdv, 110000) * 0.85;
    score += about(stats.defense, 60000) * 0.8;
    score += about(stats.deflect, 60000) * 0.75;
    score += about(stats.critAvoid, 65000) * 0.7;
    score += about(stats.awareness, 70000) * 0.65;
    if (stats.power) score += stats.power / 3;
    if (stats.maxHP) score += stats.maxHP / 8;
    if (stats.combAdv && stats.combAdv > 110000) score += (stats.combAdv - 110000) / 4;
    return Math.floor(score);
}

function libraryForClass(clazz: Class): Library {
    const result: Library = {};
    let count = 0;
    for (const item of ALL_ITEMS) {
        if (!item.classes || item.classes.indexOf(clazz) >= 0) {
            count += 1;
            result[item.slot] = [ ...(result[item.slot] || []), item ];
        }
    }
    console.log(`${count} items for ${clazz}`);
    return result;
}

function randomItem(options: Item[] | undefined): Item | undefined {
    if (options && options.length > 0) {
        return options[Math.floor(Math.random() * options.length)];
    }
    return undefined;
}

function choose2(options: Item[] | undefined): (Item | Item[] | undefined) {
    if (!options) return undefined;
    if (options.length <= 2) return options.sort(byItemName);
    const option1 = randomItem(options)!;
    const others = options.filter(i => i != option1);
    const option2 = randomItem(others)!;
    return [option1, option2].sort(byItemName);
}

function byItemName(a: Item, b: Item) {
    return a.name.localeCompare(b.name);
}

function choose3(options: Item[] | undefined): (Item | Item[] | undefined) {
    if (!options) return undefined;
    if (options.length <= 3) return options.sort(byItemName);
    const option1 = randomItem(options)!;
    let others = options.filter(i => i != option1);
    const option2 = randomItem(others)!;
    others = others.filter(i => i != option2);
    const option3 = randomItem(others)!;
    return [option1, option2, option3].sort(byItemName);
}

function choose4(options: Item[] | undefined): (Item | Item[] | undefined) {
    if (!options) return undefined;
    if (options.length <= 4) return options.sort(byItemName);
    const option1 = randomItem(options)!;
    let others = options.filter(i => i != option1);
    const option2 = randomItem(others)!;
    others = others.filter(i => i != option2);
    const option3 = randomItem(others)!;
    others = others.filter(i => i != option3);
    const option4 = randomItem(others)!;
    return [option1, option2, option3, option4].sort(byItemName);
}

function mutate(mutee: Loadout, library: Library): Loadout {
    const items = {... mutee.items};
    const targets: Slot[] = [ "head", "arms", "armor", "feet", "artifact", "companion", "main", "off",
        "neck", "ring", "ring", "companion-equipment", "companion-equipment", "companion-equipment", "waist",
        "shirt", "trousers", "artifact"];
    const target = targets[Math.floor(Math.random() * targets.length)];
    if (target === "ring") {
        items["ring"] = choose2(library.ring);
    } else if (target === "companion-equipment") {
        items["companion-equipment"] = choose3(library["companion-equipment"]);
    } else if (target === "artifact") {
        items["artifact"] = choose4(library.artifact);
    } else {
        items[target] = randomItem(library[target]);
    }
    const stats = calculateStats(items);
    const utility = calculateUtility(items);
    const bonuses = calculateBonuses(items);
    return { class: mutee.class, items, stats, utility, bonuses };
}

// TODO: boons insignia mount
function randomLoadout(clazz: Class, library: Library): Loadout {
    const items: Partial<Record<Slot, Item | Item[]>> = {};
    items["head"] = randomItem(library.head);
    items["armor"] = randomItem(library.armor);
    items["arms"] = randomItem(library.arms);
    items["main"] = randomItem(library.main);
    items["off"] = randomItem(library.off);
    items["feet"] = randomItem(library.feet);
    items["neck"] = randomItem(library.neck);
    items["ring"] = choose2(library.ring)
    items["companion-equipment"] = choose3(library["companion-equipment"]);
    items["waist"] = randomItem(library.waist);
    items["shirt"] = randomItem(library.shirt);
    items["trousers"] = randomItem(library.trousers);
    items["artifact"] = choose4(library.artifact);
    items["companion"] = randomItem(library.companion);
    const stats = calculateStats(items);
    const utility = calculateUtility(items);
    const bonuses = calculateBonuses(items);
    return { class: clazz, items, stats, utility, bonuses };
}

function addStats(left: Stats, right: Stats, combinedRating: number): Stats {
    return {
        power: (left.power || 0) + (right.power || 0),
        maxHP: (left.maxHP || 0) + (right.maxHP || 0),
        awareness: (left.awareness || 0) + (right.awareness || 0) + combinedRating,
        critAvoid: (left.critAvoid || 0) + (right.critAvoid || 0) + combinedRating,
        deflect: (left.deflect || 0) + (right.deflect || 0) + combinedRating,
        defense: (left.defense || 0) + (right.defense || 0) + combinedRating,
        combAdv: (left.combAdv || 0) + (right.combAdv || 0) + combinedRating,
        critStrike: (left.critStrike || 0) + (right.critStrike || 0) + combinedRating,
        accuracy: (left.accuracy || 0) + (right.accuracy || 0) + combinedRating,
        armPen: (left.armPen || 0) + (right.armPen || 0) + combinedRating
    }
}

function calculateStats(items: Partial<Record<Slot, Item | Item[]>>): Stats {
    let result: Stats = { power: 0, maxHP: 0, awareness: 0, critAvoid: 0, deflect: 0, defense: 0, combAdv: 0,
        critStrike: 0, accuracy: 0, armPen: 0};
    for (const si of Object.values(items)) {
        if (Array.isArray(si)) {
            for (const i of si) {
                result = addStats(result, i.stats, i.combinedRating);
            }
        } else if (si) {
            result = addStats(result, si.stats, si.combinedRating);
        }
    }
    return result;
}

function calculateUtility(items: Partial<Record<Slot, Item | Item[]>>): Utility {
    const result: Utility = {};
    return result;
}

function calculateBonuses(items: Partial<Record<Slot, Item | Item[]>>): string[] {
    const result: string[] = [];
    for (const si of Object.values(items)) {
        if (Array.isArray(si)) {
            for (const i of si) {
                if (i.bonuses) for (const b of i.bonuses) result.push(b);
            }
        } else if (si && si.bonuses) {
            for (const b of si.bonuses) result.push(b);
        }
    }
    return result;
}

main();