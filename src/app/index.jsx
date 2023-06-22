import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '@features/auth';
import { MovieDetails } from '@pages/movie-details';
import { Movies } from '@pages/movie-list';
import { Profile } from '@pages/profile';
import { Quiz } from '@pages/quiz';
import { useNavList } from '@shared/helpers';
import { Modal } from '@shared/ui';
import { Header } from '@widgets/header';

import s from './styles.module.css';

export const App = () => {
	const isAuthorized = useSelector((state) => state.session.isAuthorized);
	const {
		routes: { MOVIES_ROUT, PROFILE_ROUT, QUIZ_ROUT },
	} = useNavList();

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
					<Route path="/*" element={<Navigate to={MOVIES_ROUT} />} />
					<Route path={MOVIES_ROUT} element={<Movies />} />
					<Route
						path={`${MOVIES_ROUT}/:movieId`}
						element={<MovieDetails />}
					/>
					<Route path={QUIZ_ROUT} element={<Quiz />} />
					<Route path={PROFILE_ROUT} element={<Profile />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
