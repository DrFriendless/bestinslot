import {Item} from "./model";

const butchersZeal = "Butcher's Zeal: when you damage or heal your target for more than 15% of your max HP in a single blow, you gain 1% action points.";
const wardensHaste = "Warden's Haste: whenever you are damaged for more than 15% of your hit points in a single blow, your movement speed increases by 5% for 10 seconds.";
const leadersGuard = "Leader's Guard: gain 1000 defense for each player in your team.";
const gladiatorsMight = "Gladiator's Might: for every 5 seconds you are in combat, you gain 200 power.";

// can be bought in exchange for Seals of the Fallen
const infernalForgedRaidShirt: Item = {
    slot: "shirt",
    name: "Infernal Forged Raid Shirt",
    stats: { power: 5760, maxHP: 23040, armPen: 2400, combAdv: 2400 },
    enchantmentSlots: ["offense"],
    combinedRating: 960,
    bonuses: [ butchersZeal ]
}
const infernalForgedRobe: Item = {
    slot: "armor",
    name: "Infernal Forged Robe",
    stats: { power: 5760, maxHP: 23040, armPen: 2400, defense: 2400 },
    enchantmentSlots: ["defense", "armor-enhance"],
    combinedRating: 960,
    bonuses: [ leadersGuard ],
    classes: ["warlock", "wizard"]
}
const infernalForgedCowl: Item = {
    slot: "head",
    name: "Infernal Forged Cowl",
    stats: { power: 5760, maxHP: 23040, defense: 2400, critStrike: 1440, combAdv: 960 },
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 960,
    bonuses: ["Skirmisher's Might: whenever you deal combat advantage damage with your powers, you have a 10% chance to gain 5000 power for 10 seconds." ],
    classes: ["warlock", "wizard"]
}
const infernalForgedWristguards: Item = {
    slot: "arms",
    name: "Infernal Forged Wristguards",
    stats: { power: 5760, maxHP: 23040, defense: 2400, armPen: 1440, accuracy: 960 },
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 960,
    bonuses: ["Survivor's Might: whenever you deflect an attack, gain 1000 power for 10 seconds." ],
    classes: ["warlock", "wizard"]
}
const infernalForgedShoes: Item = {
    slot: "feet",
    name: "Infernal Forged Shoes",
    stats: { power: 5760, maxHP: 23040, defense: 2400, critStrike: 1440, combAdv: 960 },
    enchantmentSlots: ["utility"],
    combinedRating: 960,
    bonuses: ["Gladiator's Might: for every 5 seconds you are in combat, you gain 200 power."],
    classes: ["warlock", "wizard"]
}
const infernalForgedScale: Item = {
    slot: "armor",
    name: "Infernal Forged Scalemail",
    stats: { defense: 2400, power: 5760, maxHP:23040, deflect: 2400 },
    enchantmentSlots: ["defense", "armor-enhance"],
    combinedRating: 960,
    bonuses: [ leadersGuard ],
    classes: ["warlock", "paladin", "cleric"]
}
const infernalForgedCoif: Item = {
    slot: "head",
    name: "Infernal Forged Coif",
    stats: { power: 5760, maxHP: 23040, defense: 2400, critStrike: 1680, critAvoid: 720 },
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 960,
    bonuses: infernalForgedCowl.bonuses,
    classes: ["warlock", "paladin", "cleric"]
}
const infernalForgedBraces: Item = {
    slot: "arms",
    name: "Infernal Forged Braces",
    stats: { power: 5760, maxHP: 23040, defense: 2400, critStrike: 1200, deflect: 1200 },
    enchantmentSlots: ["utility", "overload"],
    combinedRating: 960,
    bonuses: infernalForgedWristguards.bonuses,
    classes: ["warlock", "paladin", "cleric"]
}
const infernalForgedCuisses: Item = {
    slot: "feet",
    name: "Infernal Forged Cuisses",
    stats: { power: 5760, maxHP: 23040, defense: 2400, critStrike: 1200, critAvoid: 1200 },
    enchantmentSlots: ["utility"],
    combinedRating: 960,
    bonuses: [ gladiatorsMight ],
    classes: ["warlock", "paladin", "cleric"]
}
const infernalForgedAssaultShirt: Item = {
    slot: "shirt",
    name: "Infernal Forged Assault Shirt",
    stats: { power: 5760, maxHP: 23040, armPen: 2400, accuracy: 2400 },
    enchantmentSlots: ["offense"],
    combinedRating: 960,
    bonuses: [ butchersZeal ]
};
const infernalForgedWardShirt: Item = {
    slot: "shirt",
    name: "Infernal Forged Ward Shirt",
    stats: { power: 5760, maxHP: 23040, critStrike: 2400, accuracy: 2400 },
    enchantmentSlots: ["offense"],
    combinedRating: 960,
    bonuses: [ butchersZeal ]
};
const infernalForgedRestorationShirt: Item = {
    slot: "shirt",
    name: "Infernal Forged Restoration Shirt",
    stats: { power: 5760, maxHP: 23040, critStrike: 2400, combAdv: 2400 },
    enchantmentSlots: ["offense"],
    combinedRating: 960,
    bonuses: [ butchersZeal ]
};
const infernalForgedAssaultTrousers: Item = {
    slot: "trousers",
    name: "Infernal Forged Assault Trousers",
    stats: { power: 5760, maxHP: 23040, deflect: 2400, awareness: 2400 },
    enchantmentSlots: ["defense"],
    combinedRating: 960,
    bonuses: [ wardensHaste ]
};
const infernalForgedRaidTrousers: Item = {
    slot: "trousers",
    name: "Infernal Forged Raid Trousers",
    stats: { power: 5760, maxHP: 23040, defense: 1603, critAvoid: 3197 },
    enchantmentSlots: ["defense"],
    combinedRating: 960,
    bonuses: [ wardensHaste ]
};
const infernalForgedWardTrousers: Item = {
    slot: "trousers",
    name: "Infernal Forged Ward Trousers",
    stats: { power: 5760, maxHP: 23040, defense: 1603, deflect: 3197 },
    enchantmentSlots: ["defense"],
    combinedRating: 960,
    bonuses: [ wardensHaste ]
};
const infernalForgedRestorationTrousers: Item = {
    slot: "trousers",
    name: "Infernal Forged Restoration Trousers",
    stats: { power: 5760, maxHP: 23040, defense: 1603, awareness: 3197 },
    enchantmentSlots: ["defense"],
    combinedRating: 960,
    bonuses: [ wardensHaste ]
};


export const INFERNAL_ITEMS: Item[] = [ infernalForgedRaidShirt, infernalForgedAssaultTrousers, infernalForgedRobe, infernalForgedCowl,
    infernalForgedWristguards, infernalForgedShoes, infernalForgedScale, infernalForgedCoif, infernalForgedBraces, infernalForgedCuisses,
    infernalForgedAssaultShirt, infernalForgedWardShirt, infernalForgedRestorationShirt, infernalForgedRaidTrousers, infernalForgedWardTrousers,
    infernalForgedRestorationTrousers
];