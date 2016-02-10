/**
 * @name storm-attributelist: Batch set/toggle DOM element attributes
 * @version 0.1.0: Wed, 10 Feb 2016 16:55:59 GMT
 * @author stormid
 * @license MIT
 */(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.StormAttributelist = factory();
  }
}(this, function() {
	'use strict';
    
    function wrapper(fn) {
        return function() {
            if (arguments[1] === Object(arguments[1])) {
                for(var attr in arguments[1]){
                    fn.call(null, arguments[0], attr, arguments[1][attr]);
                }
            } else if(Array.isArray(arguments[1])){
                arguments[1].forEach(function(a){
                    fn.call(null, arguments[0], a);
                });
            } else {
                fn.apply(null, arguments);
            }
        };
    }
    
    return {
        set: function(el, attr) {
            wrapper(function(e, a, v){
                e.setAttribute(a, v);
            })(el, attr);
        },
        toggle: function(el, attr) {
            wrapper(function(e, a){
                e.setAttribute(a, (e.getAttribute(a) === 'false' ? true : false));
            })(el, attr);
        }
    };
	
 }));