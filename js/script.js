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

    // topに戻るボタン
    $(window).on('scroll', () => {
        // スクロール量が100pxを超えたらボタンを表示する
        const scrollSize = $(this).scrollTop();
        if (scrollSize > 100){
            $('.back_button').css('display', 'inline');
             $('.back_button').fadeIn();
        } else {
            $('.back_button').css('display', 'none');
            // $('.back_button').fadeOUT();
        }
    });
});