$(document).ready(formFocus);

function formFocus () {
	$(".m-form .input-text").each(function() {
		$(this).focus(function() {
			$(this).addClass("focus");
		})
		$(this).blur(function() {
			$(this).removeClass("focus");
		})
	})
}

// if valid wrong ,addclass validWrong