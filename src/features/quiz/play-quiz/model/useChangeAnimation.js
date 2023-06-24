import { useState } from 'react';

export const useChangeAnimation = (changeEvent) => {
	const [isChanged, setIsChanged] = useState(false);

	const handleChange = (val) => {
		setIsChanged(true);
		setTimeout(() => changeEvent(val), 100);
		setTimeout(() => setIsChanged(false), 500);
	};

	const styles = {
		opacity: isChanged ? 0 : 1,
		transition: 'opacity .2s',
	};

	return { handleChange, styles };
};
