import { LineModel } from '../models';
import Line from '../api/inputs/line';

async function storeLine(line: Line, partId: number) {
	const newLine = await LineModel.fromJson({
		text: line.text,
		order: line.order,
		partId
	})
	.$query()
	.insert();

	return newLine.$id();
}

export default {
	storeLine
}