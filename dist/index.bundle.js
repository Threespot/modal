!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(module,exports){module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="./index.js")}({"./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('//------------------------------------------------------------------------\n// Disable scrolling (e.g. when modal window is open)\n//\n// Inspired by https://benfrain.com/preventing-body-scroll-for-modals-in-ios/\n//\n// Note: Once Safari and iOS Safari support the “touch-action” CSS property,\n//       we can simply toggle a class that adds the following:\n//\n//       html,\n//       body {\n//         overflow: hidden !important;\n//         touch-action: none !important;\n//       }\n//\n//       /* Add class to elements like modal windows that still need to scroll */\n//       .allow-scroll { touch-action: auto !important; }\n//\n// https://caniuse.com/#feat=css-touch-action\n//------------------------------------------------------------------------\n\n\nmodule.exports = {\n  // Save current scroll position when scrolling is disabled so we can reset it when enabled\n  _scrollPos: 0,\n\n  // Track whether or not we have injected CSS the already\n  _hasCSS: false,\n\n  // Inject <style> tag with CSS rules (simpler than toggling a lot of inline styles)\n  _injectCSS: function _injectCSS() {\n\n    // Don’t add styles more than once\n    if (!this._hasCSS) {\n      var css = \'\\n        html.js-no-scroll { height: 100% !important; }\\n        .js-no-scroll body {\\n          height: 100%;\\n          overflow: hidden !important;\\n          position: fixed !important;\\n          width: 100% !important;\\n        }\';\n\n      // Note: Setting “position: fixed” on the body prevents iOS from scrolling.\n      //       However, this will cause the browser to scroll to the top, so we must\n      //       add inline “height” and “top” styles to the body to address this.\n\n      // Create <style> tag and add to <head>\n      // https://stackoverflow.com/a/524721/673457\n      var styleEl = document.createElement(\'style\');\n      styleEl.type = \'text/css\';\n      styleEl.appendChild(document.createTextNode(css));\n      document.head.appendChild(styleEl);\n\n      // Update var so we can avoid loading the CSS multiple times\n      this._hasCSS = true;\n    }\n  },\n\n  _saveScrollPos: function _saveScrollPos() {\n    this._scrollPos = window.pageYOffset || document.documentElement.scrollTop;\n  },\n\n  /**\n   * Disable scrolling\n   */\n  freeze: function freeze() {\n    // Add required inline CSS (only runs first time)\n    this._injectCSS();\n\n    this._saveScrollPos();\n\n    // Add class to prevent page scrolling (sets fixed position on body)\n    document.documentElement.classList.add("js-no-scroll");\n\n    // Add inline styles if not already at top of page\n    if (this._scrollPos > 0) {\n      document.body.style.height = "calc(100% + " + this._scrollPos + "px)";\n      document.body.style.top = -this._scrollPos + "px";\n    }\n  },\n\n  /**\n   * Enable scrolling\n   */\n  unfreeze: function unfreeze() {\n    // Remove js-no-scroll class\n    document.documentElement.classList.remove("js-no-scroll");\n\n    if (this._scrollPos > 0) {\n      // Remove inline styles on body, which causes the page to jump to the top.\n      document.body.style.height = "";\n      document.body.style.top = "";\n\n      // Disable native smooth scrolling before resetting the scroll position.\n      // Otherwise, there would be an annoying jump after scrolling is enabled.\n      if (document.documentElement.style.hasOwnProperty(\'scrollBehavior\')) {\n        document.documentElement.style.scrollBehavior = "auto";\n      }\n\n      // Reset scroll position to what it was before scrolling was disabled.\n      window.scrollTo(0, this._scrollPos);\n\n      // Re-enable native smooth scrolling\n      if (document.documentElement.style.hasOwnProperty(\'scrollBehavior\')) {\n        document.documentElement.style.scrollBehavior = "";\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack://%5Bname%5DLink/./index.js?')}})},function(t,e,n){var o,s;"undefined"!=typeof window&&window,void 0===(s="function"==typeof(o=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},o=n[t]=n[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var o=n.indexOf(e);return-1!=o&&n.splice(o,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],s=0;s<n.length;s++){var i=n[s];o&&o[i]&&(this.off(t,i),delete o[i]),i.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?o.call(e,n,e,t):o)||(t.exports=s)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var o=n(0),s=n.n(o),i=n(1);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=f(t);if(e){var s=f(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(l,t);var e,n,o,i=h(l);function l(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this)).options=Object.assign({},{transitionSpeed:100,activeClasses:"",modalContentClass:"Modal-content",onReady:null},e),n.options.activeClasses.length&&(n.options.activeClasses.indexOf(" ")>-1?n.options.activeClasses=n.options.activeClasses.split(" ").filter((function(t){return t.length})):n.options.activeClasses=[n.options.activeClasses]),n.el=t,n.el.classList.add("js-init"),n.isOpen=!1,n.hasToggles=!1,n.contentEl=n.el.querySelector(".Modal-content"),n.customContentEl=n.el.querySelector("."+n.options.modalContentClass)||n.contentEl,n.closeEls=n.el.querySelectorAll("[data-modal-close]"),n.el.id?(n.toggleEls=document.querySelectorAll('[data-modal="'.concat(n.el.id,'"]')),n.hasToggles=!!n.toggleEls.length):n.el.id=Math.random().toString(36).substr(2,4),n.prevFocusedEl=null,n.focusableEls=n.getFocusableEls(),n.focusableEls.length&&(n.firstFocusableEl=n.focusableEls[0],n.lastFocusableEl=n.focusableEls[n.focusableEls.length-1]),n.el.getAttribute("aria-label")||n.el.getAttribute("aria-labelledby")||console.warn("A11y Issue: Modal window should have an “aria-label” or “aria-labelledby” attribute",n.el),n.init(),n}return e=l,(n=[{key:"init",value:function(){var t=this;this.el.setAttribute("aria-hidden","true"),this.el.setAttribute("role","dialog"),this.hasToggles&&this.toggleEls.forEach((function(e){e.setAttribute("aria-controls",t.el.id),e.setAttribute("aria-expanded","false"),e.setAttribute("role","button")})),this.closeEls.length&&this.closeEls.forEach((function(t){t.setAttribute("role","button")})),this.bindEvents(),"function"==typeof this.options.onReady&&this.options.onReady()}},{key:"destroy",value:function(){this.el.removeAttribute("aria-hidden"),this.el.removeAttribute("role"),this.el.removeAttribute("tabindex"),this.hasToggles&&this.toggleEls.forEach((function(t){t.removeAttribute("aria-controls"),t.removeAttribute("aria-expanded"),t.removeAttribute("role")})),this.closeEls.length&&this.closeEls.forEach((function(t){t.removeAttribute("aria-label"),t.removeAttribute("role")})),this.unbindEvents(),this.emitEvent("destroy")}},{key:"getFocusableEls",value:function(){return r(this.el.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'))}},{key:"getFocusedEl",value:function(){return document.hasFocus()&&document.activeElement!==document.body&&document.activeElement!==document.documentElement?document.activeElement:null}},{key:"focusDelay",value:function(t){window.setTimeout((function(){return t.focus()}),this.options.transitionSpeed)}},{key:"windowClickHandler",value:function(t){var e=Array.prototype.indexOf.call(this.toggleEls,t.target.closest("[data-modal]"))>-1,n=document.body.contains(t.target);if(this.isOpen&&!e&&n){var o=this.customContentEl&&this.customContentEl.contains(t.target),s=this.customContentEl.isSameNode(t.target);o||s||this.close(t)}}},{key:"keydownHandler",value:function(t){if(!this.isOpen)return!1;if(27===t.which&&this.close(t),9===t.which){if(!this.focusableEls.length)return this.close(t),!1;var e=this.getFocusedEl();t.shiftKey||e!=this.lastFocusableEl?!t.shiftKey||e!=this.firstFocusableEl&&e!=this.contentEl||(t.preventDefault(),this.lastFocusableEl.focus()):(t.preventDefault(),this.firstFocusableEl.focus())}}},{key:"bindEvents",value:function(){var t=this;this.hasToggles&&(this.toggleClick=this.toggle.bind(this),this.toggleEls.forEach((function(e){e.addEventListener("click",t.toggleClick)}))),this.closeEls.length&&(this.closeClick=this.close.bind(this),this.closeEls.forEach((function(e){e.addEventListener("click",t.closeClick)}))),this.windowClick=this.windowClickHandler.bind(this),window.addEventListener("click",this.windowClick),this.keydown=this.keydownHandler.bind(this),window.addEventListener("keydown",this.keydown)}},{key:"unbindEvents",value:function(){var t=this;this.hasToggles&&this.toggleEls.forEach((function(e){e.removeEventListener("click",t.toggleClick)})),this.closeEls.length&&this.closeEls.forEach((function(e){e.removeEventListener("click",t.closeClick)})),window.removeEventListener("click",this.windowClick),window.removeEventListener("keydown",this.keydown)}},{key:"open",value:function(t){var e,n=this;t.preventDefault(),this.prevFocusedEl=this.getFocusedEl(),s.a.freeze(),this.contentEl&&(this.contentEl.scrollTop=0),this.el.setAttribute("aria-hidden","false"),this.options.activeClasses.length&&(e=this.el.classList).add.apply(e,r(this.options.activeClasses)),this.hasToggles&&this.toggleEls.forEach((function(t){var e;t.setAttribute("aria-expanded","true"),n.options.activeClasses.length&&(e=t.classList).add.apply(e,r(n.options.activeClasses))})),this.contentEl?(this.contentEl.setAttribute("tabindex","-1"),this.focusDelay(this.contentEl)):(this.el.setAttribute("tabindex","-1"),this.focusDelay(this.el)),this.isOpen=!0,this.emitEvent("open")}},{key:"close",value:function(t){var e,n=this;t.preventDefault(),this.el.setAttribute("aria-hidden","true"),this.options.activeClasses.length&&(e=this.el.classList).remove.apply(e,r(this.options.activeClasses)),this.hasToggles&&this.toggleEls.forEach((function(t){var e;t.setAttribute("aria-expanded","false"),n.options.activeClasses.length&&(e=t.classList).remove.apply(e,r(n.options.activeClasses))})),s.a.unfreeze(),this.prevFocusedEl?this.focusDelay(this.prevFocusedEl):this.hasToggles&&this.focusDelay(this.toggleEls[0]),this.isOpen=!1,this.emitEvent("close")}},{key:"toggle",value:function(t){this.isOpen?this.close(t):this.open(t)}}])&&c(e.prototype,n),o&&c(e,o),l}(n.n(i).a)}]);