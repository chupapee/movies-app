import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { quizApi } from '@entities/quiz';
import { PlayQuiz } from '@features/quiz/play-quiz';

const Quiz = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(quizApi.fetchQuiz());
	}, []);

	return <PlayQuiz />;
};

export default Quiz;
