import Part from './part';

export default interface Song {
	author: string,
	title: string,
	capodastrePosition: number,
	tuning: string,
	instrument: string,
	parts: Array<Part>
}