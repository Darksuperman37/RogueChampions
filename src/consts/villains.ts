import {Villain} from "@/types/villain";
import {EncounterSetsMap} from "@/consts/encountersets";
import {ExpansionsMap} from "@/consts/expansions";
import {DF_BASE, DF_STEP_LARGE, DF_STEP_SMALL, DF_STEP_MED} from "@/consts/difficulty";

// BASE GAME
export const Ultron : Villain = {
	name: 'Ultron',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	key: 'ultron',
	sets: [EncounterSetsMap.Ultron.name],
	extraSets: 0
}

export const Rhino : Villain = {
	name: 'Rhino',
	key: 'rhino',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap.Rhino.name],
	extraSets: 0
}

export const Klaw : Villain = {
	name: 'Klaw',
	key: 'klaw',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap.Klaw.name],
	extraSets: 0
}

// VILLAIN PACKS
export const WreckingCrew : Villain = {
	name: 'Wrecking Crew',
	key: 'WreckingCrew',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap['Wrecking Crew'].name],
	noExtraSets: true,
	extraSets: 0
}

export const GreenGoblin : Villain = {
	name: 'Mutagen Formula',
	key: 'GreenGoblin',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap['Mutagen Formula'].name],
	extraSets: 0
}

export const NormanOsborn : Villain = {
	name: 'RiskyBusiness',
	key: 'RiskyBusiness',
	difficulty: DF_BASE,
	sets: [EncounterSetsMap['Risky Business'].name],
	extraSets: 0
}

export const Kang : Villain = {
	name: 'Kang',
	key: 'Kang',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap.Kang.name],
	extraSets: 0
}

// THE RISE OF RED SKULL
export const Crossbones : Villain = {
	name: 'Crossbones',
	key: 'Crossbones',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap.Crossbones.name],
	extraSets: 2
}

export const AbsorbingMan : Villain = {
	name: 'Absorbing Man',
	key: 'AbsorbingMan',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap['Absorbing Man'].name],
	extraSets: 0
}

export const Taskmaster : Villain = {
	name: 'Taskmaster',
	key: 'Taskmaster',
	difficulty: DF_BASE  + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap.Taskmaster.name],
	extraSets: 0
}

export const Zola : Villain = {
	name: 'Zola',
	key: 'Zola',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap.Zola.name],
	extraSets: 0
}

export const RedSkull : Villain = {
	name: 'Red Skull',
	key: 'RedSkull',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap['Red Skull'].name],
	extraSets: 1
}

export const Drang : Villain = {
	name: 'Brotherhood of Badoon',
	key: 'Drang',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap['Brotherhood of Badoon'].name],
	extraSets: 0
}

export const Infiltrate : Villain = {
	name: 'Infiltrate the Museum',
	key: 'Infiltrate',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap['Infiltrate the Museum'].name],
	extraSets: 0
}

export const Escape : Villain = {
	name: 'Escape the Museum',
	key: 'Escape',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap['Escape the Museum'].name],
	extraSets: 0
}

export const Nebula : Villain = {
	name: 'Nebula',
	key: 'Nebula',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap.Nebula.name],
	extraSets: 0
}

export const Ronan : Villain = {
	name: 'Ronan',
	key: 'Ronan',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap.Ronan.name],
	extraSets: 0
}

export const Ebony : Villain = {
	name: 'Ebony Maw',
	key: 'Ebony',
	difficulty: DF_BASE + DF_STEP_MED,
	sets: [EncounterSetsMap['Ebony Maw'].name],
	extraSets: 1
}

export const Tower : Villain = {
	name: 'Tower Defense',
	key: 'Tower',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap['Tower Defense'].name],
	extraSets: 0
}

export const Thanos : Villain = {
	name: 'Thanos',
	key: 'Thanos',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap['Thanos'].name],
	extraSets: 1
}

export const Hela : Villain = {
	name: 'Hela',
	key: 'Hela',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap['Hela'].name],
	extraSets: 1
}

export const Loki : Villain = {
	name: 'Loki',
	key: 'Loki',
	difficulty: DF_BASE + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED + DF_STEP_MED,
	sets: [EncounterSetsMap['Loki'].name],
	extraSets: 1
}
export const VillainsMap : Record<string, Villain> = {
	[Ultron.name]: Ultron,
	[Rhino.name]: Rhino,
	[Klaw.name]: Klaw,
	[WreckingCrew.name]: WreckingCrew,
	[GreenGoblin.name]: GreenGoblin,
	[NormanOsborn.name]: NormanOsborn,
	[Kang.name]: Kang,
	[Crossbones.name]: Crossbones,
	[AbsorbingMan.name]: AbsorbingMan,
	[Taskmaster.name]: Taskmaster,
	[Zola.name]: Zola,
	[RedSkull.name]: RedSkull,
	[Drang.name]: Drang,
	[Infiltrate.name]: Infiltrate,
	[Escape.name]: Escape,
	[Nebula.name]: Nebula,
	[Ronan.name]: Ronan,
	[Ebony.name]: Ebony,
	[Tower.name]: Tower,
	[Thanos.name]: Thanos,
	[Hela.name]: Hela,
	[Loki.name]: Loki,
}

export const VillainsList = Object.keys(VillainsMap).map(key => VillainsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

