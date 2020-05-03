import Knex = require('knex');
import { knexSnakeCaseMappers } from 'objection';
import config = require('../../knexfile');
const env = process.env.NODE_ENV || 'development';

export default Knex({
	...config[env],
	...knexSnakeCaseMappers()
});