/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2017 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(49);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(57);
	
	__webpack_require__(58);
	
	var _componentsDropDown = __webpack_require__(59);
	
	var _componentsDropDown2 = _interopRequireDefault(_componentsDropDown);
	
	var _componentsForm = __webpack_require__(60);
	
	var _componentsForm2 = _interopRequireDefault(_componentsForm);
	
	var _componentsProductMiniature = __webpack_require__(56);
	
	var _componentsProductMiniature2 = _interopRequireDefault(_componentsProductMiniature);
	
	var _componentsProductSelect = __webpack_require__(61);
	
	var _componentsProductSelect2 = _interopRequireDefault(_componentsProductSelect);
	
	var _componentsTopMenu = __webpack_require__(62);
	
	var _componentsTopMenu2 = _interopRequireDefault(_componentsTopMenu);
	
	var _prestashop = __webpack_require__(51);
	
	var _prestashop2 = _interopRequireDefault(_prestashop);
	
	var _events = __webpack_require__(63);
	
	var _events2 = _interopRequireDefault(_events);
	
	__webpack_require__(64);
	
	__webpack_require__(65);
	
	__webpack_require__(66);
	
	// "inherit" EventEmitter
	for (var i in _events2['default'].prototype) {
	  _prestashop2['default'][i] = _events2['default'].prototype[i];
	}
	
	jQuery(document).ready(function () {
	  var dropDownEl = jQuery('.js-dropdown');
	  var form = new _componentsForm2['default']();
	  var topMenuEl = jQuery('.js-top-menu ul[data-depth="0"]');
	  var dropDown = new _componentsDropDown2['default'](dropDownEl);
	  var topMenu = new _componentsTopMenu2['default'](topMenuEl);
	  var productMinitature = new _componentsProductMiniature2['default']();
	  var productSelect = new _componentsProductSelect2['default']();
	  jQuery('#product-zoom').zoom();
	
	  dropDown.init();
	  form.init();
	  topMenu.init();
	  productMinitature.init();
	  productSelect.init();
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Tether"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.4 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.Tether = factory();
	  }
	}(this, function() {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}
	
	var zeroElement = null;
	
	// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
	// if the element lies within a nested document (<frame> or <iframe>-like).
	function getActualBoundingClientRect(node) {
	  var boundingRect = node.getBoundingClientRect();
	
	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = {};
	  for (var k in boundingRect) {
	    rect[k] = boundingRect[k];
	  }
	
	  if (node.ownerDocument !== document) {
	    var _frameElement = node.ownerDocument.defaultView.frameElement;
	    if (_frameElement) {
	      var frameRect = getActualBoundingClientRect(_frameElement);
	      rect.top += frameRect.top;
	      rect.bottom += frameRect.top;
	      rect.left += frameRect.left;
	      rect.right += frameRect.left;
	    }
	  }
	
	  return rect;
	}
	
	function getScrollParents(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;
	  var parents = [];
	
	  if (position === 'fixed') {
	    return [el];
	  }
	
	  var parent = el;
	  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}
	
	    if (typeof style === 'undefined' || style === null) {
	      parents.push(parent);
	      return parents;
	    }
	
	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;
	
	    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        parents.push(parent);
	      }
	    }
	  }
	
	  parents.push(el.ownerDocument.body);
	
	  // If the node is within a frame, account for the parent window scroll
	  if (el.ownerDocument !== document) {
	    parents.push(el.ownerDocument.defaultView);
	  }
	
	  return parents;
	}
	
	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();
	
	var zeroPosCache = {};
	var getOrigin = function getOrigin() {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = zeroElement;
	  if (!node || !document.body.contains(node)) {
	    node = document.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });
	
	    document.body.appendChild(node);
	
	    zeroElement = node;
	  }
	
	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = getActualBoundingClientRect(node);
	
	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }
	
	  return zeroPosCache[id];
	};
	
	function removeUtilElements() {
	  if (zeroElement) {
	    document.body.removeChild(zeroElement);
	  }
	  zeroElement = null;
	};
	
	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }
	
	  var docEl = doc.documentElement;
	
	  var box = getActualBoundingClientRect(el);
	
	  var origin = getOrigin();
	
	  box.top -= origin.top;
	  box.left -= origin.left;
	
	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }
	
	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;
	
	  return box;
	}
	
	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}
	
	var _scrollBarSize = null;
	function getScrollBarSize() {
	  if (_scrollBarSize) {
	    return _scrollBarSize;
	  }
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });
	
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	
	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;
	
	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }
	
	  document.body.removeChild(outer);
	
	  var width = widthContained - widthScroll;
	
	  _scrollBarSize = { width: width, height: width };
	  return _scrollBarSize;
	}
	
	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var args = [];
	
	  Array.prototype.push.apply(args, arguments);
	
	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });
	
	  return out;
	}
	
	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |jQuery)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}
	
	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}
	
	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |jQuery)', 'gi').test(className);
	}
	
	function getClassName(el) {
	  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
	  // completely separately SVGAnimatedString base classes
	  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}
	
	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}
	
	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });
	
	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}
	
	var deferred = [];
	
	var defer = function defer(fn) {
	  deferred.push(fn);
	};
	
	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};
	
	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }
	
	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
	        return;
	      }
	
	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;
	
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        while (i < this.bindings[event].length) {
	          var _bindingsjQueryeventjQueryi = this.bindings[event][i];
	          var handler = _bindingsjQueryeventjQueryi.handler;
	          var ctx = _bindingsjQueryeventjQueryi.ctx;
	          var once = _bindingsjQueryeventjQueryi.once;
	
	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }
	
	          handler.apply(context, args);
	
	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);
	
	  return Evented;
	})();
	
	TetherBase.Utils = {
	  getActualBoundingClientRect: getActualBoundingClientRect,
	  getScrollParents: getScrollParents,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize,
	  removeUtilElements: removeUtilElements
	};
	/* globals TetherBase, performance */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}
	
	var _TetherBasejQueryUtils = TetherBase.Utils;
	var getScrollParents = _TetherBasejQueryUtils.getScrollParents;
	var getBounds = _TetherBasejQueryUtils.getBounds;
	var getOffsetParent = _TetherBasejQueryUtils.getOffsetParent;
	var extend = _TetherBasejQueryUtils.extend;
	var addClass = _TetherBasejQueryUtils.addClass;
	var removeClass = _TetherBasejQueryUtils.removeClass;
	var updateClasses = _TetherBasejQueryUtils.updateClasses;
	var defer = _TetherBasejQueryUtils.defer;
	var flush = _TetherBasejQueryUtils.flush;
	var getScrollBarSize = _TetherBasejQueryUtils.getScrollBarSize;
	var removeUtilElements = _TetherBasejQueryUtils.removeUtilElements;
	
	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	  return a + diff >= b && b >= a - diff;
	}
	
	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');
	
	  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();
	
	var tethers = [];
	
	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};
	
	function now() {
	  if (typeof performance === 'object' && typeof performance.now === 'function') {
	    return performance.now();
	  }
	  return +new Date();
	}
	
	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;
	
	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);
	
	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }
	
	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }
	
	    if (pendingTimeout != null) {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }
	
	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };
	
	  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();
	
	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};
	
	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};
	
	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};
	
	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;
	
	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }
	
	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }
	
	  return { left: left, top: top };
	};
	
	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;
	
	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }
	
	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }
	
	  return { left: left, top: top };
	};
	
	function addOffset() {
	  var out = { top: 0, left: 0 };
	
	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }
	
	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;
	
	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }
	
	    out.top += top;
	    out.left += left;
	  });
	
	  return out;
	}
	
	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }
	
	  return offset;
	}
	
	var parseOffset = function parseOffset(value) {
	  var _valuejQuerysplit = value.split(' ');
	
	  var _valuejQuerysplit2 = _slicedToArray(_valuejQuerysplit, 2);
	
	  var top = _valuejQuerysplit2[0];
	  var left = _valuejQuerysplit2[1];
	
	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;
	
	var TetherClass = (function (_Evented) {
	  _inherits(TetherClass, _Evented);
	
	  function TetherClass(options) {
	    var _this = this;
	
	    _classCallCheck(this, TetherClass);
	
	    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
	    this.position = this.position.bind(this);
	
	    tethers.push(this);
	
	    this.history = [];
	
	    this.setOptions(options, false);
	
	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });
	
	    this.position();
	  }
	
	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;
	
	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;
	
	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };
	
	      this.options = extend(defaults, options);
	
	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;
	
	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;
	
	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }
	
	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }
	
	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });
	
	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }
	
	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }
	
	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);
	
	      if (typeof this.scrollParents !== 'undefined') {
	        this.disable();
	      }
	
	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParents = [this.target];
	      } else {
	        this.scrollParents = getScrollParents(this.target);
	      }
	
	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);
	
	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };
	
	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;
	
	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;
	
	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }
	
	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;
	
	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }
	
	          var style = getComputedStyle(target);
	
	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
	
	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }
	
	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
	
	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };
	
	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }
	
	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }
	
	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
	
	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }
	
	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }
	
	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }
	
	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var _this3 = this;
	
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;
	
	      this.scrollParents.forEach(function (parent) {
	        if (parent !== _this3.target.ownerDocument) {
	          parent.addEventListener('scroll', _this3.position);
	        }
	      });
	
	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      var _this4 = this;
	
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;
	
	      if (typeof this.scrollParents !== 'undefined') {
	        this.scrollParents.forEach(function (parent) {
	          parent.removeEventListener('scroll', _this4.position);
	        });
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this5 = this;
	
	      this.disable();
	
	      tethers.forEach(function (tether, i) {
	        if (tether === _this5) {
	          tethers.splice(i, 1);
	        }
	      });
	
	      // Remove any elements we were using for convenience from the DOM
	      if (tethers.length === 0) {
	        removeUtilElements();
	      }
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this6 = this;
	
	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
	
	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }
	
	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;
	
	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }
	
	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this6.getClass('element-attached') + '-' + side);
	        all.push(_this6.getClass('target-attached') + '-' + side);
	      });
	
	      defer(function () {
	        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
	          return;
	        }
	
	        updateClasses(_this6.element, _this6._addAttachClasses, all);
	        if (!(_this6.options.addTargetClasses === false)) {
	          updateClasses(_this6.target, _this6._addAttachClasses, all);
	        }
	
	        delete _this6._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this7 = this;
	
	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)
	
	      if (!this.enabled) {
	        return;
	      }
	
	      this.clearCache();
	
	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
	
	      this.updateAttachClasses(this.attachment, targetAttachment);
	
	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this7.element);
	      });
	
	      var width = elementPos.width;
	      var height = elementPos.height;
	
	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;
	
	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }
	
	      var targetPos = this.cache('target-bounds', function () {
	        return _this7.getTargetBounds();
	      });
	      var targetSize = targetPos;
	
	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
	
	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
	
	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);
	
	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;
	
	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });
	
	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }
	
	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },
	
	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };
	
	      var doc = this.target.ownerDocument;
	      var win = doc.defaultView;
	
	      var scrollbarSize = undefined;
	      if (win.innerHeight > doc.documentElement.clientHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }
	
	      if (win.innerWidth > doc.documentElement.clientWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }
	
	      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = doc.body.scrollHeight - top - height;
	        next.page.right = doc.body.scrollWidth - left - width;
	      }
	
	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this7.cache('target-offsetparent', function () {
	            return getOffsetParent(_this7.target);
	          });
	          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;
	
	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });
	
	          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
	
	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;
	
	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }
	
	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.
	
	      this.move(next);
	
	      this.history.unshift(next);
	
	      if (this.history.length > 3) {
	        this.history.pop();
	      }
	
	      if (flushChanges) {
	        flush();
	      }
	
	      return true;
	    }
	
	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this8 = this;
	
	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }
	
	      var same = {};
	
	      for (var type in pos) {
	        same[type] = {};
	
	        for (var key in pos[type]) {
	          var found = false;
	
	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }
	
	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }
	
	      var css = { top: '', left: '', right: '', bottom: '' };
	
	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }
	
	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }
	
	          if (window.matchMedia) {
	            // HubSpot/tether#207
	            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
	            if (!retina) {
	              xPos = Math.round(xPos);
	              yPos = Math.round(yPos);
	            }
	          }
	
	          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
	
	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }
	
	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };
	
	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this8.cache('target-offsetparent', function () {
	            return getOffsetParent(_this8.target);
	          });
	
	          if (getOffsetParent(_this8.element) !== offsetParent) {
	            defer(function () {
	              _this8.element.parentNode.removeChild(_this8.element);
	              offsetParent.appendChild(_this8.element);
	            });
	          }
	
	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }
	
	      if (!moved) {
	        if (this.options.bodyElement) {
	          if (this.element.parentNode !== this.options.bodyElement) {
	            this.options.bodyElement.appendChild(this.element);
	          }
	        } else {
	          var offsetParentIsBody = true;
	          var currentNode = this.element.parentNode;
	          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
	            if (getComputedStyle(currentNode).position !== 'static') {
	              offsetParentIsBody = false;
	              break;
	            }
	
	            currentNode = currentNode.parentNode;
	          }
	
	          if (!offsetParentIsBody) {
	            this.element.parentNode.removeChild(this.element);
	            this.element.ownerDocument.body.appendChild(this.element);
	          }
	        }
	      }
	
	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];
	
	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }
	
	      if (write) {
	        defer(function () {
	          extend(_this8.element.style, writeCSS);
	          _this8.trigger('repositioned');
	        });
	      }
	    }
	  }]);
	
	  return TetherClass;
	})(Evented);
	
	TetherClass.modules = [];
	
	TetherBase.position = position;
	
	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _TetherBasejQueryUtils = TetherBase.Utils;
	var getBounds = _TetherBasejQueryUtils.getBounds;
	var extend = _TetherBasejQueryUtils.extend;
	var updateClasses = _TetherBasejQueryUtils.updateClasses;
	var defer = _TetherBasejQueryUtils.defer;
	
	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
	
	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParents[0];
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }
	
	  if (to === document) {
	    to = to.documentElement;
	  }
	
	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var node = to;
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);
	
	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
	
	      // Account any parent Frames scroll offset
	      if (node.ownerDocument !== document) {
	        var win = node.ownerDocument.defaultView;
	        to[0] += win.pageXOffset;
	        to[1] += win.pageYOffset;
	        to[2] += win.pageXOffset;
	        to[3] += win.pageYOffset;
	      }
	
	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }
	
	  return to;
	}
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;
	
	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;
	
	    if (!this.options.constraints) {
	      return true;
	    }
	
	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });
	
	    var height = _cache.height;
	    var width = _cache.width;
	
	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;
	
	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }
	
	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });
	
	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;
	
	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
	
	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;
	
	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });
	
	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });
	
	    var addClasses = [];
	
	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);
	
	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;
	
	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }
	
	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachmentjQuerysplit = attachment.split(' ');
	
	        var _attachmentjQuerysplit2 = _slicedToArray(_attachmentjQuerysplit, 2);
	
	        changeAttachY = _attachmentjQuerysplit2[0];
	        changeAttachX = _attachmentjQuerysplit2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }
	
	      var bounds = getBoundingRect(_this, to);
	
	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }
	
	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }
	
	      if (changeAttachY === 'together') {
	        if (tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom' && top < bounds[1]) {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	
	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
	            top -= height - targetHeight;
	            tAttachment.top = 'bottom';
	
	            eAttachment.top = 'bottom';
	          }
	        }
	
	        if (tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top' && top + height > bounds[3]) {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
	            top += height - targetHeight;
	            tAttachment.top = 'top';
	
	            eAttachment.top = 'top';
	          }
	        }
	
	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }
	
	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }
	
	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }
	
	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	
	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	
	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }
	
	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }
	
	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }
	
	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0]) {
	          if (eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'center') {
	            left += width / 2;
	            eAttachment.left = 'left';
	          }
	        }
	
	        if (left + width > bounds[2]) {
	          if (eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'center') {
	            left -= width / 2;
	            eAttachment.left = 'right';
	          }
	        }
	      }
	
	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }
	
	      pin = pin || [];
	
	      var pinned = [];
	      var oob = [];
	
	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }
	
	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }
	
	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }
	
	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }
	
	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }
	
	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }
	
	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }
	
	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }
	
	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }
	
	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	        _this.trigger('update', {
	          attachment: eAttachment,
	          targetAttachment: tAttachment
	        });
	      }
	    });
	
	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });
	
	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */
	
	'use strict';
	
	var _TetherBasejQueryUtils = TetherBase.Utils;
	var getBounds = _TetherBasejQueryUtils.getBounds;
	var updateClasses = _TetherBasejQueryUtils.updateClasses;
	var defer = _TetherBasejQueryUtils.defer;
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;
	
	    var top = _ref.top;
	    var left = _ref.left;
	
	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });
	
	    var height = _cache.height;
	    var width = _cache.width;
	
	    var targetPos = this.getTargetBounds();
	
	    var bottom = top + height;
	    var right = left + width;
	
	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }
	
	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }
	
	    var allClasses = [];
	    var addClasses = [];
	
	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });
	
	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }
	
	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });
	
	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });
	
	    return true;
	  }
	});
	/* globals TetherBase */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;
	
	    if (!this.options.shift) {
	      return;
	    }
	
	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }
	
	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];
	
	      var _shift = shift;
	
	      var _shift2 = _slicedToArray(_shift, 2);
	
	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];
	
	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }
	
	    top += shiftTop;
	    left += shiftLeft;
	
	    return { top: top, left: left };
	  }
	});
	return Tether;
	
	}));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)
	 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(jQuery),+function(a){"use strict";function b(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(a){function b(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function c(a){return(a[0]||a).nodeType}function d(){return{bindType:h.end,delegateType:h.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}}}function e(){if(window.QUnit)return!1;var a=document.createElement("bootstrap");for(var b in j)if(void 0!==a.style[b])return{end:j[b]};return!1}function f(b){var c=this,d=!1;return a(this).one(k.TRANSITION_END,function(){d=!0}),setTimeout(function(){d||k.triggerTransitionEnd(c)},b),this}function g(){h=e(),a.fn.emulateTransitionEnd=f,k.supportsTransitionEnd()&&(a.event.special[k.TRANSITION_END]=d())}var h=!1,i=1e6,j={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},k={TRANSITION_END:"bsTransitionEnd",getUID:function(a){do a+=~~(Math.random()*i);while(document.getElementById(a));return a},getSelectorFromElement:function(a){var b=a.getAttribute("data-target");return b||(b=a.getAttribute("href")||"",b=/^#[a-z]/i.test(b)?b:null),b},reflow:function(a){new Function("bs","return bs")(a.offsetHeight)},triggerTransitionEnd:function(b){a(b).trigger(h.end)},supportsTransitionEnd:function(){return Boolean(h)},typeCheckConfig:function(a,d,e){for(var f in e)if(e.hasOwnProperty(f)){var g=e[f],h=d[f],i=void 0;if(i=h&&c(h)?"element":b(h),!new RegExp(g).test(i))throw new Error(a.toUpperCase()+": "+('Option "'+f+'" provided type "'+i+'" ')+('but expected type "'+g+'".'))}}};return g(),k}(jQuery),g=(function(a){var b="alert",d="4.0.0-alpha.4",g="bs.alert",h="."+g,i=".data-api",j=a.fn[b],k=150,l={DISMISS:'[data-dismiss="alert"]'},m={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+i},n={ALERT:"alert",FADE:"fade",IN:"in"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"close",value:function(a){a=a||this._element;var b=this._getRootElement(a),c=this._triggerCloseEvent(b);c.isDefaultPrevented()||this._removeElement(b)}},{key:"dispose",value:function(){a.removeData(this._element,g),this._element=null}},{key:"_getRootElement",value:function(b){var c=f.getSelectorFromElement(b),d=!1;return c&&(d=a(c)[0]),d||(d=a(b).closest("."+n.ALERT)[0]),d}},{key:"_triggerCloseEvent",value:function(b){var c=a.Event(m.CLOSE);return a(b).trigger(c),c}},{key:"_removeElement",value:function(b){return a(b).removeClass(n.IN),f.supportsTransitionEnd()&&a(b).hasClass(n.FADE)?void a(b).one(f.TRANSITION_END,a.proxy(this._destroyElement,this,b)).emulateTransitionEnd(k):void this._destroyElement(b)}},{key:"_destroyElement",value:function(b){a(b).detach().trigger(m.CLOSED).remove()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);e||(e=new b(this),d.data(g,e)),"close"===c&&e[c](this)})}},{key:"_handleDismiss",value:function(a){return function(b){b&&b.preventDefault(),a.close(this)}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(m.CLICK_DATA_API,l.DISMISS,o._handleDismiss(new o)),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){var b="button",d="4.0.0-alpha.4",f="bs.button",g="."+f,h=".data-api",i=a.fn[b],j={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},k={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},l={CLICK_DATA_API:"click"+g+h,FOCUS_BLUR_DATA_API:"focus"+g+h+" "+("blur"+g+h)},m=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"toggle",value:function(){var b=!0,c=a(this._element).closest(k.DATA_TOGGLE)[0];if(c){var d=a(this._element).find(k.INPUT)[0];if(d){if("radio"===d.type)if(d.checked&&a(this._element).hasClass(j.ACTIVE))b=!1;else{var e=a(c).find(k.ACTIVE)[0];e&&a(e).removeClass(j.ACTIVE)}b&&(d.checked=!a(this._element).hasClass(j.ACTIVE),a(this._element).trigger("change")),d.focus()}}else this._element.setAttribute("aria-pressed",!a(this._element).hasClass(j.ACTIVE));b&&a(this._element).toggleClass(j.ACTIVE)}},{key:"dispose",value:function(){a.removeData(this._element,f),this._element=null}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(f);d||(d=new b(this),a(this).data(f,d)),"toggle"===c&&d[c]()})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,k.DATA_TOGGLE_CARROT,function(b){b.preventDefault();var c=b.target;a(c).hasClass(j.BUTTON)||(c=a(c).closest(k.BUTTON)),m._jQueryInterface.call(a(c),"toggle")}).on(l.FOCUS_BLUR_DATA_API,k.DATA_TOGGLE_CARROT,function(b){var c=a(b.target).closest(k.BUTTON)[0];a(c).toggleClass(j.FOCUS,/^focus(in)?jQuery/.test(b.type))}),a.fn[b]=m._jQueryInterface,a.fn[b].Constructor=m,a.fn[b].noConflict=function(){return a.fn[b]=i,m._jQueryInterface},m}(jQuery),function(a){var b="carousel",d="4.0.0-alpha.4",g="bs.carousel",h="."+g,i=".data-api",j=a.fn[b],k=600,l=37,m=39,n={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},o={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},p={NEXT:"next",PREVIOUS:"prev"},q={SLIDE:"slide"+h,SLID:"slid"+h,KEYDOWN:"keydown"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h,LOAD_DATA_API:"load"+h+i,CLICK_DATA_API:"click"+h+i},r={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"right",LEFT:"left",ITEM:"carousel-item"},s={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},t=function(){function i(b,d){c(this,i),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(d),this._element=a(b)[0],this._indicatorsElement=a(this._element).find(s.INDICATORS)[0],this._addEventListeners()}return e(i,[{key:"next",value:function(){this._isSliding||this._slide(p.NEXT)}},{key:"nextWhenVisible",value:function(){document.hidden||this.next()}},{key:"prev",value:function(){this._isSliding||this._slide(p.PREVIOUS)}},{key:"pause",value:function(b){b||(this._isPaused=!0),a(this._element).find(s.NEXT_PREV)[0]&&f.supportsTransitionEnd()&&(f.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}},{key:"cycle",value:function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(a.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))}},{key:"to",value:function(b){var c=this;this._activeElement=a(this._element).find(s.ACTIVE_ITEM)[0];var d=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||b<0)){if(this._isSliding)return void a(this._element).one(q.SLID,function(){return c.to(b)});if(d===b)return this.pause(),void this.cycle();var e=b>d?p.NEXT:p.PREVIOUS;this._slide(e,this._items[b])}}},{key:"dispose",value:function(){a(this._element).off(h),a.removeData(this._element,g),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}},{key:"_getConfig",value:function(c){return c=a.extend({},n,c),f.typeCheckConfig(b,c,o),c}},{key:"_addEventListeners",value:function(){this._config.keyboard&&a(this._element).on(q.KEYDOWN,a.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||a(this._element).on(q.MOUSEENTER,a.proxy(this.pause,this)).on(q.MOUSELEAVE,a.proxy(this.cycle,this))}},{key:"_keydown",value:function(a){if(a.preventDefault(),!/input|textarea/i.test(a.target.tagName))switch(a.which){case l:this.prev();break;case m:this.next();break;default:return}}},{key:"_getItemIndex",value:function(b){return this._items=a.makeArray(a(b).parent().find(s.ITEM)),this._items.indexOf(b)}},{key:"_getItemByDirection",value:function(a,b){var c=a===p.NEXT,d=a===p.PREVIOUS,e=this._getItemIndex(b),f=this._items.length-1,g=d&&0===e||c&&e===f;if(g&&!this._config.wrap)return b;var h=a===p.PREVIOUS?-1:1,i=(e+h)%this._items.length;return i===-1?this._items[this._items.length-1]:this._items[i]}},{key:"_triggerSlideEvent",value:function(b,c){var d=a.Event(q.SLIDE,{relatedTarget:b,direction:c});return a(this._element).trigger(d),d}},{key:"_setActiveIndicatorElement",value:function(b){if(this._indicatorsElement){a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);var c=this._indicatorsElement.children[this._getItemIndex(b)];c&&a(c).addClass(r.ACTIVE)}}},{key:"_slide",value:function(b,c){var d=this,e=a(this._element).find(s.ACTIVE_ITEM)[0],g=c||e&&this._getItemByDirection(b,e),h=Boolean(this._interval),i=b===p.NEXT?r.LEFT:r.RIGHT;if(g&&a(g).hasClass(r.ACTIVE))return void(this._isSliding=!1);var j=this._triggerSlideEvent(g,i);if(!j.isDefaultPrevented()&&e&&g){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(g);var l=a.Event(q.SLID,{relatedTarget:g,direction:i});f.supportsTransitionEnd()&&a(this._element).hasClass(r.SLIDE)?(a(g).addClass(b),f.reflow(g),a(e).addClass(i),a(g).addClass(i),a(e).one(f.TRANSITION_END,function(){a(g).removeClass(i).removeClass(b),a(g).addClass(r.ACTIVE),a(e).removeClass(r.ACTIVE).removeClass(b).removeClass(i),d._isSliding=!1,setTimeout(function(){return a(d._element).trigger(l)},0)}).emulateTransitionEnd(k)):(a(e).removeClass(r.ACTIVE),a(g).addClass(r.ACTIVE),this._isSliding=!1,a(this._element).trigger(l)),h&&this.cycle()}}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d=a.extend({},n,a(this).data());"object"==typeof b&&a.extend(d,b);var e="string"==typeof b?b:d.slide;if(c||(c=new i(this,d),a(this).data(g,c)),"number"==typeof b)c.to(b);else if("string"==typeof e){if(void 0===c[e])throw new Error('No method named "'+e+'"');c[e]()}else d.interval&&(c.pause(),c.cycle())})}},{key:"_dataApiClickHandler",value:function(b){var c=f.getSelectorFromElement(this);if(c){var d=a(c)[0];if(d&&a(d).hasClass(r.CAROUSEL)){var e=a.extend({},a(d).data(),a(this).data()),h=this.getAttribute("data-slide-to");h&&(e.interval=!1),i._jQueryInterface.call(a(d),e),h&&a(d).data(g).to(h),b.preventDefault()}}}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return n}}]),i}();return a(document).on(q.CLICK_DATA_API,s.DATA_SLIDE,t._dataApiClickHandler),a(window).on(q.LOAD_DATA_API,function(){a(s.DATA_RIDE).each(function(){var b=a(this);t._jQueryInterface.call(b,b.data())})}),a.fn[b]=t._jQueryInterface,a.fn[b].Constructor=t,a.fn[b].noConflict=function(){return a.fn[b]=j,t._jQueryInterface},t}(jQuery),function(a){var b="collapse",d="4.0.0-alpha.4",g="bs.collapse",h="."+g,i=".data-api",j=a.fn[b],k=600,l={toggle:!0,parent:""},m={toggle:"boolean",parent:"string"},n={SHOW:"show"+h,SHOWN:"shown"+h,HIDE:"hide"+h,HIDDEN:"hidden"+h,CLICK_DATA_API:"click"+h+i},o={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},q={ACTIVES:".panel > .in, .panel > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},r=function(){function h(b,d){c(this,h),this._isTransitioning=!1,this._element=b,this._config=this._getConfig(d),this._triggerArray=a.makeArray(a('[data-toggle="collapse"][href="#'+b.id+'"],'+('[data-toggle="collapse"][data-target="#'+b.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return e(h,[{key:"toggle",value:function(){a(this._element).hasClass(o.IN)?this.hide():this.show()}},{key:"show",value:function(){var b=this;if(!this._isTransitioning&&!a(this._element).hasClass(o.IN)){var c=void 0,d=void 0;if(this._parent&&(c=a.makeArray(a(q.ACTIVES)),c.length||(c=null)),!(c&&(d=a(c).data(g),d&&d._isTransitioning))){var e=a.Event(n.SHOW);if(a(this._element).trigger(e),!e.isDefaultPrevented()){c&&(h._jQueryInterface.call(a(c),"hide"),d||a(c).data(g,null));var i=this._getDimension();a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING),this._element.style[i]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var j=function(){a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN),b._element.style[i]="",b.setTransitioning(!1),a(b._element).trigger(n.SHOWN)};if(!f.supportsTransitionEnd())return void j();var l=i[0].toUpperCase()+i.slice(1),m="scroll"+l;a(this._element).one(f.TRANSITION_END,j).emulateTransitionEnd(k),this._element.style[i]=this._element[m]+"px"}}}}},{key:"hide",value:function(){var b=this;if(!this._isTransitioning&&a(this._element).hasClass(o.IN)){var c=a.Event(n.HIDE);if(a(this._element).trigger(c),!c.isDefaultPrevented()){var d=this._getDimension(),e=d===p.WIDTH?"offsetWidth":"offsetHeight";this._element.style[d]=this._element[e]+"px",f.reflow(this._element),a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var g=function(){b.setTransitioning(!1),a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)};return this._element.style[d]=0,f.supportsTransitionEnd()?void a(this._element).one(f.TRANSITION_END,g).emulateTransitionEnd(k):void g()}}}},{key:"setTransitioning",value:function(a){this._isTransitioning=a}},{key:"dispose",value:function(){a.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(c){return c=a.extend({},l,c),c.toggle=Boolean(c.toggle),f.typeCheckConfig(b,c,m),c}},{key:"_getDimension",value:function(){var b=a(this._element).hasClass(p.WIDTH);return b?p.WIDTH:p.HEIGHT}},{key:"_getParent",value:function(){var b=this,c=a(this._config.parent)[0],d='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return a(c).find(d).each(function(a,c){b._addAriaAndCollapsedClass(h._getTargetFromElement(c),[c])}),c}},{key:"_addAriaAndCollapsedClass",value:function(b,c){if(b){var d=a(b).hasClass(o.IN);b.setAttribute("aria-expanded",d),c.length&&a(c).toggleClass(o.COLLAPSED,!d).attr("aria-expanded",d)}}}],[{key:"_getTargetFromElement",value:function(b){var c=f.getSelectorFromElement(b);return c?a(c)[0]:null}},{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this),d=c.data(g),e=a.extend({},l,c.data(),"object"==typeof b&&b);if(!d&&e.toggle&&/show|hide/.test(b)&&(e.toggle=!1),d||(d=new h(this,e),c.data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}}]),h}();return a(document).on(n.CLICK_DATA_API,q.DATA_TOGGLE,function(b){b.preventDefault();var c=r._getTargetFromElement(this),d=a(c).data(g),e=d?"toggle":a(this).data();r._jQueryInterface.call(a(c),e)}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="dropdown",d="4.0.0-alpha.4",g="bs.dropdown",h="."+g,i=".data-api",j=a.fn[b],k=27,l=38,m=40,n=3,o={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK:"click"+h,CLICK_DATA_API:"click"+h+i,KEYDOWN_DATA_API:"keydown"+h+i},p={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},q={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},r=function(){function b(a){c(this,b),this._element=a,this._addEventListeners()}return e(b,[{key:"toggle",value:function(){if(this.disabled||a(this).hasClass(p.DISABLED))return!1;var c=b._getParentFromElement(this),d=a(c).hasClass(p.OPEN);if(b._clearMenus(),d)return!1;if("ontouchstart"in document.documentElement&&!a(c).closest(q.NAVBAR_NAV).length){var e=document.createElement("div");e.className=p.BACKDROP,a(e).insertBefore(this),a(e).on("click",b._clearMenus)}var f={relatedTarget:this},g=a.Event(o.SHOW,f);return a(c).trigger(g),!g.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded","true"),a(c).toggleClass(p.OPEN),a(c).trigger(a.Event(o.SHOWN,f)),!1)}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._element).off(h),this._element=null}},{key:"_addEventListeners",value:function(){a(this._element).on(o.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(g);if(d||a(this).data(g,d=new b(this)),"string"==typeof c){if(void 0===d[c])throw new Error('No method named "'+c+'"');d[c].call(this)}})}},{key:"_clearMenus",value:function(c){if(!c||c.which!==n){var d=a(q.BACKDROP)[0];d&&d.parentNode.removeChild(d);for(var e=a.makeArray(a(q.DATA_TOGGLE)),f=0;f<e.length;f++){var g=b._getParentFromElement(e[f]),h={relatedTarget:e[f]};if(a(g).hasClass(p.OPEN)&&!(c&&"click"===c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(g,c.target))){var i=a.Event(o.HIDE,h);a(g).trigger(i),i.isDefaultPrevented()||(e[f].setAttribute("aria-expanded","false"),a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN,h)))}}}}},{key:"_getParentFromElement",value:function(b){var c=void 0,d=f.getSelectorFromElement(b);return d&&(c=a(d)[0]),c||b.parentNode}},{key:"_dataApiKeydownHandler",value:function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)&&(c.preventDefault(),c.stopPropagation(),!this.disabled&&!a(this).hasClass(p.DISABLED))){var d=b._getParentFromElement(this),e=a(d).hasClass(p.OPEN);if(!e&&c.which!==k||e&&c.which===k){if(c.which===k){var f=a(d).find(q.DATA_TOGGLE)[0];a(f).trigger("focus")}return void a(this).trigger("click")}var g=a.makeArray(a(q.VISIBLE_ITEMS));if(g=g.filter(function(a){return a.offsetWidth||a.offsetHeight}),g.length){var h=g.indexOf(c.target);c.which===l&&h>0&&h--,c.which===m&&h<g.length-1&&h++,h<0&&(h=0),g[h].focus()}}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(o.KEYDOWN_DATA_API,q.DATA_TOGGLE,r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API,q.ROLE_MENU,r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API,q.ROLE_LISTBOX,r._dataApiKeydownHandler).on(o.CLICK_DATA_API,r._clearMenus).on(o.CLICK_DATA_API,q.DATA_TOGGLE,r.prototype.toggle).on(o.CLICK_DATA_API,q.FORM_CHILD,function(a){a.stopPropagation()}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="modal",d="4.0.0-alpha.4",g="bs.modal",h="."+g,i=".data-api",j=a.fn[b],k=300,l=150,m=27,n={backdrop:!0,keyboard:!0,focus:!0,show:!0},o={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},p={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,FOCUSIN:"focusin"+h,RESIZE:"resize"+h,CLICK_DISMISS:"click.dismiss"+h,KEYDOWN_DISMISS:"keydown.dismiss"+h,MOUSEUP_DISMISS:"mouseup.dismiss"+h,MOUSEDOWN_DISMISS:"mousedown.dismiss"+h,CLICK_DATA_API:"click"+h+i},q={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in"},r={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"},s=function(){function i(b,d){c(this,i),this._config=this._getConfig(d),this._element=b,this._dialog=a(b).find(r.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return e(i,[{key:"toggle",value:function(a){return this._isShown?this.hide():this.show(a)}},{key:"show",value:function(b){var c=this,d=a.Event(p.SHOW,{relatedTarget:b});a(this._element).trigger(d),this._isShown||d.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),a(document.body).addClass(q.OPEN),this._setEscapeEvent(),this._setResizeEvent(),a(this._element).on(p.CLICK_DISMISS,r.DATA_DISMISS,a.proxy(this.hide,this)),a(this._dialog).on(p.MOUSEDOWN_DISMISS,function(){a(c._element).one(p.MOUSEUP_DISMISS,function(b){a(b.target).is(c._element)&&(c._ignoreBackdropClick=!0)})}),this._showBackdrop(a.proxy(this._showElement,this,b)))}},{key:"hide",value:function(b){b&&b.preventDefault();var c=a.Event(p.HIDE);a(this._element).trigger(c),this._isShown&&!c.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),a(document).off(p.FOCUSIN),a(this._element).removeClass(q.IN),a(this._element).off(p.CLICK_DISMISS),a(this._dialog).off(p.MOUSEDOWN_DISMISS),f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE)?a(this._element).one(f.TRANSITION_END,a.proxy(this._hideModal,this)).emulateTransitionEnd(k):this._hideModal())}},{key:"dispose",value:function(){a.removeData(this._element,g),a(window).off(h),a(document).off(h),a(this._element).off(h),a(this._backdrop).off(h),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null}},{key:"_getConfig",value:function(c){return c=a.extend({},n,c),f.typeCheckConfig(b,c,o),c}},{key:"_showElement",value:function(b){var c=this,d=f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,d&&f.reflow(this._element),a(this._element).addClass(q.IN),this._config.focus&&this._enforceFocus();var e=a.Event(p.SHOWN,{relatedTarget:b}),g=function(){c._config.focus&&c._element.focus(),a(c._element).trigger(e)};d?a(this._dialog).one(f.TRANSITION_END,g).emulateTransitionEnd(k):g()}},{key:"_enforceFocus",value:function(){var b=this;a(document).off(p.FOCUSIN).on(p.FOCUSIN,function(c){document===c.target||b._element===c.target||a(b._element).has(c.target).length||b._element.focus()})}},{key:"_setEscapeEvent",value:function(){var b=this;this._isShown&&this._config.keyboard?a(this._element).on(p.KEYDOWN_DISMISS,function(a){a.which===m&&b.hide()}):this._isShown||a(this._element).off(p.KEYDOWN_DISMISS)}},{key:"_setResizeEvent",value:function(){this._isShown?a(window).on(p.RESIZE,a.proxy(this._handleUpdate,this)):a(window).off(p.RESIZE)}},{key:"_hideModal",value:function(){var b=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._showBackdrop(function(){a(document.body).removeClass(q.OPEN),b._resetAdjustments(),b._resetScrollbar(),a(b._element).trigger(p.HIDDEN)})}},{key:"_removeBackdrop",value:function(){this._backdrop&&(a(this._backdrop).remove(),this._backdrop=null)}},{key:"_showBackdrop",value:function(b){var c=this,d=a(this._element).hasClass(q.FADE)?q.FADE:"";if(this._isShown&&this._config.backdrop){var e=f.supportsTransitionEnd()&&d;if(this._backdrop=document.createElement("div"),this._backdrop.className=q.BACKDROP,d&&a(this._backdrop).addClass(d),a(this._backdrop).appendTo(document.body),a(this._element).on(p.CLICK_DISMISS,function(a){return c._ignoreBackdropClick?void(c._ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"===c._config.backdrop?c._element.focus():c.hide()))}),e&&f.reflow(this._backdrop),a(this._backdrop).addClass(q.IN),!b)return;if(!e)return void b();a(this._backdrop).one(f.TRANSITION_END,b).emulateTransitionEnd(l)}else if(!this._isShown&&this._backdrop){a(this._backdrop).removeClass(q.IN);var g=function(){c._removeBackdrop(),b&&b()};f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE)?a(this._backdrop).one(f.TRANSITION_END,g).emulateTransitionEnd(l):g()}else b&&b()}},{key:"_handleUpdate",value:function(){this._adjustDialog()}},{key:"_adjustDialog",value:function(){var a=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&a&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!a&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}},{key:"_resetAdjustments",value:function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function(){var b=parseInt(a(r.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=b+this._scrollbarWidth+"px")}},{key:"_resetScrollbar",value:function(){document.body.style.paddingRight=this._originalBodyPadding}},{key:"_getScrollbarWidth",value:function(){var a=document.createElement("div");a.className=q.SCROLLBAR_MEASURER,document.body.appendChild(a);var b=a.offsetWidth-a.clientWidth;return document.body.removeChild(a),b}}],[{key:"_jQueryInterface",value:function(b,c){return this.each(function(){var d=a(this).data(g),e=a.extend({},i.Default,a(this).data(),"object"==typeof b&&b);if(d||(d=new i(this,e),a(this).data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b](c)}else e.show&&d.show(c)})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return n}}]),i}();return a(document).on(p.CLICK_DATA_API,r.DATA_TOGGLE,function(b){var c=this,d=void 0,e=f.getSelectorFromElement(this);e&&(d=a(e)[0]);var h=a(d).data(g)?"toggle":a.extend({},a(d).data(),a(this).data());"A"===this.tagName&&b.preventDefault();var i=a(d).one(p.SHOW,function(b){b.isDefaultPrevented()||i.one(p.HIDDEN,function(){a(c).is(":visible")&&c.focus()})});s._jQueryInterface.call(a(d),h,this)}),a.fn[b]=s._jQueryInterface,a.fn[b].Constructor=s,a.fn[b].noConflict=function(){return a.fn[b]=j,s._jQueryInterface},s}(jQuery),function(a){var b="scrollspy",d="4.0.0-alpha.4",g="bs.scrollspy",h="."+g,i=".data-api",j=a.fn[b],k={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},m={ACTIVATE:"activate"+h,SCROLL:"scroll"+h,LOAD_DATA_API:"load"+h+i},n={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",NAV_LINK:"nav-link",NAV:"nav",ACTIVE:"active"},o={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p={OFFSET:"offset",POSITION:"position"},q=function(){function i(b,d){c(this,i),this._element=b,this._scrollElement="BODY"===b.tagName?window:b,this._config=this._getConfig(d),this._selector=this._config.target+" "+o.NAV_LINKS+","+(this._config.target+" "+o.DROPDOWN_ITEMS),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,a(this._scrollElement).on(m.SCROLL,a.proxy(this._process,this)),this.refresh(),this._process()}return e(i,[{key:"refresh",value:function(){var b=this,c=this._scrollElement!==this._scrollElement.window?p.POSITION:p.OFFSET,d="auto"===this._config.method?c:this._config.method,e=d===p.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var g=a.makeArray(a(this._selector));g.map(function(b){var c=void 0,g=f.getSelectorFromElement(b);return g&&(c=a(g)[0]),c&&(c.offsetWidth||c.offsetHeight)?[a(c)[d]().top+e,g]:null}).filter(function(a){return a}).sort(function(a,b){return a[0]-b[0]}).forEach(function(a){b._offsets.push(a[0]),b._targets.push(a[1])})}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._scrollElement).off(h),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}},{key:"_getConfig",value:function(c){if(c=a.extend({},k,c),"string"!=typeof c.target){var d=a(c.target).attr("id");d||(d=f.getUID(b),a(c.target).attr("id",d)),c.target="#"+d}return f.typeCheckConfig(b,c,l),c}},{key:"_getScrollTop",value:function(){return this._scrollElement===window?this._scrollElement.scrollY:this._scrollElement.scrollTop}},{key:"_getScrollHeight",value:function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"_process",value:function(){var a=this._getScrollTop()+this._config.offset,b=this._getScrollHeight(),c=this._config.offset+b-this._scrollElement.offsetHeight;if(this._scrollHeight!==b&&this.refresh(),a>=c){var d=this._targets[this._targets.length-1];this._activeTarget!==d&&this._activate(d)}if(this._activeTarget&&a<this._offsets[0])return this._activeTarget=null,void this._clear();for(var e=this._offsets.length;e--;){var f=this._activeTarget!==this._targets[e]&&a>=this._offsets[e]&&(void 0===this._offsets[e+1]||a<this._offsets[e+1]);f&&this._activate(this._targets[e])}}},{key:"_activate",value:function(b){this._activeTarget=b,this._clear();var c=this._selector.split(",");c=c.map(function(a){return a+'[data-target="'+b+'"],'+(a+'[href="'+b+'"]')});var d=a(c.join(","));d.hasClass(n.DROPDOWN_ITEM)?(d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE),d.addClass(n.ACTIVE)):d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE),a(this._scrollElement).trigger(m.ACTIVATE,{relatedTarget:b})}},{key:"_clear",value:function(){a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b&&b||null;if(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return k}}]),i}();return a(window).on(m.LOAD_DATA_API,function(){for(var b=a.makeArray(a(o.DATA_SPY)),c=b.length;c--;){var d=a(b[c]);q._jQueryInterface.call(d,d.data())}}),a.fn[b]=q._jQueryInterface,a.fn[b].Constructor=q,a.fn[b].noConflict=function(){return a.fn[b]=j,q._jQueryInterface},q}(jQuery),function(a){var b="tab",d="4.0.0-alpha.4",g="bs.tab",h="."+g,i=".data-api",j=a.fn[b],k=150,l={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK_DATA_API:"click"+h+i},m={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",FADE:"fade",IN:"in"},n={A:"a",LI:"li",DROPDOWN:".dropdown",UL:"ul:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",
	ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"show",value:function(){var b=this;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE||!a(this._element).hasClass(m.ACTIVE)){var c=void 0,d=void 0,e=a(this._element).closest(n.UL)[0],g=f.getSelectorFromElement(this._element);e&&(d=a.makeArray(a(e).find(n.ACTIVE)),d=d[d.length-1]);var h=a.Event(l.HIDE,{relatedTarget:this._element}),i=a.Event(l.SHOW,{relatedTarget:d});if(d&&a(d).trigger(h),a(this._element).trigger(i),!i.isDefaultPrevented()&&!h.isDefaultPrevented()){g&&(c=a(g)[0]),this._activate(this._element,e);var j=function(){var c=a.Event(l.HIDDEN,{relatedTarget:b._element}),e=a.Event(l.SHOWN,{relatedTarget:d});a(d).trigger(c),a(b._element).trigger(e)};c?this._activate(c,c.parentNode,j):j()}}}},{key:"dispose",value:function(){a.removeClass(this._element,g),this._element=null}},{key:"_activate",value:function(b,c,d){var e=a(c).find(n.ACTIVE_CHILD)[0],g=d&&f.supportsTransitionEnd()&&(e&&a(e).hasClass(m.FADE)||Boolean(a(c).find(n.FADE_CHILD)[0])),h=a.proxy(this._transitionComplete,this,b,e,g,d);e&&g?a(e).one(f.TRANSITION_END,h).emulateTransitionEnd(k):h(),e&&a(e).removeClass(m.IN)}},{key:"_transitionComplete",value:function(b,c,d,e){if(c){a(c).removeClass(m.ACTIVE);var g=a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];g&&a(g).removeClass(m.ACTIVE),c.setAttribute("aria-expanded",!1)}if(a(b).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0),d?(f.reflow(b),a(b).addClass(m.IN)):a(b).removeClass(m.FADE),b.parentNode&&a(b.parentNode).hasClass(m.DROPDOWN_MENU)){var h=a(b).closest(n.DROPDOWN)[0];h&&a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0)}e&&e()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);if(e||(e=e=new b(this),d.data(g,e)),"string"==typeof c){if(void 0===e[c])throw new Error('No method named "'+c+'"');e[c]()}})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,n.DATA_TOGGLE,function(b){b.preventDefault(),o._jQueryInterface.call(a(this),"show")}),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){if(void 0===window.Tether)throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");var b="tooltip",d="4.0.0-alpha.4",g="bs.tooltip",h="."+g,i=a.fn[b],j=150,k="bs-tether",l={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[]},m={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array"},n={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},o={IN:"in",OUT:"out"},p={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,INSERTED:"inserted"+h,CLICK:"click"+h,FOCUSIN:"focusin"+h,FOCUSOUT:"focusout"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h},q={FADE:"fade",IN:"in"},r={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner"},s={element:!1,enabled:!1},t={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},u=function(){function i(a,b){c(this,i),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._tether=null,this.element=a,this.config=this._getConfig(b),this.tip=null,this._setListeners()}return e(i,[{key:"enable",value:function(){this._isEnabled=!0}},{key:"disable",value:function(){this._isEnabled=!1}},{key:"toggleEnabled",value:function(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function(b){if(b){var c=this.constructor.DATA_KEY,d=a(b.currentTarget).data(c);d||(d=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(c,d)),d._activeTrigger.click=!d._activeTrigger.click,d._isWithActiveTrigger()?d._enter(null,d):d._leave(null,d)}else{if(a(this.getTipElement()).hasClass(q.IN))return void this._leave(null,this);this._enter(null,this)}}},{key:"dispose",value:function(){clearTimeout(this._timeout),this.cleanupTether(),a.removeData(this.element,this.constructor.DATA_KEY),a(this.element).off(this.constructor.EVENT_KEY),this.tip&&a(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null}},{key:"show",value:function(){var b=this,c=a.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){a(this.element).trigger(c);var d=a.contains(this.element.ownerDocument.documentElement,this.element);if(c.isDefaultPrevented()||!d)return;var e=this.getTipElement(),g=f.getUID(this.constructor.NAME);e.setAttribute("id",g),this.element.setAttribute("aria-describedby",g),this.setContent(),this.config.animation&&a(e).addClass(q.FADE);var h="function"==typeof this.config.placement?this.config.placement.call(this,e,this.element):this.config.placement,j=this._getAttachment(h);a(e).data(this.constructor.DATA_KEY,this).appendTo(document.body),a(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:j,element:e,target:this.element,classes:s,classPrefix:k,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),f.reflow(e),this._tether.position(),a(e).addClass(q.IN);var l=function(){var c=b._hoverState;b._hoverState=null,a(b.element).trigger(b.constructor.Event.SHOWN),c===o.OUT&&b._leave(null,b)};if(f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE))return void a(this.tip).one(f.TRANSITION_END,l).emulateTransitionEnd(i._TRANSITION_DURATION);l()}}},{key:"hide",value:function(b){var c=this,d=this.getTipElement(),e=a.Event(this.constructor.Event.HIDE),g=function(){c._hoverState!==o.IN&&d.parentNode&&d.parentNode.removeChild(d),c.element.removeAttribute("aria-describedby"),a(c.element).trigger(c.constructor.Event.HIDDEN),c.cleanupTether(),b&&b()};a(this.element).trigger(e),e.isDefaultPrevented()||(a(d).removeClass(q.IN),f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE)?a(d).one(f.TRANSITION_END,g).emulateTransitionEnd(j):g(),this._hoverState="")}},{key:"isWithContent",value:function(){return Boolean(this.getTitle())}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(r.TOOLTIP_INNER),this.getTitle()),b.removeClass(q.FADE).removeClass(q.IN),this.cleanupTether()}},{key:"setElementContent",value:function(b,c){var d=this.config.html;"object"==typeof c&&(c.nodeType||c.jquery)?d?a(c).parent().is(b)||b.empty().append(c):b.text(a(c).text()):b[d?"html":"text"](c)}},{key:"getTitle",value:function(){var a=this.element.getAttribute("data-original-title");return a||(a="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),a}},{key:"cleanupTether",value:function(){this._tether&&this._tether.destroy()}},{key:"_getAttachment",value:function(a){return n[a.toUpperCase()]}},{key:"_setListeners",value:function(){var b=this,c=this.config.trigger.split(" ");c.forEach(function(c){if("click"===c)a(b.element).on(b.constructor.Event.CLICK,b.config.selector,a.proxy(b.toggle,b));else if(c!==t.MANUAL){var d=c===t.HOVER?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,e=c===t.HOVER?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;a(b.element).on(d,b.config.selector,a.proxy(b._enter,b)).on(e,b.config.selector,a.proxy(b._leave,b))}}),this.config.selector?this.config=a.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()}},{key:"_fixTitle",value:function(){var a=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==a)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}},{key:"_enter",value:function(b,c){var d=this.constructor.DATA_KEY;return c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusin"===b.type?t.FOCUS:t.HOVER]=!0),a(c.getTipElement()).hasClass(q.IN)||c._hoverState===o.IN?void(c._hoverState=o.IN):(clearTimeout(c._timeout),c._hoverState=o.IN,c.config.delay&&c.config.delay.show?void(c._timeout=setTimeout(function(){c._hoverState===o.IN&&c.show()},c.config.delay.show)):void c.show())}},{key:"_leave",value:function(b,c){var d=this.constructor.DATA_KEY;if(c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusout"===b.type?t.FOCUS:t.HOVER]=!1),!c._isWithActiveTrigger())return clearTimeout(c._timeout),c._hoverState=o.OUT,c.config.delay&&c.config.delay.hide?void(c._timeout=setTimeout(function(){c._hoverState===o.OUT&&c.hide()},c.config.delay.hide)):void c.hide()}},{key:"_isWithActiveTrigger",value:function(){for(var a in this._activeTrigger)if(this._activeTrigger[a])return!0;return!1}},{key:"_getConfig",value:function(c){return c=a.extend({},this.constructor.Default,a(this.element).data(),c),c.delay&&"number"==typeof c.delay&&(c.delay={show:c.delay,hide:c.delay}),f.typeCheckConfig(b,c,this.constructor.DefaultType),c}},{key:"_getDelegateConfig",value:function(){var a={};if(this.config)for(var b in this.config)this.constructor.Default[b]!==this.config[b]&&(a[b]=this.config[b]);return a}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return b}},{key:"DATA_KEY",get:function(){return g}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return h}},{key:"DefaultType",get:function(){return m}}]),i}();return a.fn[b]=u._jQueryInterface,a.fn[b].Constructor=u,a.fn[b].noConflict=function(){return a.fn[b]=i,u._jQueryInterface},u}(jQuery));(function(a){var f="popover",h="4.0.0-alpha.4",i="bs.popover",j="."+i,k=a.fn[f],l=a.extend({},g.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),m=a.extend({},g.DefaultType,{content:"(string|element|function)"}),n={FADE:"fade",IN:"in"},o={TITLE:".popover-title",CONTENT:".popover-content",ARROW:".popover-arrow"},p={HIDE:"hide"+j,HIDDEN:"hidden"+j,SHOW:"show"+j,SHOWN:"shown"+j,INSERTED:"inserted"+j,CLICK:"click"+j,FOCUSIN:"focusin"+j,FOCUSOUT:"focusout"+j,MOUSEENTER:"mouseenter"+j,MOUSELEAVE:"mouseleave"+j},q=function(g){function k(){c(this,k),d(Object.getPrototypeOf(k.prototype),"constructor",this).apply(this,arguments)}return b(k,g),e(k,[{key:"isWithContent",value:function(){return this.getTitle()||this._getContent()}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(o.TITLE),this.getTitle()),this.setElementContent(b.find(o.CONTENT),this._getContent()),b.removeClass(n.FADE).removeClass(n.IN),this.cleanupTether()}},{key:"_getContent",value:function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(i),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new k(this,d),a(this).data(i,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return h}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return f}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return j}},{key:"DefaultType",get:function(){return m}}]),k}(g);return a.fn[f]=q._jQueryInterface,a.fn[f].Constructor=q,a.fn[f].noConflict=function(){return a.fn[f]=k,q._jQueryInterface},q})(jQuery)}(jQuery);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){window.flexibility={},Array.prototype.forEach||(Array.prototype.forEach=function(t){if(void 0===this||null===this)throw new TypeError(this+"is not an object");if(!(t instanceof Function))throw new TypeError(t+" is not a function");for(var e=Object(this),i=arguments[1],n=e instanceof String?e.split(""):e,r=Math.max(Math.min(n.length,9007199254740991),0)||0,o=-1;++o<r;)o in n&&t.call(i,n[o],o,e)}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=e():t.computeLayout=e()}(flexibility,function(){var t=function(){function t(e){if((!e.layout||e.isDirty)&&(e.layout={width:void 0,height:void 0,top:0,left:0,right:0,bottom:0}),e.style||(e.style={}),e.children||(e.children=[]),e.style.measure&&e.children&&e.children.length)throw new Error("Using custom measure function is supported only for leaf nodes.");return e.children.forEach(t),e}function e(t){return void 0===t}function i(t){return t===q||t===G}function n(t){return t===U||t===Z}function r(t,e){if(void 0!==t.style.marginStart&&i(e))return t.style.marginStart;var n=null;switch(e){case"row":n=t.style.marginLeft;break;case"row-reverse":n=t.style.marginRight;break;case"column":n=t.style.marginTop;break;case"column-reverse":n=t.style.marginBottom}return void 0!==n?n:void 0!==t.style.margin?t.style.margin:0}function o(t,e){if(void 0!==t.style.marginEnd&&i(e))return t.style.marginEnd;var n=null;switch(e){case"row":n=t.style.marginRight;break;case"row-reverse":n=t.style.marginLeft;break;case"column":n=t.style.marginBottom;break;case"column-reverse":n=t.style.marginTop}return null!=n?n:void 0!==t.style.margin?t.style.margin:0}function l(t,e){if(void 0!==t.style.paddingStart&&t.style.paddingStart>=0&&i(e))return t.style.paddingStart;var n=null;switch(e){case"row":n=t.style.paddingLeft;break;case"row-reverse":n=t.style.paddingRight;break;case"column":n=t.style.paddingTop;break;case"column-reverse":n=t.style.paddingBottom}return null!=n&&n>=0?n:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}function a(t,e){if(void 0!==t.style.paddingEnd&&t.style.paddingEnd>=0&&i(e))return t.style.paddingEnd;var n=null;switch(e){case"row":n=t.style.paddingRight;break;case"row-reverse":n=t.style.paddingLeft;break;case"column":n=t.style.paddingBottom;break;case"column-reverse":n=t.style.paddingTop}return null!=n&&n>=0?n:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}function d(t,e){if(void 0!==t.style.borderStartWidth&&t.style.borderStartWidth>=0&&i(e))return t.style.borderStartWidth;var n=null;switch(e){case"row":n=t.style.borderLeftWidth;break;case"row-reverse":n=t.style.borderRightWidth;break;case"column":n=t.style.borderTopWidth;break;case"column-reverse":n=t.style.borderBottomWidth}return null!=n&&n>=0?n:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function s(t,e){if(void 0!==t.style.borderEndWidth&&t.style.borderEndWidth>=0&&i(e))return t.style.borderEndWidth;var n=null;switch(e){case"row":n=t.style.borderRightWidth;break;case"row-reverse":n=t.style.borderLeftWidth;break;case"column":n=t.style.borderBottomWidth;break;case"column-reverse":n=t.style.borderTopWidth}return null!=n&&n>=0?n:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function u(t,e){return l(t,e)+d(t,e)}function y(t,e){return a(t,e)+s(t,e)}function c(t,e){return d(t,e)+s(t,e)}function f(t,e){return r(t,e)+o(t,e)}function h(t,e){return u(t,e)+y(t,e)}function m(t){return t.style.justifyContent?t.style.justifyContent:"flex-start"}function v(t){return t.style.alignContent?t.style.alignContent:"flex-start"}function p(t,e){return e.style.alignSelf?e.style.alignSelf:t.style.alignItems?t.style.alignItems:"stretch"}function x(t,e){if(e===N){if(t===q)return G;if(t===G)return q}return t}function g(t,e){var i;return i=t.style.direction?t.style.direction:M,i===M&&(i=void 0===e?A:e),i}function b(t){return t.style.flexDirection?t.style.flexDirection:U}function w(t,e){return n(t)?x(q,e):U}function W(t){return t.style.position?t.style.position:"relative"}function L(t){return W(t)===tt&&t.style.flex>0}function E(t){return"wrap"===t.style.flexWrap}function S(t,e){return t.layout[ot[e]]+f(t,e)}function k(t,e){return void 0!==t.style[ot[e]]&&t.style[ot[e]]>=0}function C(t,e){return void 0!==t.style[e]}function T(t){return void 0!==t.style.measure}function H(t,e){return void 0!==t.style[e]?t.style[e]:0}function jQuery(t,e,i){var n={row:t.style.minWidth,"row-reverse":t.style.minWidth,column:t.style.minHeight,"column-reverse":t.style.minHeight}[e],r={row:t.style.maxWidth,"row-reverse":t.style.maxWidth,column:t.style.maxHeight,"column-reverse":t.style.maxHeight}[e],o=i;return void 0!==r&&r>=0&&o>r&&(o=r),void 0!==n&&n>=0&&n>o&&(o=n),o}function z(t,e){return t>e?t:e}function B(t,e){void 0===t.layout[ot[e]]&&k(t,e)&&(t.layout[ot[e]]=z(jQuery(t,e,t.style[ot[e]]),h(t,e)))}function D(t,e,i){e.layout[nt[i]]=t.layout[ot[i]]-e.layout[ot[i]]-e.layout[rt[i]]}function I(t,e){return void 0!==t.style[it[e]]?H(t,it[e]):-H(t,nt[e])}function R(t,n,l,a){var s=g(t,a),R=x(b(t),s),M=w(R,s),A=x(q,s);B(t,R),B(t,M),t.layout.direction=s,t.layout[it[R]]+=r(t,R)+I(t,R),t.layout[nt[R]]+=o(t,R)+I(t,R),t.layout[it[M]]+=r(t,M)+I(t,M),t.layout[nt[M]]+=o(t,M)+I(t,M);var N=t.children.length,lt=h(t,A),at=h(t,U);if(T(t)){var dt=!e(t.layout[ot[A]]),st=F;st=k(t,A)?t.style.width:dt?t.layout[ot[A]]:n-f(t,A),st-=lt;var ut=F;ut=k(t,U)?t.style.height:e(t.layout[ot[U]])?l-f(t,A):t.layout[ot[U]],ut-=h(t,U);var yt=!k(t,A)&&!dt,ct=!k(t,U)&&e(t.layout[ot[U]]);if(yt||ct){var ft=t.style.measure(st,ut);yt&&(t.layout.width=ft.width+lt),ct&&(t.layout.height=ft.height+at)}if(0===N)return}var ht,mt,vt,pt,xt=E(t),gt=m(t),bt=u(t,R),wt=u(t,M),Wt=h(t,R),Lt=h(t,M),Et=!e(t.layout[ot[R]]),St=!e(t.layout[ot[M]]),kt=i(R),Ct=null,Tt=null,Ht=F;Et&&(Ht=t.layout[ot[R]]-Wt);for(var jQueryt=0,zt=0,Bt=0,Dt=0,It=0,Rt=0;N>zt;){var jt,Ft,Mt=0,At=0,Nt=0,qt=0,Gt=Et&&gt===O||!Et&&gt!==_,Ut=Gt?N:jQueryt,Zt=!0,Ot=N,_t=null,Jt=null,Kt=bt,Pt=0;for(ht=jQueryt;N>ht;++ht){vt=t.children[ht],vt.lineIndex=Rt,vt.nextAbsoluteChild=null,vt.nextFlexChild=null;var Qt=p(t,vt);if(Qt===Y&&W(vt)===tt&&St&&!k(vt,M))vt.layout[ot[M]]=z(jQuery(vt,M,t.layout[ot[M]]-Lt-f(vt,M)),h(vt,M));else if(W(vt)===et)for(null===Ct&&(Ct=vt),null!==Tt&&(Tt.nextAbsoluteChild=vt),Tt=vt,mt=0;2>mt;mt++)pt=0!==mt?q:U,!e(t.layout[ot[pt]])&&!k(vt,pt)&&C(vt,it[pt])&&C(vt,nt[pt])&&(vt.layout[ot[pt]]=z(jQuery(vt,pt,t.layout[ot[pt]]-h(t,pt)-f(vt,pt)-H(vt,it[pt])-H(vt,nt[pt])),h(vt,pt)));var Vt=0;if(Et&&L(vt)?(At++,Nt+=vt.style.flex,null===_t&&(_t=vt),null!==Jt&&(Jt.nextFlexChild=vt),Jt=vt,Vt=h(vt,R)+f(vt,R)):(jt=F,Ft=F,kt?Ft=k(t,U)?t.layout[ot[U]]-at:l-f(t,U)-at:jt=k(t,A)?t.layout[ot[A]]-lt:n-f(t,A)-lt,0===Bt&&j(vt,jt,Ft,s),W(vt)===tt&&(qt++,Vt=S(vt,R))),xt&&Et&&Mt+Vt>Ht&&ht!==jQueryt){qt--,Bt=1;break}Gt&&(W(vt)!==tt||L(vt))&&(Gt=!1,Ut=ht),Zt&&(W(vt)!==tt||Qt!==Y&&Qt!==Q||e(vt.layout[ot[M]]))&&(Zt=!1,Ot=ht),Gt&&(vt.layout[rt[R]]+=Kt,Et&&D(t,vt,R),Kt+=S(vt,R),Pt=z(Pt,jQuery(vt,M,S(vt,M)))),Zt&&(vt.layout[rt[M]]+=Dt+wt,St&&D(t,vt,M)),Bt=0,Mt+=Vt,zt=ht+1}var Xt=0,Yt=0,te=0;if(te=Et?Ht-Mt:z(Mt,0)-Mt,0!==At){var ee,ie,ne=te/Nt;for(Jt=_t;null!==Jt;)ee=ne*Jt.style.flex+h(Jt,R),ie=jQuery(Jt,R,ee),ee!==ie&&(te-=ie,Nt-=Jt.style.flex),Jt=Jt.nextFlexChild;for(ne=te/Nt,0>ne&&(ne=0),Jt=_t;null!==Jt;)Jt.layout[ot[R]]=jQuery(Jt,R,ne*Jt.style.flex+h(Jt,R)),jt=F,k(t,A)?jt=t.layout[ot[A]]-lt:kt||(jt=n-f(t,A)-lt),Ft=F,k(t,U)?Ft=t.layout[ot[U]]-at:kt&&(Ft=l-f(t,U)-at),j(Jt,jt,Ft,s),vt=Jt,Jt=Jt.nextFlexChild,vt.nextFlexChild=null}else gt!==O&&(gt===_?Xt=te/2:gt===J?Xt=te:gt===K?(te=z(te,0),Yt=At+qt-1!==0?te/(At+qt-1):0):gt===P&&(Yt=te/(At+qt),Xt=Yt/2));for(Kt+=Xt,ht=Ut;zt>ht;++ht)vt=t.children[ht],W(vt)===et&&C(vt,it[R])?vt.layout[rt[R]]=H(vt,it[R])+d(t,R)+r(vt,R):(vt.layout[rt[R]]+=Kt,Et&&D(t,vt,R),W(vt)===tt&&(Kt+=Yt+S(vt,R),Pt=z(Pt,jQuery(vt,M,S(vt,M)))));var re=t.layout[ot[M]];for(St||(re=z(jQuery(t,M,Pt+Lt),Lt)),ht=Ot;zt>ht;++ht)if(vt=t.children[ht],W(vt)===et&&C(vt,it[M]))vt.layout[rt[M]]=H(vt,it[M])+d(t,M)+r(vt,M);else{var oe=wt;if(W(vt)===tt){var Qt=p(t,vt);if(Qt===Y)e(vt.layout[ot[M]])&&(vt.layout[ot[M]]=z(jQuery(vt,M,re-Lt-f(vt,M)),h(vt,M)));else if(Qt!==Q){var le=re-Lt-S(vt,M);oe+=Qt===V?le/2:le}}vt.layout[rt[M]]+=Dt+oe,St&&D(t,vt,M)}Dt+=Pt,It=z(It,Kt),Rt+=1,jQueryt=zt}if(Rt>1&&St){var ae=t.layout[ot[M]]-Lt,de=ae-Dt,se=0,ue=wt,ye=v(t);ye===X?ue+=de:ye===V?ue+=de/2:ye===Y&&ae>Dt&&(se=de/Rt);var ce=0;for(ht=0;Rt>ht;++ht){var fe=ce,he=0;for(mt=fe;N>mt;++mt)if(vt=t.children[mt],W(vt)===tt){if(vt.lineIndex!==ht)break;e(vt.layout[ot[M]])||(he=z(he,vt.layout[ot[M]]+f(vt,M)))}for(ce=mt,he+=se,mt=fe;ce>mt;++mt)if(vt=t.children[mt],W(vt)===tt){var me=p(t,vt);if(me===Q)vt.layout[rt[M]]=ue+r(vt,M);else if(me===X)vt.layout[rt[M]]=ue+he-o(vt,M)-vt.layout[ot[M]];else if(me===V){var ve=vt.layout[ot[M]];vt.layout[rt[M]]=ue+(he-ve)/2}else me===Y&&(vt.layout[rt[M]]=ue+r(vt,M))}ue+=he}}var pe=!1,xe=!1;if(Et||(t.layout[ot[R]]=z(jQuery(t,R,It+y(t,R)),Wt),(R===G||R===Z)&&(pe=!0)),St||(t.layout[ot[M]]=z(jQuery(t,M,Dt+Lt),Lt),(M===G||M===Z)&&(xe=!0)),pe||xe)for(ht=0;N>ht;++ht)vt=t.children[ht],pe&&D(t,vt,R),xe&&D(t,vt,M);for(Tt=Ct;null!==Tt;){for(mt=0;2>mt;mt++)pt=0!==mt?q:U,!e(t.layout[ot[pt]])&&!k(Tt,pt)&&C(Tt,it[pt])&&C(Tt,nt[pt])&&(Tt.layout[ot[pt]]=z(jQuery(Tt,pt,t.layout[ot[pt]]-c(t,pt)-f(Tt,pt)-H(Tt,it[pt])-H(Tt,nt[pt])),h(Tt,pt))),C(Tt,nt[pt])&&!C(Tt,it[pt])&&(Tt.layout[it[pt]]=t.layout[ot[pt]]-Tt.layout[ot[pt]]-H(Tt,nt[pt]));vt=Tt,Tt=Tt.nextAbsoluteChild,vt.nextAbsoluteChild=null}}function j(t,e,i,n){t.shouldUpdate=!0;var r=t.style.direction||A,o=!t.isDirty&&t.lastLayout&&t.lastLayout.requestedHeight===t.layout.height&&t.lastLayout.requestedWidth===t.layout.width&&t.lastLayout.parentMaxWidth===e&&t.lastLayout.parentMaxHeight===i&&t.lastLayout.direction===r;o?(t.layout.width=t.lastLayout.width,t.layout.height=t.lastLayout.height,t.layout.top=t.lastLayout.top,t.layout.left=t.lastLayout.left):(t.lastLayout||(t.lastLayout={}),t.lastLayout.requestedWidth=t.layout.width,t.lastLayout.requestedHeight=t.layout.height,t.lastLayout.parentMaxWidth=e,t.lastLayout.parentMaxHeight=i,t.lastLayout.direction=r,t.children.forEach(function(t){t.layout.width=void 0,t.layout.height=void 0,t.layout.top=0,t.layout.left=0}),R(t,e,i,n),t.lastLayout.width=t.layout.width,t.lastLayout.height=t.layout.height,t.lastLayout.top=t.layout.top,t.lastLayout.left=t.layout.left)}var F,M="inherit",A="ltr",N="rtl",q="row",G="row-reverse",U="column",Z="column-reverse",O="flex-start",_="center",J="flex-end",K="space-between",P="space-around",Q="flex-start",V="center",X="flex-end",Y="stretch",tt="relative",et="absolute",it={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},nt={row:"right","row-reverse":"left",column:"bottom","column-reverse":"top"},rt={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},ot={row:"width","row-reverse":"width",column:"height","column-reverse":"height"};return{layoutNodeImpl:R,computeLayout:j,fillNodes:t}}();return"object"==typeof exports&&(module.exports=t),function(e){t.fillNodes(e),t.computeLayout(e)}}),!window.addEventListener&&window.attachEvent&&function(){Window.prototype.addEventListener=HTMLDocument.prototype.addEventListener=Element.prototype.addEventListener=function(t,e){this.attachEvent("on"+t,e)},Window.prototype.removeEventListener=HTMLDocument.prototype.removeEventListener=Element.prototype.removeEventListener=function(t,e){this.detachEvent("on"+t,e)}}(),flexibility.detect=function(){var t=document.createElement("p");try{return t.style.display="flex","flex"===t.style.display}catch(e){return!1}},!flexibility.detect()&&document.attachEvent&&document.documentElement.currentStyle&&document.attachEvent("onreadystatechange",function(){flexibility.onresize({target:document.documentElement})}),flexibility.init=function(t){var e=t.onlayoutcomplete;return e||(e=t.onlayoutcomplete={node:t,style:{},children:[]}),e.style.display=t.currentStyle["-js-display"]||t.currentStyle.display,e};var t,e=1e3,i=15,n=document.documentElement,r=0,o=0;flexibility.onresize=function(l){if(n.clientWidth!==r||n.clientHeight!==o){r=n.clientWidth,o=n.clientHeight,clearTimeout(t),window.removeEventListener("resize",flexibility.onresize);var a=l.target&&1===l.target.nodeType?l.target:document.documentElement;flexibility.walk(a),t=setTimeout(function(){window.addEventListener("resize",flexibility.onresize)},e/i)}};var l={alignContent:{initial:"stretch",valid:/^(flex-start|flex-end|center|space-between|space-around|stretch)/},alignItems:{initial:"stretch",valid:/^(flex-start|flex-end|center|baseline|stretch)jQuery/},boxSizing:{initial:"content-box",valid:/^(border-box|content-box)jQuery/},flexDirection:{initial:"row",valid:/^(row|row-reverse|column|column-reverse)jQuery/},flexWrap:{initial:"nowrap",valid:/^(nowrap|wrap|wrap-reverse)jQuery/},justifyContent:{initial:"flex-start",valid:/^(flex-start|flex-end|center|space-between|space-around)jQuery/}};flexibility.updateFlexContainerCache=function(t){var e=t.style,i=t.node.currentStyle,n=t.node.style,r={};(i["flex-flow"]||n["flex-flow"]||"").replace(/^(row|row-reverse|column|column-reverse)\s+(nowrap|wrap|wrap-reverse)jQuery/i,function(t,e,i){r.flexDirection=e,r.flexWrap=i});for(var o in l){var a=o.replace(/[A-Z]/g,"-jQuery&").toLowerCase(),d=l[o],s=i[a]||n[a];e[o]=d.valid.test(s)?s:r[o]||d.initial}};var a={alignSelf:{initial:"auto",valid:/^(auto|flex-start|flex-end|center|baseline|stretch)jQuery/},boxSizing:{initial:"content-box",valid:/^(border-box|content-box)jQuery/},flexBasis:{initial:"auto",valid:/^((?:[-+]?0|[-+]?[0-9]*\.?[0-9]+(?:%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))|auto|fill|max-content|min-content|fit-content|content)jQuery/},flexGrow:{initial:0,valid:/^\+?(0|[1-9][0-9]*)jQuery/},flexShrink:{initial:0,valid:/^\+?(0|[1-9][0-9]*)jQuery/},order:{initial:0,valid:/^([-+]?[0-9]+)jQuery/}};flexibility.updateFlexItemCache=function(t){var e=t.style,i=t.node.currentStyle,n=t.node.style,r={};(i.flex||n.flex||"").replace(/^\+?(0|[1-9][0-9]*)/,function(t){r.flexGrow=t});for(var o in a){var l=o.replace(/[A-Z]/g,"-jQuery&").toLowerCase(),d=a[o],s=i[l]||n[l];e[o]=d.valid.test(s)?s:r[o]||d.initial}};var d="border:0 solid;clip:rect(0 0 0 0);display:inline-block;font:0/0 serif;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;overflow:hidden;padding:0;position:absolute;width:1em;",s={medium:4,none:0,thick:6,thin:2},u={borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,height:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:0,marginLeft:0,marginRight:0,marginTop:0,maxHeight:0,maxWidth:0,minHeight:0,minWidth:0,width:0},y=/^([-+]?0|[-+]?[0-9]*\.?[0-9]+)/,c=100;flexibility.updateLengthCache=function(t){var e,i,n,r=t.node,o=t.style,l=r.parentNode,a=document.createElement("_"),f=a.runtimeStyle,h=r.currentStyle;f.cssText=d+"font-size:"+h.fontSize,l.insertBefore(a,r.nextSibling),o.fontSize=a.offsetWidth,f.fontSize=o.fontSize+"px";for(var m in u){var v=h[m];y.test(v)||"auto"===v&&!/(width|height)/i.test(m)?/%jQuery/.test(v)?(/^(bottom|height|top)jQuery/.test(m)?(i||(i=l.offsetHeight),n=i):(e||(e=l.offsetWidth),n=e),o[m]=parseFloat(v)*n/c):(f.width=v,o[m]=a.offsetWidth):/^border/.test(m)&&v in s?o[m]=s[v]:delete o[m]}l.removeChild(a),"none"===h.borderTopStyle&&(o.borderTopWidth=0),"none"===h.borderRightStyle&&(o.borderRightWidth=0),"none"===h.borderBottomStyle&&(o.borderBottomWidth=0),"none"===h.borderLeftStyle&&(o.borderLeftWidth=0),o.originalWidth=o.width,o.originalHeight=o.height,o.width||o.minWidth||(/flex/.test(o.display)?o.width=r.offsetWidth:o.minWidth=r.offsetWidth),o.height||o.minHeight||/flex/.test(o.display)||(o.minHeight=r.offsetHeight)},flexibility.walk=function(t){var e=flexibility.init(t),i=e.style,n=i.display;if("none"===n)return{};var r=n.match(/^(inline)?flexjQuery/);if(r&&(flexibility.updateFlexContainerCache(e),t.runtimeStyle.cssText="display:"+(r[1]?"inline-block":"block"),e.children=[]),Array.prototype.forEach.call(t.childNodes,function(t,n){if(1===t.nodeType){var o=flexibility.walk(t),l=o.style;o.index=n,r&&(flexibility.updateFlexItemCache(o),"auto"===l.alignSelf&&(l.alignSelf=i.alignItems),l.flex=l.flexGrow,t.runtimeStyle.cssText="display:inline-block",e.children.push(o))}}),r){e.children.forEach(function(t){flexibility.updateLengthCache(t)}),e.children.sort(function(t,e){return t.style.order-e.style.order||t.index-e.index}),/-reversejQuery/.test(i.flexDirection)&&(e.children.reverse(),i.flexDirection=i.flexDirection.replace(/-reversejQuery/,""),"flex-start"===i.justifyContent?i.justifyContent="flex-end":"flex-end"===i.justifyContent&&(i.justifyContent="flex-start")),flexibility.updateLengthCache(e),delete e.lastLayout,delete e.layout;var o=i.borderTopWidth,l=i.borderBottomWidth;i.borderTopWidth=0,i.borderBottomWidth=0,i.borderLeftWidth=0,"column"===i.flexDirection&&(i.width-=i.borderRightWidth),flexibility.computeLayout(e),t.runtimeStyle.cssText="box-sizing:border-box;display:block;position:relative;width:"+(e.layout.width+i.borderRightWidth)+"px;height:"+(e.layout.height+o+l)+"px";var a=[],d=1,s="column"===i.flexDirection?"width":"height";e.children.forEach(function(t){a[t.lineIndex]=Math.max(a[t.lineIndex]||0,t.layout[s]),d=Math.max(d,t.lineIndex+1)}),e.children.forEach(function(t){var e=t.layout;"stretch"===t.style.alignSelf&&(e[s]=a[t.lineIndex]),t.node.runtimeStyle.cssText="box-sizing:border-box;display:block;position:absolute;margin:0;width:"+e.width+"px;height:"+e.height+"px;top:"+e.top+"px;left:"+e.left+"px"})}return e}}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Owl Carousel v2.2.0
	 * Copyright 2013-2016 David Deutsch
	 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
	 */
	!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.jQueryelement=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.jQueryelement.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.jQuerystage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.jQuerystage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.jQuerystage),a(i).addClass("cloned").prependTo(this.jQuerystage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.jQuerystage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.jQuerystage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.jQuerystage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.jQuerystage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.jQuerystage.children(".active").removeClass("active"),this.jQuerystage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.jQuerystage.children(".center").removeClass("center"),this.jQuerystage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.jQueryelement.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.jQueryelement.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.jQueryelement.children(c).width(),b.length&&0>=e&&this.preloadAutoWidthImages(b)}this.jQueryelement.addClass(this.options.loadingClass),this.jQuerystage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.jQueryelement.append(this.jQuerystage.parent()),this.replace(this.jQueryelement.children().not(this.jQuerystage.parent())),this.jQueryelement.is(":visible")?this.refresh():this.invalidate("width"),this.jQueryelement.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.jQueryelement.attr("class",this.jQueryelement.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"jQuery1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.jQueryelement.addClass(this.options.refreshClass),this.update(),this.jQueryelement.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.jQueryelement.width()?!1:this.jQueryelement.is(":visible")?(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized"))):!1:!1},e.prototype.registerEventHandlers=function(){a.support.transition&&this.jQuerystage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.jQueryelement.addClass(this.options.dragClass),this.jQuerystage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.jQuerystage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.jQuerystage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.jQuerystage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.jQuerystage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.jQuerystage.position(),d={x:this.settings.rtl?d.left+this.jQuerystage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.jQuerystage.stop(),this.invalidate("position")),this.jQueryelement.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.jQueryelement.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&h+e>b?d=a:"right"===c&&b>h-f-e&&h-f+e>b?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),-1===d},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.jQuerystage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.jQuerystage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.jQuerystage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||1>c?a=d:(0>a||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.jQueryelement.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(0>e),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&i>=d-e&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.jQueryelement.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.jQuerystage.get(0))?!1:(this.leave("animating"),void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.jQuerystage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.jQuerystage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.jQuerystage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.jQueryelement.off(".owl.core"),this.jQuerystage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.jQuerystage.children(".cloned").remove(),this.jQuerystage.unwrap(),this.jQuerystage.children().contents().unwrap(),this.jQuerystage.children().unwrap(),this.jQueryelement.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.jQueryelement.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.jQueryelement.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.jQueryelement.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.jQueryelement.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.jQueryelement.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.jQueryelement.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.jQueryelement.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.jQueryelement.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.jQueryelement.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.jQuerystage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.jQueryelement.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.jQueryelement.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.jQuerystage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.jQuerystage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.jQueryelement.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.jQuerystage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.jQueryelement.on(this._handlers),this._core.jQueryelement.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}}))},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.jQuerystage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.jQueryelement.off("click.owl.video");for(a in this._handlers)this._core.jQueryelement.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.jQueryelement.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.jQuerystage.children().eq(this.previous),e=this.core.jQuerystage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.jQueryelement.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null);
	},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.jQueryelement.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.jQueryelement.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.jQueryelement=this._core.jQueryelement,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.jQueryelement.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.jQueryrelative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.jQueryelement)).addClass("disabled"),this._controls.jQueryprevious=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.jQueryrelative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.jQuerynext=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.jQueryrelative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.jQueryabsolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.jQueryelement)).addClass("disabled"),this._controls.jQueryabsolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.jQueryabsolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.jQueryelement.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;e>a;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.jQueryrelative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.jQueryprevious.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.jQuerynext.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.jQueryabsolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.jQueryabsolute.children().length,c.dotsData&&0!==b?this._controls.jQueryabsolute.html(this._templates.join("")):b>0?this._controls.jQueryabsolute.append(new Array(b+1).join(this._templates[0])):0>b&&this._controls.jQueryabsolute.children().slice(b).remove(),this._controls.jQueryabsolute.find(".active").removeClass("active"),this._controls.jQueryabsolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.jQueryelement=this._core.jQueryelement,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.jQueryelement.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.jQuerystage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.jQueryelement.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){return g[b]!==d?(e=c?b:!0,!1):void 0}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
	 *  Bootstrap TouchSpin - v3.1.1
	 *  A mobile and touch friendly input spinner component for Bootstrap 3.
	 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
	 *
	 *  Made by István Ujj-Mészáros
	 *  Under Apache License v2.0 License
	 */
	(function(jQuery) {
	  'use strict';
	
	  var _currentSpinnerId = 0;
	
	  function _scopedEventName(name, id) {
	    return name + '.touchspin_' + id;
	  }
	
	  function _scopeEventNames(names, id) {
	    return jQuery.map(names, function(name) {
	      return _scopedEventName(name, id);
	    });
	  }
	
	  jQuery.fn.TouchSpin = function(options) {
	
	    if (options === 'destroy') {
	      this.each(function() {
	        var originalinput = jQuery(this),
	            originalinput_data = originalinput.data();
	        jQuery(document).off(_scopeEventNames([
	          'mouseup',
	          'touchend',
	          'touchcancel',
	          'mousemove',
	          'touchmove',
	          'scroll',
	          'scrollstart'], originalinput_data.spinnerid).join(' '));
	      });
	      return;
	    }
	
	    var defaults = {
	      min: 0,
	      max: 100,
	      initval: '',
	      replacementval: '',
	      step: 1,
	      decimals: 0,
	      stepinterval: 100,
	      forcestepdivisibility: 'round', // none | floor | round | ceil
	      stepintervaldelay: 500,
	      verticalbuttons: false,
	      verticalupclass: 'glyphicon glyphicon-chevron-up',
	      verticaldownclass: 'glyphicon glyphicon-chevron-down',
	      prefix: '',
	      postfix: '',
	      prefix_extraclass: '',
	      postfix_extraclass: '',
	      booster: true,
	      boostat: 10,
	      maxboostedstep: false,
	      mousewheel: true,
	      buttondown_class: 'btn btn-default',
	      buttonup_class: 'btn btn-default',
		  buttondown_txt: '-',
		  buttonup_txt: '+'
	    };
	
	    var attributeMap = {
	      min: 'min',
	      max: 'max',
	      initval: 'init-val',
	      replacementval: 'replacement-val',
	      step: 'step',
	      decimals: 'decimals',
	      stepinterval: 'step-interval',
	      verticalbuttons: 'vertical-buttons',
	      verticalupclass: 'vertical-up-class',
	      verticaldownclass: 'vertical-down-class',
	      forcestepdivisibility: 'force-step-divisibility',
	      stepintervaldelay: 'step-interval-delay',
	      prefix: 'prefix',
	      postfix: 'postfix',
	      prefix_extraclass: 'prefix-extra-class',
	      postfix_extraclass: 'postfix-extra-class',
	      booster: 'booster',
	      boostat: 'boostat',
	      maxboostedstep: 'max-boosted-step',
	      mousewheel: 'mouse-wheel',
	      buttondown_class: 'button-down-class',
	      buttonup_class: 'button-up-class',
		  buttondown_txt: 'button-down-txt',
		  buttonup_txt: 'button-up-txt'
	    };
	
	    return this.each(function() {
	
	      var settings,
	          originalinput = jQuery(this),
	          originalinput_data = originalinput.data(),
	          container,
	          elements,
	          value,
	          downSpinTimer,
	          upSpinTimer,
	          downDelayTimeout,
	          upDelayTimeout,
	          spincount = 0,
	          spinning = false;
	
	      init();
	
	
	      function init() {
	        if (originalinput.data('alreadyinitialized')) {
	          return;
	        }
	
	        originalinput.data('alreadyinitialized', true);
	        _currentSpinnerId += 1;
	        originalinput.data('spinnerid', _currentSpinnerId);
	
	
	        if (!originalinput.is('input')) {
	          console.log('Must be an input.');
	          return;
	        }
	
	        _initSettings();
	        _setInitval();
	        _checkValue();
	        _buildHtml();
	        _initElements();
	        _hideEmptyPrefixPostfix();
	        _bindEvents();
	        _bindEventsInterface();
	        elements.input.css('display', 'block');
	      }
	
	      function _setInitval() {
	        if (settings.initval !== '' && originalinput.val() === '') {
	          originalinput.val(settings.initval);
	        }
	      }
	
	      function changeSettings(newsettings) {
	        _updateSettings(newsettings);
	        _checkValue();
	
	        var value = elements.input.val();
	
	        if (value !== '') {
	          value = Number(elements.input.val());
	          elements.input.val(value.toFixed(settings.decimals));
	        }
	      }
	
	      function _initSettings() {
	        settings = jQuery.extend({}, defaults, originalinput_data, _parseAttributes(), options);
	      }
	
	      function _parseAttributes() {
	        var data = {};
	        jQuery.each(attributeMap, function(key, value) {
	          var attrName = 'bts-' + value + '';
	          if (originalinput.is('[data-' + attrName + ']')) {
	            data[key] = originalinput.data(attrName);
	          }
	        });
	        return data;
	      }
	
	      function _updateSettings(newsettings) {
	        settings = jQuery.extend({}, settings, newsettings);
	      }
	
	      function _buildHtml() {
	        var initval = originalinput.val(),
	            parentelement = originalinput.parent();
	
	        if (initval !== '') {
	          initval = Number(initval).toFixed(settings.decimals);
	        }
	
	        originalinput.data('initvalue', initval).val(initval);
	        originalinput.addClass('form-control');
	
	        if (parentelement.hasClass('input-group')) {
	          _advanceInputGroup(parentelement);
	        }
	        else {
	          _buildInputGroup();
	        }
	      }
	
	      function _advanceInputGroup(parentelement) {
	        parentelement.addClass('bootstrap-touchspin');
	
	        var prev = originalinput.prev(),
	            next = originalinput.next();
	
	        var downhtml,
	            uphtml,
	            prefixhtml = '<span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span>',
	            postfixhtml = '<span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span>';
	
	        if (prev.hasClass('input-group-btn')) {
	          downhtml = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button>';
	          prev.append(downhtml);
	        }
	        else {
	          downhtml = '<span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span>';
	          jQuery(downhtml).insertBefore(originalinput);
	        }
	
	        if (next.hasClass('input-group-btn')) {
	          uphtml = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button>';
	          next.prepend(uphtml);
	        }
	        else {
	          uphtml = '<span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span>';
	          jQuery(uphtml).insertAfter(originalinput);
	        }
	
	        jQuery(prefixhtml).insertBefore(originalinput);
	        jQuery(postfixhtml).insertAfter(originalinput);
	
	        container = parentelement;
	      }
	
	      function _buildInputGroup() {
	        var html;
	
	        if (settings.verticalbuttons) {
	          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + settings.verticalupclass + '"></i></button><button class="' + settings.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + settings.verticaldownclass + '"></i></button></span></div>';
	        }
	        else {
	          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span></div>';
	        }
	
	        container = jQuery(html).insertBefore(originalinput);
	
	        jQuery('.bootstrap-touchspin-prefix', container).after(originalinput);
	
	        if (originalinput.hasClass('input-sm')) {
	          container.addClass('input-group-sm');
	        }
	        else if (originalinput.hasClass('input-lg')) {
	          container.addClass('input-group-lg');
	        }
	      }
	
	      function _initElements() {
	        elements = {
	          down: jQuery('.bootstrap-touchspin-down', container),
	          up: jQuery('.bootstrap-touchspin-up', container),
	          input: jQuery('input', container),
	          prefix: jQuery('.bootstrap-touchspin-prefix', container).addClass(settings.prefix_extraclass),
	          postfix: jQuery('.bootstrap-touchspin-postfix', container).addClass(settings.postfix_extraclass)
	        };
	      }
	
	      function _hideEmptyPrefixPostfix() {
	        if (settings.prefix === '') {
	          elements.prefix.hide();
	        }
	
	        if (settings.postfix === '') {
	          elements.postfix.hide();
	        }
	      }
	
	      function _bindEvents() {
	        originalinput.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 38) {
	            if (spinning !== 'up') {
	              upOnce();
	              startUpSpin();
	            }
	            ev.preventDefault();
	          }
	          else if (code === 40) {
	            if (spinning !== 'down') {
	              downOnce();
	              startDownSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        originalinput.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 38) {
	            stopSpin();
	          }
	          else if (code === 40) {
	            stopSpin();
	          }
	        });
	
	        originalinput.on('blur', function() {
	          _checkValue();
	        });
	
	        elements.down.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            if (spinning !== 'down') {
	              downOnce();
	              startDownSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        elements.down.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            stopSpin();
	          }
	        });
	
	        elements.up.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            if (spinning !== 'up') {
	              upOnce();
	              startUpSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        elements.up.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            stopSpin();
	          }
	        });
	
	        elements.down.on('mousedown.touchspin', function(ev) {
	          elements.down.off('touchstart.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          downOnce();
	          startDownSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.down.on('touchstart.touchspin', function(ev) {
	          elements.down.off('mousedown.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          downOnce();
	          startDownSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('mousedown.touchspin', function(ev) {
	          elements.up.off('touchstart.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          upOnce();
	          startUpSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('touchstart.touchspin', function(ev) {
	          elements.up.off('mousedown.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          upOnce();
	          startUpSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('mouseout touchleave touchend touchcancel', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          stopSpin();
	        });
	
	        elements.down.on('mouseout touchleave touchend touchcancel', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          stopSpin();
	        });
	
	        elements.down.on('mousemove touchmove', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          ev.preventDefault();
	        });
	
	        elements.up.on('mousemove touchmove', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          ev.preventDefault();
	        });
	
	        jQuery(document).on(_scopeEventNames(['mouseup', 'touchend', 'touchcancel'], _currentSpinnerId).join(' '), function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.preventDefault();
	          stopSpin();
	        });
	
	        jQuery(document).on(_scopeEventNames(['mousemove', 'touchmove', 'scroll', 'scrollstart'], _currentSpinnerId).join(' '), function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.preventDefault();
	          stopSpin();
	        });
	
	        originalinput.on('mousewheel DOMMouseScroll', function(ev) {
	          if (!settings.mousewheel || !originalinput.is(':focus')) {
	            return;
	          }
	
	          var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;
	
	          ev.stopPropagation();
	          ev.preventDefault();
	
	          if (delta < 0) {
	            downOnce();
	          }
	          else {
	            upOnce();
	          }
	        });
	      }
	
	      function _bindEventsInterface() {
	        originalinput.on('touchspin.uponce', function() {
	          stopSpin();
	          upOnce();
	        });
	
	        originalinput.on('touchspin.downonce', function() {
	          stopSpin();
	          downOnce();
	        });
	
	        originalinput.on('touchspin.startupspin', function() {
	          startUpSpin();
	        });
	
	        originalinput.on('touchspin.startdownspin', function() {
	          startDownSpin();
	        });
	
	        originalinput.on('touchspin.stopspin', function() {
	          stopSpin();
	        });
	
	        originalinput.on('touchspin.updatesettings', function(e, newsettings) {
	          changeSettings(newsettings);
	        });
	      }
	
	      function _forcestepdivisibility(value) {
	        switch (settings.forcestepdivisibility) {
	          case 'round':
	            return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);
	          case 'floor':
	            return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);
	          case 'ceil':
	            return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);
	          default:
	            return value;
	        }
	      }
	
	      function _checkValue() {
	        var val, parsedval, returnval;
	
	        val = originalinput.val();
	
	        if (val === '') {
	          if (settings.replacementval !== '') {
	            originalinput.val(settings.replacementval);
	            originalinput.trigger('change');
	          }
	          return;
	        }
	
	        if (settings.decimals > 0 && val === '.') {
	          return;
	        }
	
	        parsedval = parseFloat(val);
	
	        if (isNaN(parsedval)) {
	          if (settings.replacementval !== '') {
	            parsedval = settings.replacementval;
	          }
	          else {
	            parsedval = 0;
	          }
	        }
	
	        returnval = parsedval;
	
	        if (parsedval.toString() !== val) {
	          returnval = parsedval;
	        }
	
	        if (parsedval < settings.min) {
	          returnval = settings.min;
	        }
	
	        if (parsedval > settings.max) {
	          returnval = settings.max;
	        }
	
	        returnval = _forcestepdivisibility(returnval);
	
	        if (Number(val).toString() !== returnval.toString()) {
	          originalinput.val(returnval);
	          originalinput.trigger('change');
	        }
	      }
	
	      function _getBoostedStep() {
	        if (!settings.booster) {
	          return settings.step;
	        }
	        else {
	          var boosted = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;
	
	          if (settings.maxboostedstep) {
	            if (boosted > settings.maxboostedstep) {
	              boosted = settings.maxboostedstep;
	              value = Math.round((value / boosted)) * boosted;
	            }
	          }
	
	          return Math.max(settings.step, boosted);
	        }
	      }
	
	      function upOnce() {
	        _checkValue();
	
	        value = parseFloat(elements.input.val());
	        if (isNaN(value)) {
	          value = 0;
	        }
	
	        var initvalue = value,
	            boostedstep = _getBoostedStep();
	
	        value = value + boostedstep;
	
	        if (value > settings.max) {
	          value = settings.max;
	          originalinput.trigger('touchspin.on.max');
	          stopSpin();
	        }
	
	        elements.input.val(Number(value).toFixed(settings.decimals));
	
	        if (initvalue !== value) {
	          originalinput.trigger('change');
	        }
	      }
	
	      function downOnce() {
	        _checkValue();
	
	        value = parseFloat(elements.input.val());
	        if (isNaN(value)) {
	          value = 0;
	        }
	
	        var initvalue = value,
	            boostedstep = _getBoostedStep();
	
	        value = value - boostedstep;
	
	        if (value < settings.min) {
	          value = settings.min;
	          originalinput.trigger('touchspin.on.min');
	          stopSpin();
	        }
	
	        elements.input.val(value.toFixed(settings.decimals));
	
	        if (initvalue !== value) {
	          originalinput.trigger('change');
	        }
	      }
	
	      function startDownSpin() {
	        stopSpin();
	
	        spincount = 0;
	        spinning = 'down';
	
	        originalinput.trigger('touchspin.on.startspin');
	        originalinput.trigger('touchspin.on.startdownspin');
	
	        downDelayTimeout = setTimeout(function() {
	          downSpinTimer = setInterval(function() {
	            spincount++;
	            downOnce();
	          }, settings.stepinterval);
	        }, settings.stepintervaldelay);
	      }
	
	      function startUpSpin() {
	        stopSpin();
	
	        spincount = 0;
	        spinning = 'up';
	
	        originalinput.trigger('touchspin.on.startspin');
	        originalinput.trigger('touchspin.on.startupspin');
	
	        upDelayTimeout = setTimeout(function() {
	          upSpinTimer = setInterval(function() {
	            spincount++;
	            upOnce();
	          }, settings.stepinterval);
	        }, settings.stepintervaldelay);
	      }
	
	      function stopSpin() {
	        clearTimeout(downDelayTimeout);
	        clearTimeout(upDelayTimeout);
	        clearInterval(downSpinTimer);
	        clearInterval(upSpinTimer);
	
	        switch (spinning) {
	          case 'up':
	            originalinput.trigger('touchspin.on.stopupspin');
	            originalinput.trigger('touchspin.on.stopspin');
	            break;
	          case 'down':
	            originalinput.trigger('touchspin.on.stopdownspin');
	            originalinput.trigger('touchspin.on.stopspin');
	            break;
	        }
	
	        spincount = 0;
	        spinning = false;
	      }
	
	    });
	
	  };
	
	})(jQuery);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
	 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
	 *
	 * Version: 1.3.8
	 *
	 */
	(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
	var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
	l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
	!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
	h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
	width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
	WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
	function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
	x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*!
	  Zoom 1.7.20
	  license: MIT
	  http://www.jacklmoore.com/zoom
	*/
	"use strict";
	
	(function (o) {
	  var t = { url: !1, callback: !1, target: !1, duration: 120, on: "mouseover", touch: !0, onZoomIn: !1, onZoomOut: !1, magnify: 1 };o.zoom = function (t, n, e, i) {
	    var u,
	        c,
	        r,
	        a,
	        m,
	        l,
	        s,
	        f = o(t),
	        h = f.css("position"),
	        d = o(n);return t.style.position = /(absolute|fixed)/.test(h) ? h : "relative", t.style.overflow = "hidden", e.style.width = e.style.height = "", o(e).addClass("zoomImg").css({ position: "absolute", top: 0, left: 0, opacity: 0, width: e.width * i, height: e.height * i, border: "none", maxWidth: "none", maxHeight: "none" }).appendTo(t), { init: function init() {
	        c = f.outerWidth(), u = f.outerHeight(), n === t ? (a = c, r = u) : (a = d.outerWidth(), r = d.outerHeight()), m = (e.width - c) / a, l = (e.height - u) / r, s = d.offset();
	      }, move: function move(o) {
	        var t = o.pageX - s.left,
	            n = o.pageY - s.top;n = Math.max(Math.min(n, r), 0), t = Math.max(Math.min(t, a), 0), e.style.left = t * -m + "px", e.style.top = n * -l + "px";
	      } };
	  }, o.fn.zoom = function (n) {
	    return this.each(function () {
	      var e = o.extend({}, t, n || {}),
	          i = e.target && o(e.target)[0] || this,
	          u = this,
	          c = o(u),
	          r = document.createElement("img"),
	          a = o(r),
	          m = "mousemove.zoom",
	          l = !1,
	          s = !1;if (!e.url) {
	        var f = u.querySelector("img");if ((f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src), !e.url)) return;
	      }c.one("zoom.destroy", (function (o, t) {
	        c.off(".zoom"), i.style.position = o, i.style.overflow = t, r.onload = null, a.remove();
	      }).bind(this, i.style.position, i.style.overflow)), r.onload = function () {
	        function t(t) {
	          f.init(), f.move(t), a.stop().fadeTo(o.support.opacity ? e.duration : 0, 1, o.isFunction(e.onZoomIn) ? e.onZoomIn.call(r) : !1);
	        }function n() {
	          a.stop().fadeTo(e.duration, 0, o.isFunction(e.onZoomOut) ? e.onZoomOut.call(r) : !1);
	        }var f = o.zoom(i, u, r, e.magnify);"grab" === e.on ? c.on("mousedown.zoom", function (e) {
	          1 === e.which && (o(document).one("mouseup.zoom", function () {
	            n(), o(document).off(m, f.move);
	          }), t(e), o(document).on(m, f.move), e.preventDefault());
	        }) : "click" === e.on ? c.on("click.zoom", function (e) {
	          return l ? void 0 : (l = !0, t(e), o(document).on(m, f.move), o(document).one("click.zoom", function () {
	            n(), l = !1, o(document).off(m, f.move);
	          }), !1);
	        }) : "toggle" === e.on ? c.on("click.zoom", function (o) {
	          l ? n() : t(o), l = !l;
	        }) : "mouseover" === e.on && (f.init(), c.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(m, f.move)), e.touch && c.on("touchstart.zoom", function (o) {
	          o.preventDefault(), s ? (s = !1, n()) : (s = !0, t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]));
	        }).on("touchmove.zoom", function (o) {
	          o.preventDefault(), f.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]);
	        }).on("touchend.zoom", function (o) {
	          o.preventDefault(), s && (s = !1, n());
	        }), o.isFunction(e.callback) && e.callback.call(r);
	      }, r.setAttribute("role", "presentation"), r.src = e.url;
	    });
	  }, o.fn.zoom.defaults = t;
	})(window.jQuery);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _prestashop = __webpack_require__(51);
	
	var _prestashop2 = _interopRequireDefault(_prestashop);
	
	_prestashop2['default'].responsive = _prestashop2['default'].responsive || {};
	
	_prestashop2['default'].responsive.current_width = window.innerWidth;
	_prestashop2['default'].responsive.min_width = 992;
	_prestashop2['default'].responsive.mobile = _prestashop2['default'].responsive.current_width < _prestashop2['default'].responsive.min_width;
	
	function swapChildren(obj1, obj2) {
		var temp = obj2.children().detach();
		obj2.empty().append(obj1.children().detach());
		obj1.append(temp);
	}
	
	function toggleMobileStyles() {
		if (_prestashop2['default'].responsive.mobile) {
			(0, _jquery2['default'])("*[id^='_desktop_']").each(function (idx, el) {
				var target = (0, _jquery2['default'])('#' + el.id.replace('_desktop_', '_mobile_'));
				if (target.length) {
					swapChildren((0, _jquery2['default'])(el), target);
				}
			});
		} else {
			(0, _jquery2['default'])("*[id^='_mobile_']").each(function (idx, el) {
				var target = (0, _jquery2['default'])('#' + el.id.replace('_mobile_', '_desktop_'));
				if (target.length) {
					swapChildren((0, _jquery2['default'])(el), target);
				}
			});
		}
		_prestashop2['default'].emit('responsive update', {
			mobile: _prestashop2['default'].responsive.mobile
		});
	}
	
	(0, _jquery2['default'])(window).on('resize', function () {
		var _cw = _prestashop2['default'].responsive.current_width;
		var _mw = _prestashop2['default'].responsive.min_width;
		var _w = window.innerWidth;
		var _toggle = _cw >= _mw && _w < _mw || _cw < _mw && _w >= _mw;
		_prestashop2['default'].responsive.current_width = _w;
		_prestashop2['default'].responsive.mobile = _prestashop2['default'].responsive.current_width < _prestashop2['default'].responsive.min_width;
		if (_toggle) {
			toggleMobileStyles();
		}
	});
	
	(0, _jquery2['default'])(document).ready(function () {
		if (_prestashop2['default'].responsive.mobile) {
			toggleMobileStyles();
		}
	});

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = prestashop;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _prestashop = __webpack_require__(51);
	
	var _prestashop2 = _interopRequireDefault(_prestashop);
	
	function setUpCheckout() {
	  if ((0, _jquery2['default'])('.js-cancel-address').length !== 0) {
	    (0, _jquery2['default'])('.checkout-step:not(.js-current-step) .step-title').addClass('not-allowed');
	  }
	
	  (0, _jquery2['default'])('.js-terms a').on('click', function (event) {
	    event.preventDefault();
	    var url = (0, _jquery2['default'])(event.target).attr('href');
	    if (url) {
	      // TODO: Handle request if no pretty URL
	      url += '?content_only=1';
	      _jquery2['default'].get(url, function (content) {
	        (0, _jquery2['default'])('#modal').find('.js-modal-content').html((0, _jquery2['default'])(content).find('.page-cms').contents());
	      }).fail(function (resp) {
	        _prestashop2['default'].emit('handleError', { eventType: 'clickTerms', resp: resp });
	      });
	    }
	
	    (0, _jquery2['default'])('#modal').modal('show');
	  });
	
	  (0, _jquery2['default'])('.js-gift-checkbox').on('click', function (event) {
	    (0, _jquery2['default'])('#gift').collapse('toggle');
	  });
	}
	
	(0, _jquery2['default'])(document).ready(function () {
	  if ((0, _jquery2['default'])('body#checkout').length === 1) {
	    setUpCheckout();
	  }
	
	  _prestashop2['default'].on('updatedDeliveryForm', function (params) {
	    if (typeof params.deliveryOption === 'undefined' || 0 === params.deliveryOption.length) {
	      return;
	    }
	    // Hide all carrier extra content ...
	    (0, _jquery2['default'])(".carrier-extra-content").hide();
	    // and show the one related to the selected carrier
	    params.deliveryOption.next(".carrier-extra-content").slideDown();
	  });
	});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function initRmaItemSelector() {
	  (0, _jquery2['default'])('#order-return-form table thead input[type=checkbox]').on('click', function () {
	    var checked = (0, _jquery2['default'])(this).prop('checked');
	    (0, _jquery2['default'])('#order-return-form table tbody input[type=checkbox]').each(function (_, checkbox) {
	      (0, _jquery2['default'])(checkbox).prop('checked', checked);
	    });
	  });
	}
	
	function setupCustomerScripts() {
	  if ((0, _jquery2['default'])('body#order-detail')) {
	    initRmaItemSelector();
	  }
	}
	
	(0, _jquery2['default'])(document).ready(setupCustomerScripts);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _prestashop = __webpack_require__(51);
	
	var _prestashop2 = _interopRequireDefault(_prestashop);
	
	__webpack_require__(55);
	
	var _componentsProductMiniature = __webpack_require__(56);
	
	var _componentsProductMiniature2 = _interopRequireDefault(_componentsProductMiniature);
	
	(0, _jquery2['default'])(document).ready(function () {
	  setRequiredVariables();
	  _prestashop2['default'].on('clickQuickView', function (elm) {
	    var data = {
	      'action': 'quickview',
	      'id_product': elm.dataset.idProduct,
	      'id_product_attribute': elm.dataset.idProductAttribute
	    };
	    _jquery2['default'].post(_prestashop2['default'].urls.pages.product, data, null, 'json').then(function (resp) {
	      (0, _jquery2['default'])('body').append(resp.quickview_html);
	      var productModal = (0, _jquery2['default'])('#quickview-modal-' + resp.product.id + '-' + resp.product.id_product_attribute);
	      productModal.modal('show');
	      productConfig(productModal);
	      productModal.on('hidden.bs.modal', function () {
	        (0, _jquery2['default'])("body").removeAttr("style");
	        productModal.remove();
	      });
	
	      (0, _jquery2['default'])('.qv-carousel').owlCarousel({
	        nav: true,
	        margin: 15,
	        loop: false,
	        rewind: true,
	        rtl: (0, _jquery2['default'])('body').hasClass('lang-rtl') ? true : false,
	        navText: ["<i class='material-icons'></i>", "<i class='material-icons'></i>"],
	        responsive: {
	          0: {
	            items: 3
	          },
	          543: {
	            items: 4
	          },
	          767: {
	            items: 4
	          },
	          991: {
	            items: 4
	          }
	        }
	      });
	      (0, _jquery2['default'])('.qv-carousel').css('position', 'relative');
	    }).fail(function (resp) {
	      _prestashop2['default'].emit('handleError', { eventType: 'clickQuickView', resp: resp });
	    });
	  });
	
	  var productConfig = function productConfig(qv) {
	    var MAX_THUMBS = 3;
	    var jQueryarrows = (0, _jquery2['default'])('.js-arrows');
	    var jQuerythumbnails = qv.find('.js-qv-product-images');
	    (0, _jquery2['default'])('.js-thumb').on('click', function (event) {
	      if ((0, _jquery2['default'])('.js-thumb').hasClass('selected')) {
	        (0, _jquery2['default'])('.js-thumb').removeClass('selected');
	      }
	      (0, _jquery2['default'])(event.currentTarget).addClass('selected');
	      (0, _jquery2['default'])('.js-qv-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'));
	    });
	    if (jQuerythumbnails.find('li').length <= MAX_THUMBS) {
	      jQueryarrows.hide();
	    } else {
	      jQueryarrows.on('click', function (event) {
	        if ((0, _jquery2['default'])(event.target).hasClass('arrow-up') && (0, _jquery2['default'])('.js-qv-product-images').position().top < 0) {
	          move('up');
	          (0, _jquery2['default'])('.arrow-down').css('opacity', '1');
	        } else if ((0, _jquery2['default'])(event.target).hasClass('arrow-down') && jQuerythumbnails.position().top + jQuerythumbnails.height() > (0, _jquery2['default'])('.js-qv-mask').height()) {
	          move('down');
	          (0, _jquery2['default'])('.arrow-up').css('opacity', '1');
	        }
	      });
	    }
	    qv.find('#quantity_wanted').TouchSpin({
	      verticalbuttons: true,
	      verticalupclass: 'material-icons touchspin-up',
	      verticaldownclass: 'material-icons touchspin-down',
	      buttondown_class: 'btn btn-touchspin js-touchspin',
	      buttonup_class: 'btn btn-touchspin js-touchspin',
	      min: 1,
	      max: 1000000
	    });
	  };
	  var move = function move(direction) {
	    var THUMB_MARGIN = 20;
	    var jQuerythumbnails = (0, _jquery2['default'])('.js-qv-product-images');
	    var thumbHeight = (0, _jquery2['default'])('.js-qv-product-images li img').height() + THUMB_MARGIN;
	    var currentPosition = jQuerythumbnails.position().top;
	    jQuerythumbnails.velocity({
	      translateY: direction === 'up' ? currentPosition + thumbHeight : currentPosition - thumbHeight
	    }, function () {
	      if (jQuerythumbnails.position().top >= 0) {
	        (0, _jquery2['default'])('.arrow-up').css('opacity', '.2');
	      } else if (jQuerythumbnails.position().top + jQuerythumbnails.height() <= (0, _jquery2['default'])('.js-qv-mask').height()) {
	        (0, _jquery2['default'])('.arrow-down').css('opacity', '.2');
	      }
	    });
	  };
	  (0, _jquery2['default'])('body').on('click', '#search_filter_toggler', function () {
	    (0, _jquery2['default'])('#search_filters_wrapper').removeClass('hidden-md-down');
	    (0, _jquery2['default'])('#content-wrapper').addClass('hidden-md-down');
	  });
	  (0, _jquery2['default'])('#search_filter_controls .clear').on('click', function () {
	    (0, _jquery2['default'])('#search_filters_wrapper').addClass('hidden-md-down');
	    (0, _jquery2['default'])('#content-wrapper').removeClass('hidden-md-down');
	  });
	  (0, _jquery2['default'])('#search_filter_controls .ok').on('click', function () {
	    (0, _jquery2['default'])('#search_filters_wrapper').addClass('hidden-md-down');
	    (0, _jquery2['default'])('#content-wrapper').removeClass('hidden-md-down');
	  });
	
	  var parseSearchUrl = function parseSearchUrl(event) {
	    if (event.target.dataset.searchUrl !== undefined) {
	      return event.target.dataset.searchUrl;
	    }
	
	    if ((0, _jquery2['default'])(event.target).parent()[0].dataset.searchUrl === undefined) {
	      throw new Error('Can not parse search URL');
	    }
	
	    return (0, _jquery2['default'])(event.target).parent()[0].dataset.searchUrl;
	  };
	
	  (0, _jquery2['default'])('body').on('change', '#search_filters input[data-search-url]', function (event) {
	    _prestashop2['default'].emit('updateFacets', parseSearchUrl(event));
	  });
	
	  (0, _jquery2['default'])('body').on('click', '.js-search-filters-clear-all', function (event) {
	    _prestashop2['default'].emit('updateFacets', parseSearchUrl(event));
	  });
	
	  (0, _jquery2['default'])('body').on('click', '.js-search-link', function (event) {
	    event.preventDefault();
	    _prestashop2['default'].emit('updateFacets', (0, _jquery2['default'])(event.target).closest('a').get(0).href);
	  });
	
	  (0, _jquery2['default'])('body').on('change', '#search_filters select', function (event) {
	    var form = (0, _jquery2['default'])(event.target).closest('form');
	    _prestashop2['default'].emit('updateFacets', '?' + form.serialize());
	  });
	
	  _prestashop2['default'].on('updateProductList', function (data) {
	    updateProductListDOM(data);
	    setRequiredVariables();
	    var layout = _jquery2['default'].totalStorage('productLayout');
	    setProductLayout(layout);
	  });
	});
	
	function updateProductListDOM(data) {
	  (0, _jquery2['default'])('#search_filters').replaceWith(data.rendered_facets);
	  (0, _jquery2['default'])('#js-active-search-filters').replaceWith(data.rendered_active_filters);
	  (0, _jquery2['default'])('#js-product-list-top').replaceWith(data.rendered_products_top);
	  (0, _jquery2['default'])('#js-product-list').replaceWith(data.rendered_products);
	  (0, _jquery2['default'])('#js-product-list-bottom').replaceWith(data.rendered_products_bottom);
	
	  var productMinitature = new _componentsProductMiniature2['default']();
	  productMinitature.init();
	}
	function setRequiredVariables() {
	  (0, _jquery2['default'])('.cart-btn form').attr('action', (0, _jquery2['default'])('#ishiCartURL').val());
	  (0, _jquery2['default'])('.cart-btn #carttoken').attr('value', (0, _jquery2['default'])('#ishiStaticToken').val());
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
	
	/*************************
	 Velocity jQuery Shim
	 *************************/
	
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
	
	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
	
	(function(window) {
		"use strict";
		/***************
		 Setup
		 ***************/
	
		/* If jQuery is already loaded, there's no point in loading this shim. */
		if (window.jQuery) {
			return;
		}
	
		/* jQuery base. */
		var jQuery = function(selector, context) {
			return new jQuery.fn.init(selector, context);
		};
	
		/********************
		 Private Methods
		 ********************/
	
		/* jQuery */
		jQuery.isWindow = function(obj) {
			/* jshint eqeqeq: false */
			return obj && obj === obj.window;
		};
	
		/* jQuery */
		jQuery.type = function(obj) {
			if (!obj) {
				return obj + "";
			}
	
			return typeof obj === "object" || typeof obj === "function" ?
					class2type[toString.call(obj)] || "object" :
					typeof obj;
		};
	
		/* jQuery */
		jQuery.isArray = Array.isArray || function(obj) {
			return jQuery.type(obj) === "array";
		};
	
		/* jQuery */
		function isArraylike(obj) {
			var length = obj.length,
					type = jQuery.type(obj);
	
			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}
	
			if (obj.nodeType === 1 && length) {
				return true;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
		}
	
		/***************
		 jQuery Methods
		 ***************/
	
		/* jQuery: Support removed for IE<9. */
		jQuery.isPlainObject = function(obj) {
			var key;
	
			if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}
	
			try {
				if (obj.constructor &&
						!hasOwn.call(obj, "constructor") &&
						!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}
	
			for (key in obj) {
			}
	
			return key === undefined || hasOwn.call(obj, key);
		};
	
		/* jQuery */
		jQuery.each = function(obj, callback, args) {
			var value,
					i = 0,
					length = obj.length,
					isArray = isArraylike(obj);
	
			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);
	
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.apply(obj[i], args);
	
						if (value === false) {
							break;
						}
					}
				}
	
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);
	
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.call(obj[i], i, obj[i]);
	
						if (value === false) {
							break;
						}
					}
				}
			}
	
			return obj;
		};
	
		/* Custom */
		jQuery.data = function(node, key, value) {
			/* jQuery.getData() */
			if (value === undefined) {
				var getId = node[jQuery.expando],
						store = getId && cache[getId];
	
				if (key === undefined) {
					return store;
				} else if (store) {
					if (key in store) {
						return store[key];
					}
				}
				/* jQuery.setData() */
			} else if (key !== undefined) {
				var setId = node[jQuery.expando] || (node[jQuery.expando] = ++jQuery.uuid);
	
				cache[setId] = cache[setId] || {};
				cache[setId][key] = value;
	
				return value;
			}
		};
	
		/* Custom */
		jQuery.removeData = function(node, keys) {
			var id = node[jQuery.expando],
					store = id && cache[id];
	
			if (store) {
				// Cleanup the entire store if no keys are provided.
				if (!keys) {
					delete cache[id];
				} else {
					jQuery.each(keys, function(_, key) {
						delete store[key];
					});
				}
			}
		};
	
		/* jQuery */
		jQuery.extend = function() {
			var src, copyIsArray, copy, name, options, clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length,
					deep = false;
	
			if (typeof target === "boolean") {
				deep = target;
	
				target = arguments[i] || {};
				i++;
			}
	
			if (typeof target !== "object" && jQuery.type(target) !== "function") {
				target = {};
			}
	
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
				if ((options = arguments[i])) {
					for (name in options) {
						if (!options.hasOwnProperty(name)) {
							continue;
						}
						src = target[name];
						copy = options[name];
	
						if (target === copy) {
							continue;
						}
	
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
	
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}
	
							target[name] = jQuery.extend(deep, clone, copy);
	
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			return target;
		};
	
		/* jQuery 1.4.3 */
		jQuery.queue = function(elem, type, data) {
			function jQuerymakeArray(arr, results) {
				var ret = results || [];
	
				if (arr) {
					if (isArraylike(Object(arr))) {
						/* jQuery.merge */
						(function(first, second) {
							var len = +second.length,
									j = 0,
									i = first.length;
	
							while (j < len) {
								first[i++] = second[j++];
							}
	
							if (len !== len) {
								while (second[j] !== undefined) {
									first[i++] = second[j++];
								}
							}
	
							first.length = i;
	
							return first;
						})(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						[].push.call(ret, arr);
					}
				}
	
				return ret;
			}
	
			if (!elem) {
				return;
			}
	
			type = (type || "fx") + "queue";
	
			var q = jQuery.data(elem, type);
	
			if (!data) {
				return q || [];
			}
	
			if (!q || jQuery.isArray(data)) {
				q = jQuery.data(elem, type, jQuerymakeArray(data));
			} else {
				q.push(data);
			}
	
			return q;
		};
	
		/* jQuery 1.4.3 */
		jQuery.dequeue = function(elems, type) {
			/* Custom: Embed element iteration. */
			jQuery.each(elems.nodeType ? [elems] : elems, function(i, elem) {
				type = type || "fx";
	
				var queue = jQuery.queue(elem, type),
						fn = queue.shift();
	
				if (fn === "inprogress") {
					fn = queue.shift();
				}
	
				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					fn.call(elem, function() {
						jQuery.dequeue(elem, type);
					});
				}
			});
		};
	
		/******************
		 jQuery.fn Methods
		 ******************/
	
		/* jQuery */
		jQuery.fn = jQuery.prototype = {
			init: function(selector) {
				/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
				if (selector.nodeType) {
					this[0] = selector;
	
					return this;
				} else {
					throw new Error("Not a DOM node.");
				}
			},
			offset: function() {
				/* jQuery altered code: Dropped disconnected DOM node checking. */
				var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
	
				return {
					top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				};
			},
			position: function() {
				/* jQuery */
				function offsetParentFn(elem) {
					var offsetParent = elem.offsetParent;
	
					while (offsetParent && (offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position.toLowerCase() === "static")) {
						offsetParent = offsetParent.offsetParent;
					}
	
					return offsetParent || document;
				}
	
				/* Zepto */
				var elem = this[0],
						offsetParent = offsetParentFn(elem),
						offset = this.offset(),
						parentOffset = /^(?:body|html)jQuery/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : jQuery(offsetParent).offset();
	
				offset.top -= parseFloat(elem.style.marginTop) || 0;
				offset.left -= parseFloat(elem.style.marginLeft) || 0;
	
				if (offsetParent.style) {
					parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
					parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
				}
	
				return {
					top: offset.top - parentOffset.top,
					left: offset.left - parentOffset.left
				};
			}
		};
	
		/**********************
		 Private Variables
		 **********************/
	
		/* For jQuery.data() */
		var cache = {};
		jQuery.expando = "velocity" + (new Date().getTime());
		jQuery.uuid = 0;
	
		/* For jQuery.queue() */
		var class2type = {},
				hasOwn = class2type.hasOwnProperty,
				toString = class2type.toString;
	
		var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
		for (var i = 0; i < types.length; i++) {
			class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
		}
	
		/* Makes jQuery(node) possible, without having to call init. */
		jQuery.fn.init.prototype = jQuery.fn;
	
		/* Globalize Velocity onto the window, and assign its Utilities property. */
		window.Velocity = {Utilities: jQuery};
	})(window);
	
	/******************
	 Velocity.js
	 ******************/
	
	(function(factory) {
		"use strict";
		/* CommonJS module. */
		if (typeof module === "object" && typeof module.exports === "object") {
			module.exports = factory();
			/* AMD module. */
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			/* Browser globals. */
		} else {
			factory();
		}
	}(function() {
		"use strict";
		return function(global, window, document, undefined) {
	
			/***************
			 Summary
			 ***************/
	
			/*
			 - CSS: CSS stack that works independently from the rest of Velocity.
			 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
			 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
			 - Queueing: The logic that runs once the call has reached its point of execution in the element's jQuery.queue() stack.
			 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
			 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
			 - completeCall(): Handles the cleanup process for each Velocity call.
			 */
	
			/*********************
			 Helper Functions
			 *********************/
	
			/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
			var IE = (function() {
				if (document.documentMode) {
					return document.documentMode;
				} else {
					for (var i = 7; i > 4; i--) {
						var div = document.createElement("div");
	
						div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
	
						if (div.getElementsByTagName("span").length) {
							div = null;
	
							return i;
						}
					}
				}
	
				return undefined;
			})();
	
			/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
			var rAFShim = (function() {
				var timeLast = 0;
	
				return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
					var timeCurrent = (new Date()).getTime(),
							timeDelta;
	
					/* Dynamically set delay on a per-tick basis to match 60fps. */
					/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
					timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
					timeLast = timeCurrent + timeDelta;
	
					return setTimeout(function() {
						callback(timeCurrent + timeDelta);
					}, timeDelta);
				};
			})();
	
			var performance = (function() {
				var perf = window.performance || {};
	
				if (typeof perf.now !== "function") {
					var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();
	
					perf.now = function() {
						return (new Date()).getTime() - nowOffset;
					};
				}
				return perf;
			})();
	
			/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
			function compactSparseArray(array) {
				var index = -1,
						length = array ? array.length : 0,
						result = [];
	
				while (++index < length) {
					var value = array[index];
	
					if (value) {
						result.push(value);
					}
				}
	
				return result;
			}
	
			/**
			 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
			 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
			 * (technically, since host objects have been implementation-dependent,
			 * at least before ES2015, IE hasn't needed to work this way).
			 * Also works on strings, fixes IE < 9 to allow an explicit undefined
			 * for the 2nd argument (as in Firefox), and prevents errors when
			 * called on other DOM objects.
			 */
			var _slice = (function() {
				var slice = Array.prototype.slice;
	
				try {
					// Can't be used with DOM elements in IE < 9
					slice.call(document.documentElement);
					return slice;
				} catch (e) { // Fails in IE < 9
	
					// This will work for genuine arrays, array-like objects, 
					// NamedNodeMap (attributes, entities, notations),
					// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
					// and will not fail on other DOM objects (as do DOM elements in IE < 9)
					return function(begin, end) {
						var len = this.length;
	
						if (typeof begin !== "number") {
							begin = 0;
						}
						// IE < 9 gets unhappy with an undefined end argument
						if (typeof end !== "number") {
							end = len;
						}
						// For native Array objects, we use the native slice function
						if (this.slice) {
							return slice.call(this, begin, end);
						}
						// For array like object we handle it ourselves.
						var i,
								cloned = [],
								// Handle negative value for "begin"
								start = (begin >= 0) ? begin : Math.max(0, len + begin),
								// Handle negative value for "end"
								upTo = end < 0 ? len + end : Math.min(end, len),
								// Actual expected size of the slice
								size = upTo - start;
	
						if (size > 0) {
							cloned = new Array(size);
							if (this.charAt) {
								for (i = 0; i < size; i++) {
									cloned[i] = this.charAt(start + i);
								}
							} else {
								for (i = 0; i < size; i++) {
									cloned[i] = this[start + i];
								}
							}
						}
						return cloned;
					};
				}
			})();
	
			/* .indexOf doesn't exist in IE<9 */
			var _inArray = (function() {
				if (Array.prototype.includes) {
					return function(arr, val) {
						return arr.includes(val);
					};
				}
				if (Array.prototype.indexOf) {
					return function(arr, val) {
						return arr.indexOf(val) >= 0;
					};
				}
				return function(arr, val) {
					for (var i = 0; i < arr.length; i++) {
						if (arr[i] === val) {
							return true;
						}
					}
					return false;
				};
			});
	
			function sanitizeElements(elements) {
				/* Unwrap jQuery/Zepto objects. */
				if (Type.isWrapped(elements)) {
					elements = _slice.call(elements);
					/* Wrap a single element in an array so that jQuery.each() can iterate with the element instead of its node's children. */
				} else if (Type.isNode(elements)) {
					elements = [elements];
				}
	
				return elements;
			}
	
			var Type = {
				isNumber: function(variable) {
					return (typeof variable === "number");
				},
				isString: function(variable) {
					return (typeof variable === "string");
				},
				isArray: Array.isArray || function(variable) {
					return Object.prototype.toString.call(variable) === "[object Array]";
				},
				isFunction: function(variable) {
					return Object.prototype.toString.call(variable) === "[object Function]";
				},
				isNode: function(variable) {
					return variable && variable.nodeType;
				},
				/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
				/* NOTE: HTMLFormElements also have a length. */
				isWrapped: function(variable) {
					return variable
							&& variable !== window
							&& Type.isNumber(variable.length)
							&& !Type.isString(variable)
							&& !Type.isFunction(variable)
							&& !Type.isNode(variable)
							&& (variable.length === 0 || Type.isNode(variable[0]));
				},
				isSVG: function(variable) {
					return window.SVGElement && (variable instanceof window.SVGElement);
				},
				isEmptyObject: function(variable) {
					for (var name in variable) {
						if (variable.hasOwnProperty(name)) {
							return false;
						}
					}
	
					return true;
				}
			};
	
			/*****************
			 Dependencies
			 *****************/
	
			var jQuery,
					isJQuery = false;
	
			if (global.fn && global.fn.jquery) {
				jQuery = global;
				isJQuery = true;
			} else {
				jQuery = window.Velocity.Utilities;
			}
	
			if (IE <= 8 && !isJQuery) {
				throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			} else if (IE <= 7) {
				/* Revert to jQuery's jQuery.animate(), and lose Velocity's extra features. */
				jQuery.fn.velocity = jQuery.fn.animate;
	
				/* Now that jQuery.fn.velocity is aliased, abort this Velocity declaration. */
				return;
			}
	
			/*****************
			 Constants
			 *****************/
	
			var DURATION_DEFAULT = 400,
					EASING_DEFAULT = "swing";
	
			/*************
			 State
			 *************/
	
			var Velocity = {
				/* Container for page-wide Velocity state data. */
				State: {
					/* Detect mobile devices to determine if mobileHA should be turned on. */
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),
					/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
					isAndroid: /Android/i.test(window.navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(window.navigator.userAgent),
					isChrome: window.chrome,
					isFirefox: /Firefox/i.test(window.navigator.userAgent),
					/* Create a cached element for re-use when checking for CSS property prefixes. */
					prefixElement: document.createElement("div"),
					/* Cache every prefix match to avoid repeating lookups. */
					prefixMatches: {},
					/* Cache the anchor used for animating window scrolling. */
					scrollAnchor: null,
					/* Cache the browser-specific property names associated with the scroll anchor. */
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					/* Keep track of whether our RAF tick is running. */
					isTicking: false,
					/* Container for every in-progress call to Velocity. */
					calls: [],
					delayedElements: {
						count: 0
					}
				},
				/* Velocity's custom CSS stack. Made global for unit testing. */
				CSS: {/* Defined below. */},
				/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
				Utilities: jQuery,
				/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
				Redirects: {/* Manually registered by the user. */},
				Easings: {/* Defined below. */},
				/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
				Promise: window.Promise,
				/* Velocity option defaults, which can be overriden by the user. */
				defaults: {
					queue: "",
					duration: DURATION_DEFAULT,
					easing: EASING_DEFAULT,
					begin: undefined,
					complete: undefined,
					progress: undefined,
					display: undefined,
					visibility: undefined,
					loop: false,
					delay: false,
					mobileHA: true,
					/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
					_cacheValues: true,
					/* Advanced: Set to false if the promise should always resolve on empty element lists. */
					promiseRejectEmpty: true
				},
				/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
				init: function(element) {
					jQuery.data(element, "velocity", {
						/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
						isSVG: Type.isSVG(element),
						/* Keep track of whether the element is currently being animated by Velocity.
						 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
						isAnimating: false,
						/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
						computedStyle: null,
						/* Tween data is cached for each animation on the element so that data can be passed across calls --
						 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
						tweensContainer: null,
						/* The full root property values of each CSS hook being animated on this element are cached so that:
						 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
						 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
						rootPropertyValueCache: {},
						/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
						transformCache: {}
					});
				},
				/* A parallel to jQuery's jQuery.css(), used for getting/setting Velocity's hooked CSS properties. */
				hook: null, /* Defined below. */
				/* Velocity-wide animation time remapping for testing purposes. */
				mock: false,
				version: {major: 1, minor: 5, patch: 2},
				/* Set to 1 or 2 (most verbose) to output debug info to console. */
				debug: false,
				/* Use rAF high resolution timestamp when available */
				timestamp: true,
				/* Pause all animations */
				pauseAll: function(queueName) {
					var currentTime = (new Date()).getTime();
	
					jQuery.each(Velocity.State.calls, function(i, activeCall) {
	
						if (activeCall) {
	
							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}
	
							/* Set call to paused */
							activeCall[5] = {
								resume: false
							};
						}
					});
	
					/* Pause timers on any currently delayed calls */
					jQuery.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						pauseDelayOnElement(element, currentTime);
					});
				},
				/* Resume all animations */
				resumeAll: function(queueName) {
					var currentTime = (new Date()).getTime();
	
					jQuery.each(Velocity.State.calls, function(i, activeCall) {
	
						if (activeCall) {
	
							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}
	
							/* Set call to resumed if it was paused */
							if (activeCall[5]) {
								activeCall[5].resume = true;
							}
						}
					});
					/* Resume timers on any currently delayed calls */
					jQuery.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						resumeDelayOnElement(element, currentTime);
					});
				}
			};
	
			/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
			if (window.pageYOffset !== undefined) {
				Velocity.State.scrollAnchor = window;
				Velocity.State.scrollPropertyLeft = "pageXOffset";
				Velocity.State.scrollPropertyTop = "pageYOffset";
			} else {
				Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
				Velocity.State.scrollPropertyLeft = "scrollLeft";
				Velocity.State.scrollPropertyTop = "scrollTop";
			}
	
			/* Shorthand alias for jQuery's jQuery.data() utility. */
			function Data(element) {
				/* Hardcode a reference to the plugin name. */
				var response = jQuery.data(element, "velocity");
	
				/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
				return response === null ? undefined : response;
			}
	
			/**************
			 Delay Timer
			 **************/
	
			function pauseDelayOnElement(element, currentTime) {
				/* Check for any delay timers, and pause the set timeouts (while preserving time data)
				 to be resumed when the "resume" command is issued */
				var data = Data(element);
				if (data && data.delayTimer && !data.delayPaused) {
					data.delayRemaining = data.delay - currentTime + data.delayBegin;
					data.delayPaused = true;
					clearTimeout(data.delayTimer.setTimeout);
				}
			}
	
			function resumeDelayOnElement(element, currentTime) {
				/* Check for any paused timers and resume */
				var data = Data(element);
				if (data && data.delayTimer && data.delayPaused) {
					/* If the element was mid-delay, re initiate the timeout with the remaining delay */
					data.delayPaused = false;
					data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
				}
			}
	
	
	
			/**************
			 Easing
			 **************/
	
			/* Step easing generator. */
			function generateStep(steps) {
				return function(p) {
					return Math.round(p * steps) * (1 / steps);
				};
			}
	
			/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			function generateBezier(mX1, mY1, mX2, mY2) {
				var NEWTON_ITERATIONS = 4,
						NEWTON_MIN_SLOPE = 0.001,
						SUBDIVISION_PRECISION = 0.0000001,
						SUBDIVISION_MAX_ITERATIONS = 10,
						kSplineTableSize = 11,
						kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
						float32ArraySupported = "Float32Array" in window;
	
				/* Must contain four arguments. */
				if (arguments.length !== 4) {
					return false;
				}
	
				/* Arguments must be numbers. */
				for (var i = 0; i < 4; ++i) {
					if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
						return false;
					}
				}
	
				/* X values must be in the [0, 1] range. */
				mX1 = Math.min(mX1, 1);
				mX2 = Math.min(mX2, 1);
				mX1 = Math.max(mX1, 0);
				mX2 = Math.max(mX2, 0);
	
				var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	
				function A(aA1, aA2) {
					return 1.0 - 3.0 * aA2 + 3.0 * aA1;
				}
				function B(aA1, aA2) {
					return 3.0 * aA2 - 6.0 * aA1;
				}
				function C(aA1) {
					return 3.0 * aA1;
				}
	
				function calcBezier(aT, aA1, aA2) {
					return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
				}
	
				function getSlope(aT, aA1, aA2) {
					return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
				}
	
				function newtonRaphsonIterate(aX, aGuessT) {
					for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
						var currentSlope = getSlope(aGuessT, mX1, mX2);
	
						if (currentSlope === 0.0) {
							return aGuessT;
						}
	
						var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
						aGuessT -= currentX / currentSlope;
					}
	
					return aGuessT;
				}
	
				function calcSampleValues() {
					for (var i = 0; i < kSplineTableSize; ++i) {
						mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
					}
				}
	
				function binarySubdivide(aX, aA, aB) {
					var currentX, currentT, i = 0;
	
					do {
						currentT = aA + (aB - aA) / 2.0;
						currentX = calcBezier(currentT, mX1, mX2) - aX;
						if (currentX > 0.0) {
							aB = currentT;
						} else {
							aA = currentT;
						}
					} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
					return currentT;
				}
	
				function getTForX(aX) {
					var intervalStart = 0.0,
							currentSample = 1,
							lastSample = kSplineTableSize - 1;
	
					for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
						intervalStart += kSampleStepSize;
					}
	
					--currentSample;
	
					var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
							guessForT = intervalStart + dist * kSampleStepSize,
							initialSlope = getSlope(guessForT, mX1, mX2);
	
					if (initialSlope >= NEWTON_MIN_SLOPE) {
						return newtonRaphsonIterate(aX, guessForT);
					} else if (initialSlope === 0.0) {
						return guessForT;
					} else {
						return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
					}
				}
	
				var _precomputed = false;
	
				function precompute() {
					_precomputed = true;
					if (mX1 !== mY1 || mX2 !== mY2) {
						calcSampleValues();
					}
				}
	
				var f = function(aX) {
					if (!_precomputed) {
						precompute();
					}
					if (mX1 === mY1 && mX2 === mY2) {
						return aX;
					}
					if (aX === 0) {
						return 0;
					}
					if (aX === 1) {
						return 1;
					}
	
					return calcBezier(getTForX(aX), mY1, mY2);
				};
	
				f.getControlPoints = function() {
					return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
				};
	
				var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
				f.toString = function() {
					return str;
				};
	
				return f;
			}
	
			/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
			 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
			var generateSpringRK4 = (function() {
				function springAccelerationForState(state) {
					return (-state.tension * state.x) - (state.friction * state.v);
				}
	
				function springEvaluateStateWithDerivative(initialState, dt, derivative) {
					var state = {
						x: initialState.x + derivative.dx * dt,
						v: initialState.v + derivative.dv * dt,
						tension: initialState.tension,
						friction: initialState.friction
					};
	
					return {dx: state.v, dv: springAccelerationForState(state)};
				}
	
				function springIntegrateState(state, dt) {
					var a = {
						dx: state.v,
						dv: springAccelerationForState(state)
					},
							b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
							c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
							d = springEvaluateStateWithDerivative(state, dt, c),
							dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
							dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	
					state.x = state.x + dxdt * dt;
					state.v = state.v + dvdt * dt;
	
					return state;
				}
	
				return function springRK4Factory(tension, friction, duration) {
	
					var initState = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
							path = [0],
							time_lapsed = 0,
							tolerance = 1 / 10000,
							DT = 16 / 1000,
							have_duration, dt, last_state;
	
					tension = parseFloat(tension) || 500;
					friction = parseFloat(friction) || 20;
					duration = duration || null;
	
					initState.tension = tension;
					initState.friction = friction;
	
					have_duration = duration !== null;
	
					/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
					if (have_duration) {
						/* Run the simulation without a duration. */
						time_lapsed = springRK4Factory(tension, friction);
						/* Compute the adjusted time delta. */
						dt = time_lapsed / duration * DT;
					} else {
						dt = DT;
					}
	
					while (true) {
						/* Next/step function .*/
						last_state = springIntegrateState(last_state || initState, dt);
						/* Store the position. */
						path.push(1 + last_state.x);
						time_lapsed += 16;
						/* If the change threshold is reached, break. */
						if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
							break;
						}
					}
	
					/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
					 computed path and returns a snapshot of the position according to a given percentComplete. */
					return !have_duration ? time_lapsed : function(percentComplete) {
						return path[ (percentComplete * (path.length - 1)) | 0 ];
					};
				};
			}());
	
			/* jQuery easings. */
			Velocity.Easings = {
				linear: function(p) {
					return p;
				},
				swing: function(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
				spring: function(p) {
					return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
				}
			};
	
			/* CSS3 and Robert Penner easings. */
			jQuery.each(
					[
						["ease", [0.25, 0.1, 0.25, 1.0]],
						["ease-in", [0.42, 0.0, 1.00, 1.0]],
						["ease-out", [0.00, 0.0, 0.58, 1.0]],
						["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
						["easeInSine", [0.47, 0, 0.745, 0.715]],
						["easeOutSine", [0.39, 0.575, 0.565, 1]],
						["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
						["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
						["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
						["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
						["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
						["easeOutCubic", [0.215, 0.61, 0.355, 1]],
						["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
						["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
						["easeOutQuart", [0.165, 0.84, 0.44, 1]],
						["easeInOutQuart", [0.77, 0, 0.175, 1]],
						["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
						["easeOutQuint", [0.23, 1, 0.32, 1]],
						["easeInOutQuint", [0.86, 0, 0.07, 1]],
						["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
						["easeOutExpo", [0.19, 1, 0.22, 1]],
						["easeInOutExpo", [1, 0, 0, 1]],
						["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
						["easeOutCirc", [0.075, 0.82, 0.165, 1]],
						["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
					], function(i, easingArray) {
				Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
			});
	
			/* Determine the appropriate easing type given an easing input. */
			function getEasing(value, duration) {
				var easing = value;
	
				/* The easing option can either be a string that references a pre-registered easing,
				 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
				if (Type.isString(value)) {
					/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
					if (!Velocity.Easings[value]) {
						easing = false;
					}
				} else if (Type.isArray(value) && value.length === 1) {
					easing = generateStep.apply(null, value);
				} else if (Type.isArray(value) && value.length === 2) {
					/* springRK4 must be passed the animation's duration. */
					/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
					 function generated with default tension and friction values. */
					easing = generateSpringRK4.apply(null, value.concat([duration]));
				} else if (Type.isArray(value) && value.length === 4) {
					/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
					easing = generateBezier.apply(null, value);
				} else {
					easing = false;
				}
	
				/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
				 if the Velocity-wide default has been incorrectly modified. */
				if (easing === false) {
					if (Velocity.Easings[Velocity.defaults.easing]) {
						easing = Velocity.defaults.easing;
					} else {
						easing = EASING_DEFAULT;
					}
				}
	
				return easing;
			}
	
			/*****************
			 CSS Stack
			 *****************/
	
			/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
			 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
			/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
			var CSS = Velocity.CSS = {
				/*************
				 RegEx
				 *************/
	
				RegEx: {
					isHex: /^#([A-f\d]{3}){1,2}jQuery/i,
					/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
					valueUnwrap: /^[A-z]+\((.*)\)jQuery/i,
					wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
					/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
					valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|jQuery))/ig
				},
				/************
				 Lists
				 ************/
	
				Lists: {
					colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
					transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
					transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
					units: [
						"%", // relative
						"em", "ex", "ch", "rem", // font relative
						"vw", "vh", "vmin", "vmax", // viewport relative
						"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
						"deg", "grad", "rad", "turn", // angles
						"s", "ms" // time
					],
					colorNames: {
						"aliceblue": "240,248,255",
						"antiquewhite": "250,235,215",
						"aquamarine": "127,255,212",
						"aqua": "0,255,255",
						"azure": "240,255,255",
						"beige": "245,245,220",
						"bisque": "255,228,196",
						"black": "0,0,0",
						"blanchedalmond": "255,235,205",
						"blueviolet": "138,43,226",
						"blue": "0,0,255",
						"brown": "165,42,42",
						"burlywood": "222,184,135",
						"cadetblue": "95,158,160",
						"chartreuse": "127,255,0",
						"chocolate": "210,105,30",
						"coral": "255,127,80",
						"cornflowerblue": "100,149,237",
						"cornsilk": "255,248,220",
						"crimson": "220,20,60",
						"cyan": "0,255,255",
						"darkblue": "0,0,139",
						"darkcyan": "0,139,139",
						"darkgoldenrod": "184,134,11",
						"darkgray": "169,169,169",
						"darkgrey": "169,169,169",
						"darkgreen": "0,100,0",
						"darkkhaki": "189,183,107",
						"darkmagenta": "139,0,139",
						"darkolivegreen": "85,107,47",
						"darkorange": "255,140,0",
						"darkorchid": "153,50,204",
						"darkred": "139,0,0",
						"darksalmon": "233,150,122",
						"darkseagreen": "143,188,143",
						"darkslateblue": "72,61,139",
						"darkslategray": "47,79,79",
						"darkturquoise": "0,206,209",
						"darkviolet": "148,0,211",
						"deeppink": "255,20,147",
						"deepskyblue": "0,191,255",
						"dimgray": "105,105,105",
						"dimgrey": "105,105,105",
						"dodgerblue": "30,144,255",
						"firebrick": "178,34,34",
						"floralwhite": "255,250,240",
						"forestgreen": "34,139,34",
						"fuchsia": "255,0,255",
						"gainsboro": "220,220,220",
						"ghostwhite": "248,248,255",
						"gold": "255,215,0",
						"goldenrod": "218,165,32",
						"gray": "128,128,128",
						"grey": "128,128,128",
						"greenyellow": "173,255,47",
						"green": "0,128,0",
						"honeydew": "240,255,240",
						"hotpink": "255,105,180",
						"indianred": "205,92,92",
						"indigo": "75,0,130",
						"ivory": "255,255,240",
						"khaki": "240,230,140",
						"lavenderblush": "255,240,245",
						"lavender": "230,230,250",
						"lawngreen": "124,252,0",
						"lemonchiffon": "255,250,205",
						"lightblue": "173,216,230",
						"lightcoral": "240,128,128",
						"lightcyan": "224,255,255",
						"lightgoldenrodyellow": "250,250,210",
						"lightgray": "211,211,211",
						"lightgrey": "211,211,211",
						"lightgreen": "144,238,144",
						"lightpink": "255,182,193",
						"lightsalmon": "255,160,122",
						"lightseagreen": "32,178,170",
						"lightskyblue": "135,206,250",
						"lightslategray": "119,136,153",
						"lightsteelblue": "176,196,222",
						"lightyellow": "255,255,224",
						"limegreen": "50,205,50",
						"lime": "0,255,0",
						"linen": "250,240,230",
						"magenta": "255,0,255",
						"maroon": "128,0,0",
						"mediumaquamarine": "102,205,170",
						"mediumblue": "0,0,205",
						"mediumorchid": "186,85,211",
						"mediumpurple": "147,112,219",
						"mediumseagreen": "60,179,113",
						"mediumslateblue": "123,104,238",
						"mediumspringgreen": "0,250,154",
						"mediumturquoise": "72,209,204",
						"mediumvioletred": "199,21,133",
						"midnightblue": "25,25,112",
						"mintcream": "245,255,250",
						"mistyrose": "255,228,225",
						"moccasin": "255,228,181",
						"navajowhite": "255,222,173",
						"navy": "0,0,128",
						"oldlace": "253,245,230",
						"olivedrab": "107,142,35",
						"olive": "128,128,0",
						"orangered": "255,69,0",
						"orange": "255,165,0",
						"orchid": "218,112,214",
						"palegoldenrod": "238,232,170",
						"palegreen": "152,251,152",
						"paleturquoise": "175,238,238",
						"palevioletred": "219,112,147",
						"papayawhip": "255,239,213",
						"peachpuff": "255,218,185",
						"peru": "205,133,63",
						"pink": "255,192,203",
						"plum": "221,160,221",
						"powderblue": "176,224,230",
						"purple": "128,0,128",
						"red": "255,0,0",
						"rosybrown": "188,143,143",
						"royalblue": "65,105,225",
						"saddlebrown": "139,69,19",
						"salmon": "250,128,114",
						"sandybrown": "244,164,96",
						"seagreen": "46,139,87",
						"seashell": "255,245,238",
						"sienna": "160,82,45",
						"silver": "192,192,192",
						"skyblue": "135,206,235",
						"slateblue": "106,90,205",
						"slategray": "112,128,144",
						"snow": "255,250,250",
						"springgreen": "0,255,127",
						"steelblue": "70,130,180",
						"tan": "210,180,140",
						"teal": "0,128,128",
						"thistle": "216,191,216",
						"tomato": "255,99,71",
						"turquoise": "64,224,208",
						"violet": "238,130,238",
						"wheat": "245,222,179",
						"whitesmoke": "245,245,245",
						"white": "255,255,255",
						"yellowgreen": "154,205,50",
						"yellow": "255,255,0"
					}
				},
				/************
				 Hooks
				 ************/
	
				/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
				 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
				/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
				 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
				Hooks: {
					/********************
					 Registration
					 ********************/
	
					/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
					/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
					templates: {
						"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
						"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
						"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
						"backgroundPosition": ["X Y", "0% 0%"],
						"transformOrigin": ["X Y Z", "50% 50% 0px"],
						"perspectiveOrigin": ["X Y", "50% 50%"]
					},
					/* A "registered" hook is one that has been converted from its template form into a live,
					 tweenable property. It contains data to associate it with its root property. */
					registered: {
						/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
						 which consists of the subproperty's name, the associated root property's name,
						 and the subproperty's position in the root's value. */
					},
					/* Convert the templates into individual hooks then append them to the registered object above. */
					register: function() {
						/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
						 currently set to "transparent" default to their respective template below when color-animated,
						 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
						 which is almost always set closer to black than white. */
						for (var i = 0; i < CSS.Lists.colors.length; i++) {
							var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
							CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
						}
	
						var rootProperty,
								hookTemplate,
								hookNames;
	
						/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
						 Thus, we re-arrange the templates accordingly. */
						if (IE) {
							for (rootProperty in CSS.Hooks.templates) {
								if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
									continue;
								}
								hookTemplate = CSS.Hooks.templates[rootProperty];
								hookNames = hookTemplate[0].split(" ");
	
								var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
	
								if (hookNames[0] === "Color") {
									/* Reposition both the hook's name and its default value to the end of their respective strings. */
									hookNames.push(hookNames.shift());
									defaultValues.push(defaultValues.shift());
	
									/* Replace the existing template for the hook's root property. */
									CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
								}
							}
						}
	
						/* Hook registration. */
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");
	
							for (var j in hookNames) {
								if (!hookNames.hasOwnProperty(j)) {
									continue;
								}
								var fullHookName = rootProperty + hookNames[j],
										hookPosition = j;
	
								/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
								 and the hook's position in its template's default value string. */
								CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
							}
						}
					},
					/*****************************
					 Injection and Extraction
					 *****************************/
	
					/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
					/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
					getRoot: function(property) {
						var hookData = CSS.Hooks.registered[property];
	
						if (hookData) {
							return hookData[0];
						} else {
							/* If there was no hook match, return the property name untouched. */
							return property;
						}
					},
					getUnit: function(str, start) {
						var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
	
						if (unit && _inArray(CSS.Lists.units, unit)) {
							return unit;
						}
						return "";
					},
					fixColors: function(str) {
						return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(jQuery0, jQuery1, jQuery2) {
							if (CSS.Lists.colorNames.hasOwnProperty(jQuery2)) {
								return (jQuery1 ? jQuery1 : "rgba(") + CSS.Lists.colorNames[jQuery2] + (jQuery1 ? "" : ",1)");
							}
							return jQuery1 + jQuery2;
						});
					},
					/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
					 the targeted hook can be injected or extracted at its standard position. */
					cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
						/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
						if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
							rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
						}
	
						/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
						 default to the root's default value as defined in CSS.Hooks.templates. */
						/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
						 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
						if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
							rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
						}
	
						return rootPropertyValue;
					},
					/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
					extractValue: function(fullHookName, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];
	
						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1];
	
							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
							/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
							return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					},
					/* Inject the hook's value into its root property's value. This is used to piece back together the root property
					 once Velocity has updated one of its individually hooked values through tweening. */
					injectValue: function(fullHookName, hookValue, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];
	
						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1],
									rootPropertyValueParts,
									rootPropertyValueUpdated;
	
							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
							/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
							 then reconstruct the rootPropertyValue string. */
							rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
							rootPropertyValueParts[hookPosition] = hookValue;
							rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
	
							return rootPropertyValueUpdated;
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					}
				},
				/*******************
				 Normalizations
				 *******************/
	
				/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
				 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
				Normalizations: {
					/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
					 the targeted element (which may need to be queried), and the targeted property value. */
					registered: {
						clip: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return "clip";
									/* Clip needs to be unwrapped and stripped of its commas during extraction. */
								case "extract":
									var extracted;
	
									/* If Velocity also extracted this value, skip extraction. */
									if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
										extracted = propertyValue;
									} else {
										/* Remove the "rect()" wrapper. */
										extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
	
										/* Strip off commas. */
										extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
									}
	
									return extracted;
									/* Clip needs to be re-wrapped during injection. */
								case "inject":
									return "rect(" + propertyValue + ")";
							}
						},
						blur: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
								case "extract":
									var extracted = parseFloat(propertyValue);
	
									/* If extracted is NaN, meaning the value isn't already extracted. */
									if (!(extracted || extracted === 0)) {
										var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
	
										/* If the filter string had a blur component, return just the blur value and unit type. */
										if (blurComponent) {
											extracted = blurComponent[1];
											/* If the component doesn't exist, default blur to 0. */
										} else {
											extracted = 0;
										}
									}
	
									return extracted;
									/* Blur needs to be re-wrapped during injection. */
								case "inject":
									/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
									if (!parseFloat(propertyValue)) {
										return "none";
									} else {
										return "blur(" + propertyValue + ")";
									}
							}
						},
						/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
						opacity: function(type, element, propertyValue) {
							if (IE <= 8) {
								switch (type) {
									case "name":
										return "filter";
									case "extract":
										/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
										 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
										var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
	
										if (extracted) {
											/* Convert to decimal value. */
											propertyValue = extracted[1] / 100;
										} else {
											/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
											propertyValue = 1;
										}
	
										return propertyValue;
									case "inject":
										/* Opacified elements are required to have their zoom property set to a non-zero value. */
										element.style.zoom = 1;
	
										/* Setting the filter property on elements with certain font property combinations can result in a
										 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
										 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
										if (parseFloat(propertyValue) >= 1) {
											return "";
										} else {
											/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
											return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
										}
								}
								/* With all other browsers, normalization is not required; return the same values that were passed in. */
							} else {
								switch (type) {
									case "name":
										return "opacity";
									case "extract":
										return propertyValue;
									case "inject":
										return propertyValue;
								}
							}
						}
					},
					/*****************************
					 Batched Registrations
					 *****************************/
	
					/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
					register: function() {
	
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
						if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
							/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
							 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
							CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
						}
	
						for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
							/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
							 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
							(function() {
								var transformName = CSS.Lists.transformsBase[i];
	
								CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
									switch (type) {
										/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
										case "name":
											return "transform";
											/* Transform values are cached onto a per-element transformCache object. */
										case "extract":
											/* If this transform has yet to be assigned a value, return its null value. */
											if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
												/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
												return /^scale/i.test(transformName) ? 1 : 0;
												/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
												 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
											}
											return Data(element).transformCache[transformName].replace(/[()]/g, "");
										case "inject":
											var invalid = false;
	
											/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
											 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
											/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
											switch (transformName.substr(0, transformName.length - 1)) {
												/* Whitelist unit types for each transform. */
												case "translate":
													invalid = !/(%|px|em|rem|vw|vh|\d)jQuery/i.test(propertyValue);
													break;
													/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
												case "scal":
												case "scale":
													/* Chrome on Android has a bug in which scaled elements blur if their initial scale
													 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
													 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
													if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
														propertyValue = 1;
													}
	
													invalid = !/(\d)jQuery/i.test(propertyValue);
													break;
												case "skew":
													invalid = !/(deg|\d)jQuery/i.test(propertyValue);
													break;
												case "rotate":
													invalid = !/(deg|\d)jQuery/i.test(propertyValue);
													break;
											}
	
											if (!invalid) {
												/* As per the CSS spec, wrap the value in parentheses. */
												Data(element).transformCache[transformName] = "(" + propertyValue + ")";
											}
	
											/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
											return Data(element).transformCache[transformName];
									}
								};
							})();
						}
	
						/*************
						 Colors
						 *************/
	
						/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
						 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
						for (var j = 0; j < CSS.Lists.colors.length; j++) {
							/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
							 (Otherwise, all functions would take the final for loop's colorName.) */
							(function() {
								var colorName = CSS.Lists.colors[j];
	
								/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
								CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
									switch (type) {
										case "name":
											return colorName;
											/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
										case "extract":
											var extracted;
	
											/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
											if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
												extracted = propertyValue;
											} else {
												var converted,
														colorNames = {
															black: "rgb(0, 0, 0)",
															blue: "rgb(0, 0, 255)",
															gray: "rgb(128, 128, 128)",
															green: "rgb(0, 128, 0)",
															red: "rgb(255, 0, 0)",
															white: "rgb(255, 255, 255)"
														};
	
												/* Convert color names to rgb. */
												if (/^[A-z]+jQuery/i.test(propertyValue)) {
													if (colorNames[propertyValue] !== undefined) {
														converted = colorNames[propertyValue];
													} else {
														/* If an unmatched color name is provided, default to black. */
														converted = colorNames.black;
													}
													/* Convert hex values to rgb. */
												} else if (CSS.RegEx.isHex.test(propertyValue)) {
													converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
													/* If the provided color doesn't match any of the accepted color formats, default to black. */
												} else if (!(/^rgba?\(/i.test(propertyValue))) {
													converted = colorNames.black;
												}
	
												/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
												 repeated spaces (in case the value included spaces to begin with). */
												extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
											}
	
											/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
												extracted += " 1";
											}
	
											return extracted;
										case "inject":
											/* If we have a pattern then it might already have the right values */
											if (/^rgb/.test(propertyValue)) {
												return propertyValue;
											}
	
											/* If this is IE<=8 and an alpha component exists, strip it off. */
											if (IE <= 8) {
												if (propertyValue.split(" ").length === 4) {
													propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
												}
												/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											} else if (propertyValue.split(" ").length === 3) {
												propertyValue += " 1";
											}
	
											/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
											 on all values but the fourth (R, G, and B only accept whole numbers). */
											return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
									}
								};
							})();
						}
	
						/**************
						 Dimensions
						 **************/
						function augmentDimension(name, element, wantInner) {
							var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";
	
							if (isBorderBox === (wantInner || false)) {
								/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
								var i,
										value,
										augment = 0,
										sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
										fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];
	
								for (i = 0; i < fields.length; i++) {
									value = parseFloat(CSS.getPropertyValue(element, fields[i]));
									if (!isNaN(value)) {
										augment += value;
									}
								}
								return wantInner ? -augment : augment;
							}
							return 0;
						}
						function getDimension(name, wantInner) {
							return function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return name;
									case "extract":
										return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
									case "inject":
										return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
								}
							};
						}
						CSS.Normalizations.registered.innerWidth = getDimension("width", true);
						CSS.Normalizations.registered.innerHeight = getDimension("height", true);
						CSS.Normalizations.registered.outerWidth = getDimension("width");
						CSS.Normalizations.registered.outerHeight = getDimension("height");
					}
				},
				/************************
				 CSS Property Names
				 ************************/
	
				Names: {
					/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
					 Camelcasing is used to normalize property names between and across calls. */
					camelCase: function(property) {
						return property.replace(/-(\w)/g, function(match, subMatch) {
							return subMatch.toUpperCase();
						});
					},
					/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
					SVGAttribute: function(property) {
						var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
	
						/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
						if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
							SVGAttributes += "|transform";
						}
	
						return new RegExp("^(" + SVGAttributes + ")jQuery", "i").test(property);
					},
					/* Determine whether a property should be set with a vendor prefix. */
					/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
					 If the property is not at all supported by the browser, return a false flag. */
					prefixCheck: function(property) {
						/* If this property has already been checked, return the cached value. */
						if (Velocity.State.prefixMatches[property]) {
							return [Velocity.State.prefixMatches[property], true];
						} else {
							var vendors = ["", "Webkit", "Moz", "ms", "O"];
	
							for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
								var propertyPrefixed;
	
								if (i === 0) {
									propertyPrefixed = property;
								} else {
									/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
									propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
										return match.toUpperCase();
									});
								}
	
								/* Check if the browser supports this property as prefixed. */
								if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
									/* Cache the match. */
									Velocity.State.prefixMatches[property] = propertyPrefixed;
	
									return [propertyPrefixed, true];
								}
							}
	
							/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
							return [property, false];
						}
					}
				},
				/************************
				 CSS Property Values
				 ************************/
	
				Values: {
					/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
					hexToRgb: function(hex) {
						var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])jQuery/i,
								longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})jQuery/i,
								rgbParts;
	
						hex = hex.replace(shortformRegex, function(m, r, g, b) {
							return r + r + g + g + b + b;
						});
	
						rgbParts = longformRegex.exec(hex);
	
						return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
					},
					isCSSNullValue: function(value) {
						/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
						 Thus, we check for both falsiness and these special strings. */
						/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
						 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
						/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
						return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))jQuery/i.test(value));
					},
					/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
					getUnitType: function(property) {
						if (/^(rotate|skew)/i.test(property)) {
							return "deg";
						} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)jQuery)|((opacity|red|green|blue|alpha)jQuery)/i.test(property)) {
							/* The above properties are unitless. */
							return "";
						} else {
							/* Default to px for all other properties. */
							return "px";
						}
					},
					/* HTML elements default to an associated display type when they're not set to display:none. */
					/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
					getDisplayType: function(element) {
						var tagName = element && element.tagName.toString().toLowerCase();
	
						if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)jQuery/i.test(tagName)) {
							return "inline";
						} else if (/^(li)jQuery/i.test(tagName)) {
							return "list-item";
						} else if (/^(tr)jQuery/i.test(tagName)) {
							return "table-row";
						} else if (/^(table)jQuery/i.test(tagName)) {
							return "table";
						} else if (/^(tbody)jQuery/i.test(tagName)) {
							return "table-row-group";
							/* Default to "block" when no match is found. */
						} else {
							return "block";
						}
					},
					/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
					addClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.add(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								element.className += (element.className.length ? " " : "") + className;
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
	
								element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
							}
						}
					},
					removeClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.remove(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
								element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|jQuery)", "gi"), " ");
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
	
								element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|jQuery)", "gi"), " "));
							}
						}
					}
				},
				/****************************
				 Style Getting & Setting
				 ****************************/
	
				/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
					/* Get an element's computed property value. */
					/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
					 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
					 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					function computePropertyValue(element, property) {
						/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
						 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
						 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
						 We subtract border and padding to get the sum of interior + scrollbar. */
						var computedValue = 0;
	
						/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
						 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
						 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
						 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the jQuery.css() codepath isn't that slow. */
						if (IE <= 8) {
							computedValue = jQuery.css(element, property); /* GET */
							/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
							 associated element so that it does not need to be refetched upon every GET. */
						} else {
							/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
							 toggle display to the element type's default value. */
							var toggleDisplay = false;
	
							if (/^(width|height)jQuery/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
								toggleDisplay = true;
								CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
							}
	
							var revertDisplay = function() {
								if (toggleDisplay) {
									CSS.setPropertyValue(element, "display", "none");
								}
							};
	
							if (!forceStyleLookup) {
								if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
									revertDisplay();
	
									return contentBoxHeight;
								} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
									revertDisplay();
	
									return contentBoxWidth;
								}
							}
	
							var computedStyle;
	
							/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
							 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
							if (Data(element) === undefined) {
								computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If the computedStyle object has yet to be cached, do so now. */
							} else if (!Data(element).computedStyle) {
								computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If computedStyle is cached, use it. */
							} else {
								computedStyle = Data(element).computedStyle;
							}
	
							/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
							 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
							 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
							if (property === "borderColor") {
								property = "borderTopColor";
							}
	
							/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
							 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
							if (IE === 9 && property === "filter") {
								computedValue = computedStyle.getPropertyValue(property); /* GET */
							} else {
								computedValue = computedStyle[property];
							}
	
							/* Fall back to the property's style value (if defined) when computedValue returns nothing,
							 which can happen when the element hasn't been painted. */
							if (computedValue === "" || computedValue === null) {
								computedValue = element.style[property];
							}
	
							revertDisplay();
						}
	
						/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
						 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
						 effect as being set to 0, so no conversion is necessary.) */
						/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
						 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
						 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
						if (computedValue === "auto" && /^(top|right|bottom|left)jQuery/i.test(property)) {
							var position = computePropertyValue(element, "position"); /* GET */
	
							/* For absolute positioning, jQuery's jQuery.position() only returns values for top and left;
							 right and bottom will have their "auto" value reverted to 0. */
							/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for jQuery.position().
							 Not a big deal since we're currently in a GET batch anyway. */
							if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
								/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
								computedValue = jQuery(element).position()[property] + "px"; /* GET */
							}
						}
	
						return computedValue;
					}
	
					var propertyValue;
	
					/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
					 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
					if (CSS.Hooks.registered[property]) {
						var hook = property,
								hookRoot = CSS.Hooks.getRoot(hook);
	
						/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
						 query the DOM for the root property's value. */
						if (rootPropertyValue === undefined) {
							/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
							rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
						}
	
						/* If this root has a normalization registered, peform the associated normalization extraction. */
						if (CSS.Normalizations.registered[hookRoot]) {
							rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
						}
	
						/* Extract the hook's value. */
						propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
	
						/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
						 normalize the property's name and value, and handle the special case of transforms. */
						/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
						 numerical and therefore do not require normalization extraction. */
					} else if (CSS.Normalizations.registered[property]) {
						var normalizedPropertyName,
								normalizedPropertyValue;
	
						normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
	
						/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
						 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
						 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
						 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
						if (normalizedPropertyName !== "transform") {
							normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */
	
							/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
							if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
								normalizedPropertyValue = CSS.Hooks.templates[property][1];
							}
						}
	
						propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
					}
	
					/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
					if (!/^[\d-]/.test(propertyValue)) {
						/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
						 their HTML attribute values instead of their CSS style values. */
						var data = Data(element);
	
						if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
							/* Since the height/width attribute values must be set manually, they don't reflect computed values.
							 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
							if (/^(height|width)jQuery/i.test(property)) {
								/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
								try {
									propertyValue = element.getBBox()[property];
								} catch (error) {
									propertyValue = 0;
								}
								/* Otherwise, access the attribute value directly. */
							} else {
								propertyValue = element.getAttribute(property);
							}
						} else {
							propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
						}
					}
	
					/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
					 convert CSS null-values to an integer of value 0. */
					if (CSS.Values.isCSSNullValue(propertyValue)) {
						propertyValue = 0;
					}
	
					if (Velocity.debug >= 2) {
						console.log("Get " + property + ": " + propertyValue);
					}
	
					return propertyValue;
				},
				/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
					var propertyName = property;
	
					/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
					if (property === "scroll") {
						/* If a container option is present, scroll the container instead of the browser window. */
						if (scrollData.container) {
							scrollData.container["scroll" + scrollData.direction] = propertyValue;
							/* Otherwise, Velocity defaults to scrolling the browser window. */
						} else {
							if (scrollData.direction === "Left") {
								window.scrollTo(propertyValue, scrollData.alternateValue);
							} else {
								window.scrollTo(scrollData.alternateValue, propertyValue);
							}
						}
					} else {
						/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
						 Thus, for now, we merely cache transforms being SET. */
						if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
							/* Perform a normalization injection. */
							/* Note: The normalization logic handles the transformCache updating. */
							CSS.Normalizations.registered[property]("inject", element, propertyValue);
	
							propertyName = "transform";
							propertyValue = Data(element).transformCache[property];
						} else {
							/* Inject hooks. */
							if (CSS.Hooks.registered[property]) {
								var hookName = property,
										hookRoot = CSS.Hooks.getRoot(property);
	
								/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
								rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */
	
								propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
								property = hookRoot;
							}
	
							/* Normalize names and values. */
							if (CSS.Normalizations.registered[property]) {
								propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
								property = CSS.Normalizations.registered[property]("name", element);
							}
	
							/* Assign the appropriate vendor prefix before performing an official style update. */
							propertyName = CSS.Names.prefixCheck(property)[0];
	
							/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
							 Try/catch is avoided for other browsers since it incurs a performance overhead. */
							if (IE <= 8) {
								try {
									element.style[propertyName] = propertyValue;
								} catch (error) {
									if (Velocity.debug) {
										console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
									}
								}
								/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
								/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
							} else {
								var data = Data(element);
	
								if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
									/* Note: For SVG attributes, vendor-prefixed property names are never used. */
									/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
									element.setAttribute(property, propertyValue);
								} else {
									element.style[propertyName] = propertyValue;
								}
							}
	
							if (Velocity.debug >= 2) {
								console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
							}
						}
					}
	
					/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
					return [propertyName, propertyValue];
				},
				/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
				/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
				flushTransformCache: function(element) {
					var transformString = "",
							data = Data(element);
	
					/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
					 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
					if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
						/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
						 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
						var getTransformFloat = function(transformProperty) {
							return parseFloat(CSS.getPropertyValue(element, transformProperty));
						};
	
						/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
						 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
						var SVGTransforms = {
							translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
							skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
							/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
							 (this behavior mimics the result of animating all these properties at once on HTML elements). */
							scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
							/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
							 defining the rotation's origin point. We ignore the origin values (default them to 0). */
							rotate: [getTransformFloat("rotateZ"), 0, 0]
						};
	
						/* Iterate through the transform properties in the user-defined property map order.
						 (This mimics the behavior of non-SVG transform animation.) */
						jQuery.each(Data(element).transformCache, function(transformName) {
							/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
							 properties so that they match up with SVG's accepted transform properties. */
							if (/^translate/i.test(transformName)) {
								transformName = "translate";
							} else if (/^scale/i.test(transformName)) {
								transformName = "scale";
							} else if (/^rotate/i.test(transformName)) {
								transformName = "rotate";
							}
	
							/* Check that we haven't yet deleted the property from the SVGTransforms container. */
							if (SVGTransforms[transformName]) {
								/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
								transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
	
								/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
								 re-insert the same master property if we encounter another one of its axis-specific properties. */
								delete SVGTransforms[transformName];
							}
						});
					} else {
						var transformValue,
								perspective;
	
						/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
						jQuery.each(Data(element).transformCache, function(transformName) {
							transformValue = Data(element).transformCache[transformName];
	
							/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
							if (transformName === "transformPerspective") {
								perspective = transformValue;
								return true;
							}
	
							/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
							if (IE === 9 && transformName === "rotateZ") {
								transformName = "rotate";
							}
	
							transformString += transformName + transformValue + " ";
						});
	
						/* If present, set the perspective subproperty first. */
						if (perspective) {
							transformString = "perspective" + perspective + " " + transformString;
						}
					}
	
					CSS.setPropertyValue(element, "transform", transformString);
				}
			};
	
			/* Register hooks and normalizations. */
			CSS.Hooks.register();
			CSS.Normalizations.register();
	
			/* Allow hook setting in the same fashion as jQuery's jQuery.css(). */
			Velocity.hook = function(elements, arg2, arg3) {
				var value;
	
				elements = sanitizeElements(elements);
	
				jQuery.each(elements, function(i, element) {
					/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
					if (Data(element) === undefined) {
						Velocity.init(element);
					}
	
					/* Get property value. If an element set was passed in, only return the value for the first element. */
					if (arg3 === undefined) {
						if (value === undefined) {
							value = CSS.getPropertyValue(element, arg2);
						}
						/* Set property value. */
					} else {
						/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
						var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);
	
						/* Transform properties don't automatically set. They have to be flushed to the DOM. */
						if (adjustedSet[0] === "transform") {
							Velocity.CSS.flushTransformCache(element);
						}
	
						value = adjustedSet;
					}
				});
	
				return value;
			};
	
			/*****************
			 Animation
			 *****************/
	
			var animate = function() {
				var opts;
	
				/******************
				 Call Chain
				 ******************/
	
				/* Logic for determining what to return to the call stack when exiting out of Velocity. */
				function getChain() {
					/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
					 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
					if (isUtility) {
						return promiseData.promise || null;
						/* Otherwise, if we're using jQuery.fn, return the jQuery-/Zepto-wrapped element set. */
					} else {
						return elementsWrapped;
					}
				}
	
				/*************************
				 Arguments Assignment
				 *************************/
	
				/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
				 objects are defined on a container object that's passed in as Velocity's sole argument. */
				/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
				var syntacticSugar = (arguments[0] && (arguments[0].p || ((jQuery.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
						/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
						isUtility,
						/* When Velocity is called via the utility function (jQuery.Velocity()/Velocity()), elements are explicitly
						 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
						elementsWrapped,
						argumentIndex;
	
				var elements,
						propertiesMap,
						options;
	
				/* Detect jQuery/Zepto elements being animated via the jQuery.fn method. */
				if (Type.isWrapped(this)) {
					isUtility = false;
	
					argumentIndex = 0;
					elements = this;
					elementsWrapped = this;
					/* Otherwise, raw elements are being animated via the utility function. */
				} else {
					isUtility = true;
	
					argumentIndex = 1;
					elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
				}
	
				/***************
				 Promises
				 ***************/
	
				var promiseData = {
					promise: null,
					resolver: null,
					rejecter: null
				};
	
				/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
				 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
				 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
				 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
				/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
				 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
				 grouped together for the purposes of resolving and rejecting a promise. */
				if (isUtility && Velocity.Promise) {
					promiseData.promise = new Velocity.Promise(function(resolve, reject) {
						promiseData.resolver = resolve;
						promiseData.rejecter = reject;
					});
				}
	
				if (syntacticSugar) {
					propertiesMap = arguments[0].properties || arguments[0].p;
					options = arguments[0].options || arguments[0].o;
				} else {
					propertiesMap = arguments[argumentIndex];
					options = arguments[argumentIndex + 1];
				}
	
				elements = sanitizeElements(elements);
	
				if (!elements) {
					if (promiseData.promise) {
						if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
							promiseData.rejecter();
						} else {
							promiseData.resolver();
						}
					}
					return;
				}
	
				/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
				 single raw DOM element is passed in (which doesn't contain a length property). */
				var elementsLength = elements.length,
						elementsIndex = 0;
	
				/***************************
				 Argument Overloading
				 ***************************/
	
				/* Support is included for jQuery's argument overloading: jQuery.animate(propertyMap [, duration] [, easing] [, complete]).
				 Overloading is detected by checking for the absence of an object being passed into options. */
				/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
				if (!/^(stop|finish|finishAll|pause|resume)jQuery/i.test(propertiesMap) && !jQuery.isPlainObject(options)) {
					/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
					var startingArgumentPosition = argumentIndex + 1;
	
					options = {};
	
					/* Iterate through all options arguments */
					for (var i = startingArgumentPosition; i < arguments.length; i++) {
						/* Treat a number as a duration. Parse it out. */
						/* Note: The following RegEx will return true if passed an array with a number as its first item.
						 Thus, arrays are skipped from this check. */
						if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)jQuery/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
							options.duration = arguments[i];
							/* Treat strings and arrays as easings. */
						} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
							options.easing = arguments[i];
							/* Treat a function as a complete callback. */
						} else if (Type.isFunction(arguments[i])) {
							options.complete = arguments[i];
						}
					}
				}
	
				/*********************
				 Action Detection
				 *********************/
	
				/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
				 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
				 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
				 instead of a properties map. */
				var action;
	
				switch (propertiesMap) {
					case "scroll":
						action = "scroll";
						break;
	
					case "reverse":
						action = "reverse";
						break;
	
					case "pause":
	
						/*******************
						 Action: Pause
						 *******************/
	
						var currentTime = (new Date()).getTime();
	
						/* Handle delay timers */
						jQuery.each(elements, function(i, element) {
							pauseDelayOnElement(element, currentTime);
						});
	
						/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */
	
						/* Iterate through all calls and pause any that contain any of our elements */
						jQuery.each(Velocity.State.calls, function(i, activeCall) {
	
							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								jQuery.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;
	
									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}
	
									/* Iterate through the calls targeted by the stop command. */
									jQuery.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
	
											/* Set call to paused */
											activeCall[5] = {
												resume: false
											};
	
											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});
	
									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}
	
						});
	
						/* Since pause creates no new tweens, exit out of Velocity. */
						return getChain();
	
					case "resume":
	
						/*******************
						 Action: Resume
						 *******************/
	
						/* Handle delay timers */
						jQuery.each(elements, function(i, element) {
							resumeDelayOnElement(element, currentTime);
						});
	
						/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */
	
						/* Iterate through all calls and pause any that contain any of our elements */
						jQuery.each(Velocity.State.calls, function(i, activeCall) {
							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								jQuery.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;
	
									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}
	
									/* Skip any calls that have never been paused */
									if (!activeCall[5]) {
										return true;
									}
	
									/* Iterate through the calls targeted by the stop command. */
									jQuery.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
	
											/* Flag a pause object to be resumed, which will occur during the next tick. In
											 addition, the pause object will at that time be deleted */
											activeCall[5].resume = true;
	
											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});
	
									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}
	
						});
	
						/* Since resume creates no new tweens, exit out of Velocity. */
						return getChain();
	
					case "finish":
					case "finishAll":
					case "stop":
						/*******************
						 Action: Stop
						 *******************/
	
						/* Clear the currently-active delay on each targeted element. */
						jQuery.each(elements, function(i, element) {
							if (Data(element) && Data(element).delayTimer) {
								/* Stop the timer from triggering its cached next() function. */
								clearTimeout(Data(element).delayTimer.setTimeout);
	
								/* Manually call the next() function so that the subsequent queue items can progress. */
								if (Data(element).delayTimer.next) {
									Data(element).delayTimer.next();
								}
	
								delete Data(element).delayTimer;
							}
	
							/* If we want to finish everything in the queue, we have to iterate through it
							 and call each function. This will make them active calls below, which will
							 cause them to be applied via the duration setting. */
							if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
								/* Iterate through the items in the element's queue. */
								jQuery.each(jQuery.queue(element, Type.isString(options) ? options : ""), function(_, item) {
									/* The queue array can contain an "inprogress" string, which we skip. */
									if (Type.isFunction(item)) {
										item();
									}
								});
	
								/* Clearing the jQuery.queue() array is achieved by resetting it to []. */
								jQuery.queue(element, Type.isString(options) ? options : "", []);
							}
						});
	
						var callsToStop = [];
	
						/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
						 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
						 is stopped, the next item in its animation queue is immediately triggered. */
						/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
						 or a custom queue string can be passed in. */
						/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
						 regardless of the element's current queue state. */
	
						/* Iterate through every active call. */
						jQuery.each(Velocity.State.calls, function(i, activeCall) {
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								jQuery.each(activeCall[1], function(k, activeElement) {
									/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
									 clear calls associated with the relevant queue. */
									/* Call stopping logic works as follows:
									 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
									 - options === undefined --> stop current queue:"" call and all queue:false calls.
									 - options === false --> stop only queue:false calls.
									 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
									var queueName = (options === undefined) ? "" : options;
	
									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}
	
									/* Iterate through the calls targeted by the stop command. */
									jQuery.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
											/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
											 due to the queue-clearing above. */
											if (options === true || Type.isString(options)) {
												/* Iterate through the items in the element's queue. */
												jQuery.each(jQuery.queue(element, Type.isString(options) ? options : ""), function(_, item) {
													/* The queue array can contain an "inprogress" string, which we skip. */
													if (Type.isFunction(item)) {
														/* Pass the item's callback a flag indicating that we want to abort from the queue call.
														 (Specifically, the queue will resolve the call's associated promise then abort.)  */
														item(null, true);
													}
												});
	
												/* Clearing the jQuery.queue() array is achieved by resetting it to []. */
												jQuery.queue(element, Type.isString(options) ? options : "", []);
											}
	
											if (propertiesMap === "stop") {
												/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
												 changed to reflect the final value that the elements were actually tweened to. */
												/* Note: If only queue:false/queue:"custom" animations are currently running on an element, it won't have a tweensContainer
												 object. Also, queue:false/queue:"custom" animations can't be reversed. */
												var data = Data(element);
												if (data && data.tweensContainer && (queueName === true || queueName === "")) {
													jQuery.each(data.tweensContainer, function(m, activeTween) {
														activeTween.endValue = activeTween.currentValue;
													});
												}
	
												callsToStop.push(i);
											} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
												/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
												 they finish upon the next rAf tick then proceed with normal call completion logic. */
												activeCall[2].duration = 1;
											}
										}
									});
								});
							}
						});
	
						/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
						 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
						if (propertiesMap === "stop") {
							jQuery.each(callsToStop, function(i, j) {
								completeCall(j, true);
							});
	
							if (promiseData.promise) {
								/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
								promiseData.resolver(elements);
							}
						}
	
						/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
						return getChain();
	
					default:
						/* Treat a non-empty plain object as a literal properties map. */
						if (jQuery.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
							action = "start";
	
							/****************
							 Redirects
							 ****************/
	
							/* Check if a string matches a registered redirect (see Redirects above). */
						} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
							opts = jQuery.extend({}, options);
	
							var durationOriginal = opts.duration,
									delayOriginal = opts.delay || 0;
	
							/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
							if (opts.backwards === true) {
								elements = jQuery.extend(true, [], elements).reverse();
							}
	
							/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
							jQuery.each(elements, function(elementIndex, element) {
								/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
								if (parseFloat(opts.stagger)) {
									opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
								} else if (Type.isFunction(opts.stagger)) {
									opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
								}
	
								/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
								 the duration of each element's animation, using floors to prevent producing very short durations. */
								if (opts.drag) {
									/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
									opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
	
									/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
									 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
									 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
									opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
								}
	
								/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
								 reduce the opts checking logic required inside the redirect. */
								Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
							});
	
							/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
							 (The performance overhead up to this point is virtually non-existant.) */
							/* Note: The jQuery call chain is kept intact by returning the complete element set. */
							return getChain();
						} else {
							var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
	
							if (promiseData.promise) {
								promiseData.rejecter(new Error(abortError));
							} else if (window.console) {
								console.log(abortError);
							}
	
							return getChain();
						}
				}
	
				/**************************
				 Call-Wide Variables
				 **************************/
	
				/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
				 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
				 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
				 conversion metrics across Velocity animations that are not immediately consecutively chained. */
				var callUnitConversionData = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				};
	
				/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
				 Velocity.State.calls array that is processed during animation ticking. */
				var call = [];
	
				/************************
				 Element Processing
				 ************************/
	
				/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
				 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
				 2) Queueing: The logic that runs once this call has reached its point of execution in the element's jQuery.queue() stack. Most logic is placed here to avoid risking it becoming stale.
				 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
				 `elementArrayIndex` allows passing index of the element in the original array to value functions.
				 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
				 */
				function processElement(element, elementArrayIndex) {
	
					/*************************
					 Part I: Pre-Queueing
					 *************************/
	
					/***************************
					 Element-Wide Variables
					 ***************************/
	
					var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
							opts = jQuery.extend({}, Velocity.defaults, options),
							/* A container for the processed data associated with each property in the propertyMap.
							 (Each property in the map produces its own "tween".) */
							tweensContainer = {},
							elementUnitConversionData;
	
					/******************
					 Element Init
					 ******************/
	
					if (Data(element) === undefined) {
						Velocity.init(element);
					}
	
					/******************
					 Option: Delay
					 ******************/
	
					/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
					/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for jQuery.fn.delay()
					 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
					if (parseFloat(opts.delay) && opts.queue !== false) {
						jQuery.queue(element, opts.queue, function(next, clearQueue) {
							if (clearQueue === true) {
								/* Do not continue with animation queueing. */
								return true;
							}
	
							/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;
	
							/* The ensuing queue item (which is assigned to the "next" argument that jQuery.queue() automatically passes in) will be triggered after a setTimeout delay.
							 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
							 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */
	
							/* Temporarily store delayed elements to facilite access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;
	
							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;
	
									/* Finally, issue the call */
									next();
								};
							})(callIndex);
	
	
							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(next, parseFloat(opts.delay)),
								next: delayComplete
							};
						});
					}
	
					/*********************
					 Option: Duration
					 *********************/
	
					/* Support for jQuery's named durations. */
					switch (opts.duration.toString().toLowerCase()) {
						case "fast":
							opts.duration = 200;
							break;
	
						case "normal":
							opts.duration = DURATION_DEFAULT;
							break;
	
						case "slow":
							opts.duration = 600;
							break;
	
						default:
							/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
							opts.duration = parseFloat(opts.duration) || 1;
					}
	
					/************************
					 Global Option: Mock
					 ************************/
	
					if (Velocity.mock !== false) {
						/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
						 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
						if (Velocity.mock === true) {
							opts.duration = opts.delay = 1;
						} else {
							opts.duration *= parseFloat(Velocity.mock) || 1;
							opts.delay *= parseFloat(Velocity.mock) || 1;
						}
					}
	
					/*******************
					 Option: Easing
					 *******************/
	
					opts.easing = getEasing(opts.easing, opts.duration);
	
					/**********************
					 Option: Callbacks
					 **********************/
	
					/* Callbacks must functions. Otherwise, default to null. */
					if (opts.begin && !Type.isFunction(opts.begin)) {
						opts.begin = null;
					}
	
					if (opts.progress && !Type.isFunction(opts.progress)) {
						opts.progress = null;
					}
	
					if (opts.complete && !Type.isFunction(opts.complete)) {
						opts.complete = null;
					}
	
					/*********************************
					 Option: Display & Visibility
					 *********************************/
	
					/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
					/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
					if (opts.display !== undefined && opts.display !== null) {
						opts.display = opts.display.toString().toLowerCase();
	
						/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
						if (opts.display === "auto") {
							opts.display = Velocity.CSS.Values.getDisplayType(element);
						}
					}
	
					if (opts.visibility !== undefined && opts.visibility !== null) {
						opts.visibility = opts.visibility.toString().toLowerCase();
					}
	
					/**********************
					 Option: mobileHA
					 **********************/
	
					/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
					 on animating elements. HA is removed from the element at the completion of its animation. */
					/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
					/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
					opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
	
					/***********************
					 Part II: Queueing
					 ***********************/
	
					/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
					 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
					/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
					 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
					function buildQueue(next) {
						var data, lastTweensContainer;
	
						/*******************
						 Option: Begin
						 *******************/
	
						/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
						if (opts.begin && elementsIndex === 0) {
							/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
							try {
								opts.begin.call(elements, elements);
							} catch (error) {
								setTimeout(function() {
									throw error;
								}, 1);
							}
						}
	
						/*****************************************
						 Tween Data Construction (for Scroll)
						 *****************************************/
	
						/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
						if (action === "scroll") {
							/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
							var scrollDirection = (/^xjQuery/i.test(opts.axis) ? "Left" : "Top"),
									scrollOffset = parseFloat(opts.offset) || 0,
									scrollPositionCurrent,
									scrollPositionCurrentAlternate,
									scrollPositionEnd;
	
							/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
							 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
							if (opts.container) {
								/* Ensure that either a jQuery object or a raw DOM element was passed in. */
								if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
									/* Extract the raw DOM element from the jQuery wrapper. */
									opts.container = opts.container[0] || opts.container;
									/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
									 (due to the user's natural interaction with the page). */
									scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */
	
									/* jQuery.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
									 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
									 the scroll container's current scroll position. */
									scrollPositionEnd = (scrollPositionCurrent + jQuery(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
									/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
								} else {
									opts.container = null;
								}
							} else {
								/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
								 the appropriate cached property names (which differ based on browser type). */
								scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
								/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
								scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */
	
								/* Unlike jQuery.position(), jQuery.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
								 and therefore end values do not need to be compounded onto current values. */
								scrollPositionEnd = jQuery(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
							}
	
							/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
							tweensContainer = {
								scroll: {
									rootPropertyValue: false,
									startValue: scrollPositionCurrent,
									currentValue: scrollPositionCurrent,
									endValue: scrollPositionEnd,
									unitType: "",
									easing: opts.easing,
									scrollData: {
										container: opts.container,
										direction: scrollDirection,
										alternateValue: scrollPositionCurrentAlternate
									}
								},
								element: element
							};
	
							if (Velocity.debug) {
								console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
							}
	
							/******************************************
							 Tween Data Construction (for Reverse)
							 ******************************************/
	
							/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
							 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
							 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
							/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
							/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
							 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
							 as reverting to the element's values as they were prior to the previous *Velocity* call. */
						} else if (action === "reverse") {
							data = Data(element);
	
							/* Abort if there is no prior animation data to reverse to. */
							if (!data) {
								return;
							}
	
							if (!data.tweensContainer) {
								/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
								jQuery.dequeue(element, opts.queue);
	
								return;
							} else {
								/*********************
								 Options Parsing
								 *********************/
	
								/* If the element was hidden via the display option in the previous call,
								 revert display to "auto" prior to reversal so that the element is visible again. */
								if (data.opts.display === "none") {
									data.opts.display = "auto";
								}
	
								if (data.opts.visibility === "hidden") {
									data.opts.visibility = "visible";
								}
	
								/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
								 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
								data.opts.loop = false;
								data.opts.begin = null;
								data.opts.complete = null;
	
								/* Since we're extending an opts object that has already been extended with the defaults options object,
								 we remove non-explicitly-defined properties that are auto-assigned values. */
								if (!options.easing) {
									delete opts.easing;
								}
	
								if (!options.duration) {
									delete opts.duration;
								}
	
								/* The opts object used for reversal is an extension of the options object optionally passed into this
								 reverse call plus the options used in the previous Velocity call. */
								opts = jQuery.extend({}, data.opts, opts);
	
								/*************************************
								 Tweens Container Reconstruction
								 *************************************/
	
								/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
								lastTweensContainer = jQuery.extend(true, {}, data ? data.tweensContainer : null);
	
								/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
								for (var lastTween in lastTweensContainer) {
									/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
									if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
										var lastStartValue = lastTweensContainer[lastTween].startValue;
	
										lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
										lastTweensContainer[lastTween].endValue = lastStartValue;
	
										/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
										 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
										 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
										if (!Type.isEmptyObject(options)) {
											lastTweensContainer[lastTween].easing = opts.easing;
										}
	
										if (Velocity.debug) {
											console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
										}
									}
								}
	
								tweensContainer = lastTweensContainer;
							}
	
							/*****************************************
							 Tween Data Construction (for Start)
							 *****************************************/
	
						} else if (action === "start") {
	
							/*************************
							 Value Transferring
							 *************************/
	
							/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
							 while the element was in the process of being animated by Velocity, then this current call is safe to use
							 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
							 process whenever possible in order to avoid requerying the DOM. */
							/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
							 then the DOM is queried for the element's current values as a last resort. */
							/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
	
							data = Data(element);
	
							/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
							 to transfer over end values to use as start values. If it's set to true and there is a previous
							 Velocity call to pull values from, do so. */
							if (data && data.tweensContainer && data.isAnimating === true) {
								lastTweensContainer = data.tweensContainer;
							}
	
							/***************************
							 Tween Data Calculation
							 ***************************/
	
							/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
							/* Property map values can either take the form of 1) a single value representing the end value,
							 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
							 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
							 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
							var parsePropertyValue = function(valueData, skipResolvingEasing) {
								var endValue, easing, startValue;
	
								/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
								if (Type.isFunction(valueData)) {
									valueData = valueData.call(element, elementArrayIndex, elementsLength);
								}
	
								/* Handle the array format, which can be structured as one of three potential overloads:
								 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
								if (Type.isArray(valueData)) {
									/* endValue is always the first item in the array. Don't bother validating endValue's value now
									 since the ensuing property cycling logic does that. */
									endValue = valueData[0];
	
									/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
									 start value since easings can only be non-hex strings or arrays. */
									if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
										startValue = valueData[1];
										/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
									} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
										easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
	
										/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
										startValue = valueData[2];
									} else {
										startValue = valueData[1] || valueData[2];
									}
									/* Handle the single-value format. */
								} else {
									endValue = valueData;
								}
	
								/* Default to the call's easing if a per-property easing type was not defined. */
								if (!skipResolvingEasing) {
									easing = easing || opts.easing;
								}
	
								/* If functions were passed in as values, pass the function the current element as its context,
								 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
								if (Type.isFunction(endValue)) {
									endValue = endValue.call(element, elementArrayIndex, elementsLength);
								}
	
								if (Type.isFunction(startValue)) {
									startValue = startValue.call(element, elementArrayIndex, elementsLength);
								}
	
								/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
								return [endValue || 0, easing, startValue];
							};
	
							var fixPropertyValue = function(property, valueData) {
								/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
								var rootProperty = CSS.Hooks.getRoot(property),
										rootPropertyValue = false,
										/* Parse out endValue, easing, and startValue from the property's data. */
										endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2],
										pattern;
	
								/**************************
								 Start Value Sourcing
								 **************************/
	
								/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
								 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
								 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
								/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
								 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
								if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
									if (Velocity.debug) {
										console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
									}
									return;
								}
	
								/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
								 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
								 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
								if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
									startValue = 0;
								}
	
								/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
								 for all of the current call's properties that were *also* animated in the previous call. */
								/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
								if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
									if (startValue === undefined) {
										startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
									}
	
									/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
									 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
									 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
									rootPropertyValue = data.rootPropertyValueCache[rootProperty];
									/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
								} else {
									/* Handle hooked properties. */
									if (CSS.Hooks.registered[property]) {
										if (startValue === undefined) {
											rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
											/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
											 getPropertyValue() will extract the hook from rootPropertyValue. */
											startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
											/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
											 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
											 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
											 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
										} else {
											/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
											rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
										}
										/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
									} else if (startValue === undefined) {
										startValue = CSS.getPropertyValue(element, property); /* GET */
									}
								}
	
								/**************************
								 Value Data Extraction
								 **************************/
	
								var separatedValue,
										endValueUnitType,
										startValueUnitType,
										operator = false;
	
								/* Separates a property value into its numeric value and its unit type. */
								var separateValue = function(property, value) {
									var unitType,
											numericValue;
	
									numericValue = (value || "0")
											.toString()
											.toLowerCase()
											/* Match the unit type at the end of the value. */
											.replace(/[%A-z]+jQuery/, function(match) {
												/* Grab the unit type. */
												unitType = match;
	
												/* Strip the unit type off of value. */
												return "";
											});
	
									/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
									if (!unitType) {
										unitType = CSS.Values.getUnitType(property);
									}
	
									return [numericValue, unitType];
								};
	
								if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
									pattern = "";
									var iStart = 0, // index in startValue
											iEnd = 0, // index in endValue
											aStart = [], // array of startValue numbers
											aEnd = [], // array of endValue numbers
											inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
											inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
											inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel
	
									startValue = CSS.Hooks.fixColors(startValue);
									endValue = CSS.Hooks.fixColors(endValue);
									while (iStart < startValue.length && iEnd < endValue.length) {
										var cStart = startValue[iStart],
												cEnd = endValue[iEnd];
	
										if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
											var tStart = cStart, // temporary character buffer
													tEnd = cEnd, // temporary character buffer
													dotStart = ".", // Make sure we can only ever match a single dot in a decimal
													dotEnd = "."; // Make sure we can only ever match a single dot in a decimal
	
											while (++iStart < startValue.length) {
												cStart = startValue[iStart];
												if (cStart === dotStart) {
													dotStart = ".."; // Can never match two characters
												} else if (!/\d/.test(cStart)) {
													break;
												}
												tStart += cStart;
											}
											while (++iEnd < endValue.length) {
												cEnd = endValue[iEnd];
												if (cEnd === dotEnd) {
													dotEnd = ".."; // Can never match two characters
												} else if (!/\d/.test(cEnd)) {
													break;
												}
												tEnd += cEnd;
											}
											var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
													uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type
	
											iStart += uStart.length;
											iEnd += uEnd.length;
											if (uStart === uEnd) {
												// Same units
												if (tStart === tEnd) {
													// Same numbers, so just copy over
													pattern += tStart + uStart;
												} else {
													// Different numbers, so store them
													pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
													aStart.push(parseFloat(tStart));
													aEnd.push(parseFloat(tEnd));
												}
											} else {
												// Different units, so put into a "calc(from + to)" and animate each side to/from zero
												var nStart = parseFloat(tStart),
														nEnd = parseFloat(tEnd);
	
												pattern += (inCalc < 5 ? "calc" : "") + "("
														+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
														+ " + "
														+ (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd
														+ ")";
												if (nStart) {
													aStart.push(nStart);
													aEnd.push(0);
												}
												if (nEnd) {
													aStart.push(0);
													aEnd.push(nEnd);
												}
											}
										} else if (cStart === cEnd) {
											pattern += cStart;
											iStart++;
											iEnd++;
											// Keep track of being inside a calc()
											if (inCalc === 0 && cStart === "c"
													|| inCalc === 1 && cStart === "a"
													|| inCalc === 2 && cStart === "l"
													|| inCalc === 3 && cStart === "c"
													|| inCalc >= 4 && cStart === "("
													) {
												inCalc++;
											} else if ((inCalc && inCalc < 5)
													|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
												inCalc = 0;
											}
											// Keep track of being inside an rgb() / rgba()
											if (inRGB === 0 && cStart === "r"
													|| inRGB === 1 && cStart === "g"
													|| inRGB === 2 && cStart === "b"
													|| inRGB === 3 && cStart === "a"
													|| inRGB >= 3 && cStart === "("
													) {
												if (inRGB === 3 && cStart === "a") {
													inRGBA = 1;
												}
												inRGB++;
											} else if (inRGBA && cStart === ",") {
												if (++inRGBA > 3) {
													inRGB = inRGBA = 0;
												}
											} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
													|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
												inRGB = inRGBA = 0;
											}
										} else {
											inCalc = 0;
											// TODO: changing units, fixing colours
											break;
										}
									}
									if (iStart !== startValue.length || iEnd !== endValue.length) {
										if (Velocity.debug) {
											console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
										}
										pattern = undefined;
									}
									if (pattern) {
										if (aStart.length) {
											if (Velocity.debug) {
												console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
											}
											startValue = aStart;
											endValue = aEnd;
											endValueUnitType = startValueUnitType = "";
										} else {
											pattern = undefined;
										}
									}
								}
	
								if (!pattern) {
									/* Separate startValue. */
									separatedValue = separateValue(property, startValue);
									startValue = separatedValue[0];
									startValueUnitType = separatedValue[1];
	
									/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
									separatedValue = separateValue(property, endValue);
									endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
										operator = subMatch;
	
										/* Strip the operator off of the value. */
										return "";
									});
									endValueUnitType = separatedValue[1];
	
									/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
									startValue = parseFloat(startValue) || 0;
									endValue = parseFloat(endValue) || 0;
	
									/***************************************
									 Property-Specific Value Conversion
									 ***************************************/
	
									/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
									if (endValueUnitType === "%") {
										/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
										 which is identical to the em unit's behavior, so we piggyback off of that. */
										if (/^(fontSize|lineHeight)jQuery/.test(property)) {
											/* Convert % into an em decimal value. */
											endValue = endValue / 100;
											endValueUnitType = "em";
											/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
										} else if (/^scale/.test(property)) {
											endValue = endValue / 100;
											endValueUnitType = "";
											/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
										} else if (/(Red|Green|Blue)jQuery/i.test(property)) {
											endValue = (endValue / 100) * 255;
											endValueUnitType = "";
										}
									}
								}
	
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
								/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
								var calculateUnitRatios = function() {
	
									/************************
									 Same Ratio Checks
									 ************************/
	
									/* The properties below are used to determine whether the element differs sufficiently from this call's
									 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
									 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
									 this is done to minimize DOM querying. */
									var sameRatioIndicators = {
										myParent: element.parentNode || document.body, /* GET */
										position: CSS.getPropertyValue(element, "position"), /* GET */
										fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
									},
											/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
											samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
											/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
											sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
	
									/* Store these ratio indicators call-wide for the next element to compare against. */
									callUnitConversionData.lastParent = sameRatioIndicators.myParent;
									callUnitConversionData.lastPosition = sameRatioIndicators.position;
									callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
	
									/***************************
									 Element-Specific Units
									 ***************************/
	
									/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
									 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
									var measurement = 100,
											unitRatios = {};
	
									if (!sameEmRatio || !samePercentRatio) {
										var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
	
										Velocity.init(dummy);
										sameRatioIndicators.myParent.appendChild(dummy);
	
										/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
										 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
										/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
										jQuery.each(["overflow", "overflowX", "overflowY"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, "hidden");
										});
										Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
										Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
										Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
	
										/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
										jQuery.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
										});
										/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
										Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
	
										/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
										unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */
	
										sameRatioIndicators.myParent.removeChild(dummy);
									} else {
										unitRatios.emToPx = callUnitConversionData.lastEmToPx;
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
									}
	
									/***************************
									 Element-Agnostic Units
									 ***************************/
	
									/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
									 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
									 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
									 so we calculate it now. */
									if (callUnitConversionData.remToPx === null) {
										/* Default to browsers' default fontSize of 16px in the case of 0. */
										callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
									}
	
									/* Similarly, viewport units are %-relative to the window's inner dimensions. */
									if (callUnitConversionData.vwToPx === null) {
										callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
										callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
									}
	
									unitRatios.remToPx = callUnitConversionData.remToPx;
									unitRatios.vwToPx = callUnitConversionData.vwToPx;
									unitRatios.vhToPx = callUnitConversionData.vhToPx;
	
									if (Velocity.debug >= 1) {
										console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
									}
									return unitRatios;
								};
	
								/********************
								 Unit Conversion
								 ********************/
	
								/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
								if (/[\/*]/.test(operator)) {
									endValueUnitType = startValueUnitType;
									/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
									 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
									 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
									 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
									/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
								} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
									/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
									/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
									 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
									 which remains past the point of the animation's completion. */
									if (endValue === 0) {
										endValueUnitType = startValueUnitType;
									} else {
										/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
										 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
										elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
	
										/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
										/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
										var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /XjQuery/.test(property) || property === "x") ? "x" : "y";
	
										/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
										 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
										switch (startValueUnitType) {
											case "%":
												/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
												 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
												 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
												startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;
	
											case "px":
												/* px acts as our midpoint in the unit conversion process; do nothing. */
												break;
	
											default:
												startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
										}
	
										/* Invert the px ratios to convert into to the target unit. */
										switch (endValueUnitType) {
											case "%":
												startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;
	
											case "px":
												/* startValue is already in px, do nothing; we're done. */
												break;
	
											default:
												startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
										}
									}
								}
	
								/*********************
								 Relative Values
								 *********************/
	
								/* Operator logic must be performed last since it requires unit-normalized start and end values. */
								/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
								 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
								 50 points is added on top of the current % value. */
								switch (operator) {
									case "+":
										endValue = startValue + endValue;
										break;
	
									case "-":
										endValue = startValue - endValue;
										break;
	
									case "*":
										endValue = startValue * endValue;
										break;
	
									case "/":
										endValue = startValue / endValue;
										break;
								}
	
								/**************************
								 tweensContainer Push
								 **************************/
	
								/* Construct the per-property tween object, and push it to the element's tweensContainer. */
								tweensContainer[property] = {
									rootPropertyValue: rootPropertyValue,
									startValue: startValue,
									currentValue: startValue,
									endValue: endValue,
									unitType: endValueUnitType,
									easing: easing
								};
								if (pattern) {
									tweensContainer[property].pattern = pattern;
								}
	
								if (Velocity.debug) {
									console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
								}
							};
	
							/* Create a tween out of each property, and append its associated data to tweensContainer. */
							for (var property in propertiesMap) {
	
								if (!propertiesMap.hasOwnProperty(property)) {
									continue;
								}
								/* The original property name's format must be used for the parsePropertyValue() lookup,
								 but we then use its camelCase styling to normalize it for manipulation. */
								var propertyName = CSS.Names.camelCase(property),
										valueData = parsePropertyValue(propertiesMap[property]);
	
								/* Find shorthand color properties that have been passed a hex string. */
								/* Would be quicker to use CSS.Lists.colors.includes() if possible */
								if (_inArray(CSS.Lists.colors, propertyName)) {
									/* Parse the value data for each shorthand. */
									var endValue = valueData[0],
											easing = valueData[1],
											startValue = valueData[2];
	
									if (CSS.RegEx.isHex.test(endValue)) {
										/* Convert the hex strings into their RGB component arrays. */
										var colorComponents = ["Red", "Green", "Blue"],
												endValueRGB = CSS.Values.hexToRgb(endValue),
												startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
	
										/* Inject the RGB component tweens into propertiesMap. */
										for (var i = 0; i < colorComponents.length; i++) {
											var dataArray = [endValueRGB[i]];
	
											if (easing) {
												dataArray.push(easing);
											}
	
											if (startValueRGB !== undefined) {
												dataArray.push(startValueRGB[i]);
											}
	
											fixPropertyValue(propertyName + colorComponents[i], dataArray);
										}
										/* If we have replaced a shortcut color value then don't update the standard property name */
										continue;
									}
								}
								fixPropertyValue(propertyName, valueData);
							}
	
							/* Along with its property data, store a reference to the element itself onto tweensContainer. */
							tweensContainer.element = element;
						}
	
						/*****************
						 Call Push
						 *****************/
	
						/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
						 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
						if (tweensContainer.element) {
							/* Apply the "velocity-animating" indicator class. */
							CSS.Values.addClass(element, "velocity-animating");
	
							/* The call array houses the tweensContainers for each element being animated in the current call. */
							call.push(tweensContainer);
	
							data = Data(element);
	
							if (data) {
								/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
								if (opts.queue === "") {
	
									data.tweensContainer = tweensContainer;
									data.opts = opts;
								}
	
								/* Switch on the element's animating flag. */
								data.isAnimating = true;
							}
	
							/* Once the final element in this call's element set has been processed, push the call array onto
							 Velocity.State.calls for the animation tick to immediately begin processing. */
							if (elementsIndex === elementsLength - 1) {
								/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
								 Anything on this call container is subjected to tick() processing. */
								Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);
	
								/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
								if (Velocity.State.isTicking === false) {
									Velocity.State.isTicking = true;
	
									/* Start the tick loop. */
									tick();
								}
							} else {
								elementsIndex++;
							}
						}
					}
	
					/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
					if (opts.queue === false) {
						/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
						 we manually inject the delay property here with an explicit setTimeout. */
						if (opts.delay) {
	
							/* Temporarily store delayed elements to facilitate access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;
	
							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;
	
									/* Finally, issue the call */
									buildQueue();
								};
							})(callIndex);
	
							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
								next: delayComplete
							};
						} else {
							buildQueue();
						}
						/* Otherwise, the call undergoes element queueing as normal. */
						/* Note: To interoperate with jQuery, Velocity uses jQuery's own jQuery.queue() stack for queuing logic. */
					} else {
						jQuery.queue(element, opts.queue, function(next, clearQueue) {
							/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
							 so it's fine if this is repeatedly triggered for each element in the associated call.) */
							if (clearQueue === true) {
								if (promiseData.promise) {
									promiseData.resolver(elements);
								}
	
								/* Do not continue with animation queueing. */
								return true;
							}
	
							/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
							 See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;
	
							buildQueue(next);
						});
					}
	
					/*********************
					 Auto-Dequeuing
					 *********************/
	
					/* As per jQuery's jQuery.queue() behavior, to fire the first non-custom-queue entry on an element, the element
					 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
					 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
					 queue is further appended with additional items -- including jQuery.delay()'s or even jQuery.animate() calls, the queue's
					 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
					/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
					 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
					/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, jQuery.queue() function.
					 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
					if ((opts.queue === "" || opts.queue === "fx") && jQuery.queue(element)[0] !== "inprogress") {
						jQuery.dequeue(element);
					}
				}
	
				/**************************
				 Element Set Iteration
				 **************************/
	
				/* If the "nodeType" property exists on the elements variable, we're animating a single element.
				 Place it in an array so that jQuery.each() can iterate over it. */
				jQuery.each(elements, function(i, element) {
					/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
					if (Type.isNode(element)) {
						processElement(element, i);
					}
				});
	
				/******************
				 Option: Loop
				 ******************/
	
				/* The loop option accepts an integer indicating how many times the element should loop between the values in the
				 current call's properties map and the element's property values prior to this call. */
				/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
				 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
				 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
				opts = jQuery.extend({}, Velocity.defaults, options);
				opts.loop = parseInt(opts.loop, 10);
				var reverseCallsCount = (opts.loop * 2) - 1;
	
				if (opts.loop) {
					/* Double the loop count to convert it into its appropriate number of "reverse" calls.
					 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
					for (var x = 0; x < reverseCallsCount; x++) {
						/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
						 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
						 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
						var reverseOptions = {
							delay: opts.delay,
							progress: opts.progress
						};
	
						/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
						 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
						if (x === reverseCallsCount - 1) {
							reverseOptions.display = opts.display;
							reverseOptions.visibility = opts.visibility;
							reverseOptions.complete = opts.complete;
						}
	
						animate(elements, "reverse", reverseOptions);
					}
				}
	
				/***************
				 Chaining
				 ***************/
	
				/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the jQuery.fn. extension. */
				return getChain();
			};
	
			/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
			Velocity = jQuery.extend(animate, Velocity);
			/* For legacy support, also expose the literal animate method. */
			Velocity.animate = animate;
	
			/**************
			 Timing
			 **************/
	
			/* Ticker function. */
			var ticker = window.requestAnimationFrame || rAFShim;
	
			/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
			 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
			 devices to avoid wasting battery power on inactive tabs. */
			/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
			if (!Velocity.State.isMobile && document.hidden !== undefined) {
				var updateTicker = function() {
					/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
					if (document.hidden) {
						ticker = function(callback) {
							/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
							return setTimeout(function() {
								callback(true);
							}, 16);
						};
	
						/* The rAF loop has been paused by the browser, so we manually restart the tick. */
						tick();
					} else {
						ticker = window.requestAnimationFrame || rAFShim;
					}
				};
	
				/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
				updateTicker();
	
				/* And then run check again every time visibility changes */
				document.addEventListener("visibilitychange", updateTicker);
			}
	
			/************
			 Tick
			 ************/
	
			/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
			function tick(timestamp) {
				/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
				 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
				 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
				 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
				 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
				 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
				if (timestamp) {
					/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
					 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
					 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
					var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();
	
					/********************
					 Call Iteration
					 ********************/
	
					var callsLength = Velocity.State.calls.length;
	
					/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
					 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
					 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
					if (callsLength > 10000) {
						Velocity.State.calls = compactSparseArray(Velocity.State.calls);
						callsLength = Velocity.State.calls.length;
					}
	
					/* Iterate through each active call. */
					for (var i = 0; i < callsLength; i++) {
						/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
						if (!Velocity.State.calls[i]) {
							continue;
						}
	
						/************************
						 Call-Wide Variables
						 ************************/
	
						var callContainer = Velocity.State.calls[i],
								call = callContainer[0],
								opts = callContainer[2],
								timeStart = callContainer[3],
								firstTick = !timeStart,
								tweenDummyValue = null,
								pauseObject = callContainer[5],
								millisecondsEllapsed = callContainer[6];
	
	
	
						/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
						 We assign timeStart now so that its value is as close to the real animation start time as possible.
						 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
						 between that time and now would cause the first few frames of the tween to be skipped since
						 percentComplete is calculated relative to timeStart.) */
						/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
						 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
						 same style value as the element's current value. */
						if (!timeStart) {
							timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
						}
	
						/* If a pause object is present, skip processing unless it has been set to resume */
						if (pauseObject) {
							if (pauseObject.resume === true) {
								/* Update the time start to accomodate the paused completion amount */
								timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);
	
								/* Remove pause object after processing */
								callContainer[5] = null;
							} else {
								continue;
							}
						}
	
						millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;
	
						/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
						 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
						 Accordingly, we ensure that percentComplete does not exceed 1. */
						var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);
	
						/**********************
						 Element Iteration
						 **********************/
	
						/* For every call, iterate through each of the elements in its set. */
						for (var j = 0, callLength = call.length; j < callLength; j++) {
							var tweensContainer = call[j],
									element = tweensContainer.element;
	
							/* Check to see if this element has been deleted midway through the animation by checking for the
							 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
							if (!Data(element)) {
								continue;
							}
	
							var transformPropertyExists = false;
	
							/**********************************
							 Display & Visibility Toggling
							 **********************************/
	
							/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
							 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
							if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
								if (opts.display === "flex") {
									var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
	
									jQuery.each(flexValues, function(i, flexValue) {
										CSS.setPropertyValue(element, "display", flexValue);
									});
								}
	
								CSS.setPropertyValue(element, "display", opts.display);
							}
	
							/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
							if (opts.visibility !== undefined && opts.visibility !== "hidden") {
								CSS.setPropertyValue(element, "visibility", opts.visibility);
							}
	
							/************************
							 Property Iteration
							 ************************/
	
							/* For every element, iterate through each property. */
							for (var property in tweensContainer) {
								/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
								if (tweensContainer.hasOwnProperty(property) && property !== "element") {
									var tween = tweensContainer[property],
											currentValue,
											/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
											 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
											easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
	
									/******************************
									 Current Value Calculation
									 ******************************/
	
									if (Type.isString(tween.pattern)) {
										var patternReplace = percentComplete === 1 ?
												function(jQuery0, index, round) {
													var result = tween.endValue[index];
	
													return round ? Math.round(result) : result;
												} :
												function(jQuery0, index, round) {
													var startValue = tween.startValue[index],
															tweenDelta = tween.endValue[index] - startValue,
															result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
	
													return round ? Math.round(result) : result;
												};
	
										currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
									} else if (percentComplete === 1) {
										/* If this is the last tick pass (if we've reached 100% completion for this tween),
										 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
										currentValue = tween.endValue;
									} else {
										/* Otherwise, calculate currentValue based on the current delta from startValue. */
										var tweenDelta = tween.endValue - tween.startValue;
	
										currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
										/* If no value change is occurring, don't proceed with DOM updating. */
									}
									if (!firstTick && (currentValue === tween.currentValue)) {
										continue;
									}
	
									tween.currentValue = currentValue;
	
									/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
									 it can be passed into the progress callback. */
									if (property === "tween") {
										tweenDummyValue = currentValue;
									} else {
										/******************
										 Hooks: Part I
										 ******************/
										var hookRoot;
	
										/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
										 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
										 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
										 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
										 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
										if (CSS.Hooks.registered[property]) {
											hookRoot = CSS.Hooks.getRoot(property);
	
											var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
	
											if (rootPropertyValueCache) {
												tween.rootPropertyValue = rootPropertyValueCache;
											}
										}
	
										/*****************
										 DOM Update
										 *****************/
	
										/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
										/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
										var adjustedSetData = CSS.setPropertyValue(element, /* SET */
												property,
												tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
												tween.rootPropertyValue,
												tween.scrollData);
	
										/*******************
										 Hooks: Part II
										 *******************/
	
										/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
										if (CSS.Hooks.registered[property]) {
											/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
											if (CSS.Normalizations.registered[hookRoot]) {
												Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
											} else {
												Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
											}
										}
	
										/***************
										 Transforms
										 ***************/
	
										/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
										if (adjustedSetData[0] === "transform") {
											transformPropertyExists = true;
										}
	
									}
								}
							}
	
							/****************
							 mobileHA
							 ****************/
	
							/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
							 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
							if (opts.mobileHA) {
								/* Don't set the null transform hack if we've already done so. */
								if (Data(element).transformCache.translate3d === undefined) {
									/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
									Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
	
									transformPropertyExists = true;
								}
							}
	
							if (transformPropertyExists) {
								CSS.flushTransformCache(element);
							}
						}
	
						/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
						 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
						if (opts.display !== undefined && opts.display !== "none") {
							Velocity.State.calls[i][2].display = false;
						}
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							Velocity.State.calls[i][2].visibility = false;
						}
	
						/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
						if (opts.progress) {
							opts.progress.call(callContainer[1],
									callContainer[1],
									percentComplete,
									Math.max(0, (timeStart + opts.duration) - timeCurrent),
									timeStart,
									tweenDummyValue);
						}
	
						/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
						if (percentComplete === 1) {
							completeCall(i);
						}
					}
				}
	
				/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
				if (Velocity.State.isTicking) {
					ticker(tick);
				}
			}
	
			/**********************
			 Call Completion
			 **********************/
	
			/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
			function completeCall(callIndex, isStopped) {
				/* Ensure the call exists. */
				if (!Velocity.State.calls[callIndex]) {
					return false;
				}
	
				/* Pull the metadata from the call. */
				var call = Velocity.State.calls[callIndex][0],
						elements = Velocity.State.calls[callIndex][1],
						opts = Velocity.State.calls[callIndex][2],
						resolver = Velocity.State.calls[callIndex][4];
	
				var remainingCallsExist = false;
	
				/*************************
				 Element Finalization
				 *************************/
	
				for (var i = 0, callLength = call.length; i < callLength; i++) {
					var element = call[i].element;
	
					/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
					/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
					/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
					if (!isStopped && !opts.loop) {
						if (opts.display === "none") {
							CSS.setPropertyValue(element, "display", opts.display);
						}
	
						if (opts.visibility === "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}
					}
	
					/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
					 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
					 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
					 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
					 is assigned to jQuery's global jQuery object and thus exists out of Velocity's own scope. */
					var data = Data(element);
	
					if (opts.loop !== true && (jQuery.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test(jQuery.queue(element)[1]))) {
						/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
						if (data) {
							data.isAnimating = false;
							/* Clear the element's rootPropertyValueCache, which will become stale. */
							data.rootPropertyValueCache = {};
	
							var transformHAPropertyExists = false;
							/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
							jQuery.each(CSS.Lists.transforms3D, function(i, transformName) {
								var defaultValue = /^scale/.test(transformName) ? 1 : 0,
										currentValue = data.transformCache[transformName];
	
								if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
									transformHAPropertyExists = true;
	
									delete data.transformCache[transformName];
								}
							});
	
							/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
							if (opts.mobileHA) {
								transformHAPropertyExists = true;
								delete data.transformCache.translate3d;
							}
	
							/* Flush the subproperty removals to the DOM. */
							if (transformHAPropertyExists) {
								CSS.flushTransformCache(element);
							}
	
							/* Remove the "velocity-animating" indicator class. */
							CSS.Values.removeClass(element, "velocity-animating");
						}
					}
	
					/*********************
					 Option: Complete
					 *********************/
	
					/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
					/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
					if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.complete.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}
	
					/**********************
					 Promise Resolving
					 **********************/
	
					/* Note: Infinite loops don't return promises. */
					if (resolver && opts.loop !== true) {
						resolver(elements);
					}
	
					/****************************
					 Option: Loop (Infinite)
					 ****************************/
	
					if (data && opts.loop === true && !isStopped) {
						/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
						 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
						jQuery.each(data.tweensContainer, function(propertyName, tweenContainer) {
							if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
								var oldStartValue = tweenContainer.startValue;
	
								tweenContainer.startValue = tweenContainer.endValue;
								tweenContainer.endValue = oldStartValue;
							}
	
							if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
								tweenContainer.endValue = 0;
								tweenContainer.startValue = 100;
							}
						});
	
						Velocity(element, "reverse", {loop: true, delay: opts.delay});
					}
	
					/***************
					 Dequeueing
					 ***************/
	
					/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
					 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
					 jQuery.dequeue() must still be called in order to completely clear jQuery's animation queue. */
					if (opts.queue !== false) {
						jQuery.dequeue(element, opts.queue);
					}
				}
	
				/************************
				 Calls Array Cleanup
				 ************************/
	
				/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
				 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
				Velocity.State.calls[callIndex] = false;
	
				/* Iterate through the calls array to determine if this was the final in-progress animation.
				 If so, set a flag to end ticking and clear the calls array. */
				for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
					if (Velocity.State.calls[j] !== false) {
						remainingCallsExist = true;
	
						break;
					}
				}
	
				if (remainingCallsExist === false) {
					/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
					Velocity.State.isTicking = false;
	
					/* Clear the calls array so that its length is reset. */
					delete Velocity.State.calls;
					Velocity.State.calls = [];
				}
			}
	
			/******************
			 Frameworks
			 ******************/
	
			/* Both jQuery and Zepto allow their jQuery.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
			 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
			 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
			 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to jQuery.fn
			 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
			global.Velocity = Velocity;
	
			if (global !== window) {
				/* Assign the element function to Velocity's core animate() method. */
				global.fn.velocity = animate;
				/* Assign the object function's defaults to Velocity's global defaults object. */
				global.fn.velocity.defaults = Velocity.defaults;
			}
	
			/***********************
			 Packaged Redirects
			 ***********************/
	
			/* slideUp, slideDown */
			jQuery.each(["Down", "Up"], function(i, direction) {
				Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = jQuery.extend({}, options),
							begin = opts.begin,
							complete = opts.complete,
							inlineValues = {},
							computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};
	
					if (opts.display === undefined) {
						/* Show the element before slideDown begins and hide the element after slideUp completes. */
						/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
						opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
					}
	
					opts.begin = function() {
						/* If the user passed in a begin callback, fire it now. */
						if (elementsIndex === 0 && begin) {
							begin.call(elements, elements);
						}
	
						/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
						for (var property in computedValues) {
							if (!computedValues.hasOwnProperty(property)) {
								continue;
							}
							inlineValues[property] = element.style[property];
	
							/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
							 use forcefeeding to start from computed values and animate down to 0. */
							var propertyValue = CSS.getPropertyValue(element, property);
							computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
						}
	
						/* Force vertical overflow content to clip so that sliding works as expected. */
						inlineValues.overflow = element.style.overflow;
						element.style.overflow = "hidden";
					};
	
					opts.complete = function() {
						/* Reset element to its pre-slide inline values once its slide animation is complete. */
						for (var property in inlineValues) {
							if (inlineValues.hasOwnProperty(property)) {
								element.style[property] = inlineValues[property];
							}
						}
	
						/* If the user passed in a complete callback, fire it now. */
						if (elementsIndex === elementsSize - 1) {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						}
					};
	
					Velocity(element, computedValues, opts);
				};
			});
	
			/* fadeIn, fadeOut */
			jQuery.each(["In", "Out"], function(i, direction) {
				Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = jQuery.extend({}, options),
							complete = opts.complete,
							propertiesMap = {opacity: (direction === "In") ? 1 : 0};
	
					/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
					 callbacks by firing them only when the final element has been reached. */
					if (elementsIndex !== 0) {
						opts.begin = null;
					}
					if (elementsIndex !== elementsSize - 1) {
						opts.complete = null;
					} else {
						opts.complete = function() {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						};
					}
	
					/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
					/* Note: We allow users to pass in "null" to skip display setting altogether. */
					if (opts.display === undefined) {
						opts.display = (direction === "In" ? "auto" : "none");
					}
	
					Velocity(this, propertiesMap, opts);
				};
			});
	
			return Velocity;
		}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
	}));
	
	/******************
	 Known Issues
	 ******************/
	
	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var ProductMinitature = (function () {
	  function ProductMinitature() {
	    _classCallCheck(this, ProductMinitature);
	  }
	
	  _createClass(ProductMinitature, [{
	    key: 'init',
	    value: function init() {
	      (0, _jquery2['default'])('.js-product-miniature').each(function (index, element) {
	        if ((0, _jquery2['default'])(element).find('.color').length > 5) {
	          (function () {
	            var count = 0;
	            (0, _jquery2['default'])(element).find('.color').each(function (index, element) {
	              if (index > 4) {
	                (0, _jquery2['default'])(element).hide();
	                count++;
	              }
	            });
	            (0, _jquery2['default'])(element).find('.js-count').append('+' + count);
	          })();
	        }
	      });
	    }
	  }]);
	
	  return ProductMinitature;
	})();
	
	exports['default'] = ProductMinitature;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _prestashop = __webpack_require__(51);
	
	var _prestashop2 = _interopRequireDefault(_prestashop);
	
	(0, _jquery2['default'])(document).ready(function () {
	  createProductSpin();
	  createInputFile();
	  coverImage();
	  imageScrollBox();
	
	  _prestashop2['default'].on('updatedProduct', function (event) {
	    createInputFile();
	    coverImage();
	    if (event && event.product_minimal_quantity) {
	      var minimalProductQuantity = parseInt(event.product_minimal_quantity, 10);
	      var quantityInputSelector = '#quantity_wanted';
	      var quantityInput = (0, _jquery2['default'])(quantityInputSelector);
	
	      // @see http://www.virtuosoft.eu/code/bootstrap-touchspin/ about Bootstrap TouchSpin
	      quantityInput.trigger('touchspin.updatesettings', { min: minimalProductQuantity });
	    }
	    imageScrollBox();
	    (0, _jquery2['default'])((0, _jquery2['default'])('.tabs .nav-link.active').attr('href')).addClass('active').removeClass('fade');
	    (0, _jquery2['default'])('.js-product-images-modal').replaceWith(event.product_images_modal);
	
	    (0, _jquery2['default'])('.js-qv-loader').hide(0);
	    (0, _jquery2['default'])('.qv-carousel').owlCarousel({
	      nav: true,
	      margin: 15,
	      loop: false,
	      rewind: true,
	      rtl: (0, _jquery2['default'])('body').hasClass('lang-rtl') ? true : false,
	      navText: ["<i class='material-icons'></i>", "<i class='material-icons'></i>"],
	      responsive: {
	        0: {
	          items: 3
	        },
	        543: {
	          items: 4
	        },
	        767: {
	          items: 4
	        },
	        991: {
	          items: 4
	        }
	      }
	    });
	  });
	
	  function coverImage() {
	    (0, _jquery2['default'])('.js-thumb').on('click', function (event) {
	      (0, _jquery2['default'])('.js-modal-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'));
	      (0, _jquery2['default'])('#product-zoom .zoomImg').remove();
	      (0, _jquery2['default'])('#product-zoom').zoom({ url: (0, _jquery2['default'])(event.target).data('image-large-src') });
	      (0, _jquery2['default'])('.selected').removeClass('selected');
	      (0, _jquery2['default'])(event.target).addClass('selected');
	      (0, _jquery2['default'])('.js-qv-product-cover').prop('src', (0, _jquery2['default'])(event.currentTarget).data('image-large-src'));
	    });
	  }
	
	  function imageScrollBox() {
	    if ((0, _jquery2['default'])('#main .js-qv-product-images li').length > 2) {
	      (0, _jquery2['default'])('#main .js-qv-mask').addClass('scroll');
	      (0, _jquery2['default'])('.scroll-box-arrows').addClass('scroll');
	      (0, _jquery2['default'])('#main .js-qv-mask').scrollbox({
	        direction: 'h',
	        distance: 113,
	        autoPlay: false
	      });
	      (0, _jquery2['default'])('.scroll-box-arrows .left').click(function () {
	        (0, _jquery2['default'])('#main .js-qv-mask').trigger('backward');
	      });
	      (0, _jquery2['default'])('.scroll-box-arrows .right').click(function () {
	        (0, _jquery2['default'])('#main .js-qv-mask').trigger('forward');
	      });
	    } else {
	      (0, _jquery2['default'])('#main .js-qv-mask').removeClass('scroll');
	      (0, _jquery2['default'])('.scroll-box-arrows').removeClass('scroll');
	    }
	  }
	
	  function createInputFile() {
	    (0, _jquery2['default'])('.js-file-input').on('change', function (event) {
	      var target = undefined,
	          file = undefined;
	
	      if ((target = (0, _jquery2['default'])(event.currentTarget)[0]) && (file = target.files[0])) {
	        (0, _jquery2['default'])(target).prev().text(file.name);
	      }
	    });
	  }
	
	  function createProductSpin() {
	    var jQueryquantityInput = (0, _jquery2['default'])('#quantity_wanted');
	
	    jQueryquantityInput.TouchSpin({
	      verticalbuttons: true,
	      verticalupclass: 'material-icons touchspin-up',
	      verticaldownclass: 'material-icons touchspin-down',
	      buttondown_class: 'btn btn-touchspin js-touchspin',
	      buttonup_class: 'btn btn-touchspin js-touchspin',
	      min: parseInt(jQueryquantityInput.attr('min'), 10),
	      max: 1000000
	    });
	
	    (0, _jquery2['default'])('body').on('change keyup', '#quantity_wanted', function (e) {
	      (0, _jquery2['default'])(e.currentTarget).trigger('touchspin.stopspin');
	      _prestashop2['default'].emit('updateProduct', {
	        eventType: 'updatedProductQuantity',
	        event: e
	      });
	    });
	  }
	});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _prestashop = __webpack_require__(51);
	
	var _prestashop2 = _interopRequireDefault(_prestashop);
	
	_prestashop2['default'].cart = _prestashop2['default'].cart || {};
	
	_prestashop2['default'].cart.active_inputs = null;
	
	var spinnerSelector = 'input[name="product-quantity-spin"]';
	var hasError = false;
	var isUpdateOperation = false;
	var errorMsg = '';
	
	/**
	 * Attach Bootstrap TouchSpin event handlers
	 */
	function createSpin() {
	  _jquery2['default'].each((0, _jquery2['default'])(spinnerSelector), function (index, spinner) {
	    (0, _jquery2['default'])(spinner).TouchSpin({
	      verticalbuttons: true,
	      verticalupclass: 'material-icons touchspin-up',
	      verticaldownclass: 'material-icons touchspin-down',
	      buttondown_class: 'btn btn-touchspin js-touchspin js-increase-product-quantity',
	      buttonup_class: 'btn btn-touchspin js-touchspin js-decrease-product-quantity',
	      min: parseInt((0, _jquery2['default'])(spinner).attr('min'), 10),
	      max: 1000000
	    });
	  });
	
	  CheckUpdateQuantityOperations.switchErrorStat();
	}
	
	(0, _jquery2['default'])(document).ready(function () {
	  var productLineInCartSelector = '.js-cart-line-product-quantity';
	  var promises = [];
	
	  _prestashop2['default'].on('updateCart', function () {
	    (0, _jquery2['default'])('.quickview').modal('hide');
	  });
	
	  _prestashop2['default'].on('updatedCart', function () {
	    createSpin();
	  });
	
	  createSpin();
	
	  var jQuerybody = (0, _jquery2['default'])('body');
	
	  function isTouchSpin(namespace) {
	    return namespace === 'on.startupspin' || namespace === 'on.startdownspin';
	  }
	
	  function shouldIncreaseProductQuantity(namespace) {
	    return namespace === 'on.startupspin';
	  }
	
	  function findCartLineProductQuantityInput(jQuerytarget) {
	    var jQueryinput = jQuerytarget.parents('.bootstrap-touchspin').find(productLineInCartSelector);
	
	    if (jQueryinput.is(':focus')) {
	      return null;
	    } else {
	      return jQueryinput;
	    }
	  }
	
	  function camelize(subject) {
	    var actionTypeParts = subject.split('-');
	    var i = undefined;
	    var part = undefined;
	    var camelizedSubject = '';
	
	    for (i = 0; i < actionTypeParts.length; i++) {
	      part = actionTypeParts[i];
	
	      if (0 !== i) {
	        part = part.substring(0, 1).toUpperCase() + part.substring(1);
	      }
	
	      camelizedSubject = camelizedSubject + part;
	    }
	
	    return camelizedSubject;
	  }
	
	  function parseCartAction(jQuerytarget, namespace) {
	    if (!isTouchSpin(namespace)) {
	      return {
	        url: jQuerytarget.attr('href'),
	        type: camelize(jQuerytarget.data('link-action'))
	      };
	    }
	
	    var jQueryinput = findCartLineProductQuantityInput(jQuerytarget);
	    if (!jQueryinput) {
	      return;
	    }
	
	    var cartAction = {};
	    if (shouldIncreaseProductQuantity(namespace)) {
	      cartAction = {
	        url: jQueryinput.data('up-url'),
	        type: 'increaseProductQuantity'
	      };
	    } else {
	      cartAction = {
	        url: jQueryinput.data('down-url'),
	        type: 'decreaseProductQuantity'
	      };
	    }
	
	    return cartAction;
	  }
	
	  var abortPreviousRequests = function abortPreviousRequests() {
	    var promise;
	    while (promises.length > 0) {
	      promise = promises.pop();
	      promise.abort();
	    }
	  };
	
	  var getTouchSpinInput = function getTouchSpinInput(jQuerybutton) {
	    return (0, _jquery2['default'])(jQuerybutton.parents('.bootstrap-touchspin').find('input'));
	  };
	
	  var handleCartAction = function handleCartAction(event) {
	    event.preventDefault();
	
	    var jQuerytarget = (0, _jquery2['default'])(event.currentTarget);
	    var dataset = event.currentTarget.dataset;
	
	    var cartAction = parseCartAction(jQuerytarget, event.namespace);
	    var requestData = {
	      ajax: '1',
	      action: 'update'
	    };
	
	    if (typeof cartAction === 'undefined') {
	      return;
	    }
	
	    abortPreviousRequests();
	    _jquery2['default'].ajax({
	      url: cartAction.url,
	      method: 'POST',
	      data: requestData,
	      dataType: 'json',
	      beforeSend: function beforeSend(jqXHR) {
	        promises.push(jqXHR);
	      }
	    }).then(function (resp) {
	      CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
	      var jQueryquantityInput = getTouchSpinInput(jQuerytarget);
	      jQueryquantityInput.val(resp.quantity);
	
	      // Refresh cart preview
	      _prestashop2['default'].emit('updateCart', {
	        reason: dataset
	      });
	    }).fail(function (resp) {
	      _prestashop2['default'].emit('handleError', {
	        eventType: 'updateProductInCart',
	        resp: resp,
	        cartAction: cartAction.type
	      });
	    });
	  };
	
	  jQuerybody.on('click', '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', handleCartAction);
	
	  jQuerybody.on('touchspin.on.startdownspin', spinnerSelector, handleCartAction);
	  jQuerybody.on('touchspin.on.startupspin', spinnerSelector, handleCartAction);
	
	  function sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, jQuerytarget) {
	    abortPreviousRequests();
	
	    return _jquery2['default'].ajax({
	      url: updateQuantityInCartUrl,
	      method: 'POST',
	      data: requestData,
	      dataType: 'json',
	      beforeSend: function beforeSend(jqXHR) {
	        promises.push(jqXHR);
	      }
	    }).then(function (resp) {
	      CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
	      jQuerytarget.val(resp.quantity);
	
	      var dataset;
	      if (jQuerytarget && jQuerytarget.dataset) {
	        dataset = jQuerytarget.dataset;
	      } else {
	        dataset = resp;
	      }
	
	      // Refresh cart preview
	      _prestashop2['default'].emit('updateCart', {
	        reason: dataset
	      });
	    }).fail(function (resp) {
	      _prestashop2['default'].emit('handleError', { eventType: 'updateProductQuantityInCart', resp: resp });
	    });
	  }
	
	  function getRequestData(quantity) {
	    return {
	      ajax: '1',
	      qty: Math.abs(quantity),
	      action: 'update',
	      op: getQuantityChangeType(quantity)
	    };
	  }
	
	  function getQuantityChangeType(jQueryquantity) {
	    return jQueryquantity > 0 ? 'up' : 'down';
	  }
	
	  function updateProductQuantityInCart(event) {
	    var jQuerytarget = (0, _jquery2['default'])(event.currentTarget);
	    var updateQuantityInCartUrl = jQuerytarget.data('update-url');
	    var baseValue = jQuerytarget.attr('value');
	
	    // There should be a valid product quantity in cart
	    var targetValue = jQuerytarget.val();
	    if (targetValue != parseInt(targetValue) || targetValue < 0 || isNaN(targetValue)) {
	      jQuerytarget.val(baseValue);
	
	      return;
	    }
	
	    // There should be a new product quantity in cart
	    var qty = targetValue - baseValue;
	    if (qty == 0) {
	      return;
	    }
	
	    var requestData = getRequestData(qty);
	
	    sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, jQuerytarget);
	  }
	
	  jQuerybody.on('focusout', productLineInCartSelector, function (event) {
	    updateProductQuantityInCart(event);
	  });
	
	  jQuerybody.on('keyup', productLineInCartSelector, function (event) {
	    if (event.keyCode == 13) {
	      updateProductQuantityInCart(event);
	    }
	  });
	
	  jQuerybody.on('click', '.js-discount .code', function (event) {
	    event.stopPropagation();
	
	    var jQuerycode = (0, _jquery2['default'])(event.currentTarget);
	    var jQuerydiscountInput = (0, _jquery2['default'])('[name=discount_name]');
	
	    jQuerydiscountInput.val(jQuerycode.text());
	
	    return false;
	  });
	});
	
	var CheckUpdateQuantityOperations = {
	  'switchErrorStat': function switchErrorStat() {
	    /*
	    if errorMsg is not empty or if notifications are shown, we have error to display
	    if hasError is true, quantity was not updated : we don't disable checkout button
	     */
	    var jQuerycheckoutBtn = (0, _jquery2['default'])('.checkout a');
	    if ((0, _jquery2['default'])("#notifications article.alert-danger").length || '' !== errorMsg && !hasError) {
	      jQuerycheckoutBtn.addClass('disabled');
	    }
	
	    if ('' !== errorMsg) {
	      var strError = ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>' + errorMsg + '</li></ul></article>';
	      (0, _jquery2['default'])('#notifications .container').html(strError);
	      errorMsg = '';
	      isUpdateOperation = false;
	      if (hasError) {
	        // if hasError is true, quantity was not updated : allow checkout
	        jQuerycheckoutBtn.removeClass('disabled');
	      }
	    } else if (!hasError && isUpdateOperation) {
	      hasError = false;
	      isUpdateOperation = false;
	      (0, _jquery2['default'])('#notifications .container').html('');
	      jQuerycheckoutBtn.removeClass('disabled');
	    }
	  },
	  'checkUpdateOpertation': function checkUpdateOpertation(resp) {
	    /*
	    resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
	    when resp.hasError=true, quantity is not updated
	     */
	    hasError = resp.hasOwnProperty('hasError');
	    var errors = resp.errors || "";
	    // 1.7.2.x returns errors as string, 1.7.3.x returns array
	    if (errors instanceof Array) {
	      errorMsg = errors.join(" ");
	    } else {
	      errorMsg = errors;
	    }
	    isUpdateOperation = true;
	  }
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var DropDown = (function () {
	  function DropDown(el) {
	    _classCallCheck(this, DropDown);
	
	    this.el = el;
	  }
	
	  _createClass(DropDown, [{
	    key: 'init',
	    value: function init() {
	      this.el.on('show.bs.dropdown', function (e, el) {
	        if (el) {
	          (0, _jquery2['default'])('#' + el).find('.dropdown-menu').first().stop(true, true).slideDown();
	        } else {
	          (0, _jquery2['default'])(e.target).find('.dropdown-menu').first().stop(true, true).slideDown();
	        }
	      });
	
	      this.el.on('hide.bs.dropdown', function (e, el) {
	        if (el) {
	          (0, _jquery2['default'])('#' + el).find('.dropdown-menu').first().stop(true, true).slideUp();
	        } else {
	          (0, _jquery2['default'])(e.target).find('.dropdown-menu').first().stop(true, true).slideUp();
	        }
	      });
	
	      this.el.find('select.link').each(function (idx, el) {
	        (0, _jquery2['default'])(el).on('change', function (event) {
	          window.location = (0, _jquery2['default'])(this).val();
	        });
	      });
	    }
	  }]);
	
	  return DropDown;
	})();
	
	exports['default'] = DropDown;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var Form = (function () {
	  function Form() {
	    _classCallCheck(this, Form);
	  }
	
	  _createClass(Form, [{
	    key: 'init',
	    value: function init() {
	      this.parentFocus();
	      this.togglePasswordVisibility();
	    }
	  }, {
	    key: 'parentFocus',
	    value: function parentFocus() {
	      (0, _jquery2['default'])('.js-child-focus').focus(function () {
	        (0, _jquery2['default'])(this).closest('.js-parent-focus').addClass('focus');
	      });
	      (0, _jquery2['default'])('.js-child-focus').focusout(function () {
	        (0, _jquery2['default'])(this).closest('.js-parent-focus').removeClass('focus');
	      });
	    }
	  }, {
	    key: 'togglePasswordVisibility',
	    value: function togglePasswordVisibility() {
	      (0, _jquery2['default'])('button[data-action="show-password"]').on('click', function () {
	        var elm = (0, _jquery2['default'])(this).closest('.input-group').children('input.js-visible-password');
	        if (elm.attr('type') === 'password') {
	          elm.attr('type', 'text');
	          (0, _jquery2['default'])(this).text((0, _jquery2['default'])(this).data('textHide'));
	        } else {
	          elm.attr('type', 'password');
	          (0, _jquery2['default'])(this).text((0, _jquery2['default'])(this).data('textShow'));
	        }
	      });
	    }
	  }]);
	
	  return Form;
	})();
	
	exports['default'] = Form;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(55);
	
	var ProductSelect = (function () {
	  function ProductSelect() {
	    _classCallCheck(this, ProductSelect);
	  }
	
	  _createClass(ProductSelect, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      var MAX_THUMBS = 5;
	      var FLAG_MARGIN = 10;
	      var jQueryarrows = (0, _jquery2['default'])('.js-modal-arrows');
	      var jQuerythumbnails = (0, _jquery2['default'])('.js-modal-product-images');
	      var jQueryonsale = (0, _jquery2['default'])('.on-sale');
	
	      (0, _jquery2['default'])('body').on('click', '.js-modal-thumb', function (event) {
	        if ((0, _jquery2['default'])('.js-modal-thumb').hasClass('selected')) {
	          (0, _jquery2['default'])('.js-modal-thumb').removeClass('selected');
	        }
	        (0, _jquery2['default'])(event.currentTarget).addClass('selected');
	        (0, _jquery2['default'])('.js-modal-product-cover').attr('src', (0, _jquery2['default'])(event.target).data('image-large-src'));
	        (0, _jquery2['default'])('.js-modal-product-cover').attr('title', (0, _jquery2['default'])(event.target).attr('title'));
	        (0, _jquery2['default'])('.js-modal-product-cover').attr('alt', (0, _jquery2['default'])(event.target).attr('alt'));
	      }).on('click', 'aside#thumbnails', function (event) {
	        if (event.target.id == 'thumbnails') {
	          (0, _jquery2['default'])('#product-modal').modal('hide');
	        }
	      });
	
	      if (jQueryonsale.length && (0, _jquery2['default'])('#product').length) {
	        (0, _jquery2['default'])('.new').css('top', jQueryonsale.height() + FLAG_MARGIN);
	      }
	      if ((0, _jquery2['default'])('.js-modal-product-images li').length <= MAX_THUMBS) {
	        jQueryarrows.css('opacity', '.2');
	      } else {
	        jQueryarrows.on('click', function (event) {
	          if ((0, _jquery2['default'])(event.target).hasClass('arrow-up') && jQuerythumbnails.position().top < 0) {
	            _this.move('up');
	            (0, _jquery2['default'])('.js-modal-arrow-down').css('opacity', '1');
	          } else if ((0, _jquery2['default'])(event.target).hasClass('arrow-down') && jQuerythumbnails.position().top + jQuerythumbnails.height() > (0, _jquery2['default'])('.js-modal-mask').height()) {
	            _this.move('down');
	            (0, _jquery2['default'])('.js-modal-arrow-up').css('opacity', '1');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'move',
	    value: function move(direction) {
	      var THUMB_MARGIN = 10;
	      var jQuerythumbnails = (0, _jquery2['default'])('.js-modal-product-images');
	      var thumbHeight = (0, _jquery2['default'])('.js-modal-product-images li img').height() + THUMB_MARGIN;
	      var currentPosition = jQuerythumbnails.position().top;
	      jQuerythumbnails.velocity({
	        translateY: direction === 'up' ? currentPosition + thumbHeight : currentPosition - thumbHeight
	      }, function () {
	        if (jQuerythumbnails.position().top >= 0) {
	          (0, _jquery2['default'])('.js-modal-arrow-up').css('opacity', '.2');
	        } else if (jQuerythumbnails.position().top + jQuerythumbnails.height() <= (0, _jquery2['default'])('.js-modal-mask').height()) {
	          (0, _jquery2['default'])('.js-modal-arrow-down').css('opacity', '.2');
	        }
	      });
	    }
	  }]);
	
	  return ProductSelect;
	})();
	
	exports['default'] = ProductSelect;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _dropDown = __webpack_require__(59);
	
	var _dropDown2 = _interopRequireDefault(_dropDown);
	
	var TopMenu = (function (_DropDown) {
	  _inherits(TopMenu, _DropDown);
	
	  function TopMenu() {
	    _classCallCheck(this, TopMenu);
	
	    _get(Object.getPrototypeOf(TopMenu.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(TopMenu, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      var elmId = undefined;
	      var self = this; /*
	                       this.el.find('li').hover((e) => {
	                       if (this.el.parent().hasClass('mobile')) {
	                       return;
	                       }
	                       if (elmId !== jQuery(e.currentTarget).attr('id')) {
	                       if (jQuery(e.target).data('depth') === 0) {
	                       jQuery(`#jQuery{elmId} .js-sub-menu`).hide();
	                       }
	                       elmId = jQuery(e.currentTarget).attr('id');
	                       }
	                       if (elmId && jQuery(e.target).data('depth') === 0) {
	                       jQuery(`#jQuery{elmId} .js-sub-menu`).show().css({
	                       top: jQuery(`#jQuery{elmId}`).height() + jQuery(`#jQuery{elmId}`).position().top
	                       });
	                       }
	                       });*/
	      (0, _jquery2['default'])('#menu-icon').on('click', function () {
	        if ((0, _jquery2['default'])('body').hasClass('lang-rtl')) {
	          (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggle("slide", { direction: "right" }, 400);
	        } else {
	          (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggle("slide");
	        }
	
	        self.toggleMobileMenu();
	      });
	
	      (0, _jquery2['default'])('#top_menu_closer i').on('click', function () {
	        if ((0, _jquery2['default'])('body').hasClass('lang-rtl')) {
	          (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggle("slide", { direction: "right" }, 400);
	        } else {
	          (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggle("slide");
	        }
	      });
	      (0, _jquery2['default'])('.js-top-menu').mouseleave(function () {
	        if (_this.el.parent().hasClass('mobile')) {
	          return;
	        }
	        (0, _jquery2['default'])('#' + elmId + ' .js-sub-menu').hide();
	      });
	      this.el.on('click', function (e) {
	        if (_this.el.parent().hasClass('mobile')) {
	          return;
	        }
	        e.stopPropagation();
	      });
	      prestashop.on('responsive update', function (event) {
	        (0, _jquery2['default'])('.js-sub-menu').removeAttr('style');
	        self.toggleMobileMenu();
	      });
	      _get(Object.getPrototypeOf(TopMenu.prototype), 'init', this).call(this);
	    }
	  }, {
	    key: 'toggleMobileMenu',
	    value: function toggleMobileMenu() {
	      /*if (jQuery('#mobile_top_menu_wrapper').is(":visible")) {
	        jQuery('#notifications').hide();
	        jQuery('#wrapper').hide();
	        jQuery('#footer').hide();
	      } else {
	        jQuery('#notifications').show();
	        jQuery('#wrapper').show();
	        jQuery('#footer').show();
	      }*/
	    }
	  }]);
	
	  return TopMenu;
	})(_dropDown2['default']);
	
	exports['default'] = TopMenu;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	"use strict";
	
	(function (jQuery) {
	  var nextId = 0;var Filestyle = function Filestyle(element, options) {
	    this.options = options;this.jQueryelementFilestyle = [];this.jQueryelement = jQuery(element);
	  };Filestyle.prototype = { clear: function clear() {
	      this.jQueryelement.val("");this.jQueryelementFilestyle.find(":text").val("");this.jQueryelementFilestyle.find(".badge").remove();
	    }, destroy: function destroy() {
	      this.jQueryelement.removeAttr("style").removeData("filestyle");this.jQueryelementFilestyle.remove();
	    }, disabled: function disabled(value) {
	      if (value === true) {
	        if (!this.options.disabled) {
	          this.jQueryelement.attr("disabled", "true");this.jQueryelementFilestyle.find("label").attr("disabled", "true");this.options.disabled = true;
	        }
	      } else {
	        if (value === false) {
	          if (this.options.disabled) {
	            this.jQueryelement.removeAttr("disabled");this.jQueryelementFilestyle.find("label").removeAttr("disabled");this.options.disabled = false;
	          }
	        } else {
	          return this.options.disabled;
	        }
	      }
	    }, buttonBefore: function buttonBefore(value) {
	      if (value === true) {
	        if (!this.options.buttonBefore) {
	          this.options.buttonBefore = true;if (this.options.input) {
	            this.jQueryelementFilestyle.remove();this.constructor();this.pushNameFiles();
	          }
	        }
	      } else {
	        if (value === false) {
	          if (this.options.buttonBefore) {
	            this.options.buttonBefore = false;if (this.options.input) {
	              this.jQueryelementFilestyle.remove();this.constructor();this.pushNameFiles();
	            }
	          }
	        } else {
	          return this.options.buttonBefore;
	        }
	      }
	    }, icon: function icon(value) {
	      if (value === true) {
	        if (!this.options.icon) {
	          this.options.icon = true;this.jQueryelementFilestyle.find("label").prepend(this.htmlIcon());
	        }
	      } else {
	        if (value === false) {
	          if (this.options.icon) {
	            this.options.icon = false;this.jQueryelementFilestyle.find(".icon-span-filestyle").remove();
	          }
	        } else {
	          return this.options.icon;
	        }
	      }
	    }, input: function input(value) {
	      if (value === true) {
	        if (!this.options.input) {
	          this.options.input = true;if (this.options.buttonBefore) {
	            this.jQueryelementFilestyle.append(this.htmlInput());
	          } else {
	            this.jQueryelementFilestyle.prepend(this.htmlInput());
	          }this.jQueryelementFilestyle.find(".badge").remove();this.pushNameFiles();this.jQueryelementFilestyle.find(".group-span-filestyle").addClass("input-group-btn");
	        }
	      } else {
	        if (value === false) {
	          if (this.options.input) {
	            this.options.input = false;this.jQueryelementFilestyle.find(":text").remove();var files = this.pushNameFiles();if (files.length > 0 && this.options.badge) {
	              this.jQueryelementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>");
	            }this.jQueryelementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn");
	          }
	        } else {
	          return this.options.input;
	        }
	      }
	    }, size: function size(value) {
	      if (value !== undefined) {
	        var btn = this.jQueryelementFilestyle.find("label"),
	            input = this.jQueryelementFilestyle.find("input");btn.removeClass("btn-lg btn-sm");input.removeClass("input-lg input-sm");if (value != "nr") {
	          btn.addClass("btn-" + value);input.addClass("input-" + value);
	        }
	      } else {
	        return this.options.size;
	      }
	    }, placeholder: function placeholder(value) {
	      if (value !== undefined) {
	        this.options.placeholder = value;this.jQueryelementFilestyle.find("input").attr("placeholder", value);
	      } else {
	        return this.options.placeholder;
	      }
	    }, buttonText: function buttonText(value) {
	      if (value !== undefined) {
	        this.options.buttonText = value;this.jQueryelementFilestyle.find("label .buttonText").html(this.options.buttonText);
	      } else {
	        return this.options.buttonText;
	      }
	    }, buttonName: function buttonName(value) {
	      if (value !== undefined) {
	        this.options.buttonName = value;this.jQueryelementFilestyle.find("label").attr({ "class": "btn " + this.options.buttonName });
	      } else {
	        return this.options.buttonName;
	      }
	    }, iconName: function iconName(value) {
	      if (value !== undefined) {
	        this.jQueryelementFilestyle.find(".icon-span-filestyle").attr({ "class": "icon-span-filestyle " + this.options.iconName });
	      } else {
	        return this.options.iconName;
	      }
	    }, htmlIcon: function htmlIcon() {
	      if (this.options.icon) {
	        return '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ';
	      } else {
	        return "";
	      }
	    }, htmlInput: function htmlInput() {
	      if (this.options.input) {
	        return '<input type="text" class="form-control ' + (this.options.size == "nr" ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ';
	      } else {
	        return "";
	      }
	    }, pushNameFiles: function pushNameFiles() {
	      var content = "",
	          files = [];if (this.jQueryelement[0].files === undefined) {
	        files[0] = { name: this.jQueryelement[0] && this.jQueryelement[0].value };
	      } else {
	        files = this.jQueryelement[0].files;
	      }for (var i = 0; i < files.length; i++) {
	        content += files[i].name.split("\\").pop() + ", ";
	      }if (content !== "") {
	        this.jQueryelementFilestyle.find(":text").val(content.replace(/\, jQuery/g, ""));
	      } else {
	        this.jQueryelementFilestyle.find(":text").val("");
	      }return files;
	    }, constructor: function constructor() {
	      var _self = this,
	          html = "",
	          id = _self.jQueryelement.attr("id"),
	          files = [],
	          btn = "",
	          jQuerylabel;if (id === "" || !id) {
	        id = "filestyle-" + nextId;_self.jQueryelement.attr({ id: id });nextId++;
	      }btn = '<span class="group-span-filestyle ' + (_self.options.input ? "input-group-btn" : "") + '"><label for="' + id + '" class="btn ' + _self.options.buttonName + " " + (_self.options.size == "nr" ? "" : "btn-" + _self.options.size) + '" ' + (_self.options.disabled ? 'disabled="true"' : "") + ">" + _self.htmlIcon() + '<span class="buttonText">' + _self.options.buttonText + "</span></label></span>";html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn;_self.jQueryelementFilestyle = jQuery('<div class="bootstrap-filestyle input-group">' + html + "</div>");_self.jQueryelementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (e) {
	        if (e.keyCode === 13 || e.charCode === 32) {
	          _self.jQueryelementFilestyle.find("label").click();return false;
	        }
	      });_self.jQueryelement.css({ position: "absolute", clip: "rect(0px 0px 0px 0px)" }).attr("tabindex", "-1").after(_self.jQueryelementFilestyle);if (_self.options.disabled) {
	        _self.jQueryelement.attr("disabled", "true");
	      }_self.jQueryelement.change(function () {
	        var files = _self.pushNameFiles();if (_self.options.input == false && _self.options.badge) {
	          if (_self.jQueryelementFilestyle.find(".badge").length == 0) {
	            _self.jQueryelementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>");
	          } else {
	            if (files.length == 0) {
	              _self.jQueryelementFilestyle.find(".badge").remove();
	            } else {
	              _self.jQueryelementFilestyle.find(".badge").html(files.length);
	            }
	          }
	        } else {
	          _self.jQueryelementFilestyle.find(".badge").remove();
	        }
	      });if (window.navigator.userAgent.search(/firefox/i) > -1) {
	        _self.jQueryelementFilestyle.find("label").click(function () {
	          _self.jQueryelement.click();return false;
	        });
	      }
	    } };var old = jQuery.fn.filestyle;jQuery.fn.filestyle = function (option, value) {
	    var get = "",
	        element = this.each(function () {
	      if (jQuery(this).attr("type") === "file") {
	        var jQuerythis = jQuery(this),
	            data = jQuerythis.data("filestyle"),
	            options = jQuery.extend({}, jQuery.fn.filestyle.defaults, option, typeof option === "object" && option);if (!data) {
	          jQuerythis.data("filestyle", data = new Filestyle(this, options));data.constructor();
	        }if (typeof option === "string") {
	          get = data[option](value);
	        }
	      }
	    });if (typeof get !== undefined) {
	      return get;
	    } else {
	      return element;
	    }
	  };jQuery.fn.filestyle.defaults = { buttonText: "Choose file", iconName: "glyphicon glyphicon-folder-open", buttonName: "btn-default", size: "nr", input: true, badge: true, icon: true, buttonBefore: false, disabled: false, placeholder: "" };jQuery.fn.filestyle.noConflict = function () {
	    jQuery.fn.filestyle = old;return this;
	  };jQuery(function () {
	    jQuery(".filestyle").each(function () {
	      var jQuerythis = jQuery(this),
	          options = { input: jQuerythis.attr("data-input") === "false" ? false : true, icon: jQuerythis.attr("data-icon") === "false" ? false : true, buttonBefore: jQuerythis.attr("data-buttonBefore") === "true" ? true : false, disabled: jQuerythis.attr("data-disabled") === "true" ? true : false, size: jQuerythis.attr("data-size"), buttonText: jQuerythis.attr("data-buttonText"), buttonName: jQuerythis.attr("data-buttonName"), iconName: jQuerythis.attr("data-iconName"), badge: jQuerythis.attr("data-badge") === "false" ? false : true, placeholder: jQuerythis.attr("data-placeholder") };jQuerythis.filestyle(options);
	    });
	  });
	})(window.jQuery);

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	"use strict";
	
	(function (jQuery) {
	  jQuery.fn.scrollbox = function (config) {
	    var defConfig = { linear: false, startDelay: 2, delay: 3, step: 5, speed: 32, switchItems: 1, direction: "vertical", distance: "auto", autoPlay: true, onMouseOverPause: true, paused: false, queue: null, listElement: "ul", listItemElement: "li", infiniteLoop: true, switchAmount: 0, afterForward: null, afterBackward: null, triggerStackable: false };config = jQuery.extend(defConfig, config);config.scrollOffset = config.direction === "vertical" ? "scrollTop" : "scrollLeft";if (config.queue) {
	      config.queue = jQuery("#" + config.queue);
	    }return this.each(function () {
	      var container = jQuery(this),
	          containerUL,
	          scrollingId = null,
	          nextScrollId = null,
	          paused = false,
	          releaseStack,
	          backward,
	          forward,
	          resetClock,
	          scrollForward,
	          scrollBackward,
	          forwardHover,
	          pauseHover,
	          switchCount = 0,
	          stackedTriggerIndex = 0;if (config.onMouseOverPause) {
	        container.bind("mouseover", function () {
	          paused = true;
	        });container.bind("mouseout", function () {
	          paused = false;
	        });
	      }containerUL = container.children(config.listElement + ":first-child");if (config.infiniteLoop === false && config.switchAmount === 0) {
	        config.switchAmount = containerUL.children().length;
	      }scrollForward = function () {
	        if (paused) {
	          return;
	        }var curLi, i, newScrollOffset, scrollDistance, theStep;curLi = containerUL.children(config.listItemElement + ":first-child");scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.outerHeight(true) : curLi.outerWidth(true);if (!config.linear) {
	          theStep = Math.max(3, parseInt((scrollDistance - container[0][config.scrollOffset]) * .3, 10));newScrollOffset = Math.min(container[0][config.scrollOffset] + theStep, scrollDistance);
	        } else {
	          newScrollOffset = Math.min(container[0][config.scrollOffset] + config.step, scrollDistance);
	        }container[0][config.scrollOffset] = newScrollOffset;if (newScrollOffset >= scrollDistance) {
	          for (i = 0; i < config.switchItems; i++) {
	            if (config.queue && config.queue.find(config.listItemElement).length > 0) {
	              containerUL.append(config.queue.find(config.listItemElement)[0]);containerUL.children(config.listItemElement + ":first-child").remove();
	            } else {
	              containerUL.append(containerUL.children(config.listItemElement + ":first-child"));
	            }++switchCount;
	          }container[0][config.scrollOffset] = 0;clearInterval(scrollingId);scrollingId = null;if (jQuery.isFunction(config.afterForward)) {
	            config.afterForward.call(container, { switchCount: switchCount, currentFirstChild: containerUL.children(config.listItemElement + ":first-child") });
	          }if (config.triggerStackable && stackedTriggerIndex !== 0) {
	            releaseStack();return;
	          }if (config.infiniteLoop === false && switchCount >= config.switchAmount) {
	            return;
	          }if (config.autoPlay) {
	            nextScrollId = setTimeout(forward, config.delay * 1e3);
	          }
	        }
	      };scrollBackward = function () {
	        if (paused) {
	          return;
	        }var curLi, i, newScrollOffset, scrollDistance, theStep;if (container[0][config.scrollOffset] === 0) {
	          for (i = 0; i < config.switchItems; i++) {
	            containerUL.children(config.listItemElement + ":last-child").insertBefore(containerUL.children(config.listItemElement + ":first-child"));
	          }curLi = containerUL.children(config.listItemElement + ":first-child");scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.height() : curLi.width();container[0][config.scrollOffset] = scrollDistance;
	        }if (!config.linear) {
	          theStep = Math.max(3, parseInt(container[0][config.scrollOffset] * .3, 10));newScrollOffset = Math.max(container[0][config.scrollOffset] - theStep, 0);
	        } else {
	          newScrollOffset = Math.max(container[0][config.scrollOffset] - config.step, 0);
	        }container[0][config.scrollOffset] = newScrollOffset;if (newScrollOffset === 0) {
	          --switchCount;clearInterval(scrollingId);scrollingId = null;if (jQuery.isFunction(config.afterBackward)) {
	            config.afterBackward.call(container, { switchCount: switchCount, currentFirstChild: containerUL.children(config.listItemElement + ":first-child") });
	          }if (config.triggerStackable && stackedTriggerIndex !== 0) {
	            releaseStack();return;
	          }if (config.autoPlay) {
	            nextScrollId = setTimeout(forward, config.delay * 1e3);
	          }
	        }
	      };releaseStack = function () {
	        if (stackedTriggerIndex === 0) {
	          return;
	        }if (stackedTriggerIndex > 0) {
	          stackedTriggerIndex--;nextScrollId = setTimeout(forward, 0);
	        } else {
	          stackedTriggerIndex++;nextScrollId = setTimeout(backward, 0);
	        }
	      };forward = function () {
	        clearInterval(scrollingId);scrollingId = setInterval(scrollForward, config.speed);
	      };backward = function () {
	        clearInterval(scrollingId);scrollingId = setInterval(scrollBackward, config.speed);
	      };forwardHover = function () {
	        config.autoPlay = true;paused = false;clearInterval(scrollingId);scrollingId = setInterval(scrollForward, config.speed);
	      };pauseHover = function () {
	        paused = true;
	      };resetClock = function (delay) {
	        config.delay = delay || config.delay;clearTimeout(nextScrollId);if (config.autoPlay) {
	          nextScrollId = setTimeout(forward, config.delay * 1e3);
	        }
	      };if (config.autoPlay) {
	        nextScrollId = setTimeout(forward, config.startDelay * 1e3);
	      }container.bind("resetClock", function (delay) {
	        resetClock(delay);
	      });container.bind("forward", function () {
	        if (config.triggerStackable) {
	          if (scrollingId !== null) {
	            stackedTriggerIndex++;
	          } else {
	            forward();
	          }
	        } else {
	          clearTimeout(nextScrollId);forward();
	        }
	      });container.bind("backward", function () {
	        if (config.triggerStackable) {
	          if (scrollingId !== null) {
	            stackedTriggerIndex--;
	          } else {
	            backward();
	          }
	        } else {
	          clearTimeout(nextScrollId);backward();
	        }
	      });container.bind("pauseHover", function () {
	        pauseHover();
	      });container.bind("forwardHover", function () {
	        forwardHover();
	      });container.bind("speedUp", function (event, speed) {
	        if (speed === "undefined") {
	          speed = Math.max(1, parseInt(config.speed / 2, 10));
	        }config.speed = speed;
	      });container.bind("speedDown", function (event, speed) {
	        if (speed === "undefined") {
	          speed = config.speed * 2;
	        }config.speed = speed;
	      });container.bind("updateConfig", function (event, options) {
	        config = jQuery.extend(config, options);
	      });
	    });
	  };
	})(jQuery);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * 2007-2018 PrestaShop
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.txt.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to http://www.prestashop.com for more information.
	 *
	 * @author    PrestaShop SA <contact@prestashop.com>
	 * @copyright 2007-2018 PrestaShop SA
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 * International Registered Trademark & Property of PrestaShop SA
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _prestashop = __webpack_require__(51);
	
	var _prestashop2 = _interopRequireDefault(_prestashop);
	
	var _jquery = __webpack_require__(50);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	_prestashop2['default'].blockcart = _prestashop2['default'].blockcart || {};
	
	_prestashop2['default'].blockcart.showModal = function (html) {
	  function getBlockCartModal() {
	    return (0, _jquery2['default'])('#blockcart-modal');
	  }
	
	  var jQueryblockCartModal = getBlockCartModal();
	  if (jQueryblockCartModal.length) {
	    jQueryblockCartModal.remove();
	  }
	
	  (0, _jquery2['default'])('body').append(html);
	
	  jQueryblockCartModal = getBlockCartModal();
	  jQueryblockCartModal.modal('show').on('hidden.bs.modal', function (event) {
	    (0, _jquery2['default'])("body").removeAttr("style");
	    _prestashop2['default'].emit('updateProduct', {
	      reason: event.currentTarget.dataset,
	      event: event
	    });
	  });
	};

/***/ })
/******/ ]);
//# sourceMappingURL=theme.js.map