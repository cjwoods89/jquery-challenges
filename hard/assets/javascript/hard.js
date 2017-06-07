/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

 (function(){

   //jQuery equivelent to window.onload = function{}
   //code in here wont run until page loads
   $(function(){

     var feedTitle = $(".panel h1");
     var demoFeed = $(".row p:contains('Bacon')");

    // First Problem

    feedTitle.click(function(){

      if (feedTitle.css("color") == "rgb(51, 51, 51)") {

        feedTitle.css({"color": "rgb(255, 0, 0)"})

      } else {

        feedTitle.css({"color": "rgb(51, 51, 51)"})

      }

    });

    // Second Problem
    $(".vertical-nav .section:nth-child(odd)").hide();

   // Third Problem
   demoFeed.html(demoFeed.html().replace('Bacon','LASER VISION'));

    // Fourth Problem
    $(".post").slice(-2).hide();

    // Fifth Problem

    $(".hide-for-small img").hide();

  });

 })();
