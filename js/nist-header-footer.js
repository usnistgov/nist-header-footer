/**
 * @file
 * Header and footer scripts
 *
 */

$(document).ready(function(){

  $("body").prepend('<div id="nistheadergoeshere"></div>');
  $("#nistheadergoeshere").load("https://pages.nist.gov/nist-header-footer/boilerplate-header.html");
    
  $("body").append('<div id="nistfootergoeshere"></div>');
  $("#nistfootergoeshere").load("https://pages.nist.gov/nist-header-footer/boilerplate-footer.html");

});
