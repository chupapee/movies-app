import s from './styles.module.css';

export const SearchInput = ({
	className = '',
	onSearch,
	disabled,
	...attrs
}) => {
	return (
		<div className={s.wrapper}>
			<input
				onKeyDown={(e) => e.code === 'Enter' && onSearch()}
				disabled={disabled}
				{...attrs}
				className={`${s.input} ${className}`}
			/>
			{disabled ? null : (
				<button className={s.iconBtn} onClick={onSearch}>
					<div className={s.iconWrap}>
						<img
							src="assets/search-icon.svg"
							width={20}
							height={20}
							alt="movie release date"
						/>
					</div>
				</button>
			)}
		</div>
	);
};
