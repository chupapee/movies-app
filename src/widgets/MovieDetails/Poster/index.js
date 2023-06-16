import { useState } from 'react';

import s from './style.module.css';

export const Poster = ({ posterPic }) => {
	const [isClicked, setIsClicked] = useState(false);
	const getRickRoll = () => {
		setIsClicked(true);
	};

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div onClick={getRickRoll} className={s.moviePosterWrap}>
			{isClicked ? (
				<div className={s.movieFrame}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&fs=0&controls=0&muted=1&modestbranding=1&showinfo=0"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</div>
			) : (
				<>
					<img
						className={s.movieDetailsPoster}
						src={posterPic}
						alt="moviePoster"
					/>
					<span className={s.moviePlay} />
				</>
			)}
		</div>
	);
};
