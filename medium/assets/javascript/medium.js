/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    // Player One elements
    var player1ShootButton = $("#teamone-shoot");
    var player1ShootCounter = $("#teamone-numshots");
    var player1HitCounter = $("#teamone-numhits");
    var player1Background = $(".left");

    // Player Two elements
    var player2ShootButton = $("#teamtwo-shoot");
    var player2ShootCounter = $("#teamtwo-numshots");
    var player2HitCounter = $("#teamtwo-numhits");
    var player2Background = $(".right");


    // Reset elements
    var resetButton = $("#reset");
    var resetCounter = $("#num-resets");

    // Other elements
    var goal = $("#scroll");

    // $(document).ready(function(){
    //   $('.scroll').animate({right: $(document).width()}, 3000);
    // });


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function scrollText(x) {
      setTimeout(function(){
        goal.css("display", "none");
        player1ShootButton.css("display", "block");
        player2ShootButton.css("display", "block");
        if (x == 1) {
          player1Background.css("background-color", "white");
        } else {
          player2Background.css("background-color", "white");
        }
      }, 1000);
      goal.css("display", "block");
      player1ShootButton.css("display", "none");
      player2ShootButton.css("display", "none");
      if (x == 1) {
        player1Background.css("background-color", "lightsalmon");
      } else {
        player2Background.css("background-color", "lightblue");
      }
    }

    // function colors(x) {
    //   setTimeout(function(){
    //     if (x == 1) {
    //       player1Background.css("background-color", "lightsalmon");
    //     } else {
    //       player2Background.css("background-color", "lightblue");
    //     }
    //   }, 3000);
    //   if (x == 1) {
    //     player1Background.css("background-color", "white");
    //   } else {
    //     player2Background.css("background-color", "white");
    //   }
    // }
    //
    player1ShootButton.click(function(){

      var hitCheck = getRandomInt(0, 10);

      // Increase shoot each button click
      var newCounter = parseInt(player1ShootCounter.html()) + 1;
      player1ShootCounter.html(newCounter);

      // Give 50% chance to score after shot
      if (hitCheck > 5) {
        var hitCount = parseInt(player1HitCounter.html()) + 1;
        player1HitCounter.html(hitCount);
        scrollText(1);
      }

    });

    player2ShootButton.click(function(){

      var hitCheck = getRandomInt(0, 10);

      // Increase shoot each button click
      var newCounter = parseInt(player2ShootCounter.html()) + 1;
      player2ShootCounter.html(newCounter);

      // Give 50% chance to score after shot
      if (hitCheck > 5) {
        var hitCount = parseInt(player2HitCounter.html()) + 1;
        player2HitCounter.html(hitCount);
        scrollText(2);
      }

    });

    resetButton.click(function(){

      var hitCheck = getRandomInt(0, 10);

      // Increase reset each button click
      var newCounter = parseInt(resetCounter.html()) + 1;
      resetCounter.html(newCounter);

      // Reset the board when pressed
      player1ShootCounter.html(0);
      player1HitCounter.html(0);
      player2ShootCounter.html(0);
      player2HitCounter.html(0);

      console.log("Reset the board");

    });


  })

})();
