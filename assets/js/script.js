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

});
