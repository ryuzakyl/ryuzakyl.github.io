/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*************************
   Velocity jQuery Shim
*************************/
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
!function(e){
/***************
         Setup
    ***************/
/* If jQuery is already loaded, there's no point in loading this shim. */
if(!e.jQuery){
/* jQuery base. */
var t=function(e,r){return new t.fn.init(e,r)};
/********************
       Private Methods
    ********************/
/* jQuery */t.isWindow=function(e){
/* jshint eqeqeq: false */
return null!=e&&e==e.window},
/* jQuery */
t.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?o[a.call(e)]||"object":typeof e},
/* jQuery */
t.isArray=Array.isArray||function(e){return"array"===t.type(e)},
/***************
       $ Methods
    ***************/
/* jQuery: Support removed for IE<9. */
t.isPlainObject=function(e){var r;if(!e||"object"!==t.type(e)||e.nodeType||t.isWindow(e))return!1;try{if(e.constructor&&!i.call(e,"constructor")&&!i.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(r in e);return void 0===r||i.call(e,r)},
/* jQuery */
t.each=function(e,t,r){var o=0,i=e.length,a=l(e);if(r){if(a)for(;o<i&&!1!==t.apply(e[o],r);o++);else for(o in e)if(!1===t.apply(e[o],r))break}else if(a)for(;o<i&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},
/* Custom */
t.data=function(e,o,i){
/* $.getData() */
if(void 0===i){var a=(n=e[t.expando])&&r[n];if(void 0===o)return a;
/* $.setData() */if(a&&o in a)return a[o]}else if(void 0!==o){var n=e[t.expando]||(e[t.expando]=++t.uuid);return r[n]=r[n]||{},r[n][o]=i,i}},
/* Custom */
t.removeData=function(e,o){var i=e[t.expando],a=i&&r[i];a&&t.each(o,(function(e,t){delete a[t]}))},
/* jQuery */
t.extend=function(){var e,r,o,i,a,n,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==t.type(s)&&(s={}),l===u&&(s=this,l--);l<u;l++)if(null!=(a=arguments[l]))for(i in a)e=s[i],s!==(o=a[i])&&(c&&o&&(t.isPlainObject(o)||(r=t.isArray(o)))?(r?(r=!1,n=e&&t.isArray(e)?e:[]):n=e&&t.isPlainObject(e)?e:{},s[i]=t.extend(c,n,o)):void 0!==o&&(s[i]=o));return s},
/* jQuery 1.4.3 */
t.queue=function(e,r,o){if(e){r=(r||"fx")+"queue";var i,a,n,s=t.data(e,r);return o?(!s||t.isArray(o)?s=t.data(e,r,(n=a||[],null!=(i=o)&&(l(Object(i))?
/* $.merge */
function(e,t){for(var r=+t.length,o=0,i=e.length;o<r;)e[i++]=t[o++];if(r!=r)for(;void 0!==t[o];)e[i++]=t[o++];e.length=i}(n,"string"==typeof i?[i]:i):[].push.call(n,i)),n)):s.push(o),s):s||[]}},
/* jQuery 1.4.3 */
t.dequeue=function(e,r){
/* Custom: Embed element iteration. */
t.each(e.nodeType?[e]:e,(function(e,o){r=r||"fx";var i=t.queue(o,r),a=i.shift();"inprogress"===a&&(a=i.shift()),a&&("fx"===r&&i.unshift("inprogress"),a.call(o,(function(){t.dequeue(o,r)})))}))},
/******************
       $.fn Methods
    ******************/
/* jQuery */
t.fn=t.prototype={init:function(e){
/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){
/* jQuery altered code: Dropped disconnected DOM node checking. */
var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){
/* jQuery */
function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}
/* Zepto */var r=this[0],e=e.apply(r),o=this.offset(),i=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:t(e).offset();return o.top-=parseFloat(r.style.marginTop)||0,o.left-=parseFloat(r.style.marginLeft)||0,e.style&&(i.top+=parseFloat(e.style.borderTopWidth)||0,i.left+=parseFloat(e.style.borderLeftWidth)||0),{top:o.top-i.top,left:o.left-i.left}}};
/**********************
       Private Variables
    **********************/
/* For $.data() */
var r={};t.expando="velocity"+(new Date).getTime(),t.uuid=0;for(
/* For $.queue() */
var o={},i=o.hasOwnProperty,a=o.toString,n="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<n.length;s++)o["[object "+n[s]+"]"]=n[s].toLowerCase();
/* Makes $(node) possible, without having to call init. */t.fn.init.prototype=t.fn,
/* Globalize Velocity onto the window, and assign its Utilities property. */
e.Velocity={Utilities:t}}
/* jQuery */
function l(e){var r=e.length,o=t.type(e);return"function"!==o&&!t.isWindow(e)&&(!(1!==e.nodeType||!r)||("array"===o||0===r||"number"==typeof r&&r>0&&r-1 in e))}}(window),function(e){
/* CommonJS module. */
"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}((function(){return function(e,t,r,o){
/***************
        Summary
    ***************/
/*
    - CSS: CSS stack that works independently from the rest of Velocity.
    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
    - completeCall(): Handles the cleanup process for each Velocity call.
    */
/*********************
       Helper Functions
    *********************/
/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
var i,a=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}}(),n=(i=0,t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){var t,r=(new Date).getTime();
/* Dynamically set delay on a per-tick basis to match 60fps. */
/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */return t=Math.max(0,16-(r-i)),i=r+t,setTimeout((function(){e(r+t)}),t)});
/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */function s(e){
/* Unwrap jQuery/Zepto objects. */
return u.isWrapped(e)?e=[].slice.call(e):u.isNode(e)&&(e=[e]),e}var l,u={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},
/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&void 0!==e.length&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},
/* Determine if variable is a wrapped jQuery or Zepto element. */
isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},c=!1;
/*****************
       Dependencies
    *****************/if(e.fn&&e.fn.jquery?(l=e,c=!0):l=t.Velocity.Utilities,a<=8&&!c)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
/*****************
        Constants
    *****************/if(!(a<=7)){var p={
/* Container for page-wide Velocity state data. */
State:{
/* Detect mobile devices to determine if mobileHA should be turned on. */
isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),
/* Create a cached element for re-use when checking for CSS property prefixes. */
prefixElement:r.createElement("div"),
/* Cache every prefix match to avoid repeating lookups. */
prefixMatches:{},
/* Cache the anchor used for animating window scrolling. */
scrollAnchor:null,
/* Cache the browser-specific property names associated with the scroll anchor. */
scrollPropertyLeft:null,scrollPropertyTop:null,
/* Keep track of whether our RAF tick is running. */
isTicking:!1,
/* Container for every in-progress call to Velocity. */
calls:[]},
/* Velocity's custom CSS stack. Made global for unit testing. */
CSS:{/* Defined below. */},
/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
Utilities:l,
/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
Redirects:{/* Manually registered by the user. */},Easings:{/* Defined below. */},
/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
Promise:t.Promise,
/* Velocity option defaults, which can be overriden by the user. */
defaults:{queue:"",duration:400,easing:"swing",begin:void 0,complete:void 0,progress:void 0,display:void 0,visibility:void 0,loop:!1,delay:!1,mobileHA:!0,
/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
_cacheValues:!0},
/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
init:function(e){l.data(e,"velocity",{
/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
isSVG:u.isSVG(e),
/* Keep track of whether the element is currently being animated by Velocity.
                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
isAnimating:!1,
/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
computedStyle:null,
/* Tween data is cached for each animation on the element so that data can be passed across calls --
                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */
tweensContainer:null,
/* The full root property values of each CSS hook being animated on this element are cached so that:
                   1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
                   2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
rootPropertyValueCache:{},
/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
transformCache:{}})},
/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
hook:null,/* Defined below. */
/* Velocity-wide animation time remapping for testing purposes. */
mock:!1,version:{major:1,minor:2,patch:2},
/* Set to 1 or 2 (most verbose) to output debug info to console. */
debug:!1};
/*************
        State
    *************/
/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
void 0!==t.pageYOffset?(p.State.scrollAnchor=t,p.State.scrollPropertyLeft="pageXOffset",p.State.scrollPropertyTop="pageYOffset"):(p.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,p.State.scrollPropertyLeft="scrollLeft",p.State.scrollPropertyTop="scrollTop")
/* Shorthand alias for jQuery's $.data() utility. */;
/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var f=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,o){var i={x:t.x+o.dx*r,v:t.v+o.dv*r,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function r(r,o){var i={dx:r.v,dv:e(r)},a=t(r,.5*o,i),n=t(r,.5*o,a),s=t(r,o,n),l=1/6*(i.dx+2*(a.dx+n.dx)+s.dx),u=1/6*(i.dv+2*(a.dv+n.dv)+s.dv);return r.x=r.x+l*o,r.v=r.v+u*o,r}return function e(t,o,i){var a,n,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,o=parseFloat(o)||20,i=i||null,l.tension=t,l.friction=o,
/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
/* Compute the adjusted time delta. */
n=(a=null!==i)?(
/* Run the simulation without a duration. */
c=e(t,o))/i*.016:.016;
/* Next/step function .*/
s=r(s||l,n),
/* Store the position. */
u.push(1+s.x),c+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);
/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
               computed path and returns a snapshot of the position according to a given percentComplete. */return a?function(e){return u[e*(u.length-1)|0]}:c}}();
/* jQuery easings. */p.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},
/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},
/* CSS3 and Robert Penner easings. */
l.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],(function(e,t){p.Easings[t[0]]=h.apply(null,t[1])}));
/*****************
        CSS Stack
    *****************/
