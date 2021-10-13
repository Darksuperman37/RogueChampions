import {Nebula as Exp} from "@/consts/expansions";
import {Nebula} from "@/consts/heroes";
import {generateExhaustedCardInPlay, generateUpgradeCard, generateAllyCard} from "@/lib/upgrades";

export const Ship = generateUpgradeCard({
	name: 'Warp Speed',
	card: `Nebulas Ship`,
	requires: Exp.name,
	requiresHero: Nebula.name,
	category: 'Heroic',
	article: '',
})

export const Ready : any = {
	name: 'Highly Skilled',
	level: 1,
	maxLevel: 2,
	requires: Exp.name,
	requiresHero: Nebula.name,
	repeat (level: number) : string {
		return ['1', '2'][level-1]
	},
	description () {
		return `<strong>Setup:</strong> Search your deck for ${this.repeat(this.level)} copy of <strong>Combat Ready</strong> and put it in hand. Shuffle your deck.`
	},
	levelUpMessage () {
		return `Search for an additional copy`
	},
	category: 'Heroic'
}

export const Gamora = generateAllyCard({
	name: 'We are sisters!',
	card: 'Gamora',
	levels: [{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	requires: Exp.name,
	requiresHero: Nebula.name,
	pronoun: 'her',
	category: 'Heroic',
})

export const Upgrades = [
	Ready,
	Ship,
	Gamora,

]