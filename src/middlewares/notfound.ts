export default (req, res) => {
	console.error(`[HTTP] Unhandled route.`);
	//
	res.status(404).json({
		url: req.originalUrl,
		code: 404,
		message: 'Unhandled route'
	});
}