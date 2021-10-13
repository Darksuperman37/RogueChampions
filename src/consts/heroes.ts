import {Hero} from "@/types/hero";
import {CoreSet, RiseOfRedSkull} from "@/consts/expansions";

export const BlackPanther : Hero = {
	name: 'Black Panther',
	requires: 'Core Set',
	startingHP: 11,
}

export const BlackWidow : Hero = {
	name: 'Black Widow',
	requires: 'Black Widow',
	startingHP: 9,
}

export const CaptainAmerica : Hero = {
	name: 'Captain America',
	requires: 'Captain America',
	startingHP: 11,
}

export const CaptainMarvel : Hero = {
	name: 'Captain Marvel',
	requires: 'Core Set',
	startingHP: 12,
}

export const DoctorStrange : Hero = {
	name: 'Doctor Strange',
	requires: 'Doctor Strange',
	startingHP: 10,
}

export const Hawkeye : Hero = {
	name: 'Hawkeye',
	startingHP: 9,
	requires: 'The Rise of Red Skull',
}

export const Hulk : Hero = {
	name: 'Hulk',
	requires: 'Hulk',
	startingHP: 18,
}

export const IronMan : Hero = {
	name: 'Iron Man',
	requires: 'Core Set',
	startingHP: 9,
}

export const MsMarvel : Hero = {
	name: 'Ms. Marvel',
	requires: 'Ms. Marvel',
	startingHP: 19,
}

export const SheHulk : Hero = {
	name: 'She-Hulk',
	requires: 'Core Set',
	startingHP: 15,
}

export const SpiderMan : Hero = {
	name: 'Spider-Man',
	requires: 'Core Set',
	startingHP: 10,
}


export const SpiderWoman : Hero = {
	name: 'Spider-Woman',
	startingHP: 11,
	requires: 'The Rise of Red Skull',
}


export const Thor : Hero = {
	name: 'Thor',
	requires: 'Thor',
	startingHP: 14,
}

export const ScarletWitch : Hero = {
	name: 'Scarlet Witch',
	requires: 'Scarlet Witch',
	startingHP: 10,
}

export const Quicksilver : Hero = {
	name: 'Quicksilver',
	requires: 'Quicksilver',
	startingHP: 9,
}
export const Antman : Hero = {
	name: 'Ant-Man',
	requires: 'Ant-Man',
	startingHP: 12,
}
export const Wasp : Hero = {
	name: 'Wasp',
	requires: 'Wasp',
	startingHP: 11,
}

export const Starlord : Hero = {
	name: 'Starlord',
	requires: 'Starlord',
	startingHP: 10,
}
export const Gamora : Hero = {
	name: 'Gamora',
	requires: 'Gamora',
	startingHP: 10,
}
export const Drax : Hero = {
	name: 'Drax',
	requires: 'Drax',
	startingHP: 14,
}
export const Rocket : Hero = {
	name: 'Rocket Raccoon',
	requires: 'The Galaxys Most Wanted',
	startingHP: 9,
}
export const Groot : Hero = {
	name: 'Groot',
	requires: 'The Galaxys Most Wanted',
	startingHP: 10,
}
export const Venom : Hero = {
	name: 'Venom',
	requires: 'Venom',
	startingHP: 12,
}
export const Nebula : Hero = {
	name: 'Nebula',
	requires: 'Nebula',
	startingHP: 9,
}

export const HeroesMap : Record<string, Hero> = {
	[BlackPanther.name]: BlackPanther,
	[BlackWidow.name]: BlackWidow,
	[CaptainAmerica.name]: CaptainAmerica,
	[CaptainMarvel.name]: CaptainMarvel,
	[DoctorStrange.name]: DoctorStrange,
	[Hawkeye.name]: Hawkeye,
	[Hulk.name]: Hulk,
	[IronMan.name]: IronMan,
	[MsMarvel.name]: MsMarvel,
	[SheHulk.name]: SheHulk,
	[Thor.name]: Thor,
	[SpiderMan.name]: SpiderMan,
	[SpiderWoman.name]: SpiderWoman,
	[ScarletWitch.name]: ScarletWitch,
	[Quicksilver.name]: Quicksilver,
	[Antman.name]: Antman,
	[Wasp.name]: Wasp,
	[Starlord.name]: Starlord,
	[Gamora.name]: Gamora,
	[Rocket.name]: Rocket,
	[Groot.name]: Groot,
	[Drax.name]: Drax,
	[Venom.name]: Venom,
	[Nebula.name]: Nebula,
}

export const HeroesList = Object.keys(HeroesMap).
	map(key => {
		HeroesMap[key].cssClass = HeroesMap[key].name.split(' ').join('-').toLowerCase()
		return HeroesMap[key]
	}).
	sort((a,b) => {
		return a.name < b.name ? -1 : 1
	})
