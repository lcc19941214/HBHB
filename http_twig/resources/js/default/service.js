$(document).ready(imgExaggerate(1.05));

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
