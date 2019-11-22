
$("#toggle").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
$("#resize ul li a").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});
$(".close-btn").click(function () {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

new WOW().init();

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
