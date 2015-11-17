(function () {
    "use strict";

    function Example(element) {
        this.element = element;
        $(this.element).html(new Date());        
    }

    module.exports = Example;

})();