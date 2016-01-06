$(document).ready(getAllChecked("g-cart"));
$(document).ready(getAllChecked("g-order"));
// $(document).ready(addSectionTitle("购物车"));

function getAllChecked(formName) {
	// formName
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

// function addSectionTitle(title) {
// 	var s = $("span");
// 	s.addClass("sectionTitle");
// 	s.text(title);
// 	$(".g-header .search").before($("span"));
// }