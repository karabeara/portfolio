$(document).ready(function(){

	// alert("Screen width: " + $(window).width());

	// initialization for grid format, 992
	if($(window).width() > 992) {
		$('.main-div').addClass('limit-large');
		$('.main-div').removeClass('limit-small');
		$('.proj-img').removeClass('img-responsive');
		$('.proj-img-w').removeClass('img-responsive');
		$('.proj-img-bw').removeClass('img-responsive');
	}

});


// adjusting img-responsive-ness upon resizing, 992
$(window).on('resize', function() {

		if($(window).width() > 992) {
				$('.main-div').addClass('limit-large');
				$('.main-div').removeClass('limit-small');
				$('.proj-img').removeClass('img-responsive');
				$('.proj-img-w').removeClass('img-responsive');
				$('.proj-img-bw').removeClass('img-responsive');
		}
		else {
			$('.main-div').addClass('limit-small');
			$('.proj-img').addClass('img-responsive');
			$('.proj-img-w').addClass('img-responsive');
			$('.proj-img-bw').addClass('img-responsive');
			$('.main-div').removeClass('limit-large');
		}

});