/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
var d=p.CSS={
/*************
            RegEx
        *************/
RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,
/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},
/************
            Lists
        ************/
Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},
/************
            Hooks
        ************/
/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
Hooks:{
/********************
                Registration
            ********************/
/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},
/* A "registered" hook is one that has been converted from its template form into a live,
               tweenable property. It contains data to associate it with its root property. */
registered:{
/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
                   which consists of the subproperty's name, the associated root property's name,
                   and the subproperty's position in the root's value. */},
/* Convert the templates into individual hooks then append them to the registered object above. */
register:function(){
/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
                   currently set to "transparent" default to their respective template below when color-animated,
                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
                   which is almost always set closer to black than white. */
for(var e=0;e<d.Lists.colors.length;e++){var t="color"===d.Lists.colors[e]?"0 0 0 1":"255 255 255 1";d.Hooks.templates[d.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,o,i;
/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
                   Thus, we re-arrange the templates accordingly. */if(a)for(r in d.Hooks.templates){i=(o=d.Hooks.templates[r])[0].split(" ");var n=o[1].match(d.RegEx.valueSplit);"Color"===i[0]&&(
/* Reposition both the hook's name and its default value to the end of their respective strings. */
i.push(i.shift()),n.push(n.shift()),
/* Replace the existing template for the hook's root property. */
d.Hooks.templates[r]=[i.join(" "),n.join(" ")])}
/* Hook registration. */for(r in d.Hooks.templates)for(var e in i=(o=d.Hooks.templates[r])[0].split(" ")){var s=r+i[e],l=e;
/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
                           and the hook's position in its template's default value string. */d.Hooks.registered[s]=[r,l]}},
/*****************************
               Injection and Extraction
            *****************************/
/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
getRoot:function(e){var t=d.Hooks.registered[e];return t?t[0]:e},
/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
               the targeted hook can be injected or extracted at its standard position. */
cleanRootPropertyValue:function(e,t){
/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
return d.RegEx.valueUnwrap.test(t)&&(t=t.match(d.RegEx.valueUnwrap)[1])
/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
                   default to the root's default value as defined in CSS.Hooks.templates. */
/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */,d.Values.isCSSNullValue(t)&&(t=d.Hooks.templates[e][1]),t},
/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
extractValue:function(e,t){var r=d.Hooks.registered[e];if(r){var o=r[0],i=r[1];
/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
return(t=d.Hooks.cleanRootPropertyValue(o,t)).toString().match(d.RegEx.valueSplit)[i]}
/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
return t},
/* Inject the hook's value into its root property's value. This is used to piece back together the root property
               once Velocity has updated one of its individually hooked values through tweening. */
injectValue:function(e,t,r){var o=d.Hooks.registered[e];if(o){var i,a=o[0],n=o[1];
/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
                       then reconstruct the rootPropertyValue string. */
return(i=(r=d.Hooks.cleanRootPropertyValue(a,r)).toString().match(d.RegEx.valueSplit))[n]=t,i.join(" ")}
/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
return r}},
/*******************
           Normalizations
        *******************/
/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
Normalizations:{
/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
               the targeted element (which may need to be queried), and the targeted property value. */
registered:{clip:function(e,t,r){switch(e){case"name":return"clip";
/* Clip needs to be unwrapped and stripped of its commas during extraction. */case"extract":var o;
/* If Velocity also extracted this value, skip extraction. */return o=d.RegEx.wrappedValueAlreadyExtracted.test(r)?r:(
/* Remove the "rect()" wrapper. */
o=r.toString().match(d.RegEx.valueUnwrap))?o[1].replace(/,(\s+)?/g," "):r;
/* Clip needs to be re-wrapped during injection. */case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return p.State.isFirefox?"filter":"-webkit-filter";case"extract":var o=parseFloat(r);
/* If extracted is NaN, meaning the value isn't already extracted. */if(!o&&0!==o){var i=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
/* If the filter string had a blur component, return just the blur value and unit type. */o=i?i[1]:0}return o;
/* Blur needs to be re-wrapped during injection. */case"inject":
/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
return parseFloat(r)?"blur("+r+")":"none"}},
/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
opacity:function(e,t,r){if(a<=8)switch(e){case"name":return"filter";case"extract":
/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
var o=r.toString().match(/alpha\(opacity=(.*)\)/i);
/* Convert to decimal value. */
return r=o?o[1]/100:1;case"inject":
/* Setting the filter property on elements with certain font property combinations can result in a
                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
/* Opacified elements are required to have their zoom property set to a non-zero value. */
return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}
/* With all other browsers, normalization is not required; return the same values that were passed in. */else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},
/*****************************
                Batched Registrations
            *****************************/
/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
register:function(){
/*****************
                    Transforms
                *****************/
/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
                   so that they can be referenced in a properties map by their individual names. */
/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
                   once when multiple transform subproperties are being animated simultaneously. */
/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
                   from being normalized for these browsers so that tweening skips these properties altogether
                   (since it will ignore them as being unsupported by the browser.) */
a<=9||p.State.isGingerbread||(
/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
d.Lists.transformsBase=d.Lists.transformsBase.concat(d.Lists.transforms3D));for(var e=0;e<d.Lists.transformsBase.length;e++)
/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
!function(){var t=d.Lists.transformsBase[e];d.Normalizations.registered[t]=function(e,r,o){switch(e){
/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
case"name":return"transform";
/* Transform values are cached onto a per-element transformCache object. */case"extract":
/* If this transform has yet to be assigned a value, return its null value. */
return void 0===v(r)||void 0===v(r).transformCache[t]?/^scale/i.test(t)?1:0:v(r).transformCache[t].replace(/[()]/g,"");case"inject":var i=!1;
/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */switch(t.substr(0,t.length-1)){
/* Whitelist unit types for each transform. */
case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;
/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */case"scal":case"scale":
/* Chrome on Android has a bug in which scaled elements blur if their initial scale
                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
p.State.isAndroid&&void 0===v(r).transformCache[t]&&o<1&&(o=1),i=!/(\d)$/i.test(o);break;case"skew":case"rotate":i=!/(deg|\d)$/i.test(o)}
/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
return i||(
/* As per the CSS spec, wrap the value in parentheses. */
v(r).transformCache[t]="("+o+")"),v(r).transformCache[t]}}}();
/*************
                    Colors
                *************/
/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */for(e=0;e<d.Lists.colors.length;e++)
/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
                       (Otherwise, all functions would take the final for loop's colorName.) */
!function(){var t=d.Lists.colors[e];
/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */d.Normalizations.registered[t]=function(e,r,o){switch(e){case"name":return t;
/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */case"extract":var i;
/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */if(d.RegEx.wrappedValueAlreadyExtracted.test(o))i=o;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};
/* Convert color names to rgb. */ /^[A-z]+$/i.test(o)?n=void 0!==s[o]?s[o]:s.black
/* Convert hex values to rgb. */:d.RegEx.isHex.test(o)?n="rgb("+d.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(n=s.black)
/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
                                           repeated spaces (in case the value included spaces to begin with). */,i=(n||o).toString().match(d.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}
/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */return a<=8||3!==i.split(" ").length||(i+=" 1"),i;case"inject":
/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
                                       on all values but the fourth (R, G, and B only accept whole numbers). */
/* If this is IE<=8 and an alpha component exists, strip it off. */
return a<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" "))
/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */:3===o.split(" ").length&&(o+=" 1"),(a<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},
/************************
           CSS Property Names
        ************************/
Names:{
/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
               Camelcasing is used to normalize property names between and across calls. */
camelCase:function(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))},
/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */return(a||p.State.isAndroid&&!p.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},
/* Determine whether a property should be set with a vendor prefix. */
/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
               If the property is not at all supported by the browser, return a false flag. */
prefixCheck:function(e){
/* If this property has already been checked, return the cached value. */
if(p.State.prefixMatches[e])return[p.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,o=t.length;r<o;r++){var i;
/* Check if the browser supports this property as prefixed. */
if(i=0===r?e:t[r]+e.replace(/^\w/,(function(e){return e.toUpperCase()})),u.isString(p.State.prefixElement.style[i]))
/* Cache the match. */
return p.State.prefixMatches[e]=i,[i,!0]}
/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */return[e,!1]}},
/************************
           CSS Property Values
        ************************/
Values:{
/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t;return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,o){return t+t+r+r+o+o})),(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){
/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
                   Thus, we check for both falsiness and these special strings. */
/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},
/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},
/* HTML elements default to an associated display type when they're not set to display:none. */
/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},
/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},
/****************************
           Style Getting & Setting
        ****************************/
