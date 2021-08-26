import {generateAllyCard, generateCounterCardInPlay, generateUpgradeCard,generateExhaustedCardInPlay} from "@/lib/upgrades";
import {GalaxysMostWanted} from "@/consts/expansions";
import {Rocket} from "@/consts/heroes";
import {Upgrade} from "@/types/upgrade";



export const CyberneticSkeleton = generateUpgradeCard({
	name: 'Yeah, and how do you like me now?',
	card: `Cybernetic Skeleton`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Rocket.name,
	category: 'Heroic',
	article: '',
})

export const ThrusterBoots = generateUpgradeCard({
	name: 'Can\'t Catch Me!',
	card: `Thruster Boots`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Rocket.name,
	category: 'Heroic',
	article: '',
})

export const RocketsPistol = generateUpgradeCard({
	name: 'Ready for Anything',
	card: `Rocket's Pistol`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Rocket.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const RocketLauncher = generateCounterCardInPlay({
	name: 'BOOM stick',
	card: 'Rocket Launcher',
	they: 'It',
	pronoun: 'it',
	requires: 'The Galaxys Most Wanted',
	requiresHero: Rocket.name,
	category: 'Heroic',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	},
	exhausted: true,
})

export const ParticleCannon = generateCounterCardInPlay({
	name: 'The BIG Gun',
	card: 'Particle Cannon',
	they: 'It',
	pronoun: 'it',
	requires: 'The Galaxys Most Wanted',
	requiresHero: Rocket.name,
	category: 'Heroic',
	extraCounters: {
		1: 0,
		2: 1,
		3: 2,
	},
	exhausted: true,
})

export const BatteryPack = generateUpgradeCard({
	name: 'Charge em up!',
	card: `Battery Pack`,
	requires: 'The Galaxys Most Wanted',
	requiresHero: Rocket.name,
	category: 'Heroic',
	article: '',
	copies: 2,
	exhausted: true,
})

export const Upgrades : Upgrade[] = [
	CyberneticSkeleton,
	ThrusterBoots,
	RocketsPistol,
	RocketLauncher,
	ParticleCannon,
	BatteryPack,

]