//document.querySelector('.header-menu__icon').onclick = () => {
//	document.querySelector('.header-menu__icon').classList.toggle('active');
//}

$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').addClass('lock');
	} else {
		$('body').removeClass('lock');
	}
})