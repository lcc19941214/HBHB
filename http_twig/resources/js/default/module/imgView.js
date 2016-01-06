// $(document).ready(imgView(".g-content-service .service-2 .preview-img"));
// $(document).ready(imgView(".g-content-service .service-2 .preview-img"));


function uImgView() {
	// 查看单个图片
	
	imgElement();//创建节点并插入

	var btn = $(".result-item .btn-preview");

	btn.each(function () {
		var $this = $(this);
		var img = $this.parents(".result-item").find(".preview-img");
		var src = img.attr("src");
		$this.click(function () {
			uImgViewPrepare(src);
			return false//阻拦默认事件
		})
	})
}

function uImgViewPrepare(src) {
	var viewBg = $(".m-imgView-wrap");
	viewBg.fadeIn(200);

	var img = $("#img-view");
	img.attr("src", src);
	positionAuto(img);

	viewBg.find(".f-close").click(function () {
		viewBg.fadeOut(300);
	})
}

function imgView (selector) {
	// 预览一组图片，可设置为左右切换查看
	// selector 指定需要预览的图片
	
	imgElement();//创建节点并插入

	var img = $(selector);
	var src = [] ;

	img.each(function (index) {
		var $i = index;//顺序

		// 把src存入src数组
		src[$i] = $(this).attr("src");

		var $this = $(this) ;
		$this.click(function () {
			$this.parent("a").click(function() {return false;});//阻拦默认事件
			imgViewPrepare(src, $i);
		})
	})
}

function imgViewPrepare(src,index) {
	var viewBg = $(".m-imgView-wrap");
	viewBg.fadeIn(200);

	var img = $("#img-view");
	img.attr("src",src[index]);
	positionAuto(img);

	viewBg.find(".f-close").click(function () {
		viewBg.fadeOut(300);
		// $("#img-view").attr("src",src[index]);
		// index ++ ;
		// console.log(index);
	})
}

function positionAuto (elem) {
	// 设置垂直水平自动居中
	var elemWid = elem.width();
	var elemHei = elem.height();
	var winWid = $(window).width();
	var winHei = $(window).height();

	if( elemWid > winWid ){
		elem.width(winWid*.8);
		elemWid = elem.width();
		elemHei = elem.height();
	}
	if( elemHei > winHei ){
		elem.height(winHei*.85);
		elem.css("width","auto");
		elemWid = elem.width();
		elemHei = elem.height();
	}

	// 设置垂直水平居中
	elem.css({"top":((winHei * .5) - (elemHei * .5)), "left":((winWid * .5) - (elemWid * .5))});
}

function imgElement() {
	// 添加节点
	var $wrap = $("<div class='m-imgView-wrap'></div>");
	var $viewbox = $("<div class='m-imgView'></div>");
	var $imgbox = $("<div class='m-img-box'></div>");
	var $img = $("<img id='img-view' src='' alt='暂时无法查看'>");
	var $close = $("<span class='icon-close-big f-close'></span>");
	var $mask = $("<div class='mask f-close'></div>");

	var $footer = $(".g-footer");

	$footer.before($wrap);
	$wrap.append($viewbox);
	$viewbox.prepend($imgbox, $close, $mask);
	$imgbox.append($img);
}