import { useState } from 'react';

import { rickRollUrl } from './helpers';
import s from './movie-col.module.css';

export const MovieCard = ({ movie }) => {
	const [play, setPlay] = useState(false);
	const playRickRoll = () => {
		setPlay(true);
	};

	if (!movie) return <>loading...</>;

	return (
		<div className={s.wrapper}>
			{play ? (
				<div className={s.frame}>
					<iframe
						width="100%"
						height="100%"
						src={rickRollUrl}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</div>
			) : (
				<div className={s.posterWrap}>
					<img
						className={s.detailsPoster}
						src={movie.Poster}
						alt="movie poster"
					/>
					<button className={s.play} onClick={playRickRoll} />
				</div>
			)}
			<Description {...movie} />
		</div>
	);
};

const Description = (props) => {
	const {
		Title,
		Year,
		Rated,
		DVD,
		Runtime,
		Plot,
		Genre,
		Director,
		Actors,
		Country,
		Awards,
	} = props;

	return (
		<>
			{Title ? (
				<div className={s.descrWrapper}>
					<div className={s.preDetails}>
						<h1 className={s.detailsTitle}>{Title}</h1>
						<div className={s.subInfo}>
							{Year && <div>{Year}</div>}
							{Rated && <div>{Rated}</div>}
							{DVD && <div>{DVD}</div>}
							{Runtime && <div>{Runtime}</div>}
						</div>
						{Plot && (
							<div className={s.plot}>
								<p>{Plot}</p>
							</div>
						)}
					</div>
					<div className={s.moreDetails}>
						{Genre && <div>Genre : {Genre}</div>}
						{Director && <div>Director : {Director}</div>}
						{Actors && <div>Actors : {Actors}</div>}
						{Country && <div>Country : {Country}</div>}
						{Awards && <div>Awards : {Awards}</div>}
					</div>
				</div>
			) : (
				<div className={s.error}>
					<p>Oops.. something went wrong!</p>
				</div>
			)}
		</>
	);
};
