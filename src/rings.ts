import {Item} from "./model";

const ringOverwhelmed4: Item = {
    slot: "ring",
    name: "Ring of the Overwhelmed +4",
    stats: {
        deflect: 12600,
        awareness: 8400
    },
    bonuses: ["When you have been running for 2 seconds you gain increased damage resistance as long as you continue running."],
    enchantmentSlots: [ "defense", "defense"],
    combinedRating: 1050
};
const ringVanPres4: Item = {
    slot: "ring",
    name: "Ring of Vanishing Presence +4",
    stats: {},
    bonuses: ["When struck by a foe you have an 80% chance to vanish for 2.5 seconds."],
    enchantmentSlots: ["offense", "defense"],
    combinedRating: 596
}
const tannersLeatherRing: Item = {
    slot: "ring",
    name: "Tanner's Leather Ring",
    stats: {
        armPen: 11880,
        accuracy: 7920
    },
    bonuses: ["Manticore's Mane Bite: when you use a daily power, the next enemy that attacks you takes damage equal to 50% of your max health."],
    enchantmentSlots: ["offense", "offense"],
    combinedRating: 990
}
const brutalFiend4: Item = {
    slot: "ring",
    name: "Ring of the Brutal Fiend +4",
    stats: {
        armPen: 8400,
        critStrike: 12600
    },
    bonuses: ["Every 30 seconds you gain 7500 power for 8 seconds. This power only works in combat."],
    enchantmentSlots: ["offense", "offense"],
    combinedRating: 1050
}
const leadingTeacher: Item = {
    slot: "ring",
    name: "Leading Ring of the Teacher",
    stats: {
        combAdv: 19800
    },
    bonuses: ["Tit for Tat: Your at-will and encounter powers do 3% more damage but your daily powers do 30% less damage."],
    enchantmentSlots: ["offense", "offense"],
    combinedRating: 990
}
const nickelPlatedRing: Item = {
    slot: "ring",
    name: "Nickel-plated Ring",
    stats: {
        armPen: 11880,
        critStrike: 7920
    },
    bonuses: ["Encounter Perk: your encounter powers do 3% more damage."],
    enchantmentSlots: ["offense", "offense"],
    combinedRating: 990
}
const fallenPower4: Item = {
    slot: "ring",
    name: "Nickel-plated Ring",
    stats: {
        critAvoid: 8400,
        critStrike: 12600
    },
    bonuses: ["On hitting a foe you gain 435 power for 4 seconds."],
    enchantmentSlots: ["offense", "defense"],
    combinedRating: 1050
}
const impenetrability4: Item = {
    slot: "ring",
    name: "Ring of Impenetrability +4",
    stats: { },
    bonuses: ["When your health drops below 20% you become invulnerable for 2 seconds."],
    enchantmentSlots: ["offense", "defense"],
    combinedRating: 596
}
const beastSlayer5: Item = {
    slot: "ring",
    name: "Ring of the Beast Slayer +5",
    stats: { },
    bonuses: ["Beast Hunter: +5% damage against beasts."],
    enchantmentSlots: ["offense", "offense"],
    combinedRating: 714
}

export const ALL_RINGS: Item[] = [ ringOverwhelmed4, ringVanPres4, tannersLeatherRing, brutalFiend4, leadingTeacher,
nickelPlatedRing, fallenPower4, impenetrability4, beastSlayer5];