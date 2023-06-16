import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '../../widgets/Header/Header';
import s from './routing.module.css';
import { privateRoutes, publicRoutes } from './utils/routes';

export function Routing() {
	const loggedIn = useSelector((state) => state.auth.login);

	return (
		<BrowserRouter>
			<Header />
			<div className={s.mainWrap}>
				<Routes>
					{loggedIn ? (
						<>
							{privateRoutes.map(({ path, Component }) => (
								<Route
									key={path}
									path={path}
									element={<Component />}
								/>
							))}
						</>
					) : (
						<>
							{publicRoutes.map(({ path, Component }) => (
								<Route
									key={path}
									path={path}
									element={<Component />}
								/>
							))}
						</>
					)}
				</Routes>
			</div>
		</BrowserRouter>
	);
}
