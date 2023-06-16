import { Modal } from '@widgets/Modal/Modal';
import { SearchForm } from '@widgets/SearchForm/SearchForm';
import { useSelector } from 'react-redux/es/exports';

import { Auth } from '../Auth/Auth';
import { Movies } from '../Movies/Movies';
import s from './homePage.module.css';

export function HomePage() {
	const error = useSelector((state) => state.movies.error);
	const checked = useSelector((state) => state.auth.checked);

	// params for closing modal window
	const params = {};
	if (checked || localStorage.getItem('email')) params.finished = true;

	return (
		<>
			<Modal {...params}>
				<Auth />
			</Modal>
			<div className={s.contentWrapper}>
				<SearchForm />
				{error.length > 0 ? (
					<div className={s.error}>{error}</div>
				) : (
					<Movies />
				)}
			</div>
		</>
	);
}
