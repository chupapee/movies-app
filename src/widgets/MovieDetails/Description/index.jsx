import s from './style.module.css';

export const Description = ({
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
}) => {
	return (
		<>
			{Title ? (
				<div className={s.movieDetailsInfo}>
					<div className={s.moviePreDetails}>
						<h1 className={s.movieDetailsTitle}>{Title}</h1>
						<div className={s.subInfo}>
							{Year && <div>{Year}</div>}
							{Rated && <div>{Rated}</div>}
							{DVD && <div>{DVD}</div>}
							{Runtime && <div>{Runtime}</div>}
						</div>
						{Plot && (
							<div className={s.moviePlot}>
								<p>{Plot}</p>
							</div>
						)}
					</div>
					<div className={s.movieMoreDetails}>
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
