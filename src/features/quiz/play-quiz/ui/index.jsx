import { Preloader } from '@shared/ui';

import { useQuiz } from '../model/useQuiz';
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
	} = useQuiz();

	if (loose || win)
		return (
			<div className={s.quizWrap}>
				<div className={s.quizOver}>
					<p>Game over!</p>
					<p>Guessed: {totalGuessed}</p>
				</div>
			</div>
		);

	return (
		<div className={s.quizWrap}>
			<div className={s.quizStatus}>
				{(!loose || !win) && (
					<>
						<p>Question: {currentIndex} / 25</p>
						<p>Attempts: {attempts}</p>
					</>
				)}
			</div>
			<div className={s.quizContent}>
				{isLoading ? (
					<Preloader />
				) : (
					<>
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
									onClick={() => guess(value)}
									dangerouslySetInnerHTML={{
										__html: value,
									}}
								/>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};
