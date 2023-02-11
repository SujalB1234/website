$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
             $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.Scroll-up-btn').addClass("sticky");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

    })
});

//typing animation script
var typed = new Typed(",typing", {
strings: ("Student", "Designer"),
typeSpeed: 100,
backSpeed: 60,
loop: true

});