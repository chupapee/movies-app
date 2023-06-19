import { MovieDetails } from '@pages/movie-details';
import { Movies } from '@pages/movie-list';
import { Profile } from '@pages/Profile';
import { Quiz } from '@pages/QuizPage/Quiz';

export const publicRoutes = [
	{
		path: '/*',
		Component: Movies,
	},
];

export const privateRoutes = [
	{
		path: '/',
		Component: Movies,
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
