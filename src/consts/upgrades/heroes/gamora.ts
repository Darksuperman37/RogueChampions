import {Gamora as Exp} from "@/consts/expansions";
import {Gamora} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateAllyCard} from "@/lib/upgrades";

export const Conditioning = generateUpgradeCard({
	name: 'Always training',
	card: `Conditioning Room`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
})

export const Instincts = generateUpgradeCard({
	name: 'Keen Instincts',
	card: `Keen Instincts`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted:true,
})

export const Sword = generateUpgradeCard({
	name: 'Sharpened Blade',
	card: `Gamoras Sword`,
	requires: Exp.name,
	requiresHero: Gamora.name,
	category: 'Heroic',
	article: '',
})

export const Nebula = generateAllyCard({
	name: 'We are sisters!',
	card: 'Nebula',
	levels: [{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: Gamora.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const Upgrades = [
	Conditioning,
	Instincts,
	Sword,
	Nebula

]