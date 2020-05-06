import Song from '../api/inputs/song';
import songRepository from '../repository/song';
import NotFoundError from '../errors/notfound.error';
import mapSong from '../mappers/song';

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

async function fetchAllSongs() {
	const songEntities = await songRepository.getAllSongs();
	return songEntities.map(mapSong);
}

export default {
	storeSong,
	fetchSongById,
	fetchAllSongs
}
