$(document).ready(sdbarSlide);

$(document).ready(formFocus);

$(document).ready(getAllChecked("g-cart"));
$(document).ready(getAllChecked("g-order"));

$(document).ready(navTab(".g-order"));
$(document).ready(navTab(".g-user"));
$(document).ready(navTab(".g-content"));
$(document).ready(navContentTab(".g-order", ".order-list"));
$(document).ready(navContentTab(".g-content", ".tabChild"));
$(document).ready(navContentTab(".g-user", ".tabChild"));

function formFocus () {
	// 表单获取焦点添加focus类
	$(".m-form .input-text").each(function() {
		$(this).focus(function() {
			$(this).addClass("focus");
		})
		$(this).blur(function() {
			$(this).removeClass("focus");
		})
	})
}

function getAllChecked(formName) {
	// 表单全选
	var c = $("." + formName + " " + ".getAllChecked");
	var checkbox = $("." + formName + " " + ".input-check");

	c.each(function() {
		$(this).click(function() {
				// checked属性未设置，用attr均会弹出undefined
				var checkAll = c.prop("checked");
				if($(this).prop("checked") == true) {
					checkbox.prop("checked",checkAll );
				}else{
					checkbox.prop("checked",checkAll );
				}
			})
	})
}

/**
 * [uImgView 查看单个图片，每次传入一个src值]
 */
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

/**
 * imgView  预览查看图片，可传入多张
 * @param  {[type]} selector [直接传入jquery选择器]
 */
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

/**
 * [positionAuto 图片水平居中]
 * @param  {[type]} elem [接收img元素]
 * @return {[type]}      [description]
 */
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

/**
 * [imgElement 创建图片预览图层]
 * @return {[type]} [description]
 */
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

/**
 * [navTab 导航栏点击添加选中类]
 * @param  {[type]} grid [设置区块，区块以".g-"开头]
 * @return {[type]}      [description]
 */
function navTab(grid) {
	// 小导航点击切换
	// grid指代区块
	var $nav = $(grid + " " + ".nav a");
	$nav.each(function () {
		var $this = $(this);//$this指代单个nav
		$this.click(function() {
			$nav.removeClass("selected");
			$this.addClass("selected");
		})
	})
}

/**
 * [navContentTab tab块切换]
 * @param  {[type]} grid     [设置区块，区块以".g-"开头]
 * @param  {[type]} tabChild [选择tab切换的块]
 * @return {[type]}          [description]
 */
function navContentTab(grid, tabChild) {
	var $nav = $(grid + " " + ".nav a");//获取nav
	var $tabChild = $(grid + " " + tabChild);
	$nav.each(function() {
		var $this = $(this);
		$this.click(function() {
			var $i = $this.index();
			$tabChild.hide();
			$tabChild.eq($i).show();
		})
	})
}

/**
 * [sdbarSlide 侧边栏滑出效果]
 * @return {[type]} [description]
 */
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