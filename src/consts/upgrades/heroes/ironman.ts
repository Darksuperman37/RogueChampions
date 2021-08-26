import {CoreSet} from "@/consts/expansions";
import {IronMan} from "@/consts/heroes";
import {generateAllyCard, generateUpgradeCard, generateExhaustedCardInPlay,levelUpMessageIncrease} from "@/lib/upgrades";

function upgrade (name: string, article = '') {
	return generateExhaustedCardInPlay({
		card: name,
		name: 'Quick Deploy: ' + name,
		pronoun: 'it',
		requires: CoreSet.name,
		requiresHero: IronMan.name,
		category: 'Heroic',
		article: article
	})
}

export const ArcReactor = upgrade('Arc Reactor')

export const RocketBoots = upgrade('Rocket Boots', 'a')
export const MarkVHelmet = upgrade('Mark V Helmet')
export const MarkVArmor = generateUpgradeCard({
	card: 'Mark V Armor',
	name: 'Quick Deploy: Mark V Armor',
	requires: CoreSet.name,
	requiresHero: IronMan.name,
	category: 'Heroic'
})
export const PoweredGauntlets = generateUpgradeCard({
	card: 'Powered Gauntlets',
	name: 'Quick Deploy: Powered Gauntlets',
	requires: CoreSet.name,
	requiresHero: IronMan.name,
	category: 'Heroic',
	copies:2,
	exhausted: true,
})

export const Pepper = generateExhaustedCardInPlay({
	card: 'Pepper Potts',
	name: 'The Rescue',
	requires: CoreSet.name,
	requiresHero: IronMan.name,
	category: 'Heroic',
	pronoun: 'her',
})

export const War = generateAllyCard({
	name: 'Rhodey',
	card: 'War Machine',
	pronoun: 'him',
	requires: CoreSet.name,
	requiresHero: IronMan.name,
	levels: [{
		damage: 1,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Heroic',
	//conflictingHeroes: [WarMachine.name],
})

export const Upgrades = [ArcReactor, PoweredGauntlets, RocketBoots, MarkVArmor, MarkVHelmet, Pepper, War,]
