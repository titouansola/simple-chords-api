import { Router } from 'express';

import songApi from './song';

const api: Router = Router();

api.use('/song', songApi);

export default api;