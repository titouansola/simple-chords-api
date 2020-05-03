import Chord from '../api/inputs/chord';
import chordRepository from '../repository/chord';

async function storeChords(chords: Array<Chord>, lineId: number) {
	const storingPromise = chords.map((chord) => chordRepository.storeChord(chord, lineId));
	await Promise.all(storingPromise);
}

export default {
	storeChords
}