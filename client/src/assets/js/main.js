(function ($) {
  // bootstrap dropdown hover

  // loader
  const loader = function () {
    setTimeout(() => {
      if ($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Stellar
  $(window).stellar();


  $('nav .dropdown').hover(function () {
    const $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    const $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });


  $('#dropdown04').on('show.bs.dropdown', () => {
	  console.log('show');
  });


  // home slider
  $('.home-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // owl carousel
  const majorCarousel = $('.js-carousel-1');
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: false,
    stagePadding: 0,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    dots: false,
    autoplayHoverPause: false,
    items: 3,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
  	}
  });

  // cusotm owl navigation events
  $('.custom-next').click((event) => {
    event.preventDefault();
    // majorCarousel.trigger('owl.next');
    majorCarousel.trigger('next.owl.carousel');
  });
  $('.custom-prev').click((event) => {
    event.preventDefault();
    // majorCarousel.trigger('owl.prev');
    majorCarousel.trigger('prev.owl.carousel');
  });

  // owl carousel
  const major2Carousel = $('.js-carousel-2');
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    autoplayHoverPause: true,
    items: 4,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
  	}
  });


  const contentWayPoint = function () {
    let i = 0;
    $('.element-animate').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('element-animated')) {
        i++;

        $(this.element).addClass('item-animate');
        setTimeout(() => {
          $('body .element-animate.item-animate').each(function (k) {
            const el = $(this);
            setTimeout(() => {
              const effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn element-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft element-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight element-animated');
              } else {
                el.addClass('fadeInUp element-animated');
              }
              el.removeClass('item-animate');
            }, k * 100);
          });
        }, 100);
      }
    }, { offset: '95%' });
  };
  contentWayPoint();
}(jQuery));

const signInForm = document.getElementById('signin');
const signUpForm = document.getElementById('signup');

signInForm.addEventListener('mouseover', hideSignUp);
signInForm.addEventListener('mouseout', displaySignUp);

signUpForm.addEventListener('mouseover', hideSignIn);
signUpForm.addEventListener('mouseout', displaySignIn);

function hideSignUp() {
  signUpForm.style.opacity = '0.2';
}
function displaySignUp() {
  signUpForm.style.opacity = '1';
}
function hideSignIn() {
  signInForm.style.opacity = '0.2';
}
function displaySignIn() {
  signInForm.style.opacity = '1';
}
