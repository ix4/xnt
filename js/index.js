 $(document).ready(function () {
   
   trump = $('.trump-face')[0];
   setInterval(function() {
    var trumpPosition = trump.getBoundingClientRect();
    var clw = (window.innerWidth || document.documentElement.clientWidth);
    var clh = (window.innerHeight || document.documentElement.clientHeight) ;
     if ((trumpPosition.top >= 10 && trumpPosition.bottom <= clh) && (trumpPosition.left >= 10 && trumpPosition.right <= clw)) {
        $('.trump-face').removeClass('scared');
     } else {
        $('.trump-face').addClass('scared');      
     }
    }, 100);
   
  $('.trump-face').addClass('throwable');
  $('body').fadeIn();
  $(".throwable").throwable({
    gravity:{x:0,y:0.2},
    autostart:true,
    shape:"circle",   
    bounce: 0.5,
    damping: 0.3,
    collisionDectection: true
  });



  
  });