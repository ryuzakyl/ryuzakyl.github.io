/* global NexT, CONFIG */
NexT.utils=NexT.$u={
/**
   * Wrap images with fancybox support.
   */
wrapImageWithFancyBox:function(){$(".content img").not(":hidden").each((function(){var t=$(this),e=t.attr("title")||t.attr("alt"),i=t.parent("a");if(i.length<1){var a=t.attr("data-original")||t.attr("src");i=t.wrap('<a class="fancybox fancybox.image" href="'+a+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a"),t.is(".post-gallery img")?(i.addClass("post-gallery-img"),i.attr("data-fancybox","gallery").attr("rel","gallery")):t.is(".group-picture img")?i.attr("data-fancybox","group").attr("rel","group"):i.attr("data-fancybox","default").attr("rel","default")}e&&(i.append('<p class="image-caption">'+e+"</p>"),
// Make sure img title tag will show correctly in fancybox
i.attr("title",e).attr("data-caption",e))})),$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({
//placeholder: '/images/loading.gif',
effect:"fadeIn",threshold:0})},
/**
   * Tabs tag listener (without twitter bootstrap).
   */
registerTabsTag:function(){var t=".tabs ul.nav-tabs ";
// Binding `nav-tabs` & `tab-content` by real time permalink changing.
$((function(){$(window).bind("hashchange",(function(){var e=location.hash;""===e||e.match(/%\S{2}/)||($(t+'li:has(a[href="'+e+'"])').addClass("active").siblings().removeClass("active"),$(e).addClass("active").siblings().removeClass("active"))})).trigger("hashchange")})),$(t+".tab").on("click",(function(t){
// Prevent selected tab to select again.
if(t.preventDefault(),!$(this).hasClass("active")){
// Add & Remove active class on `nav-tabs` & `tab-content`.
$(this).addClass("active").siblings().removeClass("active");var e=$(this).find("a").attr("href");$(e).addClass("active").siblings().removeClass("active"),
// Clear location hash in browser if #permalink exists.
""!==location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}))},registerESCKeyEvent:function(){$(document).on("keyup",(function(t){27===t.which&&$(".search-popup").is(":visible")&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))}))},registerBackToTop:function(){var t=$(".back-to-top");function e(){t.toggleClass("back-to-top-on",window.pageYOffset>50);var e=$(window).scrollTop()/NexT.utils.getContentVisibilityHeight(),i=Math.round(100*e),a=i>100?100:i;$("#scrollpercent>span").html(a)}
// For init back to top in sidebar if page was scrolled after page refresh.
$(window).on("load",(function(){e()})),$(window).on("scroll",(function(){e()})),t.on("click",(function(){$.isFunction($("html").velocity)?$("body").velocity("scroll"):$("html, body").animate({scrollTop:0})}))},
/**
   * Transform embedded video to support responsive layout.
   * @see http://toddmotto.com/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js/
   */
embeddedVideoTransformer:function(){var t=$("iframe"),e=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"].join("|"));
// Supported Players. Extend this if you need more players.
function i(t){return{width:t.width(),height:t.height()}}function a(t,e){return e/t*100}t.each((function(){var t,n=$(this),o=i(n);if(this.src.search(e)>0){
// Calculate the video ratio based on the iframe's w/h dimensions
var s=a(o.width,o.height);
// Replace the iframe's dimensions and position the iframe absolute
// This is the trick to emulate the video ratio
n.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});
// Wrap the iframe in a new <div> which uses a dynamically fetched padding-top property
// based on the video's w/h dimensions
var r=document.createElement("div");
// Additional adjustments for 163 Music
if(r.className="fluid-vids",r.style.position="relative",r.style.marginBottom="20px",r.style.width="100%",r.style.paddingTop=s+"%",
// Fix for appear inside tabs tag.
""===r.style.paddingTop&&(r.style.paddingTop="50%"),this.parentNode.insertBefore(r,this),r.appendChild(this),this.src.search("music.163.com")>0)
// 163 Music Player has a fixed height, so we need to reset the aspect radio
((t=i(n)).width>o.width||t.height<o.height)&&(r.style.paddingTop=a(t.width,o.height)+"%")}}))},hasMobileUA:function(){var t=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(t)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},
/**
   * Escape meta symbols in jQuery selectors.
   *
   * @param selector
   * @returns {string|void|XML|*}
   */
escapeSelector:function(t){return t.replace(/[!"$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){!this.isDesktop()||this.isPisces()||this.isGemini()||$(".sidebar-toggle").trigger("click")},isMuse:function(){return"Muse"===CONFIG.scheme},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},isGemini:function(){return"Gemini"===CONFIG.scheme},getScrollbarWidth:function(){var t=$("<div />").addClass("scrollbar-measure").prependTo("body"),e=t[0],i=e.offsetWidth-e.clientWidth;return t.remove(),i},getContentVisibilityHeight:function(){var t=$(".container").height(),e=$(window).height();return t>e?t-e:$(document).height()-e},getSidebarb2tHeight:function(){return CONFIG.back2top&&CONFIG.back2top_sidebar?$(".back-to-top").height():0},getSidebarSchemePadding:function(){var t="block"===$(".sidebar-nav").css("display")?$(".sidebar-nav").outerHeight(!0):0,e=$(".sidebar-inner"),i=e.innerWidth()-e.width(),a=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;return this.isPisces()||this.isGemini()?2*i+t+a+this.getSidebarb2tHeight():2*i+t/2}},$(document).ready((function(){
/**
   * Init Sidebar & TOC inner dimensions on all pages and for all schemes.
   * Need for Sidebar/TOC inner scrolling if content taller then viewport.
   */
function t(t){t=t||"auto",$(".site-overview, .post-toc").css("max-height",t)}!function(){var e;$(window).on("resize",(function(){e&&clearTimeout(e),e=setTimeout((function(){t(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}),0)}));
// Initialize Sidebar & TOC Width.
var i=NexT.utils.getScrollbarWidth();$(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".site-overview").css("width","calc(100% + "+i+"px)"),$(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".post-toc").css("width","calc(100% + "+i+"px)"),
// Initialize Sidebar & TOC Height.
t(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}(),$("table").not(".gist table").wrap('<div class="table-container"></div>')}));