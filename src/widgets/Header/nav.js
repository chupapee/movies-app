import {
	CONTENT_ROUTE,
	PROFILE_ROUTE,
	QUIZ_ROUTE,
} from '../../app/routing/utils/consts';

export function getNavlist(login) {
	const nav = [
		{ value: 'MOVIES', path: CONTENT_ROUTE },
		{ value: 'QUIZ', path: QUIZ_ROUTE },
		{ value: login, path: PROFILE_ROUTE },
	];
	return nav;
}
