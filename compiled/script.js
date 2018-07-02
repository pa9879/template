// Function to open the main navbar menu
function navOpen() {
    $(".navbar-end").wrap("<div class='container'></div>");
    $("#navbar-overlay").fadeIn("slow");
    $("#main-nav .navbar-menu").toggleClass("is-active", true);
    $("#main-nav .navbar-burger").toggleClass("is-active", true);
    $("#main-nav .container").slideDown("fast");
}
// Function to close the main navbar menu
function navClose() {
    $("#main-nav .container").slideUp("fast");
    $("#navbar-overlay").fadeOut("slow");
    setTimeout(function () {
        $(".navbar-end").unwrap(".container");
        $("#main-nav .navbar-menu").toggleClass("is-active", false);
        $("#main-nav .navbar-burger").toggleClass("is-active", false);
    }, 400);
}

$("#navbar-overlay").click(navClose);

$(".navbar-burger").click(function () {
    var navbar = $(this).parents(".navbar");
    if (!navbar.find(".navbar-menu").hasClass("is-active")) {
        navOpen();
    } else if (navbar.find(".navbar-menu").hasClass("is-active")) {
        navClose();
    }
});

//Opening the mobile menu
function menuOpen() {
    $(".touch-menu").css({
        "visibility": "visible",
        "opacity": "1",
        "transition": "700ms"
    });
    $(".menu-trigger").css({
        "transform": "scale(0)",
        "transition": "700ms"
    });
}

function menuClose() {
    $(".touch-menu").css({
        "visibility": "hidden",
        "opacity": "0",
        "transition": "700ms"
    });
    $(".menu-trigger").css({
        "transform": "scale(1)",
        "transition": "700ms"
    });
}

$(".menu-trigger").click(menuOpen);
$("#menu-overlay").click(menuClose);

$(window).resize(function () {
    menuClose();
    navClose();
})