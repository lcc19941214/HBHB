$(document).ready(filterSlide);

$(document).ready(sortTag);

$(document).ready(showTips);

$(document).ready(imgExaggerate(1.05));

$(document).ready(userInfoSlide);

/**
 * [filterSlide filter module下拉切换]
 * @return {[type]} [description]
 */
function filterSlide() {
	// filter item slide

	$(".u-filter-list .more").each(function () {
		$(this).click(function () {
			var parent = $(this).parent(".u-filter-list");
			var parentHei = parent.height();
			if(!parentHei){
				parentHei = 49;
			}
			if(parentHei == 49) {
				parent.animate({"height":"105","overflow":"visible"}, "400");
			}else{
				parent.animate({"height":49,"overflow":"hidden"}, "400");
			}
		})
	});
}

function sortTag () {
	var item = $(".m-sortbar .tag-group li");
	item.each(function () {
		$(this).find(".closeTag").click(function () {
			$(this).parents("li").fadeOut("300",function() {
				$(this).remove();
			});
		})
	})
}

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

function imgExaggerate(big) {
	// img exaggerate
	$(function () {
		var imgWid = 0 ;
		var imgHei = 0 ;//变量初始化
		var scale = big ;//放大倍数

		$(".g-service .service-item").each(function () {
			$(this).hover(
				function () {
					$(this).find("img").stop(true, true);
					var imgWid2 = 0,
						imgHei2 = 0;
					imgWid = $(this).find("img").width();
					imgHei = $(this).find("img").height();
					imgWid2 = imgWid * scale;
					imgHei2 = imgHei * scale;
					$(this).find("img").animate({
						"width":imgWid2, 
						"height":imgHei2, 
						"left":-imgWid2 * (scale -1) / 2, 
						"top":-imgHei2 * (scale -1) / 2
					},"fast", "linear")
				},
				function () {
					$(this).find("img").stop().animate({
						"width":imgWid, 
						"height":imgHei, 
						"left":0,
						"top":0
					},"fast", "linear")
			})
		})
	})
}

function userInfoSlide() {
	$(".g-user .left .row-3 .btn").click(function() {
		$(this).toggleClass("upSlide");
		$(this).siblings(".infolist").slideToggle(300);
	})
}