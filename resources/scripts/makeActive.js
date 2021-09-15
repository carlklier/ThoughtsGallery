
$('.art').each(function() {
  $(this).mouseover(function() {
      $(this).addClass('active');
    $('.gallery').children('.art').not('.active').addClass('inactive');
  });
  $(this).mouseleave(function() {
      $(this).removeClass('active');
      $('.gallery').children('.art').not('.active').removeClass('inactive');
  });
});

var lastWidth = $(window).width();

function clampLine(){
  if(screen.width <= 768){
    $('.text').each(function(index, element) {
      $clamp(element, {clamp: 6});
    });
    console.log("less than 768");
  } else if (screen.width <= 1024){
    $('.text').each(function(index, element) {
      $clamp(element, {clamp: 3});
    });
    console.log("less than 1024");
  } else {
    $('.text').each(function(index, element) {
      $clamp(element, {clamp: 3});
    });
    console.log("else greater than 1024");
  }
}

clampLine();

$(window).resize(function(){
   if($(window).width()!=lastWidth){
      //execute code here.


      clampLine();


      lastWidth = $(window).width();
   }
}) 

// if(screen.width <= 768){
//   $('.text').each(function(index, element) {
//     $clamp(element, {clamp: 6});
//   });
//   console.log("less than 768");
// } else if (screen.width <= 1024){
//   $('.text').each(function(index, element) {
//     $clamp(element, {clamp: 3});
//   });
//   console.log("less than 1024");
// } else {
//   $('.text').each(function(index, element) {
//     $clamp(element, {clamp: 3});
//   });
//   console.log("else greater than 1024");
// }

// var lastScrollPosition = 0;
// var frameNum = 0;

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   lastScrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

//   frameNum = lastScrollPosition % 100;
//   console.log('frameNum: ', frameNum);
//   if(frameNum > 0){
//     if($('.active').length > 0){
//       // $('.gallery').children('.art').is('.active').removeClass('active');
//     }
//     if(frameNum > 10){
//       frameNum = 10;
//     }
//     var frameName = 'frame' + frameNum;
//     console.log('frameName: ', frameName);
//     $(frameName).addClass('active');

//     // $('.gallery').children('.art').not('.active').addClass('inactive');
//   }



  // if ( (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
  //   document.getElementById("myP").className = "test";
  // } else {
  //   document.getElementById("myP").className = "";
  // }
//}