import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useNavList } from '@shared/helpers';

import s from './styles.module.css';
import { useMobileBurger } from './useMobileBurger';

export function Header() {
	const { avatar, username } = useSelector((state) => state.session);
	const { burgerRef, toggleBurger } = useMobileBurger();
	const { navList } = useNavList();

	return (
		<div className={s.header}>
			<div className={s.headerIcon}>
				<img src={avatar} alt="avatar" />
			</div>
			<div className={s.loginWrap}>
				<p className={s.login}>{username}</p>
			</div>
			<div>
				<button onClick={toggleBurger} className={s.burger}>
					<img
						src="assets/burger-menu-icon.svg"
						width={25}
						height={25}
						alt="navigation menu button"
					/>
				</button>
				<nav ref={burgerRef} className={s.navList}>
					{navList.map(({ value, path }) => (
						<NavLink
							key={path}
							onClick={toggleBurger}
							className={s.navItem}
							to={path}
						>
							{value}
						</NavLink>
					))}
				</nav>
			</div>
		</div>
	);
}
