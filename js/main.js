$(function(){
	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'  
	});

	$('.burger').on('click', function(){

		$('.menu ul').slideToggle();
	})
	
	$('select').styler();

	$('[data-scroll]').on('click', function(e){
		event.preventDefault();
		var $this = $(this);

		var sectionId = $(this).data('scroll');
		var blockOffset = $(sectionId).offset().top;

		$('.nav a').removeClass('active');
		$this.addClass('active');

		$('html, body').animate({
			scrollTop: blockOffset
		}, 700);

	});
});