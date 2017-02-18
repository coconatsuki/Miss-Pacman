$(document).ready(function() {
$('.body').on('mouseover', function() {
  $(this).css({'animation':'go 10s linear forwards'});
  $('.food1').css({'animation': 'fadeout 0s 0.7s forwards'});
  $('.food2').css({'animation': 'fadeout 0s 1.5s forwards'});
  $('.food3').css({'animation': 'fadeout 0s 2.5s forwards'});
  $('.food4').css({'animation': 'fadeout 0s 3.5s forwards'});
  $('.food5').css({'animation': 'fadeout 0s 4.5s forwards'});
  $('.headtop').css({'animation': 'eatup 1s linear infinite'});
  $('.headbottom').css({'animation': 'eatdown 1s linear infinite'});
  });
});
$(document).ready(function() {
$('.body').on('mouseleave', function() {
  $(this).css({'animation':'none'});
  $('.food1').css({'animation': 'none'});
  $('.food2').css({'animation': 'none'});
  $('.food3').css({'animation': 'none'});
  $('.food4').css({'animation': 'none'});
  $('.food5').css({'animation': 'none'});
  $('.headtop').css({'animation': 'none'});
  $('.headbottom').css({'animation': 'none'});
});
});
