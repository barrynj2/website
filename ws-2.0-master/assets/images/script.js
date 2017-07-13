$(document).ready(function() {
    $(document).keydown(function() {
        $('img #test').animate({left:'+=10px'},500)
        });
    });
$('img').click(function(){
   $('.selected').removeClass('selected'); // removes the previous selected class
   $(this).addClass('selected'); // adds the class to the clicked image
});