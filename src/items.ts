import {Item} from "./model";
import {ALL_COMPANION_EQUIPMENT} from "./companion-equipment";
import {ALL_WEAPONS} from "./weapons";
import {ALL_COMPANIONS} from "./companions";
import {ALL_ARTIFACTS} from "./artifacts";
import {INFERNAL_ITEMS} from "./infernal";
import {ALL_RINGS} from "./rings";

const charmedHat: Item = {
    slot: "head",
    classes: ["wizard", "warlock"],
    name: "Protege's Charmed Hat",
    stats: {
        defense: 1960,
        power: 4704,
        maxHP: 18816,
        critStrike: 1176,
        combAdv: 784
    },
    utility: {},
    bonuses: ["Undermountain Hunter: 5% damage in the Undermountain"],
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 784
};
const forsakenCowl: Item = {
    slot: "head",
    classes: ["wizard", "warlock"],
    name: "Forsaken Caster's Cowl",
    stats: {
        defense: 2450,
        power: 5880,
        maxHP: 23520,
        critStrike: 1470,
        combAdv: 980
    },
    bonuses: ["Executioner's Might: When you kill an enemy your power increases by 5000 for 10 seconds.(30 second cooldown)"],
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 980
};
const forsakenRobe: Item = {
    slot: "armor",
    classes: ["wizard", "warlock"],
    name: "Forsaken Caster's Robe",
    stats: {
        defense: 2450,
        power: 5880,
        maxHP: 23520,
        armPen: 2450
    },
    bonuses: ["Survivor's Remedy: Whenever you deflect an attack you have a 10% chance to restore 5% of your maximum hit points."],
    enchantmentSlots: ["defense", "armor-enhance"],
    combinedRating: 980
}
const frenzyMitts: Item = {
    slot: "arms",
    name: "Frenzy Mitts",
    stats: {
        defense: 1470,
        power: 5880,
        maxHP: 23520,
        armPen: 980,
        accuracy: 2450
    },
    bonuses: ["Death Defiler's Might: Gain 300 power for each enemy you are engaged in battle (max 15)."],
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 980
}
const crownLostKing: Item = {
    slot: "head",
    name: "Crown of the Lost King",
    stats: {
        defense: 2000,
        power: 4800,
        maxHP: 19200,
        armPen: 1000,
        accuracy: 1000
    },
    bonuses: ["Challenger's Might: When in combat with only one enemy, your power is increased by 2000."],
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 800
}
const mysticCowlSuccessor: Item = {
    slot: "head",
    name: "Mystic Cowl of the Successor",
    stats: {
        defense: 1980,
        power: 4752,
        maxHP: 19008,
        critStrike: 1386,
        critAvoid: 594
    },
    bonuses: ["Executioner's Focus: when you kill an enemy, your critical strike increases by 5% for 10 seconds."],
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 792
}
const forsakenMendersScalemail: Item = {
    slot: "armor",
    name: "Forsaken Mender's Scalemail",
    stats: {
        defense: 2450,
        power: 5880,
        maxHP: 23520,
        deflect: 2450
    },
    bonuses: ["Survivor's Remedy: Whenever you deflect an attack, you have a 10% chance to restore 5% of your maximum hit points."],
    enchantmentSlots: ["defense", "armor-enhance"],
    combinedRating: 980
}
const mightyStormSlippers: Item = {
    slot: "feet",
    name: "Mighty Storm Slippers",
    stats: { defense: 2450, power: 5880, maxHP: 23520, critStrike: 1225, combAdv: 1225 },
    enchantmentSlots: ["utility"],
    combinedRating: 980,
    bonuses: ["Charged Might: When action points are full, your power is increased by 5000."]
}
const moldyApprenticeBraces: Item = {
    slot: "arms",
    name: "Moldy Apprentice Braces",
    stats: { defense: 1900, power: 4560, maxHP: 18240, accuracy: 1140, awareness: 760 },
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 760,
    bonuses: ["The Ol' Switcharoo: +1500 armor penetration, -2500 defense."]
}
const starTannedShirt: Item = {
    slot: "shirt",
    name: "Star-tanned Shirt of Hardened Leather",
    stats: { power: 4848, maxHP: 19392, critStrike: 2020, combAdv: 2020 },
    enchantmentSlots: ["offense"],
    combinedRating: 808,
    bonuses: ["Encounter Reprieve: Whenever you critically strike with your powers, you have a 10% chance to reduce your encounter power cooldowns by 1 second."]
}

export const ALL_ITEMS: Item[] = [ charmedHat, forsakenCowl, forsakenRobe, frenzyMitts, crownLostKing, mysticCowlSuccessor,
    forsakenMendersScalemail, mightyStormSlippers, moldyApprenticeBraces, starTannedShirt,
    ...ALL_COMPANION_EQUIPMENT, ...ALL_WEAPONS, ...ALL_COMPANIONS, ...ALL_ARTIFACTS, ...INFERNAL_ITEMS, ...ALL_RINGS];