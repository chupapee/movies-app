import { HomePage } from '@pages/HomePage/HomePage';
import { MovieDetails } from '@pages/MovieDetails/MovieDetails';
import { Profile } from '@pages/Profile/index';
import { Quiz } from '@pages/QuizPage/Quiz';

export const publicRoutes = [
	{
		path: '/*',
		Component: HomePage,
	},
];

export const privateRoutes = [
	{
		path: '/',
		Component: HomePage,
	},
	{
		path: '/quiz',
		Component: Quiz,
	},
	{
		path: '/details',
		Component: MovieDetails,
	},
	{
		path: '/profile',
		Component: Profile,
	},
];
