/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // // cache the window object
    // $window = $(window);

    // $('section[data-type="background"]').each(function(){
    //     // declare the variable to affect the defined data-type
    //     var $scroll = $(this);

    //     $(window).scroll(function() {
    //         // HTML5 proves useful for helping with creating JS functions!
    //         // also, negative value because we're scrolling upwards
    //         var yPos = -($window.scrollTop() / $scroll.data('speed'));

    //         // background position
    //         var coords = '50% '+ yPos + 'px';

    //         // move the background
    //         $scroll.css({ backgroundPosition: coords });
    //     }); // end window scroll
    // });  // end section function
    
    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
