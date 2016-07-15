//$(document).ready(function () {
//
//    var content = $(".dropdown-content" ).hide();
//    var title = $(".dropdown-title").click(function() {
//
//        content.not($(this).next()).slideUp(100);
//        title.not(this).removeClass('active');
//
//        $(this).toggleClass("active");
//        $(this).next().stop().slideToggle(100);
//
//    });
//});

$(function() {

    var content = $(".dropdown-content");

    var title = $('.dropdown-title').click(function() {

        $(this).toggleClass('active');
        $(this).next().toggleClass('active');

        content.not($(this).next()).removeClass('active');
        title.not(this).removeClass('active');
    });
});