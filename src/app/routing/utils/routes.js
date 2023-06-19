import { HomePage } from '@pages/HomePage/HomePage';
import { MovieDetails } from '@pages/movie-details';
import { Profile } from '@pages/Profile';
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
		path: '/details/:movieId',
		Component: MovieDetails,
	},
	{
		path: '/profile',
		Component: Profile,
	},
];
