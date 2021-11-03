import {CoreSet, ExpansionsMap,MadTitansShadow, } from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";
import {Hawkeye} from "@/consts/heroes";

export const TheTriskelion = generateUpgradeCard({
	name: 'Forward HQ',
	card: 'The Treskelion',
	article: '',
	requires: CoreSet.name,
	category: 'Leadership'
})

export const Quinjet = generateCounterCardInPlay({
	name: 'Calling in Reinforcements',
	card: 'Quinjet',
	category: "Leadership",
	requires: ExpansionsMap['Captain America'].name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const Training = generateUpgradeCard({
	name: 'Team Excercise',
	card: 'Team Training',
	article: '',
	requires: ExpansionsMap['The Rise of Red Skull'].name,
	category: 'Leadership'
})

export const Rapid = generateUpgradeCard({
	name: 'Reinforcements',
	card: 'Rapid Response',
	article: '',
	requires: ExpansionsMap['Black Widow'].name,
	category: 'Leadership'
})

export const Guardians = generateUpgradeCard({
	name: 'Guardians of the Galaxy',
	card: 'Guardians of the Galaxy',
	article: '',
	requires: ExpansionsMap.Nebula.name,
	category: 'Leadership'
})
export const Avengers = generateUpgradeCard({
	name: 'Avengers Assemble!',
	card: 'Mighty Avengers',
	article: '',
	requires: MadTitansShadow.name,
	category: 'Leadership'
})

export const IKnowAHawkeye = generateCounterCardInPlay({
	name: 'I Know a Hawkeye',
	card: 'Hawkeye',
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'him',
	category: "Leadership",
	exhausted: true,
	they: 'He',
	conflictingHeroes: [Hawkeye.name],
})


export const Yondu = generateAllyCard({
	name: `Mary Poppins Yall`,
	card: 'Yondu',
	requires: ExpansionsMap['Starlord'].name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}]
})

export const Agent = generateAllyCard({
	name: `The Patriot`,
	card: 'US Agent',
	requires: ExpansionsMap['The Rise of Red Skull'].name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}]
})

export const Vision = generateAllyCard({
	name: `The Vision`,
	card: 'Vision',
	requires: CoreSet.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}]
})

export const CaptainAmerica = generateAllyCard({
	name: `I Can Do This All Day`,
	card: 'Captain America',
	requires: MadTitansShadow.name,
	pronoun: 'him',
	category: "Leadership",
	levels: [{
		damage: 0,
		exhausted: true,
	}, {
		damage: 0,
		exhausted: false,
	}]
})

export const Upgrades = [
	IKnowAHawkeye, 
	TheTriskelion,
	Quinjet,
	Rapid,
	Training,
	Yondu,
	Agent,
	Vision,
	Guardians,
	CaptainAmerica,
	Avengers,
	]