/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
getPropertyValue:function(e,r,o,i){
/* Get an element's computed property value. */
/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
function n(e,r){
/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
                   We subtract border and padding to get the sum of interior + scrollbar. */
var o=0;
/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */if(a<=8)o=l.css(e,r);/* GET */
/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
                   associated element so that it does not need to be refetched upon every GET. */else{
/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
                       toggle display to the element type's default value. */
var s,u=!1;function c(){u&&d.setPropertyValue(e,"display","none")}if(/^(width|height)$/.test(r)&&0===d.getPropertyValue(e,"display")&&(u=!0,d.setPropertyValue(e,"display",d.Values.getDisplayType(e))),!i){if("height"===r&&"border-box"!==d.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetHeight-(parseFloat(d.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(d.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(d.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(d.getPropertyValue(e,"paddingBottom"))||0);return c(),p}if("width"===r&&"border-box"!==d.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(d.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(d.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(d.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(d.getPropertyValue(e,"paddingRight"))||0);return c(),f}}
/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
s=void 0===v(e)?t.getComputedStyle(e,null):v(e).computedStyle?v(e).computedStyle:v(e).computedStyle=t.getComputedStyle(e,null)
/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */,"borderColor"===r&&(r="borderTopColor")
/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */,
/* Fall back to the property's style value (if defined) when computedValue returns nothing,
                       which can happen when the element hasn't been painted. */
""!==(o=9===a&&"filter"===r?s.getPropertyValue(r):s[r])&&null!==o||(o=e.style[r]),c()}
/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
                   effect as being set to 0, so no conversion is necessary.) */
/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */if("auto"===o&&/^(top|right|bottom|left)$/i.test(r)){var g=n(e,"position");/* GET */
/* For absolute positioning, jQuery's $.position() only returns values for top and left;
                       right and bottom will have their "auto" value reverted to 0. */
/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
                       Not a big deal since we're currently in a GET batch anyway. */("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(
/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
o=l(e).position()[r]+"px")}return o}var s;
/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
               extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */if(d.Hooks.registered[r]){var u=r,c=d.Hooks.getRoot(u);
/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
                   query the DOM for the root property's value. */void 0===o&&(
/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
o=d.getPropertyValue(e,d.Names.prefixCheck(c)[0]))
/* If this root has a normalization registered, peform the associated normalization extraction. */,d.Normalizations.registered[c]&&(o=d.Normalizations.registered[c]("extract",e,o))
/* Extract the hook's value. */,s=d.Hooks.extractValue(u,o)}else if(d.Normalizations.registered[r]){var f,g;
/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
"transform"!==(f=d.Normalizations.registered[r]("name",e))&&(g=n(e,d.Names.prefixCheck(f)[0]),/* GET */
/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
d.Values.isCSSNullValue(g)&&d.Hooks.templates[r]&&(g=d.Hooks.templates[r][1])),s=d.Normalizations.registered[r]("extract",e,g)}
/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */if(!/^[\d-]/.test(s))
/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
                   their HTML attribute values instead of their CSS style values. */
if(v(e)&&v(e).isSVG&&d.Names.SVGAttribute(r))
/* Since the height/width attribute values must be set manually, they don't reflect computed values.
                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
if(/^(height|width)$/i.test(r))
/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
try{s=e.getBBox()[r]}catch(e){s=0}
/* Otherwise, access the attribute value directly. */else s=e.getAttribute(r);else s=n(e,d.Names.prefixCheck(r)[0]);/* GET */
/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
               convert CSS null-values to an integer of value 0. */return d.Values.isCSSNullValue(s)&&(s=0),p.debug>=2&&console.log("Get "+r+": "+s),s},
/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
setPropertyValue:function(e,r,o,i,n){var s=r;
/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */if("scroll"===r)
/* If a container option is present, scroll the container instead of the browser window. */
n.container?n.container["scroll"+n.direction]=o:"Left"===n.direction?t.scrollTo(o,n.alternateValue):t.scrollTo(n.alternateValue,o);else
/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
                   Thus, for now, we merely cache transforms being SET. */
if(d.Normalizations.registered[r]&&"transform"===d.Normalizations.registered[r]("name",e))
/* Perform a normalization injection. */
/* Note: The normalization logic handles the transformCache updating. */
d.Normalizations.registered[r]("inject",e,o),s="transform",o=v(e).transformCache[r];else{
/* Inject hooks. */
if(d.Hooks.registered[r]){var l=r,u=d.Hooks.getRoot(r);
/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */i=i||d.getPropertyValue(e,u),/* GET */
o=d.Hooks.injectValue(l,o,i),r=u}
/* Normalize names and values. */
/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
                       Try/catch is avoided for other browsers since it incurs a performance overhead. */
if(d.Normalizations.registered[r]&&(o=d.Normalizations.registered[r]("inject",e,o),r=d.Normalizations.registered[r]("name",e))
/* Assign the appropriate vendor prefix before performing an official style update. */,s=d.Names.prefixCheck(r)[0],a<=8)try{e.style[s]=o}catch(e){p.debug&&console.log("Browser does not support ["+o+"] for ["+s+"]")}
/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */else v(e)&&v(e).isSVG&&d.Names.SVGAttribute(r)?
/* Note: For SVG attributes, vendor-prefixed property names are never used. */
/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
e.setAttribute(r,o):e.style[s]=o;p.debug>=2&&console.log("Set "+r+" ("+s+"): "+o)}
/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */return[s,o]},
/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
flushTransformCache:function(e){var t="";
/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */if((a||p.State.isAndroid&&!p.State.isChrome)&&v(e).isSVG){
/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
function r(t){return parseFloat(d.getPropertyValue(e,t))}
/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */var o={translate:[r("translateX"),r("translateY")],skewX:[r("skewX")],skewY:[r("skewY")],
/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
                       (this behavior mimics the result of animating all these properties at once on HTML elements). */
scale:1!==r("scale")?[r("scale"),r("scale")]:[r("scaleX"),r("scaleY")],
/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
                       defining the rotation's origin point. We ignore the origin values (default them to 0). */
rotate:[r("rotateZ"),0,0]};
/* Iterate through the transform properties in the user-defined property map order.
                   (This mimics the behavior of non-SVG transform animation.) */l.each(v(e).transformCache,(function(e){
/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
                       properties so that they match up with SVG's accepted transform properties. */
/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate")
/* Check that we haven't yet deleted the property from the SVGTransforms container. */,o[e]&&(
/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
t+=e+"("+o[e].join(" ")+") ",
/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
                           re-insert the same master property if we encounter another one of its axis-specific properties. */
delete o[e])}))}else{var i,n;
/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */l.each(v(e).transformCache,(function(r){
/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
if(i=v(e).transformCache[r],"transformPerspective"===r)return n=i,!0;
/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */9===a&&"rotateZ"===r&&(r="rotate"),t+=r+i+" "})),
/* If present, set the perspective subproperty first. */
n&&(t="perspective"+n+" "+t)}d.setPropertyValue(e,"transform",t)}};
/* Register hooks and normalizations. */d.Hooks.register(),d.Normalizations.register(),
/* Allow hook setting in the same fashion as jQuery's $.css(). */
p.hook=function(e,t,r){var o=void 0;return e=s(e),l.each(e,(function(e,i){
/* Get property value. If an element set was passed in, only return the value for the first element. */
if(
/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
void 0===v(i)&&p.init(i),void 0===r)void 0===o&&(o=p.CSS.getPropertyValue(i,t))
/* Set property value. */;else{
/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
var a=p.CSS.setPropertyValue(i,t,r);
/* Transform properties don't automatically set. They have to be flushed to the DOM. */"transform"===a[0]&&p.CSS.flushTransformCache(i),o=a}})),o};
/*****************
        Animation
    *****************/
var g=function(){
/******************
            Call Chain
        ******************/
/* Logic for determining what to return to the call stack when exiting out of Velocity. */
function e(){
/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
               default to null instead of returning the targeted elements so that utility function's return value is standardized. */
return o?C.promise||null:i}
/*************************
           Arguments Assignment
        *************************/
/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
           objects are defined on a container object that's passed in as Velocity's sole argument. */
/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */var
/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
o,
/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
i,a,n,c,f,y=arguments[0]&&(arguments[0].p||l.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));if(
/* Detect jQuery/Zepto elements being animated via the $.fn method. */
u.isWrapped(this)?(o=!1,a=0,n=this,i=this):(o=!0,a=1,n=y?arguments[0].elements||arguments[0].e:arguments[0]),n=s(n)){y?(c=arguments[0].properties||arguments[0].p,f=arguments[0].options||arguments[0].o):(c=arguments[a],f=arguments[a+1])
/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
           single raw DOM element is passed in (which doesn't contain a length property). */;var m=n.length,h=0;
/***************************
            Argument Overloading
        ***************************/
/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
           Overloading is detected by checking for the absence of an object being passed into options. */
/* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */if(!/^(stop|finish)$/i.test(c)&&!l.isPlainObject(f)){
/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
var P=a+1;f={};
/* Iterate through all options arguments */
for(var w=P;w<arguments.length;w++)
/* Treat a number as a duration. Parse it out. */
/* Note: The following RegEx will return true if passed an array with a number as its first item.
                   Thus, arrays are skipped from this check. */
u.isArray(arguments[w])||!/^(fast|normal|slow)$/i.test(arguments[w])&&!/^\d/.test(arguments[w])?u.isString(arguments[w])||u.isArray(arguments[w])?f.easing=arguments[w]:u.isFunction(arguments[w])&&(f.complete=arguments[w]):f.duration=arguments[w]}
/***************
            Promises
        ***************/var V,C={promise:null,resolver:null,rejecter:null};
/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
           grouped together for the purposes of resolving and rejecting a promise. */switch(o&&p.Promise&&(C.promise=new p.Promise((function(e,t){C.resolver=e,C.rejecter=t})))
/*********************
           Action Detection
        *********************/
/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */,c){case"scroll":V="scroll";break;case"reverse":V="reverse";break;case"finish":case"stop":
/*******************
                    Action: Stop
                *******************/
/* Clear the currently-active delay on each targeted element. */
l.each(n,(function(e,t){v(t)&&v(t).delayTimer&&(
/* Stop the timer from triggering its cached next() function. */
clearTimeout(v(t).delayTimer.setTimeout),
/* Manually call the next() function so that the subsequent queue items can progress. */
v(t).delayTimer.next&&v(t).delayTimer.next(),delete v(t).delayTimer)}));var T=[];
/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
                   is stopped, the next item in its animation queue is immediately triggered. */
/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
                   or a custom queue string can be passed in. */
/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
                   regardless of the element's current queue state. */
/* Iterate through every active call. */
/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
return l.each(p.State.calls,(function(e,t){
/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
t&&
/* Iterate through the active call's targeted elements. */
l.each(t[1],(function(r,o){
/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
                               clear calls associated with the relevant queue. */
/* Call stopping logic works as follows:
                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
                               - options === undefined --> stop current queue:"" call and all queue:false calls.
                               - options === false --> stop only queue:false calls.
                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
var i=void 0===f?"":f;if(!0!==i&&t[2].queue!==i&&(void 0!==f||!1!==t[2].queue))return!0;
/* Iterate through the calls targeted by the stop command. */l.each(n,(function(r,a){
/* Check that this call was applied to the target element. */
a===o&&(
/* Optionally clear the remaining queued calls. */
(!0===f||u.isString(f))&&(
/* Iterate through the items in the element's queue. */
l.each(l.queue(a,u.isString(f)?f:""),(function(e,t){
/* The queue array can contain an "inprogress" string, which we skip. */
u.isFunction(t)&&
/* Pass the item's callback a flag indicating that we want to abort from the queue call.
                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */
t(null,!0)})),
/* Clearing the $.queue() array is achieved by resetting it to []. */
l.queue(a,u.isString(f)?f:"",[])),"stop"===c?(
/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
                                           changed to reflect the final value that the elements were actually tweened to. */
/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
                                           object. Also, queue:false animations can't be reversed. */
v(a)&&v(a).tweensContainer&&!1!==i&&l.each(v(a).tweensContainer,(function(e,t){t.endValue=t.currentValue})),T.push(e)):"finish"===c&&(
/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
                                        they finish upon the next rAf tick then proceed with normal call completion logic. */
t[2].duration=1))}))}))})),
/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */
"stop"===c&&(l.each(T,(function(e,t){S(t,!0)})),C.promise&&
/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
C.resolver(n)),e();default:
/* Treat a non-empty plain object as a literal properties map. */
if(!l.isPlainObject(c)||u.isEmptyObject(c)){if(u.isString(c)&&p.Redirects[c]){var k=(E=l.extend({},f)).duration,A=E.delay||0;
/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
                       (The performance overhead up to this point is virtually non-existant.) */
/* Note: The jQuery call chain is kept intact by returning the complete element set. */
return!0===E.backwards&&(n=l.extend(!0,[],n).reverse())
/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */,l.each(n,(function(e,t){
/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
parseFloat(E.stagger)?E.delay=A+parseFloat(E.stagger)*e:u.isFunction(E.stagger)&&(E.delay=A+E.stagger.call(t,e,m))
/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
                           the duration of each element's animation, using floors to prevent producing very short durations. */,E.drag&&(
/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
E.duration=parseFloat(k)||(/^(callout|transition)/.test(c)?1e3:400),
/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
E.duration=Math.max(E.duration*(E.backwards?1-e/m:(e+1)/m),.75*E.duration,200))
/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
                           reduce the opts checking logic required inside the redirect. */,p.Redirects[c].call(t,t,E||{},e,m,n,C.promise?C:void 0)})),e()}var F="Velocity: First argument ("+c+") was not a property map, a known action, or a registered redirect. Aborting.";return C.promise?C.rejecter(new Error(F)):console.log(F),e()}V="start"}
/**************************
            Call-Wide Variables
        **************************/
/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
           conversion metrics across Velocity animations that are not immediately consecutively chained. */var E,j,H={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];
/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
           Velocity.State.calls array that is processed during animation ticking. */if(
/**************************
           Element Set Iteration
        **************************/
/* If the "nodeType" property exists on the elements variable, we're animating a single element.
           Place it in an array so that $.each() can iterate over it. */
l.each(n,(function(e,t){
/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
u.isNode(t)&&O.call(t)})),(E=l.extend({},p.defaults,f)).loop=parseInt(E.loop),j=2*E.loop-1,E.loop)
/* Double the loop count to convert it into its appropriate number of "reverse" calls.
               Subtract 1 from the resulting value since the current call is included in the total alternation count. */
for(var L=0;L<j;L++){
/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
var R={delay:E.delay,progress:E.progress};
/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */L===j-1&&(R.display=E.display,R.visibility=E.visibility,R.complete=E.complete),g(n,"reverse",R)}
/***************
            Chaining
        ***************/
/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */return e()}
/************************
           Element Processing
        ************************/
/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
        */
function O(){
/*************************
               Part I: Pre-Queueing
            *************************/
/***************************
               Element-Wide Variables
            ***************************/
var e,o=this,
/* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
i=l.extend({},p.defaults,f),
/* A container for the processed data associated with each property in the propertyMap.
                   (Each property in the map produces its own "tween".) */
a={};
/******************
               Element Init
            ******************/
/*********************
               Option: Duration
            *********************/
/* Support for jQuery's named durations. */
switch(void 0===v(o)&&p.init(o)
/******************
               Option: Delay
            ******************/
/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */,parseFloat(i.delay)&&!1!==i.queue&&l.queue(o,i.queue,(function(e){
/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
p.velocityQueueEntryFlag=!0,
/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
v(o).delayTimer={setTimeout:setTimeout(e,parseFloat(i.delay)),next:e}})),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=400;break;case"slow":i.duration=600;break;default:
/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
i.duration=parseFloat(i.duration)||1}
/************************
               Global Option: Mock
            ************************/
/***********************
               Part II: Queueing
            ***********************/
/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
function s(s){
/*******************
                   Option: Begin
                *******************/
/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
if(i.begin&&0===h)
/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
try{i.begin.call(n,n)}catch(e){setTimeout((function(){throw e}),1)}
/*****************************************
                   Tween Data Construction (for Scroll)
                *****************************************/
/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */if("scroll"===V){
/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
var g,y,S,P=/^x$/i.test(i.axis)?"Left":"Top",w=parseFloat(i.offset)||0;
/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */i.container?
/* Ensure that either a jQuery object or a raw DOM element was passed in. */
u.isWrapped(i.container)||u.isNode(i.container)?(
/* Extract the raw DOM element from the jQuery wrapper. */
i.container=i.container[0]||i.container,/* GET */
/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
                               the scroll container's current scroll position. */
S=(
/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
                               (due to the user's natural interaction with the page). */
g=i.container["scroll"+P])+l(o).position()[P.toLowerCase()]+w):i.container=null:(
/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
                           the appropriate cached property names (which differ based on browser type). */
g=p.State.scrollAnchor[p.State["scrollProperty"+P]],/* GET */
/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
y=p.State.scrollAnchor[p.State["scrollProperty"+("Left"===P?"Top":"Left")]],/* GET */
/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
                           and therefore end values do not need to be compounded onto current values. */
S=l(o).offset()[P.toLowerCase()]+w)
/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */,a={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:S,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:P,alternateValue:y}},element:o},p.debug&&console.log("tweensContainer (scroll): ",a.scroll,o)
/******************************************
                   Tween Data Construction (for Reverse)
                ******************************************/
/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
                   as reverting to the element's values as they were prior to the previous *Velocity* call. */}else if("reverse"===V){
/* Abort if there is no prior animation data to reverse to. */
if(!v(o).tweensContainer)
/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
return void l.dequeue(o,i.queue);
/*****************************************
                   Tween Data Construction (for Start)
                *****************************************/
/*********************
                           Options Parsing
                        *********************/
/* If the element was hidden via the display option in the previous call,
                           revert display to "auto" prior to reversal so that the element is visible again. */
"none"===v(o).opts.display&&(v(o).opts.display="auto"),"hidden"===v(o).opts.visibility&&(v(o).opts.visibility="visible")
/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */,v(o).opts.loop=!1,v(o).opts.begin=null,v(o).opts.complete=null,
/* Since we're extending an opts object that has already been extended with the defaults options object,
                           we remove non-explicitly-defined properties that are auto-assigned values. */
f.easing||delete i.easing,f.duration||delete i.duration
/* The opts object used for reversal is an extension of the options object optionally passed into this
                           reverse call plus the options used in the previous Velocity call. */,i=l.extend({},v(o).opts,i);
/*************************************
                           Tweens Container Reconstruction
                        *************************************/
/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
var T=l.extend(!0,{},v(o).tweensContainer);
/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */for(var k in T)
/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
if("element"!==k){var A=T[k].startValue;T[k].startValue=T[k].currentValue=T[k].endValue,T[k].endValue=A,
/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
u.isEmptyObject(f)||(T[k].easing=i.easing),p.debug&&console.log("reverse tweensContainer ("+k+"): "+JSON.stringify(T[k]),o)}a=T}else if("start"===V){
/***************************
                       Tween Data Calculation
                    ***************************/
/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
/* Property map values can either take the form of 1) a single value representing the end value,
                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
function F(e,t){var r=void 0,a=void 0,n=void 0;
/* Handle the array format, which can be structured as one of three potential overloads:
                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
return u.isArray(e)?(
/* endValue is always the first item in the array. Don't bother validating endValue's value now
                               since the ensuing property cycling logic does that. */
r=e[0],
/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
                               start value since easings can only be non-hex strings or arrays. */
!u.isArray(e[1])&&/^[\d-]/.test(e[1])||u.isFunction(e[1])||d.RegEx.isHex.test(e[1])?n=e[1]:(u.isString(e[1])&&!d.RegEx.isHex.test(e[1])||u.isArray(e[1]))&&(a=t?e[1]:b(e[1],i.duration),
/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
void 0!==e[2]&&(n=e[2]))
/* Handle the single-value format. */):r=e
/* Default to the call's easing if a per-property easing type was not defined. */,t||(a=a||i.easing)
/* If functions were passed in as values, pass the function the current element as its context,
                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */,u.isFunction(r)&&(r=r.call(o,h,m)),u.isFunction(n)&&(n=n.call(o,h,m)),[r||0,a,n]}
/* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
/* Create a tween out of each property, and append its associated data to tweensContainer. */
for(var E in
/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
                       to transfer over end values to use as start values. If it's set to true and there is a previous
                       Velocity call to pull values from, do so. */
v(o).tweensContainer&&!0===v(o).isAnimating&&(T=v(o).tweensContainer),l.each(c,(function(e,t){
/* Find shorthand color properties that have been passed a hex string. */
if(RegExp("^"+d.Lists.colors.join("$|^")+"$").test(e)){
/* Parse the value data for each shorthand. */
var r=F(t,!0),o=r[0],i=r[1],a=r[2];if(d.RegEx.isHex.test(o)){
/* Inject the RGB component tweens into propertiesMap. */
for(
/* Convert the hex strings into their RGB component arrays. */
var n=["Red","Green","Blue"],s=d.Values.hexToRgb(o),l=a?d.Values.hexToRgb(a):void 0,u=0;u<n.length;u++){var p=[s[u]];i&&p.push(i),void 0!==l&&p.push(l[u]),c[e+n[u]]=p}
/* Remove the intermediary shorthand property entry now that we've processed it. */delete c[e]}}})),c){
/**************************
                           Start Value Sourcing
                        **************************/
/* Parse out endValue, easing, and startValue from the property's data. */
var j=F(c[E]),L=j[0],R=j[1],O=j[2];
/* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
                           we force the property to its camelCase styling to normalize it for manipulation. */E=d.Names.camelCase(E);
/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
var z=d.Hooks.getRoot(E),q=!1;
/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */if(v(o).isSVG||"tween"===z||!1!==d.Names.prefixCheck(z)[1]||void 0!==d.Normalizations.registered[z]){
/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
(void 0!==i.display&&null!==i.display&&"none"!==i.display||void 0!==i.visibility&&"hidden"!==i.visibility)&&/opacity|filter/.test(E)&&!O&&0!==L&&(O=0)
/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
                           for all of the current call's properties that were *also* animated in the previous call. */
/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */,i._cacheValues&&T&&T[E]?(void 0===O&&(O=T[E].endValue+T[E].unitType)
/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
                               instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
                               attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */,q=v(o).rootPropertyValueCache[z]):
/* Handle hooked properties. */
d.Hooks.registered[E]?void 0===O?(q=d.getPropertyValue(o,z),/* GET */
/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
                                       getPropertyValue() will extract the hook from rootPropertyValue. */
O=d.getPropertyValue(o,E,q)):
/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
q=d.Hooks.templates[z][1]
/* Handle non-hooked properties that haven't already been defined via forcefeeding. */:void 0===O&&(O=d.getPropertyValue(o,E))
/**************************
                           Value Data Extraction
                        **************************/;var $,M,I,B=!1;
/* Separates a property value into its numeric value and its unit type. */
/********************
                           Unit Conversion
                        ********************/
/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
if(
/* Separate startValue. */
O=($=G(E,O))[0],I=$[1],L=(
/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
$=G(E,L))[0].replace(/^([+-\/*])=/,(function(e,t){
/* Strip the operator off of the value. */
return B=t,""})),M=$[1],
/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
O=parseFloat(O)||0,L=parseFloat(L)||0,
/***************************************
                           Property-Specific Value Conversion
                        ***************************************/
/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
"%"===M&&(
/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
                               which is identical to the em unit's behavior, so we piggyback off of that. */
/^(fontSize|lineHeight)$/.test(E)?(
/* Convert % into an em decimal value. */
L/=100,M="em"):/^scale/.test(E)?(L/=100,M=""):/(Red|Green|Blue)$/i.test(E)&&(L=L/100*255,M=""))
/***************************
                           Unit Ratio Calculation
                        ***************************/
/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
                           setting values with the target unit type then comparing the returned pixel value. */
/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
                           of batching the SETs and GETs together upfront outweights the potential overhead
                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */,/[\/*]/.test(B))M=I;
/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */else if(I!==M&&0!==O)
/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
                               which remains past the point of the animation's completion. */
if(0===L)M=I;else{
/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
e=e||D();
/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
var W=/margin|padding|left|right|width|text|word|letter/i.test(E)||/X$/.test(E)||"x"===E?"x":"y";
/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */switch(I){case"%":
/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
O*="x"===W?e.percentToPxWidth:e.percentToPxHeight;break;case"px":
/* px acts as our midpoint in the unit conversion process; do nothing. */
break;default:O*=e[I+"ToPx"]}
/* Invert the px ratios to convert into to the target unit. */switch(M){case"%":O*=1/("x"===W?e.percentToPxWidth:e.percentToPxHeight);break;case"px":
/* startValue is already in px, do nothing; we're done. */
break;default:O*=1/e[M+"ToPx"]}}
/*********************
                           Relative Values
                        *********************/
/* Operator logic must be performed last since it requires unit-normalized start and end values. */
/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
                           50 points is added on top of the current % value. */switch(B){case"+":L=O+L;break;case"-":L=O-L;break;case"*":L*=O;break;case"/":L=O/L}
/**************************
                           tweensContainer Push
                        **************************/
/* Construct the per-property tween object, and push it to the element's tweensContainer. */a[E]={rootPropertyValue:q,startValue:O,currentValue:O,endValue:L,unitType:M,easing:R},p.debug&&console.log("tweensContainer ("+E+"): "+JSON.stringify(a[E]),o)}else p.debug&&console.log("Skipping ["+z+"] due to a lack of browser support.");function G(e,t){var r,o;return o=(t||"0").toString().toLowerCase()
/* Match the unit type at the end of the value. */.replace(/[%A-z]+$/,(function(e){
/* Strip the unit type off of value. */
/* Grab the unit type. */
return r=e,""})),
/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
r||(r=d.Values.getUnitType(e)),[o,r]}function D(){
/************************
                                Same Ratio Checks
                            ************************/
/* The properties below are used to determine whether the element differs sufficiently from this call's
                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
                               this is done to minimize DOM querying. */
var e={myParent:o.parentNode||r.body,/* GET */
position:d.getPropertyValue(o,"position"),/* GET */
fontSize:d.getPropertyValue(o,"fontSize")/* GET */},
/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
i=e.position===H.lastPosition&&e.myParent===H.lastParent,
/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
a=e.fontSize===H.lastFontSize;
/* Store these ratio indicators call-wide for the next element to compare against. */H.lastParent=e.myParent,H.lastPosition=e.position,H.lastFontSize=e.fontSize;
/***************************
                               Element-Specific Units
                            ***************************/
/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
var n={};if(a&&i)n.emToPx=H.lastEmToPx,n.percentToPxWidth=H.lastPercentToPxWidth,n.percentToPxHeight=H.lastPercentToPxHeight;else{var s=v(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");p.init(s),e.myParent.appendChild(s),
/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
l.each(["overflow","overflowX","overflowY"],(function(e,t){p.CSS.setPropertyValue(s,t,"hidden")})),p.CSS.setPropertyValue(s,"position",e.position),p.CSS.setPropertyValue(s,"fontSize",e.fontSize),p.CSS.setPropertyValue(s,"boxSizing","content-box"),
/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
l.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],(function(e,t){p.CSS.setPropertyValue(s,t,"100%")})),
/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
p.CSS.setPropertyValue(s,"paddingLeft","100em"),
/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
n.percentToPxWidth=H.lastPercentToPxWidth=(parseFloat(d.getPropertyValue(s,"width",null,!0))||1)/100,/* GET */
n.percentToPxHeight=H.lastPercentToPxHeight=(parseFloat(d.getPropertyValue(s,"height",null,!0))||1)/100,/* GET */
n.emToPx=H.lastEmToPx=(parseFloat(d.getPropertyValue(s,"paddingLeft"))||1)/100,/* GET */
e.myParent.removeChild(s)}
/***************************
                               Element-Agnostic Units
                            ***************************/
/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
                               so we calculate it now. */return null===H.remToPx&&(
/* Default to browsers' default fontSize of 16px in the case of 0. */
H.remToPx=parseFloat(d.getPropertyValue(r.body,"fontSize"))||16)
/* Similarly, viewport units are %-relative to the window's inner dimensions. */,null===H.vwToPx&&(H.vwToPx=parseFloat(t.innerWidth)/100,/* GET */
H.vhToPx=parseFloat(t.innerHeight)/100),n.remToPx=H.remToPx,n.vwToPx=H.vwToPx,n.vhToPx=H.vhToPx,p.debug>=1&&console.log("Unit ratios: "+JSON.stringify(n),o),n}}
/* Along with its property data, store a reference to the element itself onto tweensContainer. */a.element=o}
/*****************
                    Call Push
                *****************/
/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */a.element&&(
/* Apply the "velocity-animating" indicator class. */
d.Values.addClass(o,"velocity-animating"),
/* The call array houses the tweensContainers for each element being animated in the current call. */
N.push(a),
/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
""===i.queue&&(v(o).tweensContainer=a,v(o).opts=i)
/* Switch on the element's animating flag. */,v(o).isAnimating=!0,
/* Once the final element in this call's element set has been processed, push the call array onto
                       Velocity.State.calls for the animation tick to immediately begin processing. */
h===m-1?(
/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
                           Anything on this call container is subjected to tick() processing. */
p.State.calls.push([N,n,i,null,C.resolver]),
/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
!1===p.State.isTicking&&(p.State.isTicking=!0,
/* Start the tick loop. */
x())):h++)}
/* When the queue option is set to false, the call skips the element's queue and fires immediately. */!1!==p.mock&&(
/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */
!0===p.mock?i.duration=i.delay=1:(i.duration*=parseFloat(p.mock)||1,i.delay*=parseFloat(p.mock)||1))
/*******************
               Option: Easing
            *******************/,i.easing=b(i.easing,i.duration),
