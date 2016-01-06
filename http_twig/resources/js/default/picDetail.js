$(document).ready(showTips);

function showTips() {
	$(".g-content .icon-info").each(function() {
		var $item = $(this).siblings(".info-detail");
		$(this).hover(function() {
			$item.stop(true,true);
			$item.fadeIn(400);
		},function() {
			$item.stop().fadeOut(400);
		})
	})
}