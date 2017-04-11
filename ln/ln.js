
function scrollable() {
	var offset = $('.scrollable').parent().children().eq(0).height();
	$('.scrollable').css({top: offset+20+'px'});

	var $table = $('.scrollable table');
	$table.floatThead();
	$table.floatThead('reflow');
}