/**********************
               Option: Callbacks
            **********************/
/* Callbacks must functions. Otherwise, default to null. */
i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null)
/*********************************
               Option: Display & Visibility
            *********************************/
/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */,void 0!==i.display&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),
/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
"auto"===i.display&&(i.display=p.CSS.Values.getDisplayType(o))),void 0!==i.visibility&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase())
/**********************
               Option: mobileHA
            **********************/
/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
               on animating elements. HA is removed from the element at the completion of its animation. */
/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */,i.mobileHA=i.mobileHA&&p.State.isMobile&&!p.State.isGingerbread,!1===i.queue?
/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
                   we manually inject the delay property here with an explicit setTimeout. */
i.delay?setTimeout(s,i.delay):s()
/* Otherwise, the call undergoes element queueing as normal. */
/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */:l.queue(o,i.queue,(function(e,t){
/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
                       so it's fine if this is repeatedly triggered for each element in the associated call.) */
if(!0===t)
/* Do not continue with animation queueing. */
return C.promise&&C.resolver(n),!0;
/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
                       See completeCall() for further details. */p.velocityQueueEntryFlag=!0,s()}))
/*********************
                Auto-Dequeuing
            *********************/
/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */,""!==i.queue&&"fx"!==i.queue||"inprogress"===l.queue(o)[0]||l.dequeue(o)}};
/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
/* For legacy support, also expose the literal animate method. */
(p=l.extend(g,p)).animate=g;
/**************
        Timing
    **************/
