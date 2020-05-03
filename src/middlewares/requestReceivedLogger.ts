export default (req, _, next) => {
	console.log('-----')
	console.log(`[HTTP] Received request ${req.method} ${req.path}`);
	console.log('[HTTP] Query parameters :', req.query);
	console.log('[HTTP] Request body :', req.body);
	console.log('-----');
	//
	next();
};