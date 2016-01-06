$(document).ready(userInfoSlide);

function userInfoSlide() {
	$(".g-user .left .row-3 .btn").click(function() {
		$(this).toggleClass("upSlide");
		$(this).siblings(".infolist").slideToggle(300);
	})
}