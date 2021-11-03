import {MadTitansShadow as Exp, DoctorStrange} from "@/consts/expansions";
import {Adam} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateCounterCardInPlay, generateAllyCard} from "@/lib/upgrades";

export const Staff = generateUpgradeCard({
	name: 'The Focus',
	card: `Karmic Staff`,
	requires: Exp.name,
	requiresHero: Adam.name,
	category: 'Heroic',
	article: '',
})

export const Soul = generateCounterCardInPlay({
	name: 'Master of All Souls',
	card: `Soul World`,
	category: "Heroic",
	requires: Exp.name,
	requiresHero: Adam.name,
	extraCounters: {
		1: 0,
		2: 1,
	},
	pronoun: 'it'
})

export const Senses = generateUpgradeCard({
	name: 'Mystic Senses',
	card: `Mystic Senses`,
	requires: Exp.name,
	requiresHero: Adam.name,
	category: 'Heroic',
	article: '',
})

export const Pip = generateAllyCard({
	name: 'Trollin Around!',
	card: 'Pip the Troll',
	levels: [{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: Adam.name,
	pronoun: 'his',
	category: 'Heroic',
})

export const Upgrades = [
	Pip,
	Soul,
	Staff,
	Senses,
]