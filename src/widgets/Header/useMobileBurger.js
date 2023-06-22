import { useEffect, useRef, useState } from 'react';

import s from './styles.module.css';

export const useMobileBurger = () => {
	const [isOpened, setIsOpened] = useState(false);
	const burgerRef = useRef(null);
	const toggleBurger = () => {
		setIsOpened((prev) => !prev);
	};

	useEffect(() => {
		if (isOpened) {
			burgerRef.current.className = `${s.navList} ${s.showNav}`;
		} else {
			burgerRef.current.className = s.navList;
		}
	}, [isOpened]);

	return { burgerRef, toggleBurger };
};
