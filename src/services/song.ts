import Song from '../api/inputs/song';
import songRepository from '../repository/song';
import NotFoundError from '../errors/notfound.error';
import mapSong from '../mappers/song';
import SongQuery from '../api/inputs/songQuery';
import { MAX_SONG_PER_PAGE } from '../constants';

async function storeSong(song: Song) {
	return await songRepository.storeSong(song);
};

async function fetchSongById(songId: number) {
	const songEntity = (await songRepository.getSongById(songId));
	//
	if (!!songEntity) {
		return Promise.resolve(mapSong(songEntity));
	} else {
		return Promise.reject(new NotFoundError(`Unable to find song with id ${songId}`));
	}
};

async function fetchAllSongs(query: SongQuery) {
	const songEntities = await songRepository.getAllSongs(query);
	return {
		total: songEntities.total,
		pageAmount: Math.ceil(songEntities.total / MAX_SONG_PER_PAGE),
		songs: songEntities.results.map(mapSong)
	};
}

export default {
	storeSong,
	fetchSongById,
	fetchAllSongs
}
