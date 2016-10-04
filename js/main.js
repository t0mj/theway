jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
	var that = $(this);

	that.on('click', onMapClickHandler);
	that.off('mouseleave', onMapMouseleaveHandler);
	that.find('iframe').css("pointer-events", "none");
};

var onMapClickHandler = function (event) {
	var that = $(this);

	// Disable the click handler until the user leaves the map area
	that.off('click', onMapClickHandler);

	// Enable scrolling zoom
	that.find('iframe').css("pointer-events", "auto");

	// Handle the mouse leave event
	that.on('mouseleave', onMapMouseleaveHandler);
};

// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);
