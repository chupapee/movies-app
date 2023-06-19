import SearchIcon from '@mui/icons-material/Search';
import s from './styles.module.css';

export const SearchInput = ({
	className = '',
	onSearch,
	disabled,
	...attrs
}) => {
	return (
		<div
			className={s.wrapper}
			onKeyDown={(e) => e.code === 'Enter' && onSearch()}
		>
			<input
				disabled={disabled}
				{...attrs}
				className={`${s.input} ${className}`}
			/>
			{disabled ? null : (
				<button className={s.iconBtn} onClick={onSearch}>
					<div className={s.iconWrap}>
						<SearchIcon className={s.icon} />
					</div>
				</button>
			)}
		</div>
	);
};
