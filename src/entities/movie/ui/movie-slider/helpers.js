import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper';

const getDirection = () => {
	const windowWidth = window.innerWidth;
	const direction = windowWidth <= 500 ? 'vertical' : 'horizontal';

	return direction;
};
const handleResize = (swiper) => {
	swiper.changeDirection(getDirection());
};

export const sliderOptions = {
	mousewheel: true,
	navigation: true,
	pagination: {
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: true,
	},
	loop: true,
	slidesPerGroup: 2,
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		850: {
			slidesPerView: 4,
		},
		650: {
			slidesPerView: 3,
			spaceBetween: 20,
		},

		500: {
			slidesPerGroup: 1,
			slidesPerView: 2,
			spaceBetween: 10,
		},
		0: {
			slidesPerGroup: 1,
			allowTouchMove: true,
			mousewheel: true,
			slidesPerView: 1,
			pagination: {
				modifierClass: true,
			},
		},
	},
	modules: [Pagination, Autoplay, Mousewheel, Navigation],
	onResize: handleResize,
};
