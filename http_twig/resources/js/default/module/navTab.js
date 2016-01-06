$(document).ready(navTab(".g-order"));
$(document).ready(navTab(".g-user"));
$(document).ready(navTab(".g-content"));
$(document).ready(navContentTab(".g-order", ".order-list"));
$(document).ready(navContentTab(".g-content", ".tabChild"));
$(document).ready(navContentTab(".g-user", ".tabChild"));

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

function navContentTab(grid, tabChild) {
	var $nav = $(grid + " " + ".nav a");//获取nav
	var $tabChild = $(grid + " " + tabChild);
	// var $tabChild = document.getElementsByClassName("g-content")[0].getElementsByClassName("right")[0].getElementsByClassName("tabChild");
	$nav.each(function() {
		var $this = $(this);
		$this.click(function() {
			var $i = $this.index();
			$tabChild.hide();
			$tabChild.eq($i).show();
		})
	})
}