import {MsMarvel as Exp} from "@/consts/expansions";
import {MsMarvel} from "@/consts/heroes";
import {generateAllyCard, generateUpgradeCard, generateExhaustedCardInPlay} from "@/lib/upgrades";

export const Aamir = generateExhaustedCardInPlay({
	name: 'Older Brother',
	card: `Aamir Khan`,
	requires: Exp.name,
	requiresHero: MsMarvel.name,
	category: 'Heroic',
	article: '',
	pronoun: 'him',
})

export const Bruno = generateExhaustedCardInPlay({
	name: 'Best Friend',
	card: `Bruno Carrelli`,
	requires: Exp.name,
	requiresHero: MsMarvel.name,
	category: 'Heroic',
	article: '',
	pronoun: 'him',
})

export const Nakia = generateExhaustedCardInPlay({
	name: 'Best Friend',
	card: `Nakia Bahadir`,
	requires: Exp.name,
	requiresHero: MsMarvel.name,
	category: 'Heroic',
	article: '',
	pronoun: 'her',
})

export const Suit = generateExhaustedCardInPlay({
	name: 'Suit Up!',
	card: `Biokinetic Polmer Suit`,
	requires: Exp.name,
	requiresHero: MsMarvel.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Embiggen = generateUpgradeCard({
	name: 'EMBIGGEN!',
	card: `Embiggen!`,
	requires: Exp.name,
	requiresHero: MsMarvel.name,
	category: 'Heroic',
	article: '',
	exhausted: true,
})

export const Shrink = generateUpgradeCard({
	name: 'Shrink, shrink, shrink!',
	card: `Shrink`,
	requires: Exp.name,
	requiresHero: MsMarvel.name,
	category: 'Heroic',
	article: '',
	exhausted: true,
})


export const Dagger = generateAllyCard({
	name: 'I Patrol these neighborhoods',
	card: 'Red Dagger',
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
	requiresHero: MsMarvel.name,
	pronoun: 'him',
	category: 'Heroic',
})

export const Upgrades = [
	Aamir,
	Bruno,
	Nakia,
	Suit,
	Embiggen,
	Shrink,
	Dagger,
]