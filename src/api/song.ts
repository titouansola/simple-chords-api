import { Router } from 'express';
import { flatten } from 'lodash'; 
import Song from './inputs/song';
import SongQuery from './inputs/songQuery';
import songService from '../services/song';
import partService from '../services/part';
import lineService from '../services/line';
import chordService from '../services/chord';

const songRouter: Router = Router();

songRouter.get('/all', async function (req, res, next) {
	const query: any = req.query;
	try {
		const songPage = await songService.fetchAllSongs(query as SongQuery);
		res.json(songPage);
	} catch (e) {
		next(e);
	}
});

songRouter.get('/:songId', async function (req, res, next) {
	try {
		const { songId } = req.params;
		const song = await songService.fetchSongById(parseInt(songId));
		res.json(song);
	} catch (e) {
		next(e);
	}
});

songRouter.post('/', async function (req, res, next) {
	try {
		const song: Song = req.body;
		// Store song element
		const storedSongId = await songService.storeSong(song);
		// Store part elements
		const storedParts = await partService.storeParts(song.parts, storedSongId);
		// Store line elements
		const lineStoringByParts = storedParts.map((part) => {
			return lineService.storeLines(part.lines, part.id);
		});
		const storedLines = flatten(await Promise.all(lineStoringByParts));
		// Store chord elements
		const chordStoringByLines = storedLines.map((line) => {
			return chordService.storeChords(line.chords, line.id);
		});
		await Promise.all(chordStoringByLines);
		//
		res.send('OK');
	} catch (e) {
		next(e);
	}
});

export default songRouter;