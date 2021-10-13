import {CoreSet, ExpansionsMap, } from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay,levelUpMessageIncrease} from "@/lib/upgrades";
import {Upgrade, UpgradeCategory} from "@/types/upgrade";

export const Helicarrier = generateExhaustedCardInPlay({
	name: 'Pilot\'s License',
	card: 'Helicarrier',
	requires: CoreSet.name,
	pronoun: 'it',
	category: 'General'
})

export const AvengersMansion = generateExhaustedCardInPlay({
	name: 'Mansion Deed',
	card: 'Avenger\'s Mansion',
	requires: CoreSet.name,
	pronoun: 'it',
	category: 'General',
	article: 'an'
})

export const Downtime = generateUpgradeCard({
	name: 'Take Five',
	card: 'Down Time',
	requires: ExpansionsMap['Ms. Marvel'].name,
	category: 'General',
	attached: true,
})

export const Endurance = generateUpgradeCard({
	name: 'Scrappy',
	card: 'Endurance',
	requires: ExpansionsMap['Ms. Marvel'].name,
	category: 'General',
	attached: true,
})

export const Awareness = generateExhaustedCardInPlay({
	name: 'Strength of the mind',
	card: 'Enhanced Awareness',
	requires: ExpansionsMap['Captain America'].name,
	pronoun: 'it',
	category: 'General',
})

export const Physique = generateExhaustedCardInPlay({
	name: 'Strength of the body',
	card: 'Enhanced Physique',
	requires: ExpansionsMap['Thor'].name,
	pronoun: 'it',
	category: 'General',
})

export const Reflexes = generateExhaustedCardInPlay({
	name: 'Speedy',
	card: 'Enhanced Reflexes',
	requires: ExpansionsMap['Ms. Marvel'].name,
	pronoun: 'it',
	category: 'General',
})

export const Pistol = generateCounterCardInPlay({
	name: 'Packin Heat',
	card: 'Plasma Pistol',
	requires: ExpansionsMap['Venom'].name,
	pronoun: 'it',
	category: 'General',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
})

export const Exercise = generateExhaustedCardInPlay({
	name: 'Power of Friendship',
	card: 'Team-Building Exercise',
	requires: ExpansionsMap['Ant-Man'].name,
	pronoun: 'it',
	category: 'General',
})

export const AlwaysPrepared : Upgrade = {
	name: `Always Prepared`,
	description () {
		const num = this.level + 1
		const prefix = num == 1 ? '' : num.toString() + ' '
		return `You get an extra ${prefix}mulligan${num > 1 ? 's': ''} at the start of each game.`
	},
	requires: null,
	levelUpMessage () {
		return levelUpMessageIncrease(this.level+1, this.level+2, 'mulligan')
	},
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}

export const StarkGadget = {
	name: 'Stark Gadgets',
	numCards (level: number) {
		return 1+level
	},
	description () {
		return `At the start of your first turn, draw ${this.numCards(this.level)} cards.`
	},
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	requires: null,
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}


export const KnowYourEnemy = {
	name: `Know Your Enemy`,
	numCards (level: number) {
		return 2 + (level)
	},
	description () {
		const cards = this.numCards(this.level)
		return `<strong>Setup:</strong> Look at the top ${cards} cards of the encounter deck. You may put any number on the bottom or top of the deck in any order.`
	},
	requires: null,
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	level: 1,
	maxLevel: 3,
	category: 'General' as UpgradeCategory
}

export const Conditions : any = {
	name: 'Working on the Basics',
	level: 1,
	maxLevel: 2,
	requires: ExpansionsMap['The Rise of Red Skull'].name,
	repeat (level: number) : string {
		return ['Basic', 'Improved'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Select one of the <strong>${this.repeat(this.level)}</strong> Thwart/Attack/Defense/Recovery Upgrade Campaign cards and play it attached to your hero.`
	},
	levelUpMessage () {
		return `Flip the card over`
	},
	category: 'General'
}

export const Market : any = {
	name: 'Galactic Market',
	level: 1,
	maxLevel: 2,
	requires: ExpansionsMap['The Galaxys Most Wanted'].name,
	repeat (level: number) : string {
		return ['4', '7'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Add cards from the Campaign Market into your deck whose total unit cost does not exceed ${this.repeat(this.level)}`
	},
	levelUpMessage () {
		return `Your budget is now ${this.repeat(this.level)} units.  You may return previously selected cards and choose different cards.`
	},
	category: 'General'
}

export const Upgrades = [
	KnowYourEnemy,
	Helicarrier,
	AvengersMansion,
	StarkGadget,
	AlwaysPrepared,
	Downtime,
	Endurance,
	Awareness,
	Physique,
	Reflexes,
	Pistol,
	Exercise,
	Conditions,
	Market,
	]
