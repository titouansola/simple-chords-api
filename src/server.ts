import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import bootstrap from './api';
import checkDatabaseMigrations from './config/db';
import notfound from './middlewares/notfound';
import requestReceivedLogger from './middlewares/requestReceivedLogger';
import globalErrorHandler from './middlewares/error';

// Config
const app: express.Application = express();
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
// Cors policy
app.use(cors());
// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes
app.use(requestReceivedLogger);
app.use('/api', bootstrap);
app.use(notfound);
app.use(globalErrorHandler);
// Starting server
(async () => {
	try {
		await checkDatabaseMigrations();
		app.listen(port, () => console.log(`[SUCCESS] Server started, listening on port ${port} with ${env} environement.`));
	} catch (e) {
		console.error('[ERROR]', e);
	}
})();