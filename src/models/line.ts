import Model from '../config/model';
import { ChordModel } from './';

class Line extends Model {
	static get tableName() {
		return 'lines';
	}

	static get relationMappings() {
		return {
			chords: {
				relation: Model.HasManyRelation,
				modelClass: ChordModel,
				join: {
					from: 'lines.id',
					to: 'chords.lineId'
				}
			}
		};
	}
}

export default Line;