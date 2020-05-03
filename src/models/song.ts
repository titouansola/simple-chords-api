import Model from '../config/model';
import { PartModel } from './';

class Song extends Model {
	static get tableName() {
		return 'songs';
	}

	static get relationMappings() {
		return {
			parts: {
				relation: Model.HasManyRelation,
				modelClass: PartModel,
				join: {
					from: 'songs.id',
					to: 'parts.songId'
				}
			}
		};
	}
}

export default Song;