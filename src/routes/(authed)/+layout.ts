import type { LayoutLoad } from './$types';
import { getUser } from './getUser';

export const load: LayoutLoad = async ({ data, depends }) => {
	depends('authed:root');

	let user = data?.user;
	if (!user) {
		user = await getUser();
	}

	return {
		authedLayoutData: 'hey',
		user
	};
};
