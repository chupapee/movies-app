import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MovieDetails } from '@pages/movie-details';
import { Movies } from '@pages/movie-list';
import { Profile } from '@pages/Profile';
import { Quiz } from '@pages/QuizPage/Quiz';

import { Login } from '@features/auth/login/ui';
import { Header } from '@widgets/header';
import { Modal } from '@shared/ui';
import s from './styles.module.css';

export const App = () => {
	const isAuthorized = useSelector((state) => state.session.isAuthorized);

	if (!isAuthorized)
		return (
			<Modal>
				<Login />
			</Modal>
		);

	return (
		<BrowserRouter>
			<Header />
			<div className={s.mainWrap}>
				<Routes>
					<Route path="/*" element={<Movies />} />
					<Route
						path="/details/:movieId"
						element={<MovieDetails />}
					/>
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
