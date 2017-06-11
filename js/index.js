// initialization
$(document).ready(function() {
	if ($(window).height() <= 768) {
			$('.main-div').addClass('limit-small');
			$('.proj-img').addClass('img-responsive');
			$('.proj-img-w').addClass('img-responsive');
			$('.proj-img-bw').addClass('img-responsive');
			$('.main-div').removeClass('limit-large');
	})
};

	// if ($(window).height() <= 768) {
	// 		$('.main-div').addClass('limit-small');
	// 		$('.proj-img').addClass('img-responsive');
	// 		$('.proj-img-w').addClass('img-responsive');
	// 		$('.proj-img-bw').addClass('img-responsive');
	// 		$('.main-div').removeClass('limit-large');
	// };

$(window).on('resize', function() {
    if($(window).height() > 768) {
        $('.main-div').addClass('limit-large');
        $('.main-div').removeClass('limit-small');
				$('.proj-img').removeClass('img-responsive');
				$('.proj-img-w').removeClass('img-responsive');
				$('.proj-img-bw').removeClass('img-responsive');
    } else {
        $('.main-div').addClass('limit-small');
				$('.proj-img').addClass('img-responsive');
				$('.proj-img-w').addClass('img-responsive');
				$('.proj-img-bw').addClass('img-responsive');
        $('.main-div').removeClass('limit-large');
    }
});
