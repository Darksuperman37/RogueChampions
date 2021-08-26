import {Wasp as Exp} from "@/consts/expansions";
import {Wasp,Antman} from "@/consts/heroes";
import {generateAllyCard, generateUpgradeCard} from "@/lib/upgrades";

export const RedRoomTraining = generateUpgradeCard({
	name: 'Is that all you got?',
	card: `Red Room Training`,
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: 'Heroic',
	article: '',
})

export const BioSyntheticWings = generateUpgradeCard({
	name: 'Small, Fast, and Arial',
	card: `Bio-Synthetic Wings`,
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: 'Heroic',
	article: ''
})


export const WaspsHelmet = generateUpgradeCard({
	name: 'Pym Tech',
	card: `Wasps Helmet`,
	requires: Exp.name,
	requiresHero: Wasp.name,
	category: 'Heroic',
	article: '',
})

export const Scott = generateAllyCard({
	name: 'He Can Do That Too',
	card: 'Ant-Man',
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
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
	requiresHero: Wasp.name,
	pronoun: 'him',
	category: 'Heroic',
	conflictingHeroes: [Antman.name],
})

export const Upgrades = [
	RedRoomTraining,
	BioSyntheticWings,
	WaspsHelmet,
	Scott
]