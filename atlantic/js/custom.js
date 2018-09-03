// counter js //

    "use strict";
	
    $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 15000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
	
// tool tip //

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
         
    // Initialize popover component
    
	$(function () {
        $('[data-toggle="popover"]').popover()
    })
	
// loader js //	
   
    $(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
    });

// animation //

    new WOW().init();
	