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
    scrollCheck($("#first-a"), $("#section-2"));
    scrollCheck($("#third-a"), $("#section-4"));
    scrollCheckOdd($("#second-a"), $("#section-3"));

    var check = -1;

    function particleCheck() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            if (check != 0) {
                cancelRequestAnimFrame(pJSDom[0].pJS.fn.checkAnimFrame);
                cancelRequestAnimFrame(pJSDom[0].pJS.fn.drawAnimFrame);
                pJSDom[0].pJS.fn.particlesEmpty();
                pJSDom[0].pJS.fn.canvasClear();
                check = 0;
            }
        } else if (check === 0) {
            cancelRequestAnimFrame(pJSDom[0].pJS.fn.checkAnimFrame);
            cancelRequestAnimFrame(pJSDom[0].pJS.fn.drawAnimFrame);
            pJSDom[0].pJS.fn.particlesEmpty();
            pJSDom[0].pJS.fn.canvasClear();
            pJSDom[0].pJS.fn.vendors.start();
            check = 1;
        }
    }

    particleCheck();
    //Sticky dividers
    function scrollCheck(fixedElement, parent) {

        if (window.matchMedia('(min-width: 769px)').matches) {
            var correction = parseInt($("#main-nav .navbar-brand").css("height"));
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
        if (window.matchMedia('(min-width: 769px)').matches) {
            var correction = parseInt($("#main-nav .navbar-brand").css("height"));
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
        scrollCheck($("#first-a"), $("#section-2"));
        scrollCheck($("#third-a"), $("#section-4"));
        scrollCheckOdd($("#second-a"), $("#section-3"));
    }
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
    //Scrollspy
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // Making the scrollspy for downscroll
            $("section").each(function () {
                var check = $(this).position().top;
                var top = $(window).scrollTop();
                var bottom = top + $(window).height() - 50;
                if (check > top && check < bottom) {
                    $(".navbar-item, .menu-list a").each(function () {
                        $(this).removeClass("is-active");
                    })
                    var name = ".navbar-menu a[href='#" + $(this).attr("id") + "'] , .menu-list a[href='#" + $(this).attr("id") + "']";
                    $(name).addClass("is-active");
                }
            });
        } else {
            // Making the scrollspy for upscroll
            $("section").each(function () {
                var check = $(this).position().top + parseInt($(this).css("height"));
                var top = $(window).scrollTop() + 50;
                var bottom = top + $(window).height();
                if (check > top && check < bottom) {
                    $(".navbar-item, .menu-list a").each(function () {
                        $(this).removeClass("is-active");
                    })
                    var name = ".navbar-menu a[href='#" + $(this).attr("id") + "'] , .menu-list a[href='#" + $(this).attr("id") + "']";
                    $(name).addClass("is-active");
                }
            });
        }
        lastScrollTop = st;
    });

    $(window).scroll(function () {
        var limit = $("#section-1").position().top + parseInt($("#section-1").css("height")) + 60;
        var check = $(window).scrollTop();
        if (check > limit - 50 && check < limit + 50 && window.matchMedia('(min-width: 769px)').matches) {
            cancelRequestAnimFrame(pJSDom[0].pJS.fn.checkAnimFrame);
            cancelRequestAnimFrame(pJSDom[0].pJS.fn.drawAnimFrame);
            pJSDom[0].pJS.fn.particlesEmpty();
            pJSDom[0].pJS.fn.canvasClear();
            pJSDom[0].pJS.fn.vendors.start();
        }
    })

    $(window).scroll(function () {
        scrollCheck($("#first-a"), $("#section-2"));
        scrollCheck($("#third-a"), $("#section-4"));
        scrollCheckOdd($("#second-a"), $("#section-3"));
        // Making the navbar come and go.
        var heroLimit = $("#hero-top").position().top + parseInt($("#hero-top").css("height"));
        heroLimit -= parseInt($("#main-nav").css("height")) + 70;
        if ($(window).scrollTop() > heroLimit) {
            $("#main-nav").css({
                "visibility": "visible",
                "opacity": "1",
                "transition": "300ms"
            });

        } else {
            if ($("#main-nav .navbar-menu").hasClass("is-active")) {
                navClose();
            }
            menuClose();
            $("#main-nav").css({
                "visibility": "hidden",
                "opacity": "0",
                "transition": "700ms"
            });
        }
        var footerCheck = $("#section-5").position().top - 50;
        if ($(window).scrollTop() > heroLimit && $(window).scrollTop() < footerCheck) {
            $(".menu-trigger").css({
                "visibility": "visible",
                "opacity": "1",
                "transition": "700ms"
            });
        } else if ($(window).scrollTop() > footerCheck || $(window).scrollTop() < heroLimit) {
            $(".menu-trigger").css({
                "opacity": "0",
                "visibility": "hidden",
                "transition": "700ms"
            });
        }
    });

    $(window).resize(function () {
        navClose();
        menuClose();
        particleCheck();
        scrollCheck($("#first-a"), $("#section-2"));
        scrollCheck($("#third-a"), $("#section-4"));
        scrollCheckOdd($("#second-a"), $("#section-3"));
    });

    $("#navbar-overlay").click(navClose);

    $(".navbar-burger").click(function () {
        var navbar = $(this).parents(".navbar");
        if (!navbar.find(".navbar-menu").hasClass("is-active")) {
            navOpen();
        } else if (navbar.find(".navbar-menu").hasClass("is-active")) {
            navClose();
        }
    });
    // Rotating cards
    $(".rotate-button").click(function () {
        var card = $(this).parents(".my-card-holder");
        card.children(".my-card-front").toggleClass("my-card-front-rotated");
        card.children(".my-card-back").toggleClass("my-card-back-rotated");
    })
    //Bringing out the events
    $(".info-button").click(function () {
        var card = $(this).parents(".my-card-holder");
        var cardParent = $(this).parents(".my-content");
        $("html, body").animate({
            scrollTop: cardParent.offset().top - parseInt($("#main-nav .navbar-brand").css("height"))
        }, 700, function () {
            $(".navbar-item, .menu-list a").each(function () {
                $(this).removeClass("is-active");
            })
            var name = ".navbar-menu a[href='#section-4'] , .menu-list a[href='#section-4']";
            $(name).addClass("is-active");

            $(".my-card-holder").each(function () {
                $(this).addClass("card-disappear")
            });
            $("#third-a h1").animate({
                "opacity": "0",
            }, 300)
            setTimeout(function () {
                $("#third-a").animate({
                    "width": "20vw"
                }, 200);
                $("#third-b").css({
                    "margin-left": "20vw"
                });
                $(".my-card-holder").each(function () {
                    $(this).css({
                        "display": "none"
                    })
                });
                $("." + card.attr("id")).fadeIn("slow");
            }, 1500)
        });
    });

    $(".event-close").click(function () {
        scrollCheck($("#third-a"), $("#section-4"));
        $(this).parent(".events").fadeOut("slow");
        $("#third-a").animate({
            "width": "50%"
        }, 200);
        $("#third-b").css({
            "margin-left": "51%"
        });
        $("#third-a h1").animate({
            "opacity": "1",
        }, 300);
        $(".my-card-front").each(function () {
            $(this).removeClass("my-card-front-rotated");
        });
        $(".my-card-back").each(function () {
            $(this).removeClass("my-card-back-rotated");
        });
        setTimeout(function () {
            $(".my-card-holder").each(function () {
                $(this).removeClass("card-disappear");
                $(this).fadeIn();
            });
        }, 500)
    });
    // Add smooth scrolling to all links
    $(".navbar-item, .breadcrumb a, .menu-list a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                navClose();
                menuClose();
            });
        }
    });
});