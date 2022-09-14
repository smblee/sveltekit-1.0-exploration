import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getUser } from './getUser';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	console.log(`/+layout.server.ts`);

	const session = cookies.get('session');

	if (!session) {
		cookies.set('origin', url.pathname, { path: '/' });

		throw redirect(303, '/login');
	}

	const user = await getUser();

	return {
		rootLayoutData: 'hi',
		user
	};
};
