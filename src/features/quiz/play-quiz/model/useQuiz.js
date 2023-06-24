import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const MAX_ATTEMPTS = 5;

export const useQuiz = () => {
	const quizList = useSelector((state) => state.quiz.list);
	const isLoading = useSelector((state) => state.quiz.isLoading);
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentQuiz = useMemo(
		() => quizList[currentIndex],
		[quizList, currentIndex]
	);

	const next = () => {
		if (currentIndex < quizList.length) {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	const [totalGuessed, setTotalGuessed] = useState(0);
	const [attempts, setAttempts] = useState(MAX_ATTEMPTS);

	const loose = attempts === 0;
	const win = currentIndex === 25;

	const guess = (userAnswer) => {
		const correctAnswer = quizList[currentIndex].answer;
		if (userAnswer === correctAnswer) {
			setTotalGuessed((prev) => prev + 1);
		} else {
			setAttempts((prev) => prev - 1);
		}
		next();
	};

	return {
		currentQuiz,
		isLoading,
		currentIndex: currentIndex + 1,
		guess,
		loose,
		win,
		totalGuessed,
		attempts,
		MAX_QUESTIONS: quizList.length,
	};
};
