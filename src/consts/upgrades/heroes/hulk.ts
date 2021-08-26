import {generateAllyCard, generateUpgradeCard, generateExhaustedCardInPlay,levelUpMessageIncrease} from "@/lib/upgrades";
import {Hulk as Expansion} from "@/consts/expansions";
import {Hulk} from "@/consts/heroes";
import {Upgrade, UpgradeCategory} from "@/types/upgrade";

export const Lab = generateExhaustedCardInPlay({
	name: 'Scientific Mind',
	card: "Banner's Laboratory",
	requires: Expansion.name,
	requiresHero: Hulk.name,
	category: "Heroic",
	article: '',
	pronoun: 'it',
})

export const ImmovableObject = generateUpgradeCard({
	name: 'Solid',
	card: 'Immovable Object',
	category: 'Heroic',
	article: '',
	requires: Expansion.name,
	requiresHero: Hulk.name,
})

export const Gamma = {
	name: 'Gamma Fueled Rage',
	numCards (level: number) {
		return level
	},
	description () {
		return `<strong>Setup:</strong> Search your deck for <strong>${this.numCards(this.level)}</strong> copy of <strong>Limitless Strength</strong> and put it in your hand. Shuffle your deck.`
	},
	levelUpMessage () {
		return levelUpMessageIncrease(this.numCards(this.level), this.numCards(this.level+1), 'card')
	},
	level: 1,
	maxLevel: 2,
	category: 'Heroic' as UpgradeCategory,
	requires: Expansion.name,
	requiresHero: Hulk.name,
}

export const Upgrades = [Lab,ImmovableObject, Gamma]
