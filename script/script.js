$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(window).scrollTop()==0)
            $(".navbar").addClass("hide");
        else
            $(".navbar").removeClass("hide");
        
        if ($(window).scrollTop()>=$(".header").height()){
            $(".navbar").css({"backgroundColor": "#343838"});
            $(".navbar li a").css({"color": "white"});
        }else{
            $(".navbar").css({"backgroundColor": "white"});
            $(".navbar li a").css({"color": "#343838"});
        }
        
        $(".header h1, .header h3").css("opacity", 1 - $(window).scrollTop() / 200);
        
    });
    
    $("#icon").click(function(){
        if ($(".navbar").hasClass("responsive")){
            $(".navbar").removeClass("responsive");
        }else{
            $(".navbar").addClass("responsive");
        }
	});
    
});