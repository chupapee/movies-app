import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '@features/auth';
import { Movies } from '@pages/movie-list';
import { useNavList } from '@shared/helpers';
import { Modal, Preloader } from '@shared/ui';
import { Header } from '@widgets/header';

import s from './styles.module.css';

const MovieDetails = lazy(() => import('@pages/movie-details'));
const Profile = lazy(() => import('@pages/profile'));
const Quiz = lazy(() => import('@pages/quiz'));

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
						element={
							<Suspense fallback={<Preloader />}>
								<MovieDetails />
							</Suspense>
						}
					/>
					<Route
						path={QUIZ_ROUT}
						element={
							<Suspense fallback={<Preloader />}>
								<Quiz />
							</Suspense>
						}
					/>
					<Route
						path={PROFILE_ROUT}
						element={
							<Suspense fallback={<Preloader />}>
								<Profile />
							</Suspense>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
