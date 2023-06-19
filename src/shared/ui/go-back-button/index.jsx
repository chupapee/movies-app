import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

import s from './go-back-button.module.css';

export const GoBackButton = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<>
			<button onClick={goBack} className={s.btn}>
				<ArrowBackIosNewIcon />
			</button>
		</>
	);
};
