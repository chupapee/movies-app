import { Preloader } from '@shared/ui';

import { useChangeAnimation, useQuiz } from '../model';
import s from './styles.module.css';

export const PlayQuiz = () => {
	const {
		isLoading,
		currentQuiz = {},
		currentIndex,
		guess,
		loose,
		win,
		totalGuessed,
		attempts,
		MAX_QUESTIONS,
	} = useQuiz();

	const { handleChange, styles } = useChangeAnimation(guess);

	if (isLoading) return <Preloader />;

	if (loose || win)
		return (
			<div className={s.quizOver}>
				<p>Game over!</p>
				<p>Guessed: {totalGuessed}</p>
			</div>
		);

	return (
		<div className={s.quizWrap}>
			<div className={s.quizStatus}>
				{(!loose || !win) && (
					<>
						<p>
							Question: {currentIndex} / {MAX_QUESTIONS}
						</p>
						<p>Attempts: {attempts}</p>
					</>
				)}
			</div>
			<div className={s.quizContent} style={styles}>
				<div className={s.quizQuestion}>
					<p
						dangerouslySetInnerHTML={{
							__html: currentQuiz.question,
						}}
					/>
				</div>
				<div className={s.quizOptions}>
					{currentQuiz.options?.map((value) => (
						<button
							key={value}
							className={s.quizBtn}
							onClick={() => handleChange(value)}
							dangerouslySetInnerHTML={{
								__html: value,
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
