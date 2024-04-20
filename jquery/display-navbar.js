$(document).ready(function() {
    if ($(window).width() <= 900) {
        $(".menu-button").click(function() {
            $(".top-navbar").slideToggle();
            $("body").toggleClass("menu-open");
        });

        $(".list-items li").click(function() {
            $(".top-navbar").hide();
            $("body").removeClass("menu-open");
        });
    }
});