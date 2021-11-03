import {MadTitansShadow as Exp} from "@/consts/expansions";
import {Spectrum} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateAllyCard} from "@/lib/upgrades";

export const Duplication = generateUpgradeCard({
	name: 'Charging Up!',
	card: 'Energy Duplication',
	requires: Exp.name, 
	requiresHero: Spectrum.name,
	category: 'Heroic',
	article: '',
	copies:2,
	exhausted: true,
})

export const Upgrades = [
	Duplication,
]