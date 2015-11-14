(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jssExtend"] = factory();
	else
		root["jssExtend"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = jssExtend;

	function jssExtend() {
	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;

	    function extend(newStyle, style) {
	      if (typeof style.extend == 'string') {
	        if (rule.options && rule.options.sheet) {
	          var refRule = rule.options.sheet.getRule(style.extend);
	          if (refRule) extend(newStyle, refRule.originalStyle);
	        }
	      } else if (Array.isArray(style.extend)) {
	        for (var index = 0; index < style.extend.length; index++) {
	          extend(newStyle, style.extend[index]);
	        }
	      } else {
	        for (var prop in style.extend) {
	          if (prop === 'extend') extend(newStyle, style.extend.extend);else newStyle[prop] = style.extend[prop];
	        }
	      }

	      // Copy base style.
	      for (var prop in style) {
	        if (prop !== 'extend') newStyle[prop] = style[prop];
	      }

	      return newStyle;
	    }

	    rule.style = extend({}, rule.style);
	  };
	}

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;