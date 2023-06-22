import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchQuiz } from '@entities/quiz';
import { PlayQuiz } from '@features/quiz/play-quiz/ui';

export const Quiz = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchQuiz());
	}, []);

	return <PlayQuiz />;
};
