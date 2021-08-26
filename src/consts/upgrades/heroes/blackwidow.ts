import {BlackWidow as Exp} from "@/consts/expansions";
import {BlackWidow} from "@/consts/heroes";
import {generateAllyCard, generateUpgradeCard, generateExhaustedCardInPlay,levelUpMessageIncrease} from "@/lib/upgrades";
import {Upgrade, UpgradeCategory} from "@/types/upgrade";

export const Gauntlet = generateUpgradeCard({
	name: 'Stingers',
	card: `Black Widow's Gauntlet`,
	requires: Exp.name,
	requiresHero: BlackWidow.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const Suit = generateUpgradeCard({
	name: 'Suit Up!',
	card: `Synth-Suit`,
	requires: Exp.name,
	requiresHero: BlackWidow.name,
	category: 'Heroic',
	article: ''
})

export const House = generateExhaustedCardInPlay({
	name: 'Safe House',
	card: `Safe House #29`,
	requires: Exp.name,
	requiresHero: BlackWidow.name,
	category: 'Heroic',
	article: '',
	pronoun: 'it',
})


export const Prepared = {
	name: 'Always Prepared',
	numCards (level: number) {
		return level
	},
	description () {
		return `<strong>Setup:</strong> Search your deck for ${this.numCards(this.level)} Black Widow preparation card and put it into play.`
	},
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	level: 1,
	maxLevel: 3,
	category: 'Heroic' as UpgradeCategory,
	requires: Exp.name,
	requiresHero: BlackWidow.name,
}

export const WinterSoldier = generateAllyCard({
	name: 'Trusted Backup',
	card: 'Winter Soldier',
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
	requiresHero: BlackWidow.name,
	pronoun: 'him',
	category: 'Heroic',
})

export const Upgrades = [
	Gauntlet,
	Suit,
	House,
	WinterSoldier,
	Prepared
]