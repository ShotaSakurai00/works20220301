$(window).scroll(function(){
    //Header
    if($(window).scrollTop()>= 100){
       $('.header').addClass('fixed-top');
    }
    else {
      $('.header').removeClass('fixed-top');
    }
  });


  $(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

