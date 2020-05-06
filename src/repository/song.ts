import { SongModel } from '../models';
import Song from '../api/inputs/song';

async function storeSong(song: Song) {
	const newSong = await SongModel.fromJson({
			author: song.author,
			title: song.title,
			capodastrePosition: song.capodastrePosition,
			tuning: song.tuning,
			instrument: song.instrument
		})
		.$query()
		.insert();

	return newSong.$id();
};

async function getSongById(songId: number): Promise<SongModel> {
	return await SongModel.query()
		.findById(songId)
		.withGraphFetched('parts.lines.chords');
};

async function getAllSongs(): Promise<SongModel[]> {
	return await SongModel.query().select('*');
}

export default {
	storeSong,
	getSongById,
	getAllSongs
}