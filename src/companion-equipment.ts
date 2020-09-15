import {Item} from "./model";

const platinumIcon: Item = {
    slot: "companion-equipment",
    name: "Platinum Icon of the Companion",
    stats: {
        critAvoid: 12120
    },
    enchantmentSlots: ["companion-defense", "companion-defense"],
    combinedRating: 1010
}
const scorchedBelt: Item = {
    slot: "companion-equipment",
    name: "Scorched Belt of the Companion",
    stats: {
        defense: 4704,
        accuracy: 7056
    },
    enchantmentSlots: ["companion-offense"],
    combinedRating: 980
}
const goldTalisman: Item = {
    slot: "companion-equipment",
    name: "Gold Talisman of the Companion",
    stats: {
        armPen: 12120
    },
    enchantmentSlots: ["companion-offense", "companion-offense"],
    combinedRating: 1010
}
const ivyGrimore: Item = {
    slot: "companion-equipment",
    name: "Ivy Grown Grimoire of the Companion",
    stats: {
        armPen: 7272,
        combAdv: 4848
    },
    enchantmentSlots: ["companion-offense", "companion-offense"],
    combinedRating: 1010
}
const chainedGrimore: Item = {
    slot: "companion-equipment",
    name: "Chained Grimoire of the Companion",
    stats: {
        awareness: 7272,
        armPen: 4848
    },
    enchantmentSlots: ["companion-defense", "companion-defense"],
    combinedRating: 1010
}
const platinumCasedGrimore: Item = {
    slot: "companion-equipment",
    name: "Platinum-cased Grimoire of the Companion",
    stats: {
        awareness: 12120
    },
    enchantmentSlots: ["companion-defense", "companion-defense"],
    combinedRating: 1010
}
const goldSwordKnot: Item = {
    slot: "companion-equipment",
    name: "Gold-clasped Sword Knot of the Companion",
    stats: {
        accuracy: 12120
    },
    enchantmentSlots: ["companion-offense", "companion-offense"],
    combinedRating: 1010
}
const steelCappedSwordKnot: Item = {
    slot: "companion-equipment",
    name: "Steel-capped Sword Knot of the Companion",
    stats: {
        defense: 11880
    },
    enchantmentSlots: ["companion-defense"],
    combinedRating: 990
}
const torchedRing: Item = {
    slot: "companion-equipment",
    name: "Torched Ring of the Companion",
    stats: {
        accuracy: 7128,
        awareness: 4752
    },
    enchantmentSlots: ["companion-offense", "companion-defense"],
    combinedRating: 990
}

export const ALL_COMPANION_EQUIPMENT = [ platinumIcon, scorchedBelt, ivyGrimore, torchedRing, steelCappedSwordKnot, goldSwordKnot,
    platinumCasedGrimore, chainedGrimore, goldTalisman];