/* Ticker function. */
var y=t.requestAnimationFrame||n;
/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
       devices to avoid wasting battery power on inactive tabs. */
/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */return p.State.isMobile||void 0===r.hidden||r.addEventListener("visibilitychange",(function(){
/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
r.hidden?(y=function(e){
/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
return setTimeout((function(){e(!0)}),16)},
/* The rAF loop has been paused by the browser, so we manually restart the tick. */
x()):y=t.requestAnimationFrame||n}))
/************
        Tick
    ************/
/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */,
/******************
        Frameworks
    ******************/
/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
e.Velocity=p,e!==t&&(
/* Assign the element function to Velocity's core animate() method. */
e.fn.velocity=g,
/* Assign the object function's defaults to Velocity's global defaults object. */
e.fn.velocity.defaults=p.defaults)
/***********************
       Packaged Redirects
    ***********************/
/* slideUp, slideDown */,l.each(["Down","Up"],(function(e,t){p.Redirects["slide"+t]=function(e,r,o,i,a,n){var s=l.extend({},r),u=s.begin,c=s.complete,f={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};void 0===s.display&&(
/* Show the element before slideDown begins and hide the element after slideUp completes. */
/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
s.display="Down"===t?"inline"===p.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),s.begin=function(){
/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
for(var r in
/* If the user passed in a begin callback, fire it now. */
u&&u.call(a,a),f){d[r]=e.style[r];
/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
                       use forcefeeding to start from computed values and animate down to 0. */
var o=p.CSS.getPropertyValue(e,r);f[r]="Down"===t?[o,0]:[0,o]}
/* Force vertical overflow content to clip so that sliding works as expected. */d.overflow=e.style.overflow,e.style.overflow="hidden"},s.complete=function(){
/* Reset element to its pre-slide inline values once its slide animation is complete. */
for(var t in d)e.style[t]=d[t];
/* If the user passed in a complete callback, fire it now. */c&&c.call(a,a),n&&n.resolver(a)},p(e,f,s)}})),
/* fadeIn, fadeOut */
l.each(["In","Out"],(function(e,t){p.Redirects["fade"+t]=function(e,r,o,i,a,n){var s=l.extend({},r),u={opacity:"In"===t?1:0},c=s.complete;
/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
               callbacks by firing them only when the final element has been reached. */s.complete=o!==i-1?s.begin=null:function(){c&&c.call(a,a),n&&n.resolver(a)}
/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
/* Note: We allow users to pass in "null" to skip display setting altogether. */,void 0===s.display&&(s.display="In"===t?"auto":"none"),p(this,u,s)}})),p}function v(e){
/* Hardcode a reference to the plugin name. */
var t=l.data(e,"velocity");
/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */return null===t?void 0:t}
/**************
        Easing
    **************/
