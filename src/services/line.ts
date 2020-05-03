import Line from "../api/inputs/line";
import lineRepository from '../repository/line';

async function storeLines(lines: Array<Line>, partId: number) {
	const storingPromise = lines.map((line, order) => {
		line.order = order;
		return lineRepository.storeLine(line, partId);
	});
	const ids: any[] = await Promise.all<any[]>(storingPromise);
	return lines.map((line, index) => ({ ...line, id: ids[index] }));
}

export default {
	storeLines
}