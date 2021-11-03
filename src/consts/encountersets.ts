import {EncounterSet} from "@/types/encounterset";
import {DF_STEP_LARGE, DF_STEP_SMALL, DF_BASE, DF_STEP_MED} from "@/consts/difficulty";

// Encounter sets marked as "boss: true" cannot be used as modular sets
// Their difficulty is 0 because the villain's difficulty is set in the villains.ts file


//Villains
export const Ultron : EncounterSet = {
	name: 'Ultron',
	difficulty: 0,
	boss: true
}

export const Klaw : EncounterSet = {
	name: 'Klaw',
	difficulty: 0,
	boss: true
}

export const Rhino : EncounterSet = {
	name: 'Rhino',
	difficulty: 0,
	boss: true
}

export const WreckingCrew : EncounterSet = {
	name: 'Wrecking Crew',
	difficulty: 0,
	boss: true,
}

export const RiskyBusiness : EncounterSet = {
	name: 'Risky Business',
	difficulty: 0,
	boss: true
}

export const MutagenFormula : EncounterSet = {
	name: 'Mutagen Formula',
	difficulty: 0,
	boss: true
}

export const Crossbones : EncounterSet = {
	name: 'Crossbones',
	difficulty: 0,
	boss: true
}

export const AbsorbingMan : EncounterSet = {
	name: 'Absorbing Man',
	difficulty: 0,
	boss: true
}

export const Taskmaster : EncounterSet = {
	name: 'Taskmaster',
	difficulty: 0,
	boss: true
}

export const Zola : EncounterSet = {
	name: 'Zola',
	difficulty: 0,
	boss: true
}

export const RedSkull : EncounterSet = {
	name: 'Red Skull',
	difficulty: 0,
	boss: true
}

export const Kang : EncounterSet = {
	name: 'Kang',
	difficulty: 0,
	boss: true
}

export const BrotherhoodofBadoon : EncounterSet = {
	name: 'Brotherhood of Badoon',
	difficulty: 0,
	boss: true
}

export const InfiltratetheMuseum : EncounterSet = {
	name: 'Infiltrate the Museum',
	difficulty: 0,
	boss: true
}
export const EscapetheMuseum : EncounterSet = {
	name: 'Escape the Museum',
	difficulty: 0,
	boss: true
}
export const Nebula : EncounterSet = {
	name: 'Nebula',
	difficulty: 0,
	boss: true
}
export const Ronan : EncounterSet = {
	name: 'Ronan',
	difficulty: 0,
	boss: true
}
export const Ebony : EncounterSet = {
	name: 'Ebony Maw',
	difficulty: 0,
	boss: true
}
export const Tower : EncounterSet = {
	name: 'Tower Defense',
	difficulty: 0,
	boss: true
}
export const Thanos : EncounterSet = {
	name: 'Thanos',
	difficulty: 0,
	boss: true
}
export const Hela : EncounterSet = {
	name: 'Hela',
	difficulty: 0,
	boss: true
}
export const Loki : EncounterSet = {
	name: 'Loki',
	difficulty: 0,
	boss: true
}

