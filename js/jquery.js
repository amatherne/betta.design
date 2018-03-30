    $(document).ready(function(){
      $('.carousel').slick({
        // dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows:true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 4000,
      });
    });

// width marker
$(window).resize(function() {
  $('.show-width').html('<p>' + $(window).width() + 'px' + '</p>');
});




jQuery(function($){
     $( '.hamburger' ).click(function(){
      $('.responsive-menu').toggleClass('expand')
     })
})

// ------- Modal

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        // $('[data-popup="' + targeted_popup_class + '"]').css('overflow-y','none');
       $('body').css('overflow','hidden')
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        // $(' [data-popup="' + targeted_popup_class + '"]').css('position','relative');
        $('body').css('overflow','visible');
 
        e.preventDefault();
    });
});





