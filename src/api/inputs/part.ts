import Line from './line';

export enum PartType {
	CHORUS = 'chorus',
	VERSE = 'verse',
	BRIDGE = 'bridge'
}

export default interface Part {
	type: PartType,
	order: number,
	lines: Array<Line>
}