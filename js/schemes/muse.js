$(document).ready((function(){function o(){($("#footer").attr("position")?$(".container").height()+$("#footer").outerHeight(!0):$(".container").height())<window.innerHeight?$("#footer").css({position:"fixed",bottom:0,left:0,right:0}).attr("position","fixed"):$("#footer").removeAttr("style position")}o(),$(window).on("resize scroll",o)}));