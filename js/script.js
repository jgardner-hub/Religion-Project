$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('.navbar').css('background', 'var(--mydarkblue)');
      $('.navbar').css('height', '7vh');
    } else {
      $('.navbar').css('background', 'transparent');
      $('.navbar').css('height', '12vh');
    }
  });