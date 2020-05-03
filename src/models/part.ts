import Model from '../config/model';
import { LineModel } from './';

class Part extends Model {
	static get tableName() {
		return 'parts';
	}

	static get relationMappings() {
		return {
			lines: {
				relation: Model.HasManyRelation,
				modelClass: LineModel,
				join: {
					from: 'parts.id',
					to: 'lines.partId'
				}
			}
		};
	}
}

export default Part;