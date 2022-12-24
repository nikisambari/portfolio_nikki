$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

AOS.init({
  duration: 1200,
});

$(window).on('load',function(){
	setTimeout(function(){
    $('html, body')
    .css({
      'overflow': 'auto'
    })
	$('.page-loader').fadeOut('slow');
	},2500);
  
});