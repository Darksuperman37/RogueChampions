import {Upgrades as aggression} from "@/consts/upgrades/aggression";
import {Upgrades as general} from "@/consts/upgrades/general";
import {Upgrades as protection} from "@/consts/upgrades/protection";
import {Upgrades as justice} from "@/consts/upgrades/justice";
import {Upgrades as leadership} from "@/consts/upgrades/leadership";
import {Upgrades as spider_man} from "@/consts/upgrades/heroes/spider-man";
import {Upgrades as captainmarvel} from "@/consts/upgrades/heroes/captainmarvel";
import {Upgrades as she_hulk} from "@/consts/upgrades/heroes/she-hulk";
import {Upgrades as ironman} from "@/consts/upgrades/heroes/ironman";
import {Upgrades as blackpanther} from "@/consts/upgrades/heroes/blackpanther";
import {Upgrades as captainamerica} from "@/consts/upgrades/heroes/captainamerica";
import {Upgrades as msmarvel} from "@/consts/upgrades/heroes/msmarvel";
import {Upgrades as thor} from "@/consts/upgrades/heroes/thor";
import {Upgrades as blackwidow} from "@/consts/upgrades/heroes/blackwidow";
import {Upgrades as doctorstrange} from "@/consts/upgrades/heroes/doctorstrange";
import {Upgrades as hulk} from "@/consts/upgrades/heroes/hulk";
import {Upgrades as hawkeye} from "@/consts/upgrades/heroes/hawkeye";
import {Upgrades as spider_woman} from "@/consts/upgrades/heroes/spider-woman";
import {Upgrades as antman} from "@/consts/upgrades/heroes/AntMan";
import {Upgrades as Wasp} from "@/consts/upgrades/heroes/Wasp";
import {Upgrades as quicksilver} from "@/consts/upgrades/heroes/Quicksilver";
import {Upgrades as scarlet_witch} from "@/consts/upgrades/heroes/scarletwitch";
import {Upgrades as Starlord} from "@/consts/upgrades/heroes/starlord";
import {Upgrades as Gamora} from "@/consts/upgrades/heroes/gamora";
import {Upgrades as Rocket} from "@/consts/upgrades/heroes/rocket";
import {Upgrades as Groot} from "@/consts/upgrades/heroes/groot";
import {Upgrades as Drax} from "@/consts/upgrades/heroes/drax";
import {Upgrades as Venom} from "@/consts/upgrades/heroes/venom";
import {Upgrades as Nebula} from "@/consts/upgrades/heroes/Nebula";
import {Upgrades as Adam} from "@/consts/upgrades/heroes/AdamWarlock";
import {Upgrades as Spectrum} from "@/consts/upgrades/heroes/Spectrum";

import {Upgrade, UpgradeCategory} from "@/types/upgrade";

function addUpgrades (upgrades : Upgrade[]) {
	upgrades.forEach((upgrade) => {
		UpgradesMap[upgrade.name] = upgrade
	})
}

export const UpgradesMap : Record<string, Upgrade> = {}

addUpgrades(aggression)
addUpgrades(general)
addUpgrades(protection)
addUpgrades(justice)
addUpgrades(leadership)
addUpgrades(spider_man)
addUpgrades(captainmarvel)
addUpgrades(she_hulk)
addUpgrades(ironman)
addUpgrades(blackpanther)
addUpgrades(captainamerica)
addUpgrades(msmarvel)
addUpgrades(thor)
addUpgrades(blackwidow)
addUpgrades(doctorstrange)
addUpgrades(hulk)
addUpgrades(hawkeye)
addUpgrades(spider_woman)
addUpgrades(antman)
addUpgrades(Wasp)
addUpgrades(scarlet_witch)
addUpgrades(quicksilver)
addUpgrades(Starlord)
addUpgrades(Gamora)
addUpgrades(Rocket)
addUpgrades(Groot)
addUpgrades(Drax)
addUpgrades(Venom)
addUpgrades(Nebula)
addUpgrades(Adam)
addUpgrades(Spectrum)


export const UpgradesList = Object.keys(UpgradesMap).map(key => {
	return UpgradesMap[key]
}).sort((a,b) => {
	return a.name < b.name ? -1 : 1
})

export const UpgradeCategoriesList : UpgradeCategory[] = [
	'Aggression',
	'Leadership',
	'Protection',
	'Justice',
	'Heroic',
	'General'
]
