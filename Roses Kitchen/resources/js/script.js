$(document).ready(function() {
   /* For the skicky navigation*/ 
    $('.js--section-menu').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '60px;'
}); 
     /* Scroll on buttons */
    $('.js--scroll-to-menu').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-menu').offset().top}, 1000); 
    });


/*Navigation Scroll*/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }


  });
        /*Animation on scroll*/
        $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated pulse');
    }, {
        offset:'60%'  
    });
        $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated flip');
    }, {
        offset:'60%'  
    });
        $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated wobble');
    }, {
        offset:'60%'  
    });
        $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated rubberBand');
    }, {
        offset:'60%'  
    });
        $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset:'60%'  
    });
        $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated heartBeat');
    }, {
        offset:'60%'  
    });
        $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon =$('.js--nav-icon i');
        
        nav.slideToggle(200);
             
    });
    
    })