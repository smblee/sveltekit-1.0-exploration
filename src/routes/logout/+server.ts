import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (event) => {
	return logoutRequestHandler(event);
};

export const GET: RequestHandler = async (event) => {
	return logoutRequestHandler(event);
};

const logoutRequestHandler: RequestHandler = async ({ cookies }) => {
	const response = new Response(null, { headers: { Location: '/login' }, status: 303 });
	if (!cookies.get('session')) {
		return response;
	}

	cookies.set('session', '', { expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT') });

	return response;
};

export const prerender = false;
// export const csr = false;
// export const ssr = false;
