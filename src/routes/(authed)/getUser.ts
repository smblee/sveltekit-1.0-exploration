import { delay } from '$lib/utils';

export const getUser = async () => {
	console.log('getting user');
	const random = Math.floor(Math.random() * 100);

	await delay(500);
	return {
		id: '12345',
		randomValue: random,
		name: 'hi',
		avatarUrl: 'hey'
	};
};
