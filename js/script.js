$(function () {
    // カルーセル
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
        } else {
            $('.back_button').css('display', 'none');
        }
    });

    // ページ内リンクのスクロールをなめらかにする
     $('a[href^="#"]').click(function() {
        const speed = 1000;
         const href = $(this).attr('href');
         let $target;
         if (href == '#') {
            $target = $('html');
         }
         else {
            $target = $(href);
         }
         const position = $target.offset().top;
         $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
         return false;
     });

    //  $('a[href^="#"]').on('click', () => {
    //     const speed = 1000;
    //      const href = $(this).attr('href');
    //      let $target;
    //      if (href == '#') {
    //         $target = $('html');
    //      }
    //      else {
    //         $target = $(href);
    //      }
    //      const position = $target.offset().top;
    //      $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    //      return false;
    //  });

    // スクロールした時にセクションをフェードインさせる
    $(window).scroll(function() {
        // スクロール量を取得する
        const scrollAmount = $(window).scrollTop();
        // ビューポートの量を取得する
        const windowHeight = $(window).height();
        $('section').each(function() {
            const position = $(this).offset().top;
            if (scrollAmount > position - windowHeight + 100) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Worksの画像をクリックしたときにモーダルで拡大表示する
    $('.works img').click(function() {
        const result = $(this).attr('src');
        $('.big-img').attr('src', result);
        $('.modal').fadeIn();
        return false
    });
});