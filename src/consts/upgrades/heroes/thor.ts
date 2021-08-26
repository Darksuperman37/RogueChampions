import {generateExhaustedCardInPlay, generateUpgradeCard,generateAllyCard} from "@/lib/upgrades";
import {Thor as Exp} from "@/consts/expansions";
import {Thor} from "@/consts/heroes";

export const Thunder = generateUpgradeCard({
	name: 'Feel my might!',
	card: `God of Thunder`,
	requires: Exp.name,
	requiresHero: Thor.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const Asgard = generateUpgradeCard({
	name: 'The Golden Realm',
	card: `Asgard`,
	requires: Exp.name,
	requiresHero: Thor.name,
	category: 'Heroic',
	article: ''
})

export const Helmet = generateUpgradeCard({
	name: 'Thors Helmet',
	card: `Thors Helmet`,
	requires: Exp.name,
	requiresHero: Thor.name,
	category: 'Heroic',
	article: ''
})

export const Sif = generateAllyCard({
	name: 'A mighty ally',
	card: 'Lady Sif',
	levels: [{
		damage: 1,
		exhausted: true
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: Thor.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const Upgrades = [
	Thunder,
	Asgard,
	Helmet,
	Sif
]