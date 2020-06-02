import { SongModel } from '../models';
import Song from '../api/inputs/song';
import { Page } from 'objection';
import { MAX_SONG_PER_PAGE } from '../constants';
import SongQuery from '../api/inputs/songQuery';

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

async function getAllSongs(query: SongQuery): Promise<Page<SongModel>> {
	let qb = SongModel.query()
	.select('*')
	.page(query.page || 0, MAX_SONG_PER_PAGE);

	delete query.page;

	Object.entries(query).forEach(([column, value]) => {
		qb = qb.where(column, 'LIKE', `${value}%`);
	});

	return await qb;
}

export default {
	storeSong,
	getSongById,
	getAllSongs
}