import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

import s from '../styles/backBtn.module.css';

export const BackBtn = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<>
			<button onClick={goBack} className={s.backBtn}>
				<ArrowBackIosNewIcon className={s.backIcon} />
			</button>
		</>
	);
};
