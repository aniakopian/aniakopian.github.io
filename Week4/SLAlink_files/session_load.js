(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function k(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function n(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var p=n(this);function q(a,b){if(b)a:{var c=p;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&m(c,a,{configurable:!0,writable:!0,value:b})}}
q("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(e||"")+"_"+f++,e)}function c(e,h){this.g=e;m(this,"description",{configurable:!0,writable:!0,value:h})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=p[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&m(d.prototype,a,{configurable:!0,writable:!0,value:function(){return r(k(this))}})}return a});function r(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
var t="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},u;if("function"==typeof Object.setPrototypeOf)u=Object.setPrototypeOf;else{var w;a:{var x={a:!0},y={};try{y.__proto__=x;w=y.a;break a}catch(a){}w=!1}u=w?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var z=u;
function A(a,b){a.prototype=t(b.prototype);a.prototype.constructor=a;if(z)z(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.m=b.prototype}var B=this||self;
function C(a,b){function c(){}c.prototype=b.prototype;a.m=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.o=function(d,f,e){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[f].apply(d,h)}}function D(a){return a};var E;var F;function G(a,b){this.g=b===H?a:""}G.prototype.toString=function(){return this.g+""};var H={};var J=/^[\w+/_-]+[=]{0,2}$/;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){};function K(a){this.g=a||B.document||document};function L(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||B,f=d.document,e;if(!(e=a.nonce))a:{e=(d||B).document;if(e.querySelector&&(e=e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&J.test(e))break a;e=""}e&&!a.nonce&&(a.nonce=e);if("help"==a.flow){a:{var h=["document","location","href"];for(var l=d||B,I=0;I<h.length;I++)if(l=l[h[I]],null==l){h=null;break a}h=l}!a.helpCenterContext&&h&&(a.helpCenterContext=h.substring(0,1200));h=!0;b&&JSON&&JSON.stringify&&(l=JSON.stringify(b),
(h=1200>=l.length)&&(a.psdJson=l));h||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(h=d.GOOGLE_FEEDBACK_START)h.apply(d,b);else{d=c+"/load.js?";for(var g in a)b=a[g],(c=null==b)||(c=typeof b,c="object"==c&&null!=b||"function"==c),c||(d+=encodeURIComponent(g)+"="+encodeURIComponent(b)+"&");a=(f?new K(9==f.nodeType?f:f.ownerDocument||f.document):E||(E=new K)).g;g="SCRIPT";"application/xhtml+xml"===a.contentType&&(g=g.toLowerCase());
a=a.createElement(g);e&&a.setAttribute("nonce",e);g=d;if(void 0===F)if(e=null,(d=B.trustedTypes)&&d.createPolicy){try{e=d.createPolicy("uf-receiver#html",{createHTML:D,createScript:D,createScriptURL:D})}catch(aa){B.console&&B.console.error(aa.message)}F=e}else F=e;g=(e=F)?e.createScriptURL(g):g;g=new G(g,H);a.src=g instanceof G&&g.constructor===G?g.g:"type_error:TrustedResourceUrl";var v;g=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;(v=(e=null===(v=g.querySelector)||void 0===v?
void 0:v.call(g,"script[nonce]"))?e.nonce||e.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",v);f.body.appendChild(a)}}var M=["userfeedback","api","startFeedback"],N=B;M[0]in N||"undefined"==typeof N.execScript||N.execScript("var "+M[0]);for(var O;M.length&&(O=M.shift());)M.length||void 0===L?N[O]&&N[O]!==Object.prototype[O]?N=N[O]:N=N[O]={}:N[O]=L;function P(){this.g=this.g}P.prototype.g=!1;P.prototype.isDisposed=function(){return this.g};var Q="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function R(){}R.prototype.next=function(){return R.prototype.g.call(this)};R.prototype.g=function(){throw Q;};R.prototype.i=function(){return this};function ba(a){if(a instanceof S||a instanceof T||a instanceof U)return a;if("function"==typeof a.next)return new S(function(){return V(a)});if("function"==typeof a[Symbol.iterator])return new S(function(){return a[Symbol.iterator]()});if("function"==typeof a.i)return new S(function(){return V(a.i())});throw Error("Not an iterator or iterable.");}
function V(a){if(!(a instanceof R))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.g();break}catch(d){if(d!==Q)throw d;b=!0}return{value:c,done:b}}}}function S(a){this.h=a}S.prototype.i=function(){return new T(this.h())};S.prototype[Symbol.iterator]=function(){return new U(this.h())};S.prototype.j=function(){return new U(this.h())};function T(a){this.h=a}A(T,R);T.prototype.g=function(){var a=this.h.next();if(a.done)throw Q;return a.value};T.prototype.next=function(){return T.prototype.g.call(this)};
T.prototype[Symbol.iterator]=function(){return new U(this.h)};T.prototype.j=function(){return new U(this.h)};function U(a){S.call(this,function(){return a});this.l=a}A(U,S);U.prototype.next=function(){return this.l.next()};function ca(){};function W(){}C(W,ca);W.prototype[Symbol.iterator]=function(){return ba(this.i(!0)).j()};function X(a){this.g=a}C(X,W);X.prototype.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};X.prototype.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
X.prototype.i=function(a){var b=0,c=this.g,d=new R;d.g=function(){if(b>=c.length)throw Q;var f=c.key(b++);if(a)return f;f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return f};d.next=d.g.bind(d);return d};X.prototype.key=function(a){return this.g.key(a)};function Y(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a}C(Y,X);function Z(){P.call(this);this.h=new Y}A(Z,P);function da(){var a=new Z,b=a.h.get("GOOGLE_HELP_SESSION_STATE");if(!b)return null;b=JSON.parse(b);var c=(new Date).getTime(),d=b.sessionTimestamp;return!d||"number"!==typeof d||c>d+6E4?(a.h.g.removeItem("GOOGLE_HELP_SESSION_STATE"),null):b};(function(a,b){var c=da();c&&c["ui-state"]&&(a.flow="help",L(a,b))}).apply(B,B.GOOGLE_HELP_SESSION_ARGUMENTS);}).call(this);
