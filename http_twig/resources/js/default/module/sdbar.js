$(document).ready(sdbarSlide);

function sdbarSlide() {
	$(".g-sdbar .sdbar li i").each(function () {
		$(this).hover(
			function () {
				$(this).siblings(".text").stop(true, true);
				$(this).siblings(".text").animate({
					"right":0
				},350);
				$(this).siblings(".qrcode").stop(true, true);
				$(this).siblings(".qrcode").fadeIn(300);
			},
			function () {
				$(this).siblings(".text").stop().animate({
					"right":-66
				},350);
				$(this).siblings(".qrcode").stop().fadeOut(300);
			})
	})
}