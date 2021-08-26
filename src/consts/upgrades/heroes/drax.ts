import {Drax as Exp} from "@/consts/expansions";
import {Drax} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateAllyCard} from "@/lib/upgrades";

export const Knife1 = generateUpgradeCard({
	name: 'This will do nicely...',
	card: `Drax's Knife`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const Knife2 = generateUpgradeCard({
	name: 'You thought I only have one?',
	card: `Drax's Other Knife`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const Mastery = generateUpgradeCard({
	name: 'You want some more?',
	card: `DWI Theet Mastery`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const Stubborn = generateUpgradeCard({
	name: 'Is that all you got?',
	card: `Too Stubborn to Die`,
	requires: Exp.name,
	requiresHero: Drax.name,
	category: 'Heroic',
	article: '',
})

export const Mantis = generateAllyCard({
	name: 'You are so hideous!',
	card: 'Mantis',
	levels: [{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: Drax.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const Vengeance : any = {
	name: 'Vengeance will be mine!',
	level: 1,
	maxLevel: 3,
	requires: Exp.name,
	requiresHero: Drax.name,
	repeat (level: number) : string {
		return ['1', '2', '3'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Drax starts with ${this.repeat(this.level)} vengeance counter`
	},
	levelUpMessage () {
		return `Drax starts with <strong>` + this.repeat(this.level+1) + '</strong> vengeance counters instead of ' + this.repeat(this.level) + '.'
	},
	category: 'Heroic'
}


export const Upgrades = [
	Knife1,
	Knife2,
	Mastery,
	Stubborn,
	Mantis,
	Vengeance
]