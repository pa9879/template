// Set scroll to top when page is reloaded
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

//Particle Background
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 50,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
//jQuery for all the other things
$(document).ready(function () {
    //Sticky dividers
    function scrollCheck(fixedElement, parent) {
        if (window.matchMedia('(min-width: 768px)').matches) {

            var correction = parseInt($("#main-nav").css("height"));
            var topLimit = parent.position().top - correction;
            var bottomLimit = topLimit + parseInt(parent.css("height")) - parseInt(fixedElement.css("height"));

            var check = $(this).scrollTop();
            if (check < topLimit) {
                if (!fixedElement.hasClass("at-top")) {
                    fixedElement.addClass("at-top");
                }
                if (fixedElement.hasClass("fixed-top")) {
                    fixedElement.removeClass("fixed-top");
                }
                if (fixedElement.hasClass("at-bottom")) {
                    fixedElement.removeClass("at-bottom");
                }
            } else if (check >= topLimit && check <= bottomLimit) {
                if (fixedElement.hasClass("at-top")) {
                    fixedElement.removeClass("at-top");
                }
                if (!fixedElement.hasClass("fixed-top")) {
                    fixedElement.addClass("fixed-top");
                }
                if (fixedElement.hasClass("at-bottom")) {
                    fixedElement.removeClass("at-bottom");
                }
            } else if (check > bottomLimit) {
                if (fixedElement.hasClass("at-top")) {
                    fixedElement.removeClass("at-top");
                }
                if (fixedElement.hasClass("fixed-top")) {
                    fixedElement.removeClass("fixed-top");
                }
                if (!fixedElement.hasClass("at-bottom")) {
                    fixedElement.addClass("at-bottom");
                }
            }
        }
    }

    function scrollCheckOdd(fixedElement, parent) {
        if (window.matchMedia('(min-width: 768px)').matches) {

            var correction = parseInt($("#main-nav").css("height"));
            var topLimit = parent.position().top - correction;
            var bottomLimit = topLimit + parseInt(parent.css("height")) - parseInt(fixedElement.css("height"));

            var check = $(this).scrollTop();
            if (check < topLimit) {
                if (!fixedElement.hasClass("at-top-odd")) {
                    fixedElement.addClass("at-top-odd");
                }
                if (fixedElement.hasClass("fixed-top-odd")) {
                    fixedElement.removeClass("fixed-top-odd");
                }
                if (fixedElement.hasClass("at-bottom-odd")) {
                    fixedElement.removeClass("at-bottom-odd");
                }
            } else if (check >= topLimit && check <= bottomLimit) {
                if (fixedElement.hasClass("at-top-odd")) {
                    fixedElement.removeClass("at-top-odd");
                }
                if (!fixedElement.hasClass("fixed-top-odd")) {
                    fixedElement.addClass("fixed-top-odd");
                }
                if (fixedElement.hasClass("at-bottom-odd")) {
                    fixedElement.removeClass("at-bottom-odd");
                }
            } else if (check > bottomLimit) {
                if (fixedElement.hasClass("at-top-odd")) {
                    fixedElement.removeClass("at-top-odd");
                }
                if (fixedElement.hasClass("fixed-top-odd")) {
                    fixedElement.removeClass("fixed-top-odd");
                }
                if (!fixedElement.hasClass("at-bottom-odd")) {
                    fixedElement.addClass("at-bottom-odd");
                }
            }
        }
    }
    // Function to close the main nav menu
    function navClose() {
        var menu = $("#main-nav").find(".navbar-menu");
        if (menu.hasClass("is-active")) {
            menu.removeClass("is-active");
        }
    }
    // Function to open the main navbar menu
    function navOpen() {
        $("#navbar-overlay").toggleClass(".overlay-active", true);
    }

    $(window).scroll(function () {
        scrollCheck($("#first-a"), $("#first-container"));
        scrollCheck($("#third-a"), $("#third-container"));

        scrollCheckOdd($("#second-a"), $("#second-container"));
        // Making the navbar come and go.
        var heroLimit = $("#hero-top").position().top + parseInt($("#hero-top").css("height"));
        heroLimit -= parseInt($("#main-nav").css("height")) + 30;
        if ($(window).scrollTop() > heroLimit) {
            $("#main-nav").css({
                "visibility": "visible",
                "opacity": "1",
                "transition": "700ms"
            });
        } else {
            $("#main-nav").css({
                "visibility": "hidden",
                "opacity": "0",
                "transition": "700ms"
            });
        }

    });
    $(window).resize(function () {
        scrollCheck($("#first-a"), $("#first-container"));
        scrollCheck($("#third-a"), $("#third-container"));
        scrollCheckOdd($("#second-a"), $("#second-container"));
    });
});

$("#navbar-overlay").click(function () {
    $("#main-nav").find(".navbar-menu").removeClass("is-active");
    $(this).css({
        "visibility": "hidden",
        "opacity": "0",
        "transition": "700ms"
    });
    $("#main-nav").find(".navbar-burger").toggleClass("is-active");
});



$(".navbar-burger").click(function () {
    $(this).toggleClass("is-active");


    var navbar = $(this).parents(".navbar");
    if (!navbar.find(".navbar-menu").hasClass("is-active")) {
        navbar.find(".navbar-menu").addClass("is-active");
        $("#navbar-overlay").css({
            "visibility": "visible",
            "opacity": "0.3",
            "transition": "700ms"
        });
    } else if (navbar.find(".navbar-menu").hasClass("is-active")) {
        navbar.find(".navbar-menu").removeClass("is-active");
        $("#navbar-overlay").css({
            "visibility": "hidden",
            "opacity": "0",
            "transition": "700ms"
        });
    }
});

$(".my-card-holder").click(function () {

    $("#third-a").addClass("divider-half");
    $(".my-card-holder").each(function () {
        $(this).addClass("card-disappear");
    });

    $("#third-b").css({
        "width": "80vw",
        "margin-left": "20vw",
        "transition": "1s",
    });
    $("#events").css({
        "display": "block"
    });
    $('html, body').animate({
        scrollTop: $("#third-b").offset().top - parseInt($("#main-nav").css("height"))
    }, 500);
});