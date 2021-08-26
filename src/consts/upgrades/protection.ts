import {CoreSet, ExpansionsMap, } from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";

export const MedTeam = generateCounterCardInPlay({
	name: 'Family Doctor',
	category: "Protection",
	card: 'Med Team',
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const Nurse = generateCounterCardInPlay({
	name: 'Patching you up',
	category: "Protection",
	card: 'The Night Nurse',
	requires: ExpansionsMap['Doctor Strange'].name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const ArmoredVest = generateUpgradeCard({
	name: 'Upgraded Defenses',
	requires: CoreSet.name,
	category: "Protection",
	card: 'Armored Vest',
	article: 'an',
	attached: true,
})

export const Dauntless = generateUpgradeCard({
	name: 'Unyielding',
	requires: ExpansionsMap['The Galaxys Most Wanted'].name,
	category: "Protection",
	card: 'Dauntless',
	attached: true,
})

export const Stance = generateUpgradeCard({
	name: 'Come at me!',
	requires: ExpansionsMap['Black Widow'].name,
	category: "Protection",
	card: 'Defensive Stance',
})

export const Electrostatic = generateUpgradeCard({
	name: 'Shocking',
	requires: ExpansionsMap['Hulk'].name,
	category: "Protection",
	card: 'Electrostatic Armor',
	attached: true,
})

export const Barrier = generateCounterCardInPlay({
	name: 'Defensive Tech',
	category: "Protection",
	card: 'Energy Barrier',
	requires: ExpansionsMap['Ms. Marvel'].name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const Nerves = generateUpgradeCard({
	name: 'First line of defense',
	requires: ExpansionsMap['Quicksilver'].name,
	category: "Protection",
	card: 'Nerves of Steel',
	attached: true,
})

export const Indomitable = generateUpgradeCard({
	name: 'I can do this all day',
	requires: ExpansionsMap['Core Set'].name,
	category: "Protection",
	card: 'Indomitable',
	attached: true,
})

export const Unflappable = generateUpgradeCard({
	name: 'Iron Will',
	requires: ExpansionsMap['Doctor Strange'].name,
	category: "Protection",
	card: 'Unflappable',
	attached: true,
})

export const BlackWidowAlly = generateAllyCard({
	name: `Spyder Web`,
	card: 'Black Widow',
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: true
	}, {
		exhausted: false,
		damage: 0
	}],
	requires: CoreSet.name,
	pronoun: 'her',
	category: "Protection",
})

export const Ironfist = generateAllyCard({
	name: `The Immortal Iron Fist`,
	card: 'Iron Fist',
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: true
	}, {
		exhausted: false,
		damage: 0
	}],
	requires: ExpansionsMap['Doctor Strange'].name,
	pronoun: 'him',
	category: "Protection",
})

export const Luke = generateAllyCard({
	name: `Sweet Christmas`,
	card: 'Luke Cage',
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: true
	}, {
		exhausted: false,
		damage: 0
	}],
	requires: CoreSet.name,
	pronoun: 'him',
	category: "Protection",
})

export const Upgrades = [
	ArmoredVest, 
	BlackWidowAlly, 
	MedTeam,
	Dauntless,
	Stance,
	Electrostatic,
	Barrier,
	Indomitable,
	Nerves,
	Unflappable,
	Ironfist,
	Luke,
	Nurse,	
	
	]
