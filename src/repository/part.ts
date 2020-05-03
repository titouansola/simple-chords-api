import { PartModel } from '../models';
import Part from '../api/inputs/part';

async function storePart(part: Part, songId: number) {
	const newPart = await PartModel.fromJson({
		type: part.type,
		order: part.order,
		songId
	})
	.$query()
	.insert();

	return newPart.$id();
}

export default {
	storePart
}