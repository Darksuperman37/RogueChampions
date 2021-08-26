import {ExpansionsMap, CoreSet} from "@/consts/expansions";
import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";

export const SurveillanceTeam = generateCounterCardInPlay({
	name: 'Trusty Spies',
	card: 'Surveillance Team',
	category: "Justice",
	requires: CoreSet.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const HeroicIntuition = generateUpgradeCard({
	name: 'Heroic Instincts',
	requires: CoreSet.name,
	card: 'Heroic Intuition',
	article: 'a',
	category: "Justice",
	attached: true,
})

export const Sense = generateExhaustedCardInPlay({
	name: 'Rushing to Help',
	requires: ExpansionsMap.Quicksilver.name,
	card: 'Sense of Justice',
	article: 'a',
	category: "Justice",
	pronoun: 'it'
})

export const SonicRifle = generateCounterCardInPlay({
	name: 'Locked and Loaded',
	card: 'Sonic Rifle',
	category: "Justice",
	requires: ExpansionsMap.Venom.name,
	extraCounters: {
		1: 0,
		2: 1,
		3: 2
	},
	pronoun: 'it'
})

export const Counterintell = generateUpgradeCard({
	name: 'Information Network',
	requires: ExpansionsMap['Black Widow'].name,
	card: 'Counterintelligence',
	article: 'a',
	category: "Justice",
	attached: true
})

export const PI = generateUpgradeCard({
	name: 'Private I',
	requires: ExpansionsMap['The Rise of Red Skull'].name,
	card: 'Skilled Investigator',
	article: 'a',
	category: "Justice",
	attached: true,
	exhausted: true,
})

export const Cop = generateUpgradeCard({
	name: 'Local Law Enforcement',
	requires: ExpansionsMap.Hulk.name,
	card: 'Beat Cop',
	article: 'a',
	category: "Justice",
	copies: 3,
	
})

export const Interrogation = generateUpgradeCard({
	name: 'Putting the Squeeze on em',
	requires: CoreSet.name,
	card: 'Interrogation Room',
	article: 'a',
	category: "Justice",
	attached: true,
	exhausted: true,
})

export const Jessica = generateAllyCard({
	name: 'Alias Investigations',
	card: 'Jessica Jones',
	pronoun: 'she',
	requires: CoreSet.name,
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
	category: 'Justice',
})
export const Devil = generateAllyCard({
	name: 'Devil of Hells Kitchen',
	card: 'Daredevil',
	pronoun: 'he',
	requires: CoreSet.name,
	levels: [{
		damage: 2,
		exhausted: true,
	}, {
		damage: 1,
		exhausted: true,
	},{
		damage: 1,
		exhausted: false,
	}, {
		damage: 0,
		exhausted: false,
	}],
	category: 'Justice',
})

export const Jack = generateAllyCard({
	name: 'Raise the Flag',
	card: 'Jack Flag',
	pronoun: 'he',
	requires: ExpansionsMap.Venom.name,
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
	category: 'Justice',
})


export const Upgrades = [
	SurveillanceTeam, 
	HeroicIntuition,
	Sense,
	SonicRifle,
	Counterintell,
	PI,
	Cop,
	Interrogation,
	Jessica,
	Devil,
	Jack,
	
	]
