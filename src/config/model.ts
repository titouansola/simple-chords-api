import { Model } from 'objection';
import Knex from './knex';

Model.knex(Knex);

export default Model;