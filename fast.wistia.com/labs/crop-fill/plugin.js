var __webpack_modules__=[,,,(t,e,n)=>{n.d(e,{elemHeight:()=>u,elemWidth:()=>l});n(4),n(6),n(8);var i,r=n(9),o=(n(12),n(17),n(18),n(24)),a=n(16),s=(a.Wistia,(0,r.cachedDetect)()),c=function(t,e){if(!window.getComputedStyle)return null;var n=window.getComputedStyle(t,null);return null==n?null:null!=e?n[e]:n},l=function(t){if(t===window)return window.innerWidth?window.innerWidth:document.documentElement?document.documentElement.offsetWidth:document.body.offsetWidth;if(t===document){var e=document.body,n=document.documentElement;return Math.max(e.scrollWidth,e.offsetWidth,n.clientWidth,n.scrollWidth,n.offsetWidth)}var i;return(i=c(t,"width"))&&null!=i?parseFloat(i):t.currentStyle?t.offsetWidth:-1},u=function(t){if(t===window)return window.innerHeight?window.innerHeight:document.documentElement?document.documentElement.offsetHeight:document.body.offsetHeight;if(t===document){var e=document.body,n=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)}var i;return(i=c(t,"height"))&&null!=i?parseFloat(i):t.currentStyle?t.offsetHeight:-1},h=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=function(i){(i=i||window.event).pageX||i.pageY||!i.clientX&&!i.clientY||(i.pageX=i.clientX+m(),i.pageY=i.clientY+p()),i.preventDefault||(i.preventDefault=function(){i.returnValue=!1}),i.stopPropagation||(i.stopPropagation=function(){i.cancelBubble=!0}),null==i.which&&(i.which=null!=i.charCode?i.charCode:i.keyCode),null==i.which&&null!=i.button&&(1&i.button?i.which=1:2&i.button?i.which=3:4&i.button?i.which=2:i.which=0),i.target||i.srcElement&&(i.target=i.srcElement),i.target&&3===i.target.nodeType&&(i.target=i.target.parentNode);for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];var s=n.apply(i.target,[i].concat(o));return s===f&&f(t,e,n),s};a.Wistia._elemBind=a.Wistia._elemBind||{};var o=d(t,e,n);return a.Wistia._elemBind[o]=r,r.elem=t,r.event=e,t.addEventListener(e,r,i),function(){f(t,e,n,i)}},f=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(null!=t&&null!=t._wistiaElemId&&null!=n&&n._wistiaBindId){var r=d(t,e,n),o=a.Wistia._elemBind[r];return o&&(t.removeEventListener(e,o,i),o.elem=null,o.event=null),delete a.Wistia._elemBind[r]}},d=function(t,e,n){return t._wistiaElemId=t._wistiaElemId||(0,o.seqId)("wistia_elem_"),n._wistiaBindId=n._wistiaBindId||(0,o.seqId)("wistia_bind_"),"".concat(t._wistiaElemId,".").concat(e,".").concat(n._wistiaBindId)},p=function(t){var e=document.body,n=document.documentElement;if(null==t)return n&&n.scrollTop||e&&e.scrollTop||0;e&&(e.scrollTop=t),n&&(n.scrollTop=t)},m=function(t){var e=document.body,n=document.documentElement;if(null==t)return n&&n.scrollLeft||e&&e.scrollLeft||0;e&&(e.scrollLeft=t),n&&(n.scrollLeft=t)};["auxclick","click","contextmenu","dblclick","focus","keydown","keypress","keyup","mousedown","mouseup","reset","submit","touchend","touchstart"].forEach((function(t){h(document,t,(function(t){i=t,Date.now(),setTimeout((function(){i===t&&(i=void 0)}),0)}),!s.passiveSupported||{capture:!0,passive:!0})}))},(t,e,n)=>{n.d(e,{cast:()=>d,clone:()=>l,eachLeaf:()=>P,getDeep:()=>u,isArray:()=>v,isEmpty:()=>W,isObject:()=>b,merge:()=>o,setAndPreserveUndefined:()=>h});n(5);var i=function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(t),e)},r=Array.prototype.slice,o=function(t){if(0==(arguments.length<=1?0:arguments.length-1))return t;for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++)a(t,e+1<1||arguments.length<=e+1?void 0:arguments[e+1]);return t},a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if(v(e)){v(t)||(t=[]);for(var o=0;o<e.length;o++){var l=e[o];null==t[o]&&null!=l&&(v(l)?t[o]=[]:b(l)&&(t[o]={}));var u=a(t[o],l,n);r(e,o,u)?delete t[o]:t[o]=u}return n(t)}if(b(e)){for(var h in e)if(i(e,h)&&(i(t,h)||null==t[h])){var f=e[h];v(f)?(v(t[h])||(t[h]=[]),a(t[h],f,n),t[h]=n(t[h])):b(f)?(b(t[h])||(t[h]={}),a(t[h],f,n),t[h]=n(t[h])):null==t?(t={},r(e,h,f)||(t[h]=n(f))):r(e,h,f)?delete t[h]:t[h]=n(f)}return n(t)}return n(e)},s=function(t){return t},c=function(t,e,n){return null==n},l=function(t,e){return v(t)?a([],t,e):a({},t,e)},u=function(t,e,n){e="string"==typeof e?e.split("."):r.call(e);for(var o,a=t;null!=t&&e.length;){var s=e.shift();void 0!==t[s]&&(b(t[s])||v(t[s]))||!n||(0===s?(t=a[o]=[])[s]={}:t[s]={}),a=t,o=s,t=i(t,s)?t[s]:void 0}return t},h=function(t,e,n){return f(t,e,n,!1)},f=function(t,e,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=(e="string"==typeof e?e.split("."):r.call(e)).pop();null!=(t=u(t,e,!0))&&(b(t)||v(t))&&null!=o&&(i&&null==n?delete t[o]:t[o]=n)},d=function(t){return null==t?t:b(t)||v(t)?m(t):p("".concat(t),t)},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return/^-?[1-9]\d*?$/.test(t)?parseInt(t,10):"0"===t||"-0"===t?0:/^-?\d*\.\d+$/.test(t)?parseFloat(t):!!/^true$/i.test(t)||!/^false$/i.test(t)&&e},m=function(t){return a(t,t,(function(t){return"string"==typeof t?p(t):t}),(function(){return!1}))},g=/^\s*function Array()/,v=function(t){return null!=t&&t.push&&g.test(t.constructor)},_=/^\s*function Object()/,b=function(t){return null!=t&&"object"==typeof t&&_.test(t.constructor)},w=/^\s*function RegExp()/,y=/^string|number|boolean|function$/i,T=function(t){return null!=t&&(y.test(typeof t)||function(t){return null!=t&&w.test(t.constructor)}(t))},W=function(t){return null==t||(!(!v(t)||t.length)||!!b(t)&&!Object.keys(t).length)},E=function(t,e,n,o,a){if(null==n&&(n=[]),T(t))e(t,n,o,a);else if(b(t)||v(t)){for(var s in e(t,n,o,a),t)if(i(t,s)){var c=r.call(n);c.push(s),E(t[s],e,c,t,s)}}else e(t,n,o,a)},P=function(t,e){E(t,(function(t,n,i,r){v(t)||b(t)||e(t,n,i,r)}))}},(t,e,n)=>{},(t,e,n)=>{n(7)},(t,e,n)=>{n.d(e,{poll:()=>i});var i=function(t,e,n,i,r){var o=null,a=(new Date).getTime(),s=function(){(new Date).getTime()-a>i?"function"==typeof r&&r():t()?e():(clearTimeout(o),o=setTimeout(s,n))};o=setTimeout(s,1)}},(t,e,n)=>{},(t,e,n)=>{n.d(e,{cachedDetect:()=>U});var i,r=n(10),o=n(11),a=navigator.userAgent,s=null,c=/(webkit)[ /]([^\s]+)/i,l=/OPR\/([^\s]+)/i,u=/(edge)\/(\d+(?:\.\d+)?)/i,h=/(mozilla)(?:.*? rv:([^\s)]+))?/i,f=/(android) ([^;]+)/i,d=/(iphone)/i,p=/(Windows Phone OS (\d+(?:\.\d+)?))/,m=/OS (\d+)_(\d+)/i,g=/(firefox)/i,v=/Mobile VR/i,_=/Version\/([^\s]+)/i,b=function(){return(y()[1]||"webkit").toLowerCase()},w=function(){return y()[2]},y=function(){var t;return(t=a.match(u))||(t=a.match(c))||(t=a.match(l))?t:t?(null!=document.documentMode&&(t[2]=document.documentMode),t):(t=a.match(h))||[]},T=function(){var t=a.match(f);return null!=t&&{version:t[2]}},W=function(){return d.test(a)},E=function(){return j()>0||T()||O()},P=function(){try{var t=matchMedia("(hover:hover)");if("not all"!==t.media)return t.matches}catch(t){}return!E()},O=function(){return/Macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>1},A=function(){return c.test(a)&&!/chrome/i.test(a)&&!O()&&!W()},x=function(){return!(!/Chrome/.test(a)||!/Google Inc/.test(navigator.vendor))&&{version:S()}},S=function(){var t=a.match(/\bChrome\/([^\s]+)/);return t&&t[1]},j=function(){var t=a.match(m),e=a.match(_);return null!=t?parseFloat("".concat(t[1],".").concat(t[2])):null!=e&&e[1]&&O()?parseFloat(e[1]):0},L=function(){return u.test(a)},D=function(){return g.test(a)},M=function(){var t=document.createElement("video"),e=!1;try{if(t.canPlayType){var n='video/mp4; codecs="avc1.42E01E';(e={}).h264=!!t.canPlayType("".concat(n,'"'))||!!t.canPlayType("".concat(n,', mp4a.40.2"')),e.webm=!!t.canPlayType('video/webm; codecs="vp9, vorbis"'),e.nativeHls=!!t.canPlayType("application/vnd.apple.mpegURL")}}catch(t){e={ogg:!1,h264:!1,webm:!1,nativeHls:!1}}return e},B=function(){try{return"localStorage"in r.root&&null!=r.root.localStorage}catch(t){return!1}},I=["WebKit","Moz","O","Ms",""],C=function(){for(var t=0;t<I.length;t++){var e="".concat(I[t],"MutationObserver");if(r.root[e])return e}return null},R=function(){if(null!=i)return i;try{var t=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",null,t)}catch(t){i=!1}return i},k=function(){var t=x(),e=D(),n=L(),i=l.test(a),r=t&&w()>=32,o=t&&w()>=75&&T(),s=e&&w()>=65,c=e&&w()>=67&&T(),u=n&&w()>=18,h=i&&w()>=19;return r||o||s||c||u||h},U=function(){return s||(s=N())},N=function(){var t,e={browser:{version:w()},edge:L(),firefox:D(),gearvr:v.test(a),android:T(),oldandroid:T()&&parseFloat(T().version)<4.1,iphone:W(),ipad:O(),safari:A(),chrome:x(),winphone:{version:p.test(a)[2]},ios:{version:j()},windows:/win/i.test(navigator.platform),mac:/mac/i.test(navigator.platform),retina:null!=r.root.devicePixelRatio&&r.root.devicePixelRatio>1,hoverIsNatural:P(),touchScreen:E(),video:M(),mediaSource:r.root.MediaSource&&r.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E',', mp4a.40.2"')),nativeHls:(W()||O()||A())&&M().nativeHls,localstorage:B(),fullscreenEnabled:document.fullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled,vulcanV2Support:(t=/webkit|mozilla|edge/.test(b()),!!(W()||O()||T())||Boolean(t&&M().h264&&Object.defineProperties)),mutationObserver:C(),callingPlayRequiresEventContext:j()>0||T()||A(),passiveSupported:R(),webp:k(),performanceMeasure:(0,o.hasPerformanceMeasureSupport)()};return e.browser[b()]=!0,e}},(t,e,n)=>{var i;n.d(e,{root:()=>r});try{(i=self).self!==i&&void 0!==i.self&&"undefined"!=typeof window&&(i=window)}catch(t){i="undefined"!=typeof globalThis?globalThis:window}var r=i},(t,e,n)=>{n.d(e,{hasPerformanceMeasureSupport:()=>i});var i=function(){var t=window.performance;return Boolean(t)&&Boolean(t.measure)}},(t,e,n)=>{n.d(e,{wlog:()=>g});var i=n(13),r=n(16);function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var s={ERROR:0,WARNING:1,NOTICE:2,INFO:3,DEBUG:4,error:0,warning:1,notice:2,info:3,debug:4},c=function(){},l=function(t){var e=this;null==t&&(t={});return e.error=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.log(0,n)},e.warn=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.log(1,n)},e.notice=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.log(1,n)},e.info=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.log(3,n)},e.debug=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.log(4,n)},e.ctx=t,e.ctx.initializedAt||e.reset(),e},u=l.prototype;u.reset=function(){this.ctx.level=0,this.ctx.grep=null,this.ctx.grepv=null,this.ctx.first1000LogLines=[],this.ctx.last1000LogLines=[],this.ctx.initializedAt=(new Date).getTime()},u.setLevel=function(t){var e=this.logFunc(3);null!=s[t]?(this.ctx.level=s[t],e('Log level set to "'.concat(t,'" (').concat(s[t],")"))):e('Unknown log level "'.concat(t,'"'))},u.setGrep=function(t){this.ctx.grep=t},u.setGrepv=function(t){this.ctx.grepv=t},u.first1000LogLines=function(){return this.ctx.first1000LogLines},u.last1000LogLines=function(){return this.ctx.last1000LogLines},u.matchedGrep=function(t){var e=!1;if(this.ctx.grep||this.ctx.grepv){for(var n=[],i=0;i<t.length;i++)try{var r=t[i];n.push(r.toString&&r.toString())}catch(t){n.push("")}var o=n.join(" "),a=!this.ctx.grep||o.match(this.ctx.grep),s=!this.ctx.grepv||!o.match(this.ctx.grepv);e=a&&s}else e=!0;return e},u.now=function(){return"undefined"!=typeof performance&&"function"==typeof performance.now?performance.now().toFixed(3):Date.now?Date.now()-this.ctx.initializedAt:(new Date).getTime()-this.ctx.initializedAt},u.messagesToLogLine=function(t,e,n){var i,r=[t,e];r=r.concat(n);try{(i=r.join(" ")||"").length>200&&(i=i.slice(0,200))}catch(t){i="could not serialize"}return i},u.persistLine=function(t){this.ctx.first1000LogLines.length<1e3?this.ctx.first1000LogLines.push(t):(this.ctx.last1000LogLines.length>=1e3&&this.ctx.last1000LogLines.shift(),this.ctx.last1000LogLines.push(t))},u.log=function(t,e){var n,r=t<=this.ctx.level,a=t<4,s=(r||a)&&this.matchedGrep(e);if(0===t&&(0,i.globalTrigger)("problem",{type:"error-logged",data:{messages:e}}),s&&(r||a)&&(n=this.now()),a&&s){var c=this.messagesToLogLine(t,n,e);this.persistLine(c)}if(r&&s){var l,u=this.logFunc(t);1===e.length&&(l=e[0])instanceof Error?(u(l.message),l.stack&&u(l.stack)):u.apply(void 0,o(e))}};var h=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.error.apply(console,e)},f=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.warn.apply(console,e)},d=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.info.apply(console,e)},p=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.debug.apply(console,e)},m=function(t){console.log.apply(console,t)};u.logFunc=function(t){return null==t&&(t=this.level),console?(0===t?e=h:1===t?e=f:3===t?e=d:4===t&&(e=p),e||(e=m),"function"!=typeof e&&(this.noConsoleLog=!0,e=c),e):c;var e},u.maybePrefix=function(t,e){if(t){if("function"==typeof t)try{t=t()}catch(e){t='prefix err "'.concat(e.message,'"')}return t instanceof Array?t.concat(e):[t].concat(e)}return e},u.getPrefixedFunctions=function(t){var e=this;return{log:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.log(0,e.maybePrefix(t,i))},error:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.log(0,e.maybePrefix(t,i))},warn:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.log(1,e.maybePrefix(t,i))},notice:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.log(1,e.maybePrefix(t,i))},info:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.log(3,e.maybePrefix(t,i))},debug:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.log(4,e.maybePrefix(t,i))}}},r.Wistia&&null==r.Wistia.wlogCtx&&(r.Wistia.wlogCtx={});var g=new l(r.Wistia.wlogCtx)},(t,e,n)=>{n.d(e,{globalTrigger:()=>o});var i=n(14),r=n(16);(0,i.makeWbindable)(r.Wistia);r.Wistia.bind.bind(r.Wistia),r.Wistia.on.bind(r.Wistia),r.Wistia.off.bind(r.Wistia),r.Wistia.rebind.bind(r.Wistia);var o=r.Wistia.trigger.bind(r.Wistia);r.Wistia.unbind.bind(r.Wistia)},(t,e,n)=>{n.d(e,{makeWbindable:()=>o});var i=n(15),r=n(16);r.Wistia.bindable||(r.Wistia.bindable={bind:function(t,e){return"crosstime"===t&&this.crossTime?(this.crossTime.addBinding(arguments[1],arguments[2]),this):"betweentimes"===t&&this.betweenTimes?(this.betweenTimes.addBinding(arguments[1],arguments[2],arguments[3]),this):e?(i.bind.call(this,t,e),this):void(r.Wistia.warn&&r.Wistia.warn(this.constructor.name,"bind","falsey value passed in as callback:",e))},unbind:function(t,e){return"crosstime"===t&&this.crossTime?(e?this.crossTime.removeBinding(arguments[1],arguments[2]):this.crossTime.removeAllBindings(),this):"betweentimes"===t&&this.betweenTimes?(e?this.betweenTimes.removeBinding(arguments[1],arguments[2],arguments[3]):this.betweenTimes.removeAllBindings(),this):(e?i.unbind.call(this,t,e):this._bindings&&(this._bindings[t]=[]),this._bindings&&this._bindings[t]&&!this._bindings[t].length&&(this._bindings[t]=null,delete this._bindings[t]),this)},on:function(t,e){var n=arguments,r=this;return"crosstime"===t&&this.crossTime?(this.crossTime.addBinding(arguments[1],arguments[2]),function(){r.crossTime.removeBinding(n[1],n[2])}):"betweentimes"===t&&this.betweenTimes?(this.betweenTimes.addBinding(arguments[1],arguments[2],arguments[3]),function(){r.betweenTimes.removeBinding(n[1],n[2],n[3])}):i.bind.call(this,t,e)},off:function(t,e){return"crosstime"===t&&this.crossTime?this.crossTime.removeBinding(arguments[1],arguments[2]):"betweentimes"===t&&this.betweenTimes?this.betweenTimes.removeBinding(arguments[1],arguments[2],arguments[3]):i.unbind.call(this,t,e)},rebind:function(t,e){return this.unbind(t,e),this.bind(t,e),this},trigger:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return(e=i.trigger).call.apply(e,[this,t].concat(r)),this},bindNamed:function(){return i.bindNamed.apply(this,arguments)},unbindNamed:function(){return i.unbindNamed.apply(this,arguments)},unbindAllInNamespace:function(){return i.unbindAllInNamespace.apply(this,arguments)}});var o=function(t){for(var e in r.Wistia.bindable){var n=r.Wistia.bindable[e];t[e]||(t[e]=n)}}},(t,e,n)=>{n.d(e,{bind:()=>l,bindNamed:()=>m,trigger:()=>f,unbind:()=>u,unbindAllInNamespace:()=>v,unbindNamed:()=>g});var i=n(16),r=function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(t),e)};function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var s,c=Array.prototype.slice,l=function(t,e){var n=this;return n._bindings||(n._bindings={}),n._bindings[t]||(n._bindings[t]=[]),n._bindings[t].push(e),function(){n.unbind(t,e)}},u=function(t,e){if(!this._bindings)return this;if(!this._bindings[t])return this;for(var n=[],i=0;i<this._bindings[t].length;i++){var r=this._bindings[t][i];r!==e&&n.push(r)}this._bindings[t]=n},h=function(t,e){return this.unbind(t,e),this.bind(t,e),{event:t,fn:e}},f=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return this._bindings&&null!=this._bindings.all&&d.apply(this,["all",t].concat(n)),d.apply(this,[t].concat(n))},d=function(t){if(!this._bindings)return this;if(!this._bindings[t])return this;for(var e,n=c.call(arguments,1),r=o(this._bindings[t]),a=0;a<r.length;a++){var s=r[a];try{s.apply(this,n)===this.unbind&&(null==e&&(e=[]),e.push({event:t,fn:s}))}catch(t){if(this._throwTriggerErrors)throw t;i.Wistia.error&&i.Wistia.error(t)}}if(e)for(var l=0;l<e.length;l++){var u=e[l];this.unbind(u.event,u.fn)}return this},p=function(t,e){null==t._namedBindings&&(t._namedBindings={}),null==t._namedBindings[e]&&(t._namedBindings[e]={})},m=function(t,e,n,i){return this.unbindNamed(t,e),function(t,e,n,i,r){p(t,e),t._namedBindings[e][n]={event:i,fn:r}}(this,t,e,n,i),this.bind(n,i),function(){this.unbindNamed(t,e)}},g=function(t,e){p(this,t);var n=function(t,e,n){return p(t,e),t._namedBindings[e][n]}(this,t,e);if(n){var i=n.event,r=n.fn;this.unbind(i,r)}var o=this._namedBindings;return delete o[t][e],_(o[t])&&delete o[t],this},v=function(t){var e=this._namedBindings&&this._namedBindings[t];if(null==e)return this;for(var n in e)r(e,n)&&this.unbindNamed(t,n)},_=function(t){for(var e in t)if(r(t,e))return!1;return!0};(s=function(){}.prototype).bind=l,s.unbind=u,s.on=l,s.off=u,s.rebind=h,s.trigger=f,s.bindNamed=m,s.unbindNamed=g,s.unbindAllInNamespace=v},(t,e,n)=>{n.d(e,{Wistia:()=>r});var i=n(10);null==i.root.Wistia&&(i.root.Wistia={}),null==i.root.Wistia._destructors&&(i.root.Wistia._destructors={}),null==i.root.Wistia._initializers&&(i.root.Wistia._initializers={}),null==i.root.Wistia._remoteData&&(i.root.Wistia._remoteData=new Map),null==i.root.Wistia.api&&(i.root.Wistia.api=function(){return console.error("Accessed Wistia.api() before it was initialized"),null}),null==i.root.Wistia.defineControl&&(i.root.Wistia.defineControl=function(){return console.error("Accessed Wistia.defineControl() before it was initialized"),null}),null==i.root.Wistia.mixin&&(i.root.Wistia.mixin=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach((function(n){(function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(t),e)})(e,n)&&(t[n]=e[n])}))}),null==i.root.Wistia.playlistMethods&&(i.root.Wistia.playlistMethods=new Map),null==i.root.Wistia.PublicApi&&(i.root.Wistia.PublicApi=null),null==i.root.Wistia.uncacheMedia&&(i.root.Wistia.uncacheMedia=function(){return console.error("Accessed Wistia.uncacheMedia() before it was initialized"),null}),null==i.root.Wistia.VisitorKey&&(i.root.Wistia.VisitorKey=null),null==i.root.Wistia.visitorKey&&(i.root.Wistia.visitorKey=null),null==i.root.Wistia.wistia&&(i.root.Wistia.wistia=void 0),null==i.root.Wistia._mediaDataPromises&&(i.root.Wistia._mediaDataPromises={}),null==i.root.Wistia._liveStreamPollingPromises&&(i.root.Wistia._liveStreamPollingPromises={});var r=i.root.Wistia},(t,e,n)=>{var i;n.d(e,{elemOffset:()=>o});var r=function(){if(null!=i)return i;var t=document.createElement("div");return t.style.paddingLeft=t.style.width="1px",document.body.appendChild(t),i=2===t.offsetWidth,document.body.removeChild(t),i},o=function(t){var e,n,i=document.body,o=document.defaultView,s=document.documentElement,c=t.getBoundingClientRect(),l=s.clientTop||i.clientTop||0,u=s.clientLeft||i.clientLeft||0;e=o&&null!=o.pageYOffset?o.pageYOffset:r()&&s&&null!=s.scrollTop?s.scrollTop:i.scrollTop,n=o&&null!=o.pageXOffset?o.pageXOffset:r()&&s&&null!=s.scrollLeft?s.scrollLeft:i.scrollLeft;var h=a(t);return{height:c.height*h,top:c.top*h+e-l,left:c.left*h+n-u,width:c.width*h,zoom:h}},a=function(t){return t&&t!==document.documentElement?a(t.parentElement)*(getComputedStyle(t).zoom||1):1}},(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{execScriptTags:()=>execScriptTags,getScriptTags:()=>getScriptTags,removeScriptTags:()=>removeScriptTags});var utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),getScriptTags=function(t){return t.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi)||[]},scriptTagsToRunScriptsInput=function scriptTagsToRunScriptsInput(scriptTags){if(!scriptTags)return[];scriptTags instanceof Array||(scriptTags=getScriptTags(scriptTags));for(var hashes=[],_loop=function _loop(){var scriptTag=scriptTags[i],hash={},matches=scriptTag.match(/<script.*?>/i);if(matches&&(matches=matches[0].match(/src="([^"]+)"/i),matches&&(hash.src=matches[1],hash.async=/async/i.test(scriptTag.replace(hash.src,"")))),!matches&&(matches=scriptTag.match(/<script>([\s\S]+?)<\/script>/i),matches)){var src=matches[1];hash.fn=function(){return eval(src)}}hashes.push(hash)},i=0;i<scriptTags.length;i++)_loop();return hashes},execScriptTags=function(t,e){if(!t)return null;var n=scriptTagsToRunScriptsInput(t);return(0,utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__.runScripts)(n).then(e)},removeScriptTags=function(t){return t.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g,"")}},(t,e,n)=>{n.d(e,{runScripts:()=>u});var i=n(12),r=n(4),o=n(20);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("src")||"";if(e.ignoreQueryParams){var a=o.split("?");o=a[0]}if(!e.scriptRegex&&e.ignoreProtocol&&(o=o.replace(/^https?:/,""),t=t.replace(/^https?:/,"")),e.scriptRegex&&e.scriptRegex.test(o))return r;if(e.testStartsWith&&0===o.indexOf(t))return r;if(o===t)return r}return null},l=function(t){var e,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return null==i&&(i=8e3),null==r&&(r={}),new Promise((function(a){!0===r.once&&(e=c(t))&&(n=!0),r.once&&n?e.readyState&&!/loaded|complete/.test(e.readyState)||setTimeout((function(){a()}),1):(0,o.runScript)(t,i).then(a).catch((function(t){a(t),setTimeout((function(){console.error(t)}),1)}))}))},u=function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t=n[0]instanceof Array?n[0]:n,t=h(t);var o=[],c=[],u=[];return t.forEach((function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t),n=new Promise((function(t){e.resolve=t}));e.promise=n,u.push(e.promise),t.async?o.push(e):c.push(e)})),c.reduce((function(t,e){if(e.fn)try{e.fn()}catch(t){i.wlog.error(t)}finally{e.resolve()}else e.src&&l(e.src,null,e).then(e.resolve);return t.then(e.promise)}),Promise.resolve()),setTimeout((function(){o.forEach((function(t){if(t.fn)try{t.fn()}catch(t){i.wlog.error(t)}finally{t.resolve()}else t.src&&l(t.src,null,t).then(t.resolve)}))}),1),Promise.all(u)},h=function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n];"string"==typeof i?e.push({src:i,async:!1}):(0,r.isObject)(i)?e.push(i):e.push({fn:i,async:!1})}return e}},(t,e,n)=>{n.d(e,{runScript:()=>r});var i=n(21),r=function(t,e){var n=i.TAGGED_VERSION;return new Promise((function(i,r){var o;null==e&&(e=8e3),(o=document.createElement("script")).src=t,o.async=!0,o.type="text/javascript",/https?:\/\/fast\.wistia\./.test(o.src)&&""!==n&&n.length>0&&(o.src="".concat(o.src,"@").concat(n));var a=null,s=!1,c=function(){o.onerror=o.onreadystatechange=o.onload=null,clearTimeout(a),clearTimeout(u),a=setTimeout((function(){o&&o.parentNode&&o.parentNode.removeChild(o)}),500)},l=function(){var t=o.readyState;s||t&&!/loaded|complete/.test(t)||(s=!0,setTimeout((function(){i(),c()}),1))},u=setTimeout((function(){s=!0,c(),r(new Error("timeout"))}),e);o.onerror=function(t){s=!0,c(),r(t)},o.onreadystatechange=l,o.onload=l,(document.body||document.head).appendChild(o)}))}},(t,e,n)=>{n.d(e,{TAGGED_VERSION:()=>s});var i=n(10),r=n(22),o=n(23),a=((0,o.appHostname)("app"),(0,o.appHostname)("fast-protected"),(0,o.appHostname)("fast")),s="",c=("undefined"!=typeof window&&i.root===window&&i.root.location&&i.root.location.protocol,function(){return"fast.".concat("wistia.net")}),l=(function(){for(var t=document.getElementsByTagName("script"),e=0;e<t.length;e++){var n=t[e];if(n.src){var i=new r.Url(n.src),o=/\/assets\/external\/E-v1?\.js$/.test(i.rawPath),s=i.host===(void 0||a)||i.host===c()||"fast-canary.wistia.net"===i.host,l="https:"===location.protocol&&"https:"===i.protocol,u=""===i.protocol||null==i.protocol,h=l||u||"http:"===location.protocol,f=!n.readyState||/loaded|complete/.test(n.readyState);if(o&&s&&h&&f)return i}}new r.Url("".concat((0,r.proto)(),"//").concat(c(),"/E-v1.js"))}(),[].concat(["wistia.net","wistia.com"],["wistia.mx","wistia.dev","wistia.tech","wistia.am","wistia.se","wistia.io","wistia.st"]));new RegExp("(".concat(l.map((function(t){return"\\.".concat(t.replace(".","\\."))})).join("|"),")$"))},(t,e,n)=>{n.d(e,{Url:()=>u,proto:()=>o});var i=n(4),r=n(12),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.href;return/^http:\/\//.test(t)?"http:":"https:"},a=function(t){if(null==t)return t;var e;try{e=decodeURIComponent(t)}catch(n){setTimeout((function(){r.wlog.notice(n)}),50),e=t}return e},s=function(t){for(var e=t[0],n=1;n<t.length;n++)e+="[".concat(t[n],"]");return e},c=function(t){return t.match(/([\w\-_]+)/g)},l=["protocol","host","port","params","path"],u=function(t){var e=this;return e.params={},e.path=[],e.host="","object"==typeof t?e.fromOptions(t):t&&e.fromRaw(t),e},h=u.prototype;h.fromOptions=function(t){for(var e=0;e<l.length;e++){var n=l[e];null!=t[n]&&(this[n]=t[n])}return this},h.fromRaw=function(t){var e;return this.rawUrl=t,(e=t.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//))&&(this.protocol=e[1]||void 0),(e=t.match(/\/\/([^:?#/]*)/))&&(this.host=e[1]||void 0),(e=t.match(/\/\/.*?(\/[^?#$]+)/)||t.match(/(^\/[^/][^?#$]+)/))&&this.setPath(e[1]),(e=t.match(/:(\d+)/))&&(this.port=parseInt(e[1],10)),(e=t.match(/\?([^#]+)/))&&(this.rawParams=e[1],this.params=function(t){var e={};if(!t)return e;for(var n=t.split("&"),o=function(){var t=n[s].split("="),o=t[0],l=t[1];try{o=c(decodeURIComponent(o))||""}catch(t){setTimeout((function(){r.wlog.notice(t)}),50),o=""}(0,i.cast)(o);var u=(0,i.getDeep)(e,o);if(null!=u)if((0,i.isArray)(u))u.push(a(l));else{var h=[u];h.push(a(l)),(0,i.setAndPreserveUndefined)(e,o,h)}else(0,i.setAndPreserveUndefined)(e,o,a(l))},s=0;s<n.length;s++)o();return e}(this.rawParams)),(e=t.match(/#(.*)$/))&&(this.anchor=e[1]),this},h.clone=function(){return new u({protocol:this.protocol,host:this.host,port:this.port,path:(0,i.clone)(this.path),params:(0,i.clone)(this.params),anchor:this.anchor})},h.ext=function(t){if(null!=t){var e=this.ext(),n=this.path.length-1,i=new RegExp("\\.".concat(e),"g");return e&&(this.path[n]="".concat(this.path[n].replace(i,""))),this.path[n]="".concat(this.path[n],".").concat(t)}var r=this.path[this.path.length-1].match(/\.(.*)$/);return null!=r&&r[1]||null},h.isRelative=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location,e=this.protocol,n=this.host;return!(null!=e&&""!==e&&e!==t.protocol||n&&n!==t.hostname)},h.toString=function(){return this.isRelative()?this.relative():this.absolute()},h.absolute=function(){var t="";null!=this.protocol&&(t=this.protocol);var e="";return null!=this.port&&(e=":".concat(this.port)),"".concat(t,"//").concat(this.host||location.host).concat(e).concat(this.relative())},h.relative=function(){var t,e="";this.path.length>0&&("string"==typeof(t=this.path)&&(t=t.split("/")),e=null==t?"":"/".concat(t.join("/")),this._hasTrailingSlash&&(e+="/"));var n,r,o="?".concat((n=this.params,r=[],(0,i.eachLeaf)(n,(function(t,e){null!=t?r.push("".concat(encodeURIComponent(s(e)),"=").concat(encodeURIComponent(t))):r.push(encodeURIComponent(s(e)))})),r.join("&")));return 1===o.length&&(o=""),"".concat(e).concat(o).concat(this.relativeAnchor())},h.authority=function(){var t=null!=this.port?":".concat(this.port):"";return"".concat(this.host).concat(t)},h.relativeProtocol=function(){var t="";return null!=this.port&&(t=":".concat(this.port)),"//".concat(this.host).concat(t).concat(this.relative())},h.relativeAnchor=function(){var t="";return null!=this.anchor&&(t="#".concat(this.anchor)),"".concat(t)},h.setPath=function(t){this.rawPath=t,this._hasTrailingSlash=/\/$/.test(this.rawPath),this.path=function(t){var e=[];if(null==t)return e;for(var n=t.split(/\/+/),i=0;i<n.length;i++){var r=n[i];null!=r&&""!==r&&e.push(r)}return e}(this.rawPath)},u.create=function(t){return new u(t)};u.create;u.parse=function(t){return new u(t)};u.parse},(t,e,n)=>{n.d(e,{appHostname:()=>i});var i=function(){return"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"app",".").concat("wistia.com")}},(t,e,n)=>{n.d(e,{seqId:()=>r});var i=n(16),r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wistia_",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=i.Wistia._sequenceVal||1,r="".concat(t).concat(n).concat(e);return i.Wistia._sequenceVal=n+1,r}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(t,e,n)=>{n.d(e,{clearTimeouts:()=>a,doTimeout:()=>o});var i=n(4),r=n(16);r.Wistia;null==r.Wistia._timeouts&&(r.Wistia._timeouts={});var o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;(0,i.isArray)(t)&&(t=t.join("."));var o=c(t);if(a(t,o),e){var s=r.Wistia._timeouts[o];null==s&&(s=r.Wistia._timeouts[o]={});var l=setTimeout((function(){delete s[t],e()}),n);return s[t]=l,l}return r.Wistia._timeouts[o][t]},a=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,i.isArray)(t)&&(t=t.join(".")),"__global__"===(n=n||c(t))&&(e=r.Wistia._timeouts[t]))for(var o in e){var a=e[o];clearTimeout(a),delete e[o]}if(e=r.Wistia._timeouts[n])for(var l in e){var u=e[l];!l.indexOf||0!==l.indexOf(t)||l.length!==t.length&&"."!==l.charAt(t.length)||(clearTimeout(u),delete e[l])}r.Wistia.blockSweepTimeouts||(r.Wistia.blockSweepTimeouts=!0,setTimeout(s,0),setTimeout((function(){r.Wistia.blockSweepTimeouts=!1}),5e3))},s=function(){for(var t in r.Wistia._timeouts){var e=r.Wistia._timeouts[t];(0,i.isEmpty)(e)&&delete r.Wistia._timeouts[t]}},c=function(t){var e=t.indexOf(".");return e>0?t.substring(0,e):"__global__"}}],__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(t,e)=>{for(var n in e)__webpack_require__.o(e,n)&&!__webpack_require__.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var __webpack_exports__={},Wistia,utilities_elem_js__WEBPACK_IMPORTED_MODULE_0__,utilities_timeout_utils_js__WEBPACK_IMPORTED_MODULE_1__;utilities_elem_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),utilities_timeout_utils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),(Wistia=window.Wistia).plugin("cropFill",(function(t,e){var n=null;t.hasData((function(){var e=Wistia.Video.stillAsset(t._mediaData);return n=e.width/e.height}));var i=t.container.parentNode;i===document.body||/absolute|fixed|relative/.test(i.style.position)||(i.style.position="relative",i.style.overflow="hidden"),t.container.style.position="absolute";var r=function(){var e=(0,utilities_elem_js__WEBPACK_IMPORTED_MODULE_0__.elemWidth)(i),r=(0,utilities_elem_js__WEBPACK_IMPORTED_MODULE_0__.elemHeight)(i);if(e/r>n){t.width(e,{constrain:!0});var o=-(t.height()-r)/2;return t.container.style.top="".concat(Math.round(o),"px"),t.container.style.left="0px"}t.height(r,{constrain:!0});var a=-(t.width()-e)/2;return t.container.style.left="".concat(Math.round(a),"px"),t.container.style.top="0px"},o=function(){return(0,utilities_timeout_utils_js__WEBPACK_IMPORTED_MODULE_1__.doTimeout)("".concat(t.uuid,".cropFill.resize"),r,50)},a=(0,utilities_elem_js__WEBPACK_IMPORTED_MODULE_0__.elemWidth)(i),s=(0,utilities_elem_js__WEBPACK_IMPORTED_MODULE_0__.elemHeight)(i),c=function(){var e=(0,utilities_elem_js__WEBPACK_IMPORTED_MODULE_0__.elemWidth)(i),n=(0,utilities_elem_js__WEBPACK_IMPORTED_MODULE_0__.elemHeight)(i);return a!==e?(r(),a=e):s!==n&&(r(),s=n),(0,utilities_timeout_utils_js__WEBPACK_IMPORTED_MODULE_1__.doTimeout)("".concat(t.uuid,".cropFill.watchTarget"),c,500)};return c(),t.bind("widthchange",o),t.bind("heightchange",o),t.hasData(r),{resize:r,watch:c,unwatch:function(){return(0,utilities_timeout_utils_js__WEBPACK_IMPORTED_MODULE_1__.clearTimeouts)("".concat(t.uuid,".cropFill.watchTarget"))}}}));
//# sourceMappingURL=plugin.js.map