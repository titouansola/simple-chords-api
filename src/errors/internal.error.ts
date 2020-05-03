import GlobalError from './global.error';

class InternalError extends GlobalError {
	constructor(
		public message: string
	) {
		super(500, message);
	}
}

export default InternalError;