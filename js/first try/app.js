$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

// Start Scott's Work



// First Task - make sure alert works

// $(document).keydown(function() {
// alert( "Handler for .keydown() called." );
//      });

// $(document).keydown(function() {
//   console.log();
//      });

// DOESN'T WORK WITHOUT PASTING IN CONSOLE...

// Second task: make it so only "X" works

$(document).keydown(function()event.which()
  if (event="88"){
    $('.ryu-throwing').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
  }
  else{}
  );

$(document).keyup(function()event.which()
  if (event="88"){
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.ryu-ready').show();
  } 
  else{}
  );

// TONS OF ERRORS, DON'T EVEN KNOW WHERE TO START...

// End Scott's Work

// Start Copy Paste

// End Copy Paste

});
  
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}