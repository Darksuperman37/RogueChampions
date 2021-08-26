import {Starlord as Exp} from "@/consts/expansions";
import {Starlord} from "@/consts/heroes";
import {generateAllyCard, generateUpgradeCard, generateExhaustedCardInPlay} from "@/lib/upgrades";


export const Gun = generateExhaustedCardInPlay({
	name: 'Pew Pew Pew',
	card: `Element Gun`,
	requires: Exp.name,
	requiresHero: Starlord.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Boots = generateUpgradeCard({
	name: 'Takeoff!',
	card: `Jet Boots`,
	requires: Exp.name,
	requiresHero: Starlord.name,
	category: 'Heroic',
	article: '',
})

export const Leader = generateUpgradeCard({
	name: 'Im the Captain',
	card: `Leader of the Guardians`,
	requires: Exp.name,
	requiresHero: Starlord.name,
	category: 'Heroic',
	article: '',
})

export const Helmet = generateUpgradeCard({
	name: 'Starlords Helmet',
	card: `Starlords Helmet`,
	requires: Exp.name,
	requiresHero: Starlord.name,
	category: 'Heroic',
	article: '',
})


export const Upgrades = [
	Gun,
	Boots,
	Leader,
	Helmet
]