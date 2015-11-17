(function () {
    "use strict";
    
    if (typeof (window) !== 'undefined') {
        var Example = require('./lib/Example.js');    
        var exampleElements = document.querySelectorAll('[data-example-app]');
        for (var i=0; i < exampleElements.length; i++) {
            new Example(exampleElements[i]);
        }
    }

})();