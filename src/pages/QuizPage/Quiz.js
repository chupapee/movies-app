import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	getQuizList,
	nextQuiz,
	setTotalGuessed,
} from '../../redux/slices.js/quizSlice';
import { BackBtn } from '../../shared/buttons/components/BackBtn';
import { Preloader } from '../../widgets/Preloader/Preloader';
import s from './quiz.module.css';

export const Quiz = () => {
	const quiz = useSelector((state) => state.quiz.currentQuiz);
	const isLoading = useSelector((state) => state.quiz.isLoading);
	const dispatch = useDispatch();

	const [guessedCount, SetGuessedCount] = useState(0);
	const [attemptCount, SetAttemptCount] = useState(5);
	const [countQuiz, setCountQuiz] = useState(1);
	const [over, setOver] = useState(false);
	const oldTotal = localStorage.getItem('totalGuessed');

	const [animation, setAnimation] = useState(false);

	const getQuiz = () => {
		dispatch(getQuizList());
	};
	useEffect(() => {
		getQuiz();
		if (!oldTotal) localStorage.setItem('totalGuessed', 0);
	}, []);

	const getNextQuiz = () => {
		if (attemptCount === 1) {
			SetAttemptCount(0);
			setOver(true);
			if (guessedCount > oldTotal) {
				dispatch(setTotalGuessed(guessedCount));
			}
			return;
		}
		setCountQuiz(countQuiz + 1);
		dispatch(nextQuiz(countQuiz));
		setTimeout(() => setAnimation(false), 500);
	};

	const checkAnswer = (answer) => {
		if (answer === quiz.answer) SetGuessedCount(guessedCount + 1);
		else SetAttemptCount(attemptCount - 1);
		setTimeout(() => setAnimation(true), 500);
		setTimeout(getNextQuiz, 1000);
	};

	return (
		<>
			<BackBtn />
			<div className={s.quizWrap}>
				<div className={s.quizStatus}>
					{!over && (
						<>
							<p>Question: {countQuiz} / 25</p>
							<p>Attempts: {attemptCount}</p>
						</>
					)}
				</div>
				<div className={s.quizContent}>
					{over ? (
						<div className={s.quizOver}>
							<p>Game over!</p>
							<p>Guessed: {guessedCount}</p>
						</div>
					) : (
						<>
							<div
								className={`${s.quizQuestion} ${
									animation && s.animation
								}`}
							>
								{isLoading ? (
									<Preloader />
								) : (
									<p>{quiz.question}</p>
								)}
							</div>
							<div className={s.quizOptions}>
								{quiz.options &&
									quiz.options.map((value) => (
										<button
											key={value}
											className={`${s.quizBtn} ${
												animation && s.animation
											}`}
											onClick={() => checkAnswer(value)}
										>
											{value}
										</button>
									))}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};
