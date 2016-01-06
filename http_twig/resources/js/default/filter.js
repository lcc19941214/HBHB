$(document).ready(filterSlide);
$(document).ready(sortTag);

function filterSlide() {
	// filter item slide

	// $(".u-filter-list .more").each(function () {
	// 	$(this).click(function () {
	// 		$(this).siblings(".hidelist").slideToggle(400);
	// 	})
	// });
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