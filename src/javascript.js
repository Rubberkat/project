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

    var title = $('.dropdown-title').click(function() {

            var $parent = $(this).parent();

            if ($parent.hasClass('active')) {
                $parent.removeClass('active');
                return false;
            }

            $('.dropdown').removeClass('active');
            $parent.addClass('active');

    });
});