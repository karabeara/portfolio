// // initialization
// $(document).ready(function() {
// 	if ($(window).height() <= 768) {
// 			$('.main-div').addClass('limit-small');
// 			$('.proj-img').addClass('img-responsive');
// 			$('.proj-img-w').addClass('img-responsive');
// 			$('.proj-img-bw').addClass('img-responsive');
// 			$('.main-div').removeClass('limit-large');
// 	})
// };

	// if ($(window).height() <= 768) {
	// 		$('.main-div').addClass('limit-small');
	// 		$('.proj-img').addClass('img-responsive');
	// 		$('.proj-img-w').addClass('img-responsive');
	// 		$('.proj-img-bw').addClass('img-responsive');
	// 		$('.main-div').removeClass('limit-large');
	// };

// $(document).ready(function(){
//
// 	if ($(window).width() < 960) {
//    console.log('Less than 960');
// 	}
// 	else {
//    console.log('More than 960');
// 	}
//
// 	if ($(window).width() > 922) {
// 		$('.main-div').addClass('limit-large');
// 		$('.main-div').removeClass('limit-small');
// 		$('.proj-img').removeClass('img-responsive');
// 		$('.proj-img-w').removeClass('img-responsive');
// 		$('.proj-img-bw').removeClass('img-responsive');
// 	};
//
// 	$(window).on('resize', function() {
// 	    if($(window).height() > 922) {
// 	        $('.main-div').addClass('limit-large');
// 	        $('.main-div').removeClass('limit-small');
// 					$('.proj-img').removeClass('img-responsive');
// 					$('.proj-img-w').removeClass('img-responsive');
// 					$('.proj-img-bw').removeClass('img-responsive');
// 			}
// 			else {
// 				$('.main-div').addClass('limit-small');
// 				$('.proj-img').addClass('img-responsive');
// 				$('.proj-img-w').addClass('img-responsive');
// 				$('.proj-img-bw').addClass('img-responsive');
// 				$('.main-div').removeClass('limit-large');
// 	    }
// 	});
//
// )};
$(document).ready(function(){

	if($(window).width() > 922) {
		$('.main-div').addClass('limit-large');
		$('.main-div').removeClass('limit-small');
		$('.proj-img').removeClass('img-responsive');
		$('.proj-img-w').removeClass('img-responsive');
		$('.proj-img-bw').removeClass('img-responsive');
	}

});


$(window).on('resize', function() {

		if($(window).width() > 922) {
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
