import s from './styles.module.css';

export const Modal = ({ children, finished }) => {
	// finished is for closing a modal window
	return (
		<>
			{finished ? (
				<div className={`${s.modalWrap} ${s.modalFinished}`} />
			) : (
				<div className={s.modalWrap}>
					<div className={s.modalContent}>{children}</div>
				</div>
			)}
		</>
	);
};
