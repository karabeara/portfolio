$(document).ready(function(){

	// initialization for grid format
	if($(window).width() > 1200) {
		$('.main-div').addClass('limit-large');
		$('.main-div').removeClass('limit-small');
		$('.proj-img').removeClass('img-responsive');
		$('.proj-img-w').removeClass('img-responsive');
		$('.proj-img-bw').removeClass('img-responsive');
	}

});


// adjusting img-responsive-ness upon resizing
$(window).on('resize', function() {

		if($(window).width() > 1200) {
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
