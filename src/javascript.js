$(document).ready(function () {
    var content = $(".dropdown-content" ).hide();

    var title = $(".dropdown-title").click(function () {
        content.not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });
});