import { ChordModel } from '../models';
import Chord from '../api/inputs/chord';

async function storeChord(chord: Chord, lineId: number) {
	const storedChord = await ChordModel.fromJson({
		fondamental: chord.fondamental,
		minor: chord.minor,
		qualities: chord.qualities,
		onScreenPosition: chord.position,
		lineId
	})
	.$query()
	.insert();
	//
	return storedChord.$id();
}

export default {
	storeChord
}