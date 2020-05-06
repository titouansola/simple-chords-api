import Chord from './chord';

export default interface Line {
	text: string;
	order: number;
	chords: Array<Chord>;
}