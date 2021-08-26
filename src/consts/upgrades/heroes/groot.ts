import {generateExhaustedCardInPlay} from "@/lib/upgrades";
import {GalaxysMostWanted} from "@/consts/expansions";
import {Groot} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";



export const FertileGround = generateExhaustedCardInPlay({
	name: 'I am Groot?',
	card: `Fertile Ground`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const EntanglingVines = generateExhaustedCardInPlay({
	name: 'I am Groooooot!',
	card: `Entangling Vines`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const LashingVines = generateExhaustedCardInPlay({
	name: 'I am Groot!',
	card: `Lashing Vines`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const VineShield = generateExhaustedCardInPlay({
	name: 'We are Groot!',
	card: `Vine Shield`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})

export const VineSpikes = generateExhaustedCardInPlay({
	name: 'I AM GROOT!',
	card: `Vine Spikes`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Groot.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})


export const Upgrades : Upgrade[] = [
	FertileGround,
	EntanglingVines,
	LashingVines,
	VineShield,
	VineSpikes
]