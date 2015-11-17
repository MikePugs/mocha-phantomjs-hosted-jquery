(function () {
    "use strict";
    
    var expect = (chai && chai.expect) || require('chai').expect;

    describe('Example', function () {
        describe('Constructor', function () {
            it('should accept an HTML element and insert the time', function () {
                var exampleElements = document.querySelectorAll('[data-example-app]');                
                for (var i = 0; i < exampleElements.length; i++) {                    
                    expect(exampleElements[i].innerHTML).to.contain('GMT');
                }
            });
        });  
    });

})();

