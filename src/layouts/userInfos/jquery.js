import $ from "jquery"

$(document).ready(function () {
	
	$(".bg div").click(function () {
		var sidebar = $(".aside");
		
		if ($(this).hasClass("opened")) {
			$(".upper__card").animate({
				left: 0
			}, 700, function () {
				sidebar.removeClass("opened").html("<i class='fa fa-bars'></i>");
			});
		} else {
			$(".upper__card").animate({
				left: "-150%"
			}, 700, function () {
				sidebar.addClass("opened").html("<i class='fa fa-times'></i>");
			});
		}
		
	});
	
});