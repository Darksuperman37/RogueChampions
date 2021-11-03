import {EncounterSetsMap} from "@/consts/encountersets"
import {Expansion} from "@/types/expansion";

//Core/Campaign
export const CoreSet : Expansion = {
	name: 'Core Set',
	encounterSets: [
		EncounterSetsMap['The Doomsday Chair'].name,
		EncounterSetsMap['Masters of Evil'].name,
		EncounterSetsMap['Legion of Hydra'].name,
		EncounterSetsMap['Bomb Scare'].name,
		EncounterSetsMap.Klaw.name,
		EncounterSetsMap.Rhino.name,
		EncounterSetsMap.Ultron.name
	]
}

export const RiseOfRedSkull : Expansion = {
	name: 'The Rise of Red Skull',
	encounterSets: [
		EncounterSetsMap['Hydra Assault'].name,
		EncounterSetsMap['Hydra Patrol'].name,
		EncounterSetsMap['Weapon Master'].name,
		EncounterSetsMap['Experimental Weapons'].name,
		EncounterSetsMap['Under Attack'].name,

		EncounterSetsMap.Crossbones.name,
		EncounterSetsMap['Absorbing Man'].name,
		EncounterSetsMap.Taskmaster.name,
		EncounterSetsMap.Zola.name,
		EncounterSetsMap['Red Skull'].name
	]
}

export const GalaxysMostWanted : Expansion = {
	name: 'The Galaxys Most Wanted',
	encounterSets: [
		EncounterSetsMap['Band of Badoon'].name,
		EncounterSetsMap['Galactic Artifacts'].name,
		EncounterSetsMap['Kree Militants'].name,
		EncounterSetsMap['Menagerie Medley'].name,
		EncounterSetsMap['Space Pirates'].name,
		EncounterSetsMap['Ship Command'].name,
		EncounterSetsMap['Badoon Headhunter'].name,

		EncounterSetsMap['Brotherhood of Badoon'].name,
		EncounterSetsMap['Infiltrate the Museum'].name,
		EncounterSetsMap['Escape the Museum'].name,
		EncounterSetsMap.Nebula.name,
		EncounterSetsMap.Ronan.name,
	]
}

export const MadTitansShadow : Expansion = {
	name: 'The Mad Titans Shadow',
	encounterSets: [
		EncounterSetsMap['The Black Order'].name,
		EncounterSetsMap['Armies of Titan'].name,
		EncounterSetsMap['Children of Thanos'].name,
		EncounterSetsMap['Infinity Gauntlet'].name,
		EncounterSetsMap['Legions of Hel'].name,
		EncounterSetsMap['Frost Giants'].name,
		EncounterSetsMap['Enchantress'].name,

		EncounterSetsMap['Ebony Maw'].name,
		EncounterSetsMap['Tower Defense'].name,
		EncounterSetsMap['Thanos'].name,
		EncounterSetsMap['Hela'].name,
		EncounterSetsMap['Loki'].name,
	]
}
//Villains
export const GreenGoblin : Expansion = {
	name: 'Green Goblin',
	encounterSets: [
		EncounterSetsMap['Goblin Gimmicks'].name,
		EncounterSetsMap['Risky Business'].name,
		EncounterSetsMap['Mutagen Formula'].name,
		EncounterSetsMap['Power Drain'].name,
		EncounterSetsMap['A Mess of Things'].name,
		EncounterSetsMap['Running Intereference'].name
	]
}

export const WreckingCrew : Expansion = {
	name: 'Wrecking Crew',
	encounterSets: ['Wrecking Crew']
}

export const Kang : Expansion = {
	name: "The Once and Future Kang",
	encounterSets:[
		EncounterSetsMap.Kang.name,
		EncounterSetsMap.Temporal.name,
		EncounterSetsMap.Anachronauts.name,
		EncounterSetsMap['Master of Time'].name
	]
}

export const KreeFanatic : Expansion = {
	name: "Kree Fanatic",
	encounterSets:[
		EncounterSetsMap['Kree Fanatic'].name,
	]
}
// Good guys
export const CaptainAmerica : Expansion = {
	name: 'Captain America',
	encounterSets: [],
}

export const BlackWidow : Expansion = {
	name: 'Black Widow',
	encounterSets: [],
}

export const Thor : Expansion = {
	name: 'Thor',
	encounterSets: [],
}

export const MsMarvel : Expansion = {
	name: 'Ms. Marvel',
	encounterSets: [],
}

export const Hulk : Expansion = {
	name: 'Hulk',
	encounterSets: [],
}

export const DoctorStrange : Expansion = {
	name: 'Doctor Strange',
	encounterSets: [],
}

export const Quicksilver : Expansion = {
	name: 'Quicksilver',
	encounterSets: [],
}

export const Antman : Expansion = {
	name: 'Ant-Man',
	encounterSets: [],
}

export const Wasp : Expansion = {
	name: 'Wasp',
	encounterSets: [],
}

export const ScarletWitch : Expansion = {
	name: 'Scarlet Witch',
	encounterSets: [],
}

export const Starlord : Expansion = {
	name: 'Starlord',
	encounterSets: [],
}
export const Gamora : Expansion = {
	name: 'Gamora',
	encounterSets: [],
}
export const Drax : Expansion = {
	name: 'Drax',
	encounterSets: [],
}
export const Venom : Expansion = {
	name: 'Venom',
	encounterSets: [],
}
export const Nebula : Expansion = {
	name: 'Nebula',
	encounterSets: [],
}
export const ExpansionsMap : Record<string, Expansion> = {
	// Expansions
	[CoreSet.name]: CoreSet,
	[RiseOfRedSkull.name]: RiseOfRedSkull,
	[GalaxysMostWanted.name]: GalaxysMostWanted,
	[MadTitansShadow.name]: MadTitansShadow,

	// Villain packs
	[GreenGoblin.name]: GreenGoblin,
	[WreckingCrew.name]: WreckingCrew,
	[Kang.name]: Kang,
	[KreeFanatic.name]: KreeFanatic,

	// Hero packs
	[BlackWidow.name]: BlackWidow,
	[CaptainAmerica.name]: CaptainAmerica,
	[DoctorStrange.name]: DoctorStrange,
	[Hulk.name]: Hulk,
	[Thor.name]: Thor,
	[MsMarvel.name]: MsMarvel,
	[ScarletWitch.name]: ScarletWitch,
	[Quicksilver.name]: Quicksilver,
	[Antman.name]: Antman,
	[Wasp.name]: Wasp,
	[Starlord.name]: Starlord,
	[Gamora.name]: Gamora,
	[Drax.name]: Drax,
	[Venom.name]: Venom,
	[Nebula.name]: Nebula,
}

export const ExpansionsList = Object.keys(ExpansionsMap).map(key => ExpansionsMap[key]).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

