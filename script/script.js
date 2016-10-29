$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(window).scrollTop()==0)
            $(".navbar").addClass("hide");
        else
            $(".navbar").removeClass("hide");
//        if ($(window).scrollTop()>=$(".header").height())
//            $(".navbar").css("backgroundColor: #343838; color: white;");
        $(".header h1, .header h3").css("opacity", 1 - $(window).scrollTop() / 200);
    });
    
});