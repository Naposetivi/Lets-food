$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
});
// =============================================
const likes = document.querySelectorAll('.item-menu__like');
if (likes.length > 0) {
	for (let index = 0; index < likes.length; index++) {
		let like = likes[index];
		like.addEventListener('click', function () {
			like.classList.toggle('active');
		});
	}
}
// =======================================================
const swiper = new Swiper('.about__swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 1.5,
	spaceBetween: 24,
});
// ========================================================
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// Основна функція
function initRatings() {
	let ratingActive, ratingValue;
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}
	//ініціалізація конкретного рейтнга
	function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWidth();
	}
	//ініціалізація змінних
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	//змінювання ширини аактивного поля
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}