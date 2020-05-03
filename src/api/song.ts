import { Router, Request, Response, NextFunction } from 'express';
import { flatten } from 'lodash'; 
import Song from './inputs/song';
import songService from '../services/song';
import partService from '../services/part';
import lineService from '../services/line';
import chordService from '../services/chord';

const songRouter: Router = Router();

songRouter.get('/:songId', async function (req: Request, res: Response, next: NextFunction) {
	try {
		const { songId } = req.params;
		const song = await songService.fetchSongById(parseInt(songId));
		res.json(song);
	} catch (e) {
		next(e);
	}
});

songRouter.post('/', async function (req: Request, res: Response, next: NextFunction) {
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