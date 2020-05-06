import Part from './part';

export default interface Song {
	id?: number;
	author: string;
	title: string;
	capodastrePosition: number;
	tuning: string;
	instrument: string;
	parts: Array<Part>;
}