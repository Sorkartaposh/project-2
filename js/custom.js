
jQuery(document).ready(function(
	) {

	// Scroll to start
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 300);
		return false;
	});

	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});

// Scroll to end

 //collapse the sidebar
     $('.menu-btn').click(function(){
       $('.sidebar-menu').addClass('active');
     });

     $('.close-btn').click(function(){
       $('.sidebar-menu').removeClass('active');
     });

   //vido-play
 $('.wrapper2-kp').on('click', function (e) {
      e.preventDefault();
      const player = $(this).children();
      var iframe = $(this).children('img').eq(0);
      console.log(iframe);
      $(this).children('.wrapper2-kp iframe')[0].src += "?autoplay=1";
      $(this).children('.wrapper2-kp iframe').show();
      iframe.hide();
      $(this).children('.play-btn-kp').hide();
 })

//date-pickar
	$('#datepicker').datepicker({
		uiLibrary: 'bootstrap4'
	});

//date-pickar
  $('#datepicker1').datepicker({
    uiLibrary: 'bootstrap4'
  });

	// accordion
	 jQuery(function ($) {
        $(".accordion-content").css("display", "none");
        $(".accordion-title").click(function () {

          $(".accordion-title").not(this).removeClass("open");

          $(".accordion-title").not(this).next().slideUp(300);

          $(this).toggleClass("open");

          $(this).next().slideToggle(300);
        });
    });


//vido-popup
	  $('#dolor').modally();
    modally('video-modal', {video: true, 'max-width': 600});

    $('#dolor').modally();
    modally('video-modal1', {video: true, 'max-width': 600});





	
//main
});