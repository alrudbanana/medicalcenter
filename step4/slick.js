$('.center').slick({
    autoplay: true, 
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          autoplay:false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });