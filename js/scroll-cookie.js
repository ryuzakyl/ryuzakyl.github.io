$(document).ready((function(){
/* global Cookies */
// Set relative link path (without domain)
var o,i=window.location.href.replace(window.location.origin,"");
// Write position in cookie
// Read position from cookie
if($(window).on("scroll",(function(){clearTimeout(o),o=setTimeout((function(){Cookies.set("scroll-cookie",$(window).scrollTop()+"|"+i,{expires:365,path:""})}),250)})),void 0!==Cookies.get("scroll-cookie")){var e=Cookies.get("scroll-cookie").split("|");e[1]===i&&$(window).scrollTop(e[0])}}));