export type Slot = 'head' | 'armor' | 'arms' | 'main' | 'off' | 'feet' | 'neck' | 'ring' | 'waist' | 'shirt' | 'trousers' |
    'companion' | 'boons' | 'insignia' | 'mount' | 'artifact' | 'companion-equipment';

export type Class = 'warlock' | 'wizard' | 'paladin' | 'ranger' | 'barbarian' | 'cleric' | 'fighter' | 'rogue';

export type EnchantmentSlot = 'utility' | 'overload' | 'offense' | 'defense' | 'armor-enhance' | 'weapon-enhance' |
    'companion-defense' | 'companion-offense';

export interface Stats {
    power?: number;
    maxHP?: number;
    armPen?: number;
    defense?: number;
    critStrike?: number;
    critAvoid?: number;
    accuracy?: number;
    deflect?: number;
    combAdv?: number;
    awareness?: number;
}

export interface Utility {
    controlBonus?: number;
    controlResist?: number;
    apGain?: number;
    recharge?: number;
    companionInfluence?: number;
    movementSpeed?: number;
    incomingHealing?: number;
    outgoingHealing?: number;
    staminaRegen?: number;
    critSeverity?: number;
    magicalBoost?: number;
    physicalBoost?: number;
    xpBonus?: number;
    goldBonus?: number;
    gloryBonus?: number;
}

export interface Item {
    slot: Slot;
    classes?: Class[]; // empty means any
    stats: Stats;
    utility?: Utility;
    bonuses?: string[];
    name: string;
    enchantmentSlots: EnchantmentSlot[];
    augment?: boolean; // undefined = false
    combinedRating: number;
}

export interface Loadout {
    class: Class;
    items: Partial<Record<Slot, Item | Item[]>>;
    stats: Stats;
    utility: Utility;
    bonuses: string[];
    score?: number;
    uniq?: string;
}

export type Library = Partial<Record<Slot, Item[]>>;

export type ScoringFunction = (stats: Stats, utility: Utility) => number;