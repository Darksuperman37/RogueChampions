import {CoreSet, ExpansionsMap, RiseOfRedSkull} from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";

export const ValhallasBlessing = generateCounterCardInPlay({
	name: 'Valhalla\'s Blessing',
	card: 'Hall of Heroes',
	requires: ExpansionsMap.Thor.name,
	category: 'Aggression',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const CombatTraining = generateUpgradeCard({
	name: 'Combat Master',
	requires: CoreSet.name,
	card: 'Combat Training',
	category: "Aggression",
	article: 'a',
	attached: true
})

export const TacTeam = generateCounterCardInPlay({
	name: 'Merc Cadre',
	card: 'Tac Team',
	category: "Aggression",
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const Handcannon = generateCounterCardInPlay({
	name: 'Boom Baby',
	card: 'Hand Cannon',
	category: "Aggression",
	requires: ExpansionsMap['The Galaxys Most Wanted'].name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const Jarnbjorn = generateUpgradeCard({
	name: 'Nidavellirs Aid',
	requires: ExpansionsMap.Thor.name,
	card: 'Jarnbjorn',
	category: "Aggression",
	article: 'a',
})

export const Trap = generateUpgradeCard({
	name: 'My Trap Card',
	requires: ExpansionsMap.Wasp.name,
	card: 'Lie in Wait',
	category: "Aggression",
	article: 'a',
	attached: true,
})

export const MartialProwess = generateUpgradeCard({
	name: 'Harness Your Chi',
	requires: ExpansionsMap.Hulk.name,
	card: 'Martial Prowess',
	category: "Aggression",
	article: 'a',
	attached: true,
	exhausted: true,
})

export const Godslayer = generateExhaustedCardInPlay({
	name: 'Sword of Legend',
	requires: ExpansionsMap.Gamora.name,
	card: 'Godslayer',
	category: "Aggression",
	article: 'a',
	pronoun: 'it',
})


export const Tigra = generateAllyCard({
	name: 'Cats Got Claws',
	card: 'Tigra',
	pronoun: 'her',
	requires: CoreSet.name,
	levels: [{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Aggression',
})

export const Brawn = generateAllyCard({
	name: 'Who Needs Brains?',
	card: 'Brawn',
	pronoun: 'him',
	requires: ExpansionsMap.Thor.name,
	levels: [{
		damage: 2,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Aggression',
})

export const Bug = generateAllyCard({
	name: 'The Rogue',
	card: 'Bug',
	pronoun: 'him',
	requires: ExpansionsMap['The Galaxys Most Wanted'].name,
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Aggression',
})

export const Upgrades = [
	ValhallasBlessing,
	CombatTraining,
	TacTeam,
	Handcannon,
	Godslayer,
	Jarnbjorn,
	Trap,
	MartialProwess,
	Tigra,
	Brawn,
	Bug,
]
