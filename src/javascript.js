$(document).ready(function () {
    var content = $(".dropdown-content" ).hide();

    var title = $(".dropdown-title").click(function () {
        title.not(this).removeClass('active');
        $(this).toggleClass("active");
        content.not($(this).next()).slideUp();
        $(this).next().slideToggle();

    });
});