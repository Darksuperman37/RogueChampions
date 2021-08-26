import {Venom as Exp} from "@/consts/expansions";
import {Venom} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard} from "@/lib/upgrades";



export const Rebirth = generateExhaustedCardInPlay({
	name: 'The next super soldier',
	card: `Project Rebirth`,
	requires: Exp.name,
	requiresHero: Venom.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
	
})

export const Multi = generateExhaustedCardInPlay({
	name: 'Bigger is Better!',
	card: `Multi-Gun`,
	requires: Exp.name,
	requiresHero: Venom.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const Pistol = generateUpgradeCard({
	name: 'Meet my little friend!',
	card: `Venoms PIstol`,
	requires: Exp.name,
	requiresHero: Venom.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const Sense = generateUpgradeCard({
	name: 'Feelin Tingly',
	card: `Spider-Sense`,
	requires: Exp.name,
	requiresHero: Venom.name,
	category: 'Heroic',
	article: ''
})

export const Upgrades = [
	Rebirth,
	Multi,
	Pistol,
	Sense,
]