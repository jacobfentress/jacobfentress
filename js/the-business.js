var initTimer;
var jfInit = function() {
	$('body').addClass('init');
	clearInterval(initTimer);
}

$(document).ready(function() {
	// add the class for the fanciness when the logo is hovered over
	$('.logo').one('mouseover', jfInit);

	// if the user doesn't hover before 6 seconds, start the fanciness anyway
	initTimer = setInterval(jfInit, 4500);
});