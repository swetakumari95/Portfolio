$(document).ready(function(){
    
    //on scroll events
    
    $(window).scroll(function(){
        
        //initially hidden navbar displays itself on scroll down
        if ($(window).scrollTop()==0)
            $(".navbar").addClass("hide");
        else
            $(".navbar").removeClass("hide");
        
        //navbar changes theme on leaving the landing page
    
        if ($(window).scrollTop()>=$(".header").height()){
            $(".navbar").css({"backgroundColor": "#343838"});
            $(".navbar li a").css({"color": "white"});
        }else{
            $(".navbar").css({"backgroundColor": "white"});
            $(".navbar li a").css({"color": "#343838"});
        }
        
        //main header fades out on scroll down, reappers on scroll up
        
        $(".header h1, .header h3").css("opacity", 1 - $(window).scrollTop() / 200);
        
    });
    
    //toggles menu on click of hamburger icon
    
    $("#icon").click(function(){
        if ($(".navbar").hasClass("responsive")){
            $(".navbar").removeClass("responsive");
        }else{
            $(".navbar").addClass("responsive");
        }
	});
    
});