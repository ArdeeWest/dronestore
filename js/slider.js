let slider = tns({
    container: '#responsive',
    items: 3,
    controls: false,
    navPosition: 'bottom',
    mouseDrag: true,
    swipeAngle: false,
    speed: 700,
    responsive: {
      320: {
        items: 1
      },
      576: {
        items: 2
      },
      1024: {
          items: 3
      }
    }
  });