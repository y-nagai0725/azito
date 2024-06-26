document.addEventListener('DOMContentLoaded', function () {
  //ページトップへ戻るボタン処理
  document.getElementById('footer__btn').addEventListener('click', function () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });

  //ナビゲーションのページ内リンクスクロール
  const headerHeight = document.getElementById('header').offsetHeight;
  const gnavLinkList = document.getElementsByClassName('gnav__link');
  for (let i = 0; i < gnavLinkList.length; i++) {
    gnavLinkList[i].addEventListener('click', function (e) {
      e.preventDefault();
      const targetHref = this.getAttribute('href');
      const target = document.getElementById(targetHref.replace('#', ''));
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    });
  }

  //fade画像へのクラス付与
  const windowHeight = window.innerHeight * 0.5;
  const targetList = document.querySelectorAll('.fadeRight, .fadeLeft');
  window.addEventListener('scroll', function () {
    const ST = window.scrollY;
    for (let i = 0; i < targetList.length; i++) {
      const targetPos = targetList[i].getBoundingClientRect().top + this.window.pageYOffset;
      if (ST > targetPos - windowHeight) {
        targetList[i].classList.add('showElement');
      }
    }
  });
}, false);

// $(function () {
//   // -----jQueryの記述---------------------------

//   //ページトップへ戻るボタン処理
//   $('#footer__btn').on('click', function () {
//     $('html, body').animate({ scrollTop: 0 }, 500);
//   });

//   //ナビゲーションのページ内リンクスクロール
//   const headerHeight = $('#header').outerHeight();
//   $('.gnav__link').on('click', function () {
//     const target = $($(this).attr('href'));
//     const targetPos = target.offset().top - headerHeight;
//     $('html, body').animate({ scrollTop: targetPos }, 500);
//     return false;
//   });

//   //fade画像へのクラス付与
//   const windowHeight = $(window).height() * 0.5;
//   $(window).on('scroll', function () {
//     const ST = $(window).scrollTop();

//     $('.fadeRight, .fadeLeft').each(function () {
//       const targetPos = $(this).offset().top;
//       if (ST > targetPos - windowHeight) {
//         $(this).addClass('showElement');
//       }
//     });
//   });

//   // -----ここまで-------------------------------
// });