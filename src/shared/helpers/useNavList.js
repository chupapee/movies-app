export const useNavList = () => {
	const routes = {
		MOVIES_ROUT: '/movies',
		QUIZ_ROUT: '/quiz',
		PROFILE_ROUT: '/profile',
	};

	const navList = [
		{ value: 'MOVIES', path: routes.MOVIES_ROUT },
		{ value: 'QUIZ', path: routes.QUIZ_ROUT },
		{ value: 'PROFILE', path: routes.PROFILE_ROUT },
	];

	return { routes, navList };
};