/* Step easing generator. */
function m(e){return function(t){return Math.round(t*e)*(1/e)}}
/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */function h(e,r,o,i){var a=4,n=.001,s=1e-7,l=10,u=11,c=1/(u-1),p="Float32Array"in t;
/* Must contain four arguments. */if(4!==arguments.length)return!1;
/* Arguments must be numbers. */for(var f=0;f<4;++f)if("number"!=typeof arguments[f]||isNaN(arguments[f])||!isFinite(arguments[f]))return!1;
/* X values must be in the [0, 1] range. */e=Math.min(e,1),o=Math.min(o,1),e=Math.max(e,0),o=Math.max(o,0);var d=p?new Float32Array(u):new Array(u);function g(e,t){return 1-3*t+3*e}function y(e,t){return 3*t-6*e}function v(e){return 3*e}function m(e,t,r){return((g(t,r)*e+y(t,r))*e+v(t))*e}function h(e,t,r){return 3*g(t,r)*e*e+2*y(t,r)*e+v(t)}function b(t,r){for(var i=0;i<a;++i){var n=h(r,e,o);if(0===n)return r;r-=(m(r,e,o)-t)/n}return r}function x(){for(var t=0;t<u;++t)d[t]=m(t*c,e,o)}function S(t,r,i){var a,n,u=0;do{(a=m(n=r+(i-r)/2,e,o)-t)>0?i=n:r=n}while(Math.abs(a)>s&&++u<l);return n}function P(t){for(var r=0,i=1,a=u-1;i!=a&&d[i]<=t;++i)r+=c;--i;var s=r+(t-d[i])/(d[i+1]-d[i])*c,l=h(s,e,o);return l>=n?b(t,s):0==l?s:S(t,r,r+c)}var w=!1;function V(){w=!0,e==r&&o==i||x()}var C=function(t){return w||V(),e===r&&o===i?t:0===t?0:1===t?1:m(P(t),r,i)};C.getControlPoints=function(){return[{x:e,y:r},{x:o,y:i}]};var T="generateBezier("+[e,r,o,i]+")";return C.toString=function(){return T},C}
/* Determine the appropriate easing type given an easing input. */
function b(e,t){var r=e;
/* The easing option can either be a string that references a pre-registered easing,
           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */return u.isString(e)?
/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
p.Easings[e]||(r=!1):r=u.isArray(e)&&1===e.length?m.apply(null,e):u.isArray(e)&&2===e.length?f.apply(null,e.concat([t])):!(!u.isArray(e)||4!==e.length)&&h.apply(null,e)
/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
           if the Velocity-wide default has been incorrectly modified. */,!1===r&&(r=p.Easings[p.defaults.easing]?p.defaults.easing:"swing"),r}function x(e){
/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
if(e){
/* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
var t=(new Date).getTime(),r=p.State.calls.length;
/********************
               Call Iteration
            ********************/
/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
r>1e4&&(p.State.calls=
/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function(e){for(var t=-1,r=e?e.length:0,o=[];++t<r;){var i=e[t];i&&o.push(i)}return o}(p.State.calls))
/* Iterate through each active call. */;for(var o=0;o<r;o++)
/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
if(p.State.calls[o]){
/************************
                   Call-Wide Variables
                ************************/
var i=p.State.calls[o],a=i[0],n=i[2],s=i[3],c=!!s,f=null;
/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
                   We assign timeStart now so that its value is as close to the real animation start time as possible.
                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
                   between that time and now would cause the first few frames of the tween to be skipped since
                   percentComplete is calculated relative to timeStart.) */
/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
                   same style value as the element's current value. */s||(s=p.State.calls[o][3]=t-16)
/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
                   Accordingly, we ensure that percentComplete does not exceed 1. */;
/**********************
                   Element Iteration
                **********************/
/* For every call, iterate through each of the elements in its set. */
for(var g=Math.min((t-s)/n.duration,1),m=0,h=a.length;m<h;m++){var b=a[m],P=b.element;
/* Check to see if this element has been deleted midway through the animation by checking for the
                       continued existence of its data cache. If it's gone, skip animating this element. */if(v(P)){var w=!1;
/**********************************
                       Display & Visibility Toggling
                    **********************************/
/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */if(void 0!==n.display&&null!==n.display&&"none"!==n.display){if("flex"===n.display){l.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],(function(e,t){d.setPropertyValue(P,"display",t)}))}d.setPropertyValue(P,"display",n.display)}
/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
/************************
                       Property Iteration
                    ************************/
/* For every element, iterate through each property. */
for(var V in void 0!==n.visibility&&"hidden"!==n.visibility&&d.setPropertyValue(P,"visibility",n.visibility),b)
/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
if("element"!==V){var C,T=b[V],
/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
k=u.isString(T.easing)?p.Easings[T.easing]:T.easing;
/******************************
                               Current Value Calculation
                            ******************************/
/* If this is the last tick pass (if we've reached 100% completion for this tween),
                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */if(1===g)C=T.endValue;
/* Otherwise, calculate currentValue based on the current delta from startValue. */else{var A=T.endValue-T.startValue;
/* If no value change is occurring, don't proceed with DOM updating. */
if(C=T.startValue+A*k(g,n,A),!c&&C===T.currentValue)continue}
/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
                               it can be passed into the progress callback. */
if(T.currentValue=C,"tween"===V)f=C;else{
/******************
                                   Hooks: Part I
                                ******************/
/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
                                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
                                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
                                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
                                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
if(d.Hooks.registered[V]){var F=d.Hooks.getRoot(V),E=v(P).rootPropertyValueCache[F];E&&(T.rootPropertyValue=E)}
/*****************
                                    DOM Update
                                *****************/
/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */var j=d.setPropertyValue(P,/* SET */
V,T.currentValue+(0===parseFloat(C)?"":T.unitType),T.rootPropertyValue,T.scrollData);
/*******************
                                   Hooks: Part II
                                *******************/
/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */d.Hooks.registered[V]&&(
/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
d.Normalizations.registered[F]?v(P).rootPropertyValueCache[F]=d.Normalizations.registered[F]("extract",null,j[1]):v(P).rootPropertyValueCache[F]=j[1])
/***************
                                   Transforms
                                ***************/
/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */,"transform"===j[0]&&(w=!0)}}
/****************
                        mobileHA
                    ****************/
/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */n.mobileHA&&void 0===v(P).transformCache.translate3d&&(
/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
v(P).transformCache.translate3d="(0px, 0px, 0px)",w=!0),w&&d.flushTransformCache(P)}}
/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */void 0!==n.display&&"none"!==n.display&&(p.State.calls[o][2].display=!1),void 0!==n.visibility&&"hidden"!==n.visibility&&(p.State.calls[o][2].visibility=!1)
/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */,n.progress&&n.progress.call(i[1],i[1],g,Math.max(0,s+n.duration-t),s,f)
/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */,1===g&&S(o)}}
/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */p.State.isTicking&&y(x)}
/**********************
        Call Completion
    **********************/
