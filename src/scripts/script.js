console.log(
  '%c Hello from /scripts/script.js ',
  'background: lemonchiffon; border: 1px solid #fff'
);
console.log(
  '%c Welcome to tris-webpack-boilerplate! ',
  'background: lemonchiffon; border: 1px solid #fff'
);
console.log(
  '%c Coded by: https://tris.codes 💠',
  'background: lavenderblush; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px;'
);

function loopLogo() {
  setTimeout(() => {
    const $activeLogo = $('.logo-variation.active')
    $activeLogo.removeClass('active')
    $activeLogo.next().length ? $activeLogo.next().addClass('active') : $('.logo-variation').first().addClass('active')
    loopLogo()
  }, 1000)
}

// add custom js below
$(window).on('load', () => {
  $('.logo-variation').first().addClass('active')

  loopLogo()
})