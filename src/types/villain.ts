export type Villain = {
	name: string
	difficulty: number
	key: string
	sets: string[],
	noExtraSets?: boolean, // Basically only for Wrecking Crew
	extraSets: number
}