/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */function S(e,t){
/* Ensure the call exists. */
if(!p.State.calls[e])return!1;
/* Pull the metadata from the call. */
/*************************
           Element Finalization
        *************************/
for(var r=p.State.calls[e][0],o=p.State.calls[e][1],i=p.State.calls[e][2],a=p.State.calls[e][4],n=!1,s=0,u=r.length;s<u;s++){var c=r[s].element;
/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
if(t||i.loop||("none"===i.display&&d.setPropertyValue(c,"display",i.display),"hidden"===i.visibility&&d.setPropertyValue(c,"visibility",i.visibility)),!0!==i.loop&&(void 0===l.queue(c)[1]||!/\.velocityQueueEntryFlag/i.test(l.queue(c)[1]))&&v(c)){v(c).isAnimating=!1,
/* Clear the element's rootPropertyValueCache, which will become stale. */
v(c).rootPropertyValueCache={};var f=!1;
/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */l.each(d.Lists.transforms3D,(function(e,t){var r=/^scale/.test(t)?1:0,o=v(c).transformCache[t];void 0!==v(c).transformCache[t]&&new RegExp("^\\("+r+"[^.]").test(o)&&(f=!0,delete v(c).transformCache[t])})),
/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
i.mobileHA&&(f=!0,delete v(c).transformCache.translate3d)
/* Flush the subproperty removals to the DOM. */,f&&d.flushTransformCache(c)
/* Remove the "velocity-animating" indicator class. */,d.Values.removeClass(c,"velocity-animating")}
/*********************
               Option: Complete
            *********************/
/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */if(!t&&i.complete&&!i.loop&&s===u-1)
/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
try{i.complete.call(o,o)}catch(e){setTimeout((function(){throw e}),1)}
/**********************
               Promise Resolving
            **********************/
/* Note: Infinite loops don't return promises. */a&&!0!==i.loop&&a(o)
/****************************
               Option: Loop (Infinite)
            ****************************/,v(c)&&!0===i.loop&&!t&&(
/* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
l.each(v(c).tweensContainer,(function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)})),p(c,"reverse",{loop:!0,delay:i.delay}))
/***************
               Dequeueing
            ***************/
/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */,!1!==i.queue&&l.dequeue(c,i.queue)}
/************************
           Calls Array Cleanup
        ************************/
/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */p.State.calls[e]=!1;
/* Iterate through the calls array to determine if this was the final in-progress animation.
           If so, set a flag to end ticking and clear the calls array. */
for(var g=0,y=p.State.calls.length;g<y;g++)if(!1!==p.State.calls[g]){n=!0;break}!1===n&&(
/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
p.State.isTicking=!1,
/* Clear the calls array so that its length is reset. */
delete p.State.calls,p.State.calls=[])}
/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)}));
/******************
   Known Issues
******************/
/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */