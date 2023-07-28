$(document.body).on('click', 'a[href*="#"]', function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 900);
});

$(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    var height = $(window).height();
    if (scrolled < height) {
        $('.full-image').css({
            'top': -scrolled * .5
        });
    }
});
/Time counter/

$(document).ready(function() {
    $('.countdown').final_countdown({
        start: '1362139200',
        end: '1388461320',
        now: '1387461319',
        selectors: {
            value_seconds: '.clock-seconds .val',
            canvas_seconds: 'canvas_seconds',
            value_minutes: '.clock-minutes .val',
            canvas_minutes: 'canvas_minutes',
            value_hours: '.clock-hours .val',
            canvas_hours: 'canvas_hours',
            value_days: '.clock-days .val',
            canvas_days: 'canvas_days'
        },
        seconds: {
            borderColor: '#7995D5',
            borderWidth: '6'
        },
        minutes: {
            borderColor: '#ACC742',
            borderWidth: '6'
        },
        hours: {
            borderColor: '#ECEFCB',
            borderWidth: '6'
        },
        days: {
            borderColor: '#FF9900',
            borderWidth: '6'
        }}, function() {
// Finish callback
    });
});
//images hover effect
/* Demo purposes only */
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