//Modular Sets
export const GoblinGimmicks : EncounterSet = {
	name: 'Goblin Gimmicks',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const TheDoomsdayChair : EncounterSet = {
	name: 'The Doomsday Chair',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const LegionOfHydra : EncounterSet = {
	name: 'Legion of Hydra',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const UnderAttack : EncounterSet = {
	name: 'Under Attack',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const Expert : EncounterSet = {
	name: 'Expert',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const BombScare : EncounterSet = {
	name: 'Bomb Scare',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const MastersOfEvil : EncounterSet = {
	name: 'Masters of Evil',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const Anachronauts : EncounterSet = {
	name: 'Anachronauts',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const MasterofTime : EncounterSet = {
	name: 'Master of Time',
	difficulty: DF_STEP_MED,
	boss: false
} 
export const Temporal : EncounterSet = {
	name: 'Temporal',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const HydraAssault  : EncounterSet = {
	name: 'Hydra Assault',
	difficulty: DF_STEP_MED,
	boss: false
}
export const WeaponMaster : EncounterSet = {
	name: 'Weapon Master',
	difficulty: DF_STEP_MED,
	boss: false
}
export const HydraPatrol  : EncounterSet = {
	name: 'Hydra Patrol',
	difficulty: DF_STEP_MED,
	boss: false
}
export const ExperimentalWeapons  : EncounterSet = {
	name: 'Experimental Weapons',
	difficulty: DF_STEP_MED,
	boss: false
}

export const MessofThings  : EncounterSet = {
	name: 'A Mess of Things',
	difficulty: DF_STEP_MED,
	boss: false
}

export const PowerDrain  : EncounterSet = {
	name: 'Power Drain',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const RunningInterference  : EncounterSet = {
	name: 'Running Intereference',
	difficulty: DF_STEP_MED,
	boss: false
}

export const BandofBadoon  : EncounterSet = {
	name: 'Band of Badoon',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const GalacticArtifacts  : EncounterSet = {
	name: 'Galactic Artifacts',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const KreeMilitants  : EncounterSet = {
	name: 'Kree Militants',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const MenagerieMedley  : EncounterSet = {
	name: 'Menagerie Medley',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const SpacePirates  : EncounterSet = {
	name: 'Space Pirates',
	difficulty: DF_STEP_MED,
	boss: false
}

export const ShipCommand  : EncounterSet = {
	name: 'Ship Command',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const BadoonHeadhunter  : EncounterSet = {
	name: 'Badoon Headhunter',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const KreeFanatic  : EncounterSet = {
	name: 'Kree Fanatic',
	difficulty: DF_STEP_LARGE+DF_STEP_SMALL,
	boss: false
}

export const BlackOrder  : EncounterSet = {
	name: 'The Black Order',
	difficulty: DF_STEP_MED,
	boss: false
}

export const ArmiesTitan  : EncounterSet = {
	name: 'Armies of Titan',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const ChildrenThanos  : EncounterSet = {
	name: 'Children of Thanos',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const Gauntlet  : EncounterSet = {
	name: 'Infinity Gauntlet',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const LegionsHel  : EncounterSet = {
	name: 'Legions of Hel',
	difficulty: DF_STEP_SMALL,
	boss: false
}

export const FrostGiants  : EncounterSet = {
	name: 'Frost Giants',
	difficulty: DF_STEP_LARGE,
	boss: false
}

export const Enchantress  : EncounterSet = {
	name: 'Enchantress',
	difficulty: DF_STEP_MED,
	boss: false
}

export const EncounterSetsMap : Record<string, EncounterSet> = {
	[Rhino.name]: Rhino,
	[Klaw.name]: Klaw,
	[Ultron.name]: Ultron,
	[Kang.name]: Kang,

	[WreckingCrew.name]: WreckingCrew,
	[RiskyBusiness.name]: RiskyBusiness,
	[MutagenFormula.name]: MutagenFormula,
	
	[Crossbones.name]: Crossbones,
	[AbsorbingMan.name]: AbsorbingMan,
	[Taskmaster.name]: Taskmaster,
	[Zola.name]: Zola,
	[RedSkull.name]: RedSkull,
	
	[BrotherhoodofBadoon.name]: BrotherhoodofBadoon,
	[InfiltratetheMuseum.name]: InfiltratetheMuseum,
	[EscapetheMuseum.name]: EscapetheMuseum,
	[Nebula.name]: Nebula,
	[Ronan.name]: Ronan,
	
	[Ebony.name]: Ebony,
	[Tower.name]: Tower,
	[Thanos.name]: Thanos,
	[Hela.name]: Hela,
	[Loki.name]: Loki,
	
	[TheDoomsdayChair.name]: TheDoomsdayChair,
	[LegionOfHydra.name]: LegionOfHydra,
	[Expert.name]: Expert,
	[BombScare.name]: BombScare,
	[MastersOfEvil.name]: MastersOfEvil,
	
	[GoblinGimmicks.name]: GoblinGimmicks,
	[RunningInterference.name]: RunningInterference,
	[MessofThings.name]: MessofThings,
	[PowerDrain.name]: PowerDrain,
	[UnderAttack.name]: UnderAttack,
	
	[Anachronauts.name]: Anachronauts,
	[MasterofTime.name]: MasterofTime,
	[Temporal.name]: Temporal,
	[KreeFanatic.name]: KreeFanatic,
	
	[HydraAssault.name]: HydraAssault,
	[WeaponMaster.name]: WeaponMaster,
	[HydraPatrol.name]: HydraPatrol,
	[ExperimentalWeapons.name]: ExperimentalWeapons,
	
	[BandofBadoon.name]: BandofBadoon,
	[GalacticArtifacts.name]: GalacticArtifacts,
	[KreeMilitants.name]: KreeMilitants,
	[MenagerieMedley.name]: MenagerieMedley,
	[SpacePirates.name]: SpacePirates,
	[ShipCommand.name]: ShipCommand,	
	[BadoonHeadhunter.name]: BadoonHeadhunter,
	
	[BlackOrder.name]: BlackOrder,
	[ArmiesTitan.name]: ArmiesTitan,
	[ChildrenThanos.name]: ChildrenThanos,
	[Gauntlet.name]: Gauntlet,
	[LegionsHel.name]: LegionsHel,
	[FrostGiants.name]: FrostGiants,	
	[Enchantress.name]: Enchantress,
}

export let EncounterSetsList = Object.keys(EncounterSetsMap).map(key => EncounterSetsMap[key])


EncounterSetsList = EncounterSetsList.sort((a,b) => {
	return a.name < b.name ? -1 : 1
})
