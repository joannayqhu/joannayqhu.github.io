$(document).ready(function() {

$("#sidebar-button").click(function(){
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active");
  } else {
    $("#sidebar-button").addClass("button-active");
    $(".sidebar-container").addClass("sidebar-active");
    $(".page-wrapper").addClass("wrapper-active");
    setTimeout(function(){
      $("body").addClass("no-scroll");
    }, 300);
  }
})

$(".page-wrapper").click(function(){
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $("body").removeClass("no-scroll")
    $("#sidebar-button").removeClass("button-active")
    $(".sidebar-container").removeClass("sidebar-active")
    $(".page-wrapper").removeClass("wrapper-active")
  }
})

$(".photo").hover(function(){
  $(".photo").css(opacity: 1.0);
})

});
