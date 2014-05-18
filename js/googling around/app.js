// CHECK 

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

// Help from Justin
    $(document).keydown(function() {
       alert( "Handler for .keydown() called." );
     });
// First Task: listen for X

// First Try (jQuery)
  .keydown(function() {
    alert( "Handler for .keydown() called." );
    // The alert doesn't work

// Second Try (stack overflow)
.trigger($.Event( 'keydown', 
  {which:$.ui.88.ENTER, keyCode:$.ui.keyCode.ENTER}));

// Third Try

$(function() {
    var e = $.Event('keypress');
    e.which = 88; // Character 'X'
    $('item').trigger(e);
});

// Second Task: Make Images toggle: 
  // Execute action when key is pressed
    // hide all posible images:
    $('.ryu-throwing').hide();
    $('.ryu-ready').hide();
    // show cool image: 
    $('.ryu-cool').show();
  // commands to make it go back to normal: 
    // hide cool image:
    $('.ryu-cool').hide();
    // Show previous image
    // Need to create if function to decide which to put back? 
    $('.ryu-throwing').show();
    $('.ryu-ready').show();

// If Statement from jQuery

// if (expression){
//    Statement(s) to be executed if expression is true
// }
// else{
//    Statement(s) to be executed if expression is false
// }


  });

// End Scott's Work

// Start Copy Paste

// Answer from stackoverflow: 
// it seem that the definitive way is 
// : $('input#search').trigger($.Event( 'keydown', 
  // {which:$.ui.keyCode.ENTER, 
    // keyCode:$.ui.keyCode.ENTER}));

// End Copy Paste



});
  
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}