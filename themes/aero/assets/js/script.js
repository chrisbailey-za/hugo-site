// Preloader js    

$(document).ready(function () {
	'use strict';

	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000
	});

	$('.slick-slider-about').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		centerMode: true,
		centerPadding: '60px',
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});


	$("#contactForm").submit(function(e){
		e.preventDefault();
		var action = $(this).attr("action");
		$.ajax({
		  type: "POST",
		  url: action,
		  crossDomain: true,
		  data: new FormData(this),
		  dataType: "json",
		  contentType: "multipart/form-data",
		  processData: false,
		  contentType: false,
		  headers: {
			"Accept": "application/json"
		  }
		}).done(function() {
			dataLayer.push({'event': 'formSubmit'})
		   $('.form-success').addClass('is-active');
		   $('#contactForm').addClass('submitted');
		}).fail(function() {
		   alert('An error occurred please try again later.')
		});
	  });

});