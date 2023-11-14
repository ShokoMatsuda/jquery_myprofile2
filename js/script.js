$(function () {
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    // リンクのホバー
    $('a').hover(
        function() {
            $(this).animate({'opacity':0.6}, 300);
        },
        function() {
            $(this).animate({'opacity':1.0},300);
        }
    );
});