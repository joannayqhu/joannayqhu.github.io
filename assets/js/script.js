$(document).ready(function() {

$(window).resize(function() {
    var bodyheight = $(this).height();
    $("#home").height(bodyheight);
}).resize()

$(window).resize(function() {
    var bodyheight = $(this).height();
    $("#food").height(bodyheight);
}).resize()

$(window).resize(function() {
    var bodyheight = $(this).height();
    $("#travel").height(bodyheight);
}).resize()

$(window).resize(function() {
    var bodyheight = $(this).height();
    $("#about").height(bodyheight);
}).resize()

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

$("#one").hover (
  function(){
    $("#image-caption1").delay("slow").css("opacity","1");
  }
)
$("#one").mouseout (
  function(){
    $("#image-caption1").delay("slow").css("opacity","0");
  }
)

$("#two").hover (
  function(){
    $("#image-caption2").delay("slow").css("opacity","1");
  }
)
$("#two").mouseout (
  function(){
    $("#image-caption2").delay("slow").css("opacity","0");
  }
)

$("#three").hover (
  function(){
    $("#image-caption3").delay("slow").css("opacity","1");
  }
)
$("#three").mouseout (
  function(){
    $("#image-caption3").delay("slow").css("opacity","0");
  }
)

$("#four").hover (
  function(){
    $("#image-caption4").delay("slow").css("opacity","1");
  }
)
$("#four").mouseout (
  function(){
    $("#image-caption4").delay("slow").css("opacity","0");
  }
)

$("#five").hover (
  function(){
    $("#image-caption5").delay("slow").css("opacity","1");
  }
)
$("#five").mouseout (
  function(){
    $("#image-caption5").delay("slow").css("opacity","0");
  }
)

$("#six").hover (
  function(){
    $("#image-caption6").delay("slow").css("opacity","1");
  }
)
$("#six").mouseout (
  function(){
    $("#image-caption6").delay("slow").css("opacity","0");
  }
)

$("#seven").hover (
  function(){
    $("#image-caption7").delay("slow").css("opacity","1");
  }
)
$("#seven").mouseout (
  function(){
    $("#image-caption7").delay("slow").css("opacity","0");
  }
)

$("#eight").hover (
  function(){
    $("#image-caption8").delay("slow").css("opacity","1");
  }
)
$("#eight").mouseout (
  function(){
    $("#image-caption8").delay("slow").css("opacity","0");
  }
)

$("#nine").hover (
  function(){
    $("#image-caption9").delay("slow").css("opacity","1");
  }
)
$("#nine").mouseout (
  function(){
    $("#image-caption9").delay("slow").css("opacity","0");
  }
)

$("#ten").hover (
  function(){
    $("#image-caption10").delay("slow").css("opacity","1");
  }
)
$("#ten").mouseout (
  function(){
    $("#image-caption10").delay("slow").css("opacity","0");
  }
)

$("#eleven").hover (
  function(){
    $("#image-caption11").delay("slow").css("opacity","1");
  }
)
$("#eleven").mouseout (
  function(){
    $("#image-caption11").delay("slow").css("opacity","0");
  }
)

$("#twelve").hover (
  function(){
    $("#image-caption12").delay("slow").css("opacity","1");
  }
)
$("#twelve").mouseout (
  function(){
    $("#image-caption12").delay("slow").css("opacity","0");
  }
)

$("#yi").hover (
  function(){
    $("#image-caption101").delay("slow").css("opacity","1");
  }
)
$("#yi").mouseout (
  function(){
    $("#image-caption101").delay("slow").css("opacity","0");
  }
)

$("#er").hover (
  function(){
    $("#image-caption102").delay("slow").css("opacity","1");
  }
)
$("#er").mouseout (
  function(){
    $("#image-caption102").delay("slow").css("opacity","0");
  }
)

$("#san").hover (
  function(){
    $("#image-caption103").delay("slow").css("opacity","1");
  }
)
$("#san").mouseout (
  function(){
    $("#image-caption103").delay("slow").css("opacity","0");
  }
)

$("#si").hover (
  function(){
    $("#image-caption104").delay("slow").css("opacity","1");
  }
)
$("#si").mouseout (
  function(){
    $("#image-caption104").delay("slow").css("opacity","0");
  }
)

$("#wu").hover (
  function(){
    $("#image-caption105").delay("slow").css("opacity","1");
  }
)
$("#wu").mouseout (
  function(){
    $("#image-caption105").delay("slow").css("opacity","0");
  }
)

$("#liu").hover (
  function(){
    $("#image-caption106").delay("slow").css("opacity","1");
  }
)
$("#liu").mouseout (
  function(){
    $("#image-caption106").delay("slow").css("opacity","0");
  }
)

$("#qi").hover (
  function(){
    $("#image-caption107").delay("slow").css("opacity","1");
  }
)
$("#qi").mouseout (
  function(){
    $("#image-caption107").delay("slow").css("opacity","0");
  }
)

$("#ba").hover (
  function(){
    $("#image-caption108").delay("slow").css("opacity","1");
  }
)
$("#ba").mouseout (
  function(){
    $("#image-caption108").delay("slow").css("opacity","0");
  }
)

$("#jiu").hover (
  function(){
    $("#image-caption109").delay("slow").css("opacity","1");
  }
)
$("#jiu").mouseout (
  function(){
    $("#image-caption109").delay("slow").css("opacity","0");
  }
)

$("#shi").hover (
  function(){
    $("#image-caption110").delay("slow").css("opacity","1");
  }
)
$("#shi").mouseout (
  function(){
    $("#image-caption110").delay("slow").css("opacity","0");
  }
)

$("#shiyi").hover (
  function(){
    $("#image-caption111").delay("slow").css("opacity","1");
  }
)
$("#shiyi").mouseout (
  function(){
    $("#image-caption111").delay("slow").css("opacity","0");
  }
)

$("#shier").hover (
  function(){
    $("#image-caption112").delay("slow").css("opacity","1");
  }
)
$("#shier").mouseout (
  function(){
    $("#image-caption112").delay("slow").css("opacity","0");
  }
)

});
