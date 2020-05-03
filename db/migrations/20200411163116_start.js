const fondamentals = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'A#',
	'C#',
	'D#',
	'F#',
	'G#',
	'Ab',
	'Bb',
	'Db',
	'Eb',
	'Gb',
];

exports.up = async (knex) => {
	// Songs table
	await knex.schema.createTable('songs', (t) => {
		t.increments();
		//
		t.string('author').notNullable();
		t.string('title').notNullable();
		t.integer('capodastre_position').notNullable().defaultTo(0);
		t.string('tuning').notNullable().defaultTo('STD');
		t.enum('instrument', ['guitare', 'basse']).notNullable().defaultTo('guitare');
		//
		t.timestamps();
	});
	// Parts table
	await knex.schema.createTable('parts', (t) => {
		t.increments();
		//
		t.enum('type', ['chorus', 'verse', 'bridge']).notNullable().defaultTo('verse');
		t.integer('order').notNullable();
		t.integer('song_id').notNullable().references('id').inTable('songs').onDelete('CASCADE');
	});
	// Lines table
	await knex.schema.createTable('lines', (t) => {
		t.increments();
		//
		t.string('text');
		t.integer('order').notNullable();
		t.integer('part_id').notNullable().references('id').inTable('parts').onDelete('CASCADE');
	});
	// Chords table
	await knex.schema.createTable('chords', (t) => {
		t.increments();
		//
		t.enum('fondamental', fondamentals).notNullable();
		t.boolean('minor').defaultTo(false);
		t.string('qualities', 10);
		t.integer('on_screen_position').notNullable();
		t.integer('line_id').notNullable().references('id').inTable('lines').onDelete('CASCADE');
	});
}


exports.down = async (knex) => {
	await knex.schema.dropTableIfExists('chords');
	await knex.schema.dropTableIfExists('lines');
	await knex.schema.dropTableIfExists('parts');
	await knex.schema.dropTableIfExists('songs');
}

