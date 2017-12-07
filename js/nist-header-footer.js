/**
 * @file
 * Header scripts
 *
 */


function expandCollapse(expander) {
  expander.blur();

  var $thisSubmenu =  expander.closest('li');

  if($thisSubmenu.hasClass('is-open')){
    $thisSubmenu.find('ul, .nist-menu__submenu').first().slideUp();
    $thisSubmenu.removeClass('is-open');
    expander.toggleClass("fa-minus fa-plus");
  }else{
    $('.nist-menu__submenu').slideUp();
    $('.nist-header__nav-inner .nist-menu__item--depth-1').removeClass("is-open");
    $('.nist-header__nav-inner .expander').removeClass("fa-minus").addClass("fa-plus");

    /* collapse all the other submenus */
    $thisSubmenu.find('ul, .nist-menu__submenu').first().slideDown();
    $thisSubmenu.addClass('is-open');
    expander.toggleClass("fa-plus fa-minus");
  }

  return false;
}

function closeMegamenu() {
  $('.nist-header__nav-inner .is-open').removeClass('is-open');
  $('.nist-header__nav-inner .is-focused').removeClass('is-focused');
}


$(document).ready(function(){

  $("body").prepend('<div id="nistheadergoeshere"></div>');
  $("#nistheadergoeshere").load(
    "https://pages.nist.gov/nist-header-footer/boilerplate-header.html",
    function() {
      var $menu = $('.nist-header__nav-toggle');

      expandCollapse($('li.is-active-trail > a .expander'));

      $('.expander').click(function(e){
        e.preventDefault();
        expandCollapse($(this));
      });

      $('.nist-header__nav-inner nist-menu__item--depth-1').focusin(function(){
        $('.nist-header__nav-inner nist-menu__item--depth-1').removeClass('is-focused');
        $(this).closest('nist-menu__item--depth-1').addClass('is-focused');
      });

      $('.nist-header__nav-inner nist-menu__item--depth-1').focusout(function(){
        $('.nist-header__nav-inner nist-menu__item--depth-1').removeClass('is-focused');
      });

      function toggleMenu() {
        if($('body').hasClass('has-mobile-menu')){
          $('.nist-header__nav-inner').slideUp(300,function(){
            $('body').removeClass('has-mobile-menu');
          });
        }else{
          $('body').addClass('has-mobile-menu');
          $('.nist-header__nav-inner').slideDown(300);
        }
      }

      //Mobile Menu Toggle on click
      $menu.click(toggleMenu);

      //Mobile Menu Toggle on focus
      $menu.focus(function(){
        $('body').addClass('focus-mobile-menu');
        $('.nist-header__nav-inner').slideDown(300);
      });

      $menu.blur(toggleMenu);

      // Mobile Menu Toggle on focus
      $('#main').focusin(function(){
        $('.focus-mobile-menu .nist-header__nav-inner').slideUp(300,function(){
          $('body').removeClass('focus-mobile-menu');
          $('body').removeClass('has-mobile-menu');
          //closeMegamenu();
        });
      });

      //Close on Escape
      $(document).keyup(function(e) {
        var openExpander = $('.is-open .expander');
        if (e.keyCode == 27) {
          if (openExpander.length) {
            $(".is-open .expander").trigger("click");
          } else if ($('.nist-header__nav-inner:visible').length) {
            //$(".nist-header__nav-toggle").trigger("click");
            toggleMenu();
          }
        }
      });
    }
  );
  $("body").append('<div id="nistfootergoeshere"></div>');
  $("#nistfootergoeshere").load("https://pages.nist.gov/nist-header-footer/boilerplate-footer.html");

});
