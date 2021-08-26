import {CoreSet} from "@/consts/expansions";
import {SheHulk} from "@/consts/heroes";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";



export const LawDivision = generateExhaustedCardInPlay({
	name: 'Law Degree',
	card: 'Superhuman Law Division',
	requires: CoreSet.name,
	requiresHero: SheHulk.name,
	category: 'Heroic',
	pronoun: 'it',
	article: '',
})

export const FocusedRage = generateUpgradeCard({
	name: 'Always Raging',
	card: 'Focused Rage',
	requires: CoreSet.name,
	requiresHero: SheHulk.name,
	category: 'Heroic',
	article: '',
	copies:2,
	exhausted: true,
})

export const HellCat = generateAllyCard({
	name: 'Hell\'s a comin',
	card: 'Hellcat',
	pronoun: 'she',
	requires: CoreSet.name,
	requiresHero: SheHulk.name,
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Heroic',
})

export const SuperhumanStrength = generateUpgradeCard({
	card: 'Superhman Strength',
	name: 'So Strong',
	requires: CoreSet.name,
	requiresHero: SheHulk.name,
	category: 'Heroic',
	article: 'a'
})


export const Upgrades = [
	LawDivision,
	FocusedRage,
	SuperhumanStrength,
	HellCat,
]
