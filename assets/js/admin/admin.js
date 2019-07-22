!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}({4:function(e,t,n){e.exports=n("rBQX")},"7l0f":function(e,t,n){"use strict";var r=n("9T72");function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(e,t){var n=function(){function n(e,r){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.options=Object.assign({},n.defaults,r),this.drop=this._getDropElement(),this.popper=null,!this.drop||void 0===this.drop)throw new Error("Drop Error: Cannot find the drop element.");if(void 0!==t&&!this.popper){var o=this.element;this.popper=new t(o,this.drop,this._getPopperConfig())}this._addEventListeners(),n.allDrops.push(this)}var i,a,s;return i=n,(a=[{key:"isOpened",value:function(){return this.drop.classList.contains("open")}},{key:"isDisabled",value:function(){return this.element.disabled||this.element.classList.contains("disabled")}},{key:"toggle",value:function(){this.isOpened()?this.close():this.open()}},{key:"open",value:function(){var t=this;this.isDisabled()||this.isOpened()||(this.element.focus(),this.element.setAttribute("aria-expanded",!0),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop),this.drop.classList.add("open"),this.drop.setAttribute("aria-hidden",!0),this.popper&&this.popper.update(),setTimeout(function(){t.drop.classList.add("open--transition")}))}},{key:"close",value:function(){var t=this;!this.isDisabled()&&this.isOpened()&&("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this.element.setAttribute("aria-expanded",!1),this.drop.removeAttribute("aria-hidden"),this.drop.classList.remove("open--transition"),r.a.onTransitionEnd(this.drop,function(){t.drop.classList.remove("open")}))}},{key:"_addEventListeners",value:function(){var t=this;if(this.options.openOn)if("always"!==this.options.openOn){var n=this.options.openOn.split(" ");n.indexOf("click")>=0&&(e(this.element).on("click",function(e){e.preventDefault(),t.toggle()}),e(document).on("click",function(e){t.isOpened()&&(e.target===t.drop||t.drop.contains(e.target)||e.target===t.element||t.element.contains(e.target)||t.close(e))})),n.indexOf("hover"),n.indexOf("focus")}else setTimeout(this.open.bind(this))}},{key:"_getDropElement",value:function(){if(!this.drop){var e=this.element.parentNode,t=r.a.getTargetFromElement(this.element);this.drop=t?document.querySelector(t):e?e.querySelector(this.options.drop):null}return this.drop}},{key:"_getPopperConfig",value:function(){var e=this,t={};"function"==typeof this.options.offset?t.fn=function(t){return t.offsets=Object.assign({},t.offsets,e.options.offset(t.offsets)||{}),t}:t.offset=this.options.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this.options.flip},preventOverflow:{boundariesElement:this.options.boundary}}};return"static"===this.options.display&&(n.modifiers.applyStyle={enabled:!1}),n}},{key:"_getPlacement",value:function(){return"bottom-start"}}])&&o(i.prototype,a),s&&o(i,s),n}();return n.allDrops=[],n.defaults={drop:"[data-drop]",offset:0,flip:!0,openOn:"click",boundary:"scrollParent",reference:"toggle",display:"dynamic"},n}(jQuery,window.Popper);t.a=i},"8jRI":function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function a(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=a(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),s=0;s<i.length;s++){var u=i[s];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},"9T72":function(e,t,n){"use strict";var r=n("sBL/"),o=n.n(r),i=n("jfjY"),a=n.n(i),s=n("cr+I"),u=function(e){return{isMobile:a.a,debounce:o.a,queryString:s,TRANSITION_END:function(){var e="",t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(var n in t)({}).hasOwnProperty.call(t,n)&&void 0!==document.createElement("p").style[n]&&(e=t[n]);return e}(),onTransitionEnd:function(t,n){var r=this,o=!1;e(t).one(this.TRANSITION_END,function(){n(),o=!0}),setTimeout(function(){o||e(t).trigger(r.TRANSITION_END)},this.getTransitionDurationFromElement(t))},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration");return parseFloat(n)?(n=n.split(",")[0],1e3*parseFloat(n)):0},getTargetFromElement:function(e){var t=e.getAttribute("data-target");t&&"#"!==t||(t=e.getAttribute("href")||"");try{return document.querySelector(t)?t:null}catch(e){return null}}}}(jQuery);t.a=u},"9UV2":function(e,t,n){!function(n,r){var o={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},i=Array.prototype.map,a=Array.isArray,s=Object.prototype.toString;function u(e){return!!(""===e||e&&e.charCodeAt&&e.substr)}function c(e){return a?a(e):"[object Array]"===s.call(e)}function l(e){return e&&"[object Object]"===s.call(e)}function p(e,t){var n;for(n in e=e||{},t=t||{})t.hasOwnProperty(n)&&null==e[n]&&(e[n]=t[n]);return e}function f(e,t,n){var r,o,a=[];if(!e)return a;if(i&&e.map===i)return e.map(t,n);for(r=0,o=e.length;r<o;r++)a[r]=t.call(n,e[r],r,e);return a}function d(e,t){return e=Math.round(Math.abs(e)),isNaN(e)?t:e}function m(e){var t=o.settings.currency.format;return"function"==typeof e&&(e=e()),u(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e&&e.pos&&e.pos.match("%v")?e:u(t)?o.settings.currency.format={pos:t,neg:t.replace("%v","-%v"),zero:t}:t}var h=o.unformat=o.parse=function(e,t){if(c(e))return f(e,function(e){return h(e,t)});if("number"==typeof(e=e||0))return e;t=t||o.settings.number.decimal;var n=new RegExp("[^0-9-"+t+"]",["g"]),r=parseFloat((""+e).replace(/\((.*)\)/,"-$1").replace(n,"").replace(t,"."));return isNaN(r)?0:r},g=o.toFixed=function(e,t){t=d(t,o.settings.number.precision);var n=Math.pow(10,t);return(Math.round(o.unformat(e)*n)/n).toFixed(t)},b=o.formatNumber=o.format=function(e,t,n,r){if(c(e))return f(e,function(e){return b(e,t,n,r)});e=h(e);var i=p(l(t)?t:{precision:t,thousand:n,decimal:r},o.settings.number),a=d(i.precision),s=e<0?"-":"",u=parseInt(g(Math.abs(e||0),a),10)+"",m=u.length>3?u.length%3:0;return s+(m?u.substr(0,m)+i.thousand:"")+u.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+i.thousand)+(a?i.decimal+g(Math.abs(e),a).split(".")[1]:"")},v=o.formatMoney=function(e,t,n,r,i,a){if(c(e))return f(e,function(e){return v(e,t,n,r,i,a)});e=h(e);var s=p(l(t)?t:{symbol:t,precision:n,thousand:r,decimal:i,format:a},o.settings.currency),u=m(s.format);return(e>0?u.pos:e<0?u.neg:u.zero).replace("%s",s.symbol).replace("%v",b(Math.abs(e),d(s.precision),s.thousand,s.decimal))};o.formatColumn=function(e,t,n,r,i,a){if(!e)return[];var s=p(l(t)?t:{symbol:t,precision:n,thousand:r,decimal:i,format:a},o.settings.currency),g=m(s.format),v=g.pos.indexOf("%s")<g.pos.indexOf("%v"),y=0,w=f(e,function(e,t){if(c(e))return o.formatColumn(e,s);var n=((e=h(e))>0?g.pos:e<0?g.neg:g.zero).replace("%s",s.symbol).replace("%v",b(Math.abs(e),d(s.precision),s.thousand,s.decimal));return n.length>y&&(y=n.length),n});return f(w,function(e,t){return u(e)&&e.length<y?v?e.replace(s.symbol,s.symbol+new Array(y-e.length+1).join(" ")):new Array(y-e.length+1).join(" ")+e:e})},e.exports&&(t=e.exports=o),t.accounting=o}()},MgzW:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))o.call(n,c)&&(s[c]=n[c]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(s[a[l]]=n[a[l]])}}return s}},ZFOp:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},"cr+I":function(e,t,n){"use strict";var r=n("ZFOp"),o=n("MgzW"),i=n("8jRI");function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function s(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:i(a),n(i(o),a,r)}),Object.keys(r).sort().reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(n):e[t]=n,e},Object.create(null))):r}t.extract=s,t.parse=u,t.stringify=function(e,t){!1===(t=o({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=function(){});var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t);return e?Object.keys(e).sort(t.sort).map(function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach(function(e){void 0!==e&&i.push(n(r,e,i.length))}),i.join("&")}return a(r,t)+"="+a(o,t)}).filter(function(e){return e.length>0}).join("&"):""},t.parseUrl=function(e,t){return{url:e.split("?")[0]||"",query:u(s(e),t)}}},jfjY:function(e,t,n){"use strict";e.exports=i,e.exports.isMobile=i;var r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;function i(e){e||(e={});var t=e.ua;return t||"undefined"==typeof navigator||(t=navigator.userAgent),t&&t.headers&&"string"==typeof t.headers["user-agent"]&&(t=t.headers["user-agent"]),"string"==typeof t&&(e.tablet?o.test(t):r.test(t))}},rBQX:function(e,t,n){"use strict";n.r(t);var r=n("xeH2"),o=n.n(r),i=n("sBL/"),a=n.n(i),s=n("jfjY"),u=n.n(s),c=n("cr+I"),l=n("7l0f");function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=jQuery,d=window.awebooking,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"customers",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;f.ajax({type:"GET",url:d.route("/search/".concat(e)),data:{term:encodeURIComponent(t)},error:function(){n()},success:function(e){n(e)}})},h=function(){f("select.awebooking-search-customer, .selectize-search-customer .cmb2_select").each(function(){!function(e){f(e).selectize({valueField:"id",labelField:"display",searchField:"display",dropdownParent:"body",placeholder:f(this).data("placeholder"),load:function(e,t){if(!e.length)return t();m("customers",e,t)}})}(this)}),f(".selectize-search-services").each(function(){!function(e){f(e).selectize({plugins:["remove_button","drag_drop"],valueField:"id",labelField:"name",searchField:["name","id"],dropdownParent:"body",placeholder:f(this).data("placeholder"),load:function(e,t){if(!e.length)return t();m("services",e,t)}})}(this)})},g=n("9UV2"),b=n.n(g),v=window.awebooking||{},y=v.i18n||{};v.utils={},v.instances={},v.isMobile=u.a,v.utils.flatpickrRangePlugin=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n,r,o="",i={onParseConfig:function(){t.config.mode="range",o=t.config.altInput?t.config.altFormat:t.config.dateFormat},onReady:function(){!function(){if(e.input?n=e.input instanceof Element?e.input:window.document.querySelector(e.input):((n=t._input.cloneNode()).removeAttribute("id"),n._flatpickr=void 0),n.value){var i=t.parseDate(n.value);i&&t.selectedDates.push(i)}n.setAttribute("data-fp-omit",""),t._bind(n,["focus","click"],function(){t.selectedDates[1]&&(t.latestSelectedDateObj=t.selectedDates[1],t._setHoursFromDate(t.selectedDates[1]),t.jumpToDate(t.selectedDates[1])),r=!0,t.isOpen=!1,t.open(void 0,n)}),t._bind(t._input,["focus","click"],function(e){e.preventDefault(),t.isOpen=!1,t.open()}),t.config.allowInput&&t._bind(n,"keydown",function(e){"Enter"===e.key&&(t.setDate([t.selectedDates[0],n.value],!0,o),n.click())}),e.input||t._input.parentNode&&t._input.parentNode.insertBefore(n,t._input.nextSibling)}(),t.config.ignoredFocusElements.push(n),t.config.allowInput?(t._input.removeAttribute("readonly"),n.removeAttribute("readonly")):n.setAttribute("readonly","readonly"),t._bind(t._input,"focus",function(){t.latestSelectedDateObj=t.selectedDates[0],t._setHoursFromDate(t.selectedDates[0]),r=!1}),t.config.allowInput&&t._bind(t._input,"keydown",function(e){"Enter"===e.key&&t.setDate([t._input.value,t.selectedDates[1]],!0,o)}),t.setDate(t.selectedDates,!1),i.onValueUpdate(t.selectedDates),t.loadedPlugins.push("range")},onPreCalendarPosition:function(){r&&(t._positionElement=n,setTimeout(function(){t._positionElement=t._input},0))},onValueUpdate:function(){if(n){var e=p(t.selectedDates.map(function(e){return t.formatDate(e,o)}),2),r=e[0];t._input.value=void 0===r?"":r;var i=e[1];n.value=void 0===i?"":i}},onChange:function(){t.selectedDates.length||setTimeout(function(){t.selectedDates.length||(n.value="")},10),r&&setTimeout(function(){n.focus()},0)},onDestroy:function(){e.input||n.parentNode&&n.parentNode.removeChild(n)}};return i}},v.route=function(e){return this.admin_route+e.replace(/^\//g,"")},v.alert=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";return swal({text:e,type:t,toast:!0,buttonsStyling:!1,showCancelButton:!1,showConfirmButton:!0,confirmButtonClass:"button"})},v.confirm=function(e,t){if(!window.swal)return window.confirm(e||y.warning)&&t();var n=window.swal({text:e||this.i18n.warning,customClass:"awebooking-confirm-dialog",position:"center",animation:!1,backdrop:"rgba(0,0,0,.8)",reverseButtons:!0,buttonsStyling:!1,showCancelButton:!0,cancelButtonClass:"",confirmButtonClass:"",cancelButtonText:this.i18n.cancel,confirmButtonText:this.i18n.ok});return t?n.then(function(e){e.value&&t(e)}):n},v.dialog=function(e){var t=o()(e).dialog({modal:!0,width:"auto",height:"auto",autoOpen:!1,draggable:!1,resizable:!1,closeOnEscape:!0,dialogClass:"wp-dialog awebooking-dialog",position:{my:"center",at:"center center-15%",of:window}});return o()(window).on("resize",a()(function(){t.dialog("option","position",{my:"center",at:"center center-15%",of:window})},150)),t},v.ajax=function(e,t,n,r){return o.a.ajax({url:v.route(t),data:n,method:e,dataType:"json"}).done(function(e){r&&r(e)}).fail(function(e){var t=e.responseJSON;t&&t.message?v.alert(t.message,"error"):v.alert(y.error,"error")})},v.createForm=function(e,t){var n=o()("<form>",{method:"POST",action:e}),r=o()("<input>",{name:"_method",type:"hidden",value:t});return n.append(r).appendTo("body")},v.formatPrice=function(e){return b.a.formatMoney(e,{format:y.priceFormat,symbol:y.currencySymbol,decimal:y.decimalSeparator,thousand:y.priceThousandSeparator,precision:y.numberDecimals})},v.utils.addQueryArgs=function(e,t){void 0===t&&(t=window.location.href);var n=c.parseUrl(t),r=o.a.extend({},n.query,e);return n.url+"?"+c.stringify(r,{sort:!1})},o()(function(){window.tippy&&tippy(".tippy",{arrow:!0,animation:"shift-toward",duration:[200,150]}),o.a.fn.selectize&&(h(),o()("select.selectize, .with-selectize .cmb2_select").selectize({allowEmptyOption:!0,searchField:["value","text"]})),o()('[data-method="abrs-delete"]').on("click",function(e){e.preventDefault();var t=o()(this).attr("href"),n=o()(this).data("warning");v.confirm(n,function(){v.createForm(t,"DELETE").submit()})}),o()('[data-init="abrs-dropdown"]').each(function(){o()(this).data("abrs-dropdown",new l.a(this,{drop:".abrs-drop"}))})})},"sBL/":function(e,t){function n(e,t,n){var r,o,i,a,s;function u(){var c=Date.now()-a;c<t&&c>=0?r=setTimeout(u,t-c):(r=null,n||(s=e.apply(i,o),i=o=null))}null==t&&(t=100);var c=function(){i=this,o=arguments,a=Date.now();var c=n&&!r;return r||(r=setTimeout(u,t)),c&&(s=e.apply(i,o),i=o=null),s};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(s=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},c}n.debounce=n,e.exports=n},xeH2:function(e,t){!function(){e.exports=this.jQuery}()}}));