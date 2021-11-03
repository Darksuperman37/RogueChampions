import {generateAllyCard, generateUpgradeCard, generateExhaustedCardInPlay} from "@/lib/upgrades";
import {ScarletWitch as Exp, DoctorStrange} from "@/consts/expansions";
import {ScarletWitch,Quicksilver} from "@/consts/heroes";

export const Helmet = generateUpgradeCard({
	name: 'Favorite Hat',
	card: "Scarlet Witch's Crest",
	requires: Exp.name,
	requiresHero: ScarletWitch.name,
	category: "Heroic",
	article: '',
})

export const MagicShield = generateUpgradeCard({
	name: 'Force Field',
	card: "Magic Shield",
	requires: Exp.name,
	requiresHero: ScarletWitch.name,
	category: "Heroic",
	article: '',
	copies: 3,
})

export const Agatha = generateExhaustedCardInPlay({
	name: 'It was Agatha all along',
	card: `Agatha Harkness`,
	requires: Exp.name,
	requiresHero: ScarletWitch.name,
	category: 'Heroic',
	article: '',
	they: 'she',
	pronoun: 'her',
})

export const Scarlet = generateUpgradeCard({
	name: 'The Legend',
	card: `The Sorcerer Supreme`,
	requires: DoctorStrange.name,
	requiresHero: ScarletWitch.name,
	category: 'Heroic',
	article: '',
})



export const QS = generateAllyCard({
	name: 'Twinstinct',
	card: `Quicksilver`,
	pronoun: 'he',
	requires: Exp.name,
	requiresHero: ScarletWitch.name,
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
	conflictingHeroes: [Quicksilver.name],
})



export const Upgrades = [Helmet, Agatha, QS, MagicShield, Scarlet,]
