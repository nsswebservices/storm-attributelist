#Storm Attributelist

Batch set/toggle DOM element attributes

##Usage
var attributelist = require('storm-atributelist');

var el = document.querySelector('.off-canvas');

attributelist.set(el, {
    'aria-hidden': true,
    'aria-labelledby': 'hamburger'
})

##API
@name: set
@params:
DOM element, required, element to set attributes on
Object, required, attribute keys and values


@name: toggle
@params:
DOM element, required, element to set attributes on
String || Array, required, attribute or array of attributes to toggle boolean attribute



