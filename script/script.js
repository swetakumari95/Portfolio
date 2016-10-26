$(document).ready(function(){
    
    $(window).scroll(function(){
        $(".header h1, .header h3").css("opacity", 1 - $(window).scrollTop() / 300);
    });
    
});