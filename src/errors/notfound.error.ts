import GlobalError from './global.error';

class NotFoundError extends GlobalError {
	constructor(
		public message: string
	) {
		super(404, message);
	}
}

export default NotFoundError;