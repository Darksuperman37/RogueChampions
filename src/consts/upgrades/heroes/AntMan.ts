import {Antman as Exp} from "@/consts/expansions";
import {Antman} from "@/consts/heroes";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";

export const WristGauntlets = generateExhaustedCardInPlay({
	name: 'How about you don\'t do that?',
	card: `Wrist Gauntlets`,
	requires: Exp.name, 
	requiresHero: Antman.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it'
})

export const antMansHelmet = generateUpgradeCard({
	name: 'Ant-Man\'s Helmet',
	card: `Ant-Mans's Helmet`,
	requires: Exp.name, 
	requiresHero: Antman.name,
	category: 'Heroic',
	article: '',
})

export const ArmyOfAnts = generateUpgradeCard({
	name: 'Swarm!!',
	card: 'Army of Ants',
	requires: Exp.name, 
	requiresHero: Antman.name,
	category: 'Heroic',
	article: '',
	copies:3,
	exhausted: true,
})

export const Giant = generateUpgradeCard({
	name: 'Grow!!',
	card: 'Giant Strength',
	requires: Exp.name, 
	requiresHero: Antman.name,
	category: 'Heroic',
	article: '',
	copies:2,
})

export const Wasp = generateAllyCard({
	name: 'She Can Do That Too',
	card: 'Wasp',
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
	requiresHero: Antman.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const Upgrades = [
	ArmyOfAnts,
	WristGauntlets,
	antMansHelmet,
	Wasp,
	Giant,
]
