import {Item} from "./model";

const engineMasterMantle: Item = {
    slot: "neck",
    name: "The Engine Master's Mantle",
    combinedRating: 784,
    enchantmentSlots: ["utility", "offense"],
    stats: { maxHP: 37632, armPen: 1960, critStrike: 1960 },
    bonuses: ["+5 CONSTITUTION"]
};
const whipOfTheErinyes: Item = {
    slot: "waist",
    name: "Whip of the Erinyes",
    combinedRating: 980,
    enchantmentSlots: ["utility", "defense"],
    stats: { maxHP: 37632, defense: 1960, accuracy: 1960 },
    bonuses: ["+2 INTELLIGENCE, +2 CHARISMA"]
}
const staffOfFlowers: Item = {
    slot: "artifact",
    name: "Staff of Flowers",
    combinedRating: 0,
    enchantmentSlots: [],
    stats: { power: 3000, critStrike: 1500, awareness: 1500 }
};
const bookOfVileDarkness: Item = {
    slot: "artifact",
    name: "Book of Vile Darkness",
    combinedRating: 0,
    enchantmentSlots: [],
    stats: { power: 3000, armPen: 1500, deflect: 1500 }
}
const halastersBlastSceptre: Item = {
    slot: "artifact",
    name: "Halaster's Blast Scepter",
    combinedRating: 0,
    enchantmentSlots: [],
    stats: { maxHP: 3960, power: 1960, critStrike: 990 }
}
const trobriandsRing: Item = {
    slot: "artifact",
    name: "Trobriand's Ring",
    combinedRating: 0,
    enchantmentSlots: [],
    stats: { power: 2780, defense: 1390, critAvoid: 1390 }
}

export const ALL_ARTIFACTS = [ engineMasterMantle, whipOfTheErinyes, staffOfFlowers, bookOfVileDarkness, halastersBlastSceptre,
    trobriandsRing];