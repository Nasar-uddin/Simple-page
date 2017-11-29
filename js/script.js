$(document).ready(function(){
    $('.thumbnail').hover(function(){
        $(this).css('box-shadow','0px 2px 20px rgba(10,40,0,.2)');
        $(this).children('a').css({
            top: '0px'
        });
        $(this).children('p').css({
            top:'0px',
            opacity:'1'
        });
    },function(){
        $(this).css('box-shadow','none');
        $(this).children('a').css({
            top: '-30px'
        });
        $(this).children('p').css({
            top:'30px',
            opacity:'0'
        });
    });


    //This is for smooth transition



    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
