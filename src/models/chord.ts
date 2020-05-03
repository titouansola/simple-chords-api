import Model from '../config/model';

class Chord extends Model {
	static get tableName() {
		return 'chords';
	}
}

export default Chord;