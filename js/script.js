$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('.navbar').css('background', 'var(--mydarkblue)');
      $('.navbar').css('height', '7vh');
    } else {
      $('.navbar').css('background', 'transparent');
      $('.navbar').css('height', '12vh');
    }
});


// var mybutton = document.getElementById("totop");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         mybutton.css.display = "block";
//     } else {
//         mybutton.css.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }