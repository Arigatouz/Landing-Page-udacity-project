
// done this with jquery which when u resize and the nav is down  it will be removed    sorry couldn't do it with vanilla js
// hope u can feed me back how to do in js  would be awesome and thanks :D


(function($) {
  let $window = $(window);
      // $html = $('html');
  $window.resize(function resize() {
      if ($window.width() > 1340) {
        $(".nav__list ").removeClass("nav__visible")
      }
  }).trigger('resize');
})(jQuery);