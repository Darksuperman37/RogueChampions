import {Challenge} from "@/types/challenge";
import {randomItem} from "@/lib/random";
import {DF_STEP_LARGE, DF_STEP_MED, DF_STEP_SMALL} from "@/consts/difficulty";

export const Devious : Challenge = {
	name: 'Devious',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player discards cards from the encounter deck until they find a Treachery. In player order, resolve the treacheries.`
}

export const Resilient : Challenge = {
	name: 'Resilient',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Increase the villain's max hit points by 8 for each player this stage.`
}

export const Ambush : Challenge = {
	name: 'Ambush',
	difficulty: DF_STEP_SMALL,
	description: `<strong>Setup:</strong> Each player discards an encounter card and takes damage equal to the number of boost icons on it.`
}

export const Master : Challenge ={
	name: 'Master',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player discards encounter cards until they reveal a minion. Engage that minion, but ignore any of its "When Revealed" or Surge effects.`
}

export const Tenacious : Challenge = {
	name: 'Tenacious',
	difficulty: DF_STEP_LARGE,
	description: `<strong>Setup:</strong> Place an acceleration token on the main scheme.`
}

export const Dangerous : Challenge = {
	name: 'Dangerous',
	difficulty: DF_STEP_SMALL,
	description: `<strong>Setup:</strong> Deal each player an encounter card.`
}

export const Tough : Challenge = {
	name: 'Tough',
	difficulty: DF_STEP_SMALL,
	description: `<strong>Setup:</strong> Place a Tough status card on the villain.`
}

export const Overwhelmed : Challenge = {
	name: 'Overwhelmed',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player starts with the Confused status condition.`
}

export const Sucker : Challenge = {
	name: 'Sucker Punched',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player starts with the Stunned status condition.`
}

export const Slowstart : Challenge = {
	name: 'Slow to Start',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Each player exhausts their identity.`
}

export const Unprepared : Challenge = {
	name: 'Unprepared',
	difficulty: DF_STEP_LARGE,
	description: `<strong>Setup:</strong> Each player's starting hand size is reduced by 1.`
}

export const Prior : Challenge = {
	name: 'Prior Commitment',
	difficulty: DF_STEP_SMALL,
	description: `<strong>Setup:</strong> Each player declares a resource type.  Reveal cards from the top of your deck until you find a card with a matching resource.  Discard all cards revealed this way.`
}

export const Nemesis : Challenge = {
	name: 'It just got worse',
	difficulty: DF_STEP_LARGE,
	description: `<strong>Setup:</strong> Each player reveals their nemesis minion and puts it into play engaged to them.  If defeated, return it to the set-aside encounter set.`
}

export const Crisis : Challenge = {
	name: 'Crisis',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Place threat on the main scheme equal to the amount that would be placed at the start of the villain phase (minimum 1 per player).`
}

export const Plotter : Challenge = {
	name: 'Plotter',
	difficulty: DF_STEP_MED,
	description: `<strong>Setup:</strong> Discard cards from the encounter deck until a side scheme is discarded.  Reveal that side scheme.`
}


export const ChallengesList = [Devious,
	Resilient,
	Ambush,
	Master,
	Tenacious,
	Dangerous,
	Tough,
	Overwhelmed,
	Sucker,
	Slowstart,
	Unprepared,
	Prior,
	Nemesis,
	Crisis,
	Plotter,
]

export const randomChallenge = () : Challenge => {
	return randomItem(ChallengesList)
}
