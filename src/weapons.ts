import {Item} from "./model";

const lgBloodletter: Item = {
    slot: "main",
    name: "The Legion Guard's Bloodletter",
    combinedRating: 920,
    enchantmentSlots: ["offense", "weapon-enhance", "offense"],
    stats: { power: 11040, armPen: 2300, accuracy: 2300 },
    classes: ["warlock"]
};
const lgContractKeeper: Item = {
  slot: "off",
  name: "The Legion Guard's Contract Keeper",
  combinedRating: 920,
  enchantmentSlots: ["offense", "defense"],
  stats: { power: 11040, critStrike: 2300, combAdv: 2300 },
  classes: ["warlock"]
};

export const ALL_WEAPONS = [ lgBloodletter, lgContractKeeper ];