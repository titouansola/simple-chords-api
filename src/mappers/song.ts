import { SongModel } from "../models";
import Song from "../api/inputs/song";

export default function (song: SongModel): Song {
	const songJSON = song.toJSON();
	//
	return {
		author: songJSON.author,
		title: songJSON.title,
		capodastrePosition: songJSON.capodastrePosition,
		tuning: songJSON.tuning,
		instrument: songJSON.instrument,
		parts: songJSON.parts
			.sort((a, b) => a.order - b.order)
			.map((part) => ({
				type: part.type,
				lines: part.lines
					.sort((a, b) => a.order - b.order)
					.map((line) => ({
						text: line.text,
						chords: line.chords
							.map((chord) => ({
								fondamental: chord.fondamental,
								minor: chord.minor,
								qualities: chord.qualities,
								position: chord.onScreenPosition
							}))
					}))
		}))
	}
}