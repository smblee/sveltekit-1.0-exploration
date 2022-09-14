import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent }) => {
	const parentStuff = await parent();
	console.log(`(authed)/(investor)/+layout.ts | ${JSON.stringify(parentStuff)}`);

	return {
		investorProfile: {}
	};
};
