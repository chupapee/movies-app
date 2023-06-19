export const sliderAnimation = { duration: 50_000, easing: (t) => t };

export const sliderOptions = {
	loop: true,
	renderMode: 'performance',

	slides: {
		perView: 4,
		spacing: 15,
	},
	created(s) {
		s.moveToIdx(5, true, sliderAnimation);
	},
	updated(s) {
		s.moveToIdx(s.track.details.abs + 5, true, sliderAnimation);
	},
	animationEnded(s) {
		s.moveToIdx(s.track.details.abs + 5, true, sliderAnimation);
	},
};
