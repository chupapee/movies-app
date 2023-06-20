import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from './styles.module.css';
import { getNavlist } from './nav';

export function Header() {
	const avatar = useSelector((state) => state.session.avatar);
	const username = useSelector((state) => state.session.username);
	const navList = getNavlist(username);

	const [isOpened, setIsOpened] = useState(false);
	const navRef = useRef(null);
	function openNav() {
		setIsOpened(!isOpened);
	}

	useEffect(() => {
		if (isOpened) {
			navRef.current.className = `${s.navList} ${s.showNav}`;
		} else {
			navRef.current.className = s.navList;
		}
	}, [isOpened]);

	return (
		<div className={s.header}>
			<div className={s.headerIcon}>
				<img src={avatar} alt="profile-icon" />
			</div>
			<div className={s.loginWrap}>
				<p className={s.login}>{username}</p>
			</div>
			<div>
				<div className={s.burger}>
					<MenuIcon onClick={openNav} />
				</div>
				<nav ref={navRef} className={s.navList}>
					{navList.map(({ value, path }) => (
						<NavLink
							onClick={openNav}
							key={path}
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
