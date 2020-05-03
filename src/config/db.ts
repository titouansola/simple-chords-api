import knex from './knex';

export default async () => {
	await knex.migrate.latest();
	const [ completedMigrations ]: Array<string[]> = await knex.migrate.list();
	// logs
	console.log(`[DATABASE] Completed migrations : ${completedMigrations.length}`);
	completedMigrations.forEach((migration, index) => console.log(`\t${index + 1}. ${migration?.split('.')[0]}`));
	console.log('------');
};