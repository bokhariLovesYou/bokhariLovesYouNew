$(document).ready(function() {

	console.log("silence is gold.");

	$(".nav-toggle").on('click', function() {
		$(".hamburger-03").toggleClass("hamburger-03-activate");
		$(".hamburger-02").toggleClass("hamburger-02-activate");
		$(".hamburger").toggleClass("hamburger-hide-activate");
		$("#mobile-menu").toggleClass("expand-menu");
		$(".full-width").toggleClass("navy");
		$(".my-header").toggleClass("transparent");
		$(".logo-box").toggleClass("fadeOut");
		$(".first-item").toggleClass("fadeInRight delay-0");
		$(".second-item").toggleClass("fadeInRight delay");
		$(".third-item").toggleClass("fadeInRight delay-2");
		$(".my-header").toggleClass('remove-shadow');
		$(".my-header").toggleClass('remove-shadow');
		$(".mp-1").toggleClass('fadeInUp delay-1');
		$(".mp-2").toggleClass('fadeInUp delay-2');
		$(".primary").toggleClass('fadeInLeft delay-3');
		$(".experiment").toggleClass('fadeInLeft delay-3 show');
		$(".experiment-2").toggleClass('fadeInRight delay-3 show');
		$(".experiment-3").toggleClass('fadeInRight delay show');
		$(".fa-linkedin").toggleClass('fadeInUp delay');
		$(".fa-instagram").toggleClass('fadeInRight delay-2');
	});

// Scroll
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $(".full-width").outerHeight();
	var scroll_start = 0;
	var startchange = $("h1");
	var offset = startchange.offset();
// Adding waypoint
	var scroll_start_2 = 0;
	var startchange_2 = $("#section-3 .bottom-hr");
	var offset_2 = startchange_2.offset();
	var win = $(window).width();
// Adding waypoint
	var scroll_start_3 = 0;
	var startchange_3 = $(".sky h1");
	var offset_3 = startchange_3.offset();


	$(document).scroll(function() {
		scroll_start_2 = $(this).scrollTop();
			if(scroll_start_2 > offset_2.top) {
				$(".strike").addClass("shadow");
			} else {
				$(".strike").removeClass("shadow");
			}
	});

	$(document).scroll(function() {
		scroll_start_3 = $(this).scrollTop();
			if(scroll_start_3 > offset_3.top) {
				$(".strike-2").addClass("changed");
			} else {
				$(".strike-2").removeClass("changed");
			}
	});


	$(window).scroll(function(event) {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 10);

	function hasScrolled() {
		var st = $(this).scrollTop();
		if(Math.abs(lastScrollTop - st) <= delta)
			return;
		if (st > lastScrollTop && st > navbarHeight) {
			$(".full-width").removeClass('slideInDown').addClass('slideOutUp');
		} else {
			if (st + $(window).height() < $(document).height()) {
				$(".full-width").removeClass('slideOutUp').addClass('slideInDown');
			}
		}
		lastScrollTop = st;
	}

	// Reveal functions 

	window.sr = ScrollReveal();
 sr.reveal('.reveal-me',{
    duration:1000,
    origin: 'bottom',
    scale: 1
  });

  sr.reveal('.reveal-me-2',{
    duration:1500,
    origin: 'bottom',
    scale: 1
  });

    sr.reveal('.reveal-me-3',{
    duration:2000,
    origin: 'bottom',
    scale: 1
  });

    sr.reveal('.reveal-me-left',{
    duration:1500,
    origin: 'left',
    scale: 1
  });

    sr.reveal('.reveal-me-left-2',{
    duration:2000,
    origin: 'left',
    scale: 1
  });


    sr.reveal('.reveal-me-right',{
    duration:1500,
    origin: 'right',
    scale: 1
  });

    sr.reveal('.reveal-me-4',{
    duration:2300,
    origin: 'bottom',
    scale: 1
  });

      sr.reveal('.reveal-me-5',{
    duration:2500,
    origin: 'bottom',
    scale: 1
  });


      sr.reveal('.reveal-me-6',{
    duration:2800,
    origin: 'bottom',
    scale: 1
  });




});


