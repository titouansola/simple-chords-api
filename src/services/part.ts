import Part from '../api/inputs/part';
import partRepository from '../repository/part';

async function storeParts(parts: Array<Part>, songId: number) {
	const storingPromise = parts.map((part, order) => {
		part.order = order;	
		return partRepository.storePart(part, songId);
	});
	const ids: any[] = await Promise.all<any[]>(storingPromise);
	return parts.map((part, index) => ({ ...part, id: ids[index] }));
}

export default {
	storeParts
} 