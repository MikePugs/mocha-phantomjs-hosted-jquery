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
       
    /*
    var mocha = require('mocha');
    var phantom = require('phantom');
    var assert = require('assert');
    var chai = require('chai');
    var expect = chai.expect;
    
    describe('Example' , function () {
        describe('#jQueryInTest', function () {
            console.log(page);
            it('should prove jquery included in tests and works fine', function () {
                phantom.create(function (ph) {
                    ph.createPage(function (page) {
                        page.open("http://www.google.com", function (status) {
                            console.log("opened google? ", status);
                            page.evaluate(function () { return document.title; }, function (result) {
                                console.log('Page title is ' + result);
                                ph.exit();
                            });
                        });
                    });
                });
            });
        });
    });
    

    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open("http://www.google.com", function (status) {
                console.log("opened google? ", status);
                page.evaluate(function () { return document.title; }, function (result) {
                    console.log('Page title is ' + result);
                    ph.exit();
                });
            });
        });
    });
    */
    
    
    /*
    var assert = require('assert');
    var chai = require('chai');
    var expect = chai.expect;
    var $ = require('jquery');
    var ChatUI = require('../lib/ChatUI');

    
    var page = require('webpage').create();
    page.open('http://example.com', function (status) {
        console.log("Status: " + status);
        if (status === "success") {
            page.render('example.png');
        }
        phantom.exit();
    });
     */
    /*
    describe('Example' , function () {
        describe('#jQueryInTest', function () {
            console.log(page);
            it('should prove jquery included in tests and works fine', function () {                
                page.open('http://net.tutsplus.com', function (s) {
                    console.log(s);
                    phantom.exit();
                });
            });
        });
    });*/
        /*
        describe('#jQueryInTest', function () {
            casper.start('http://casperjs.org/', function () {
                this.echo(this.getTitle());
            });
            
            it('should prove jquery included in tests and works fine', function () {
                var $div = $('<div></div>');
                $div.html('TESTING123');
                expect($div.html()).to.equal('TESTING123');
            });
             
        });
         * */

/*        
        describe('#jQueryInConstructor', function () {
            it("should allow me to test an method that utilizes jquery but I don't want jquery in my final .js file", function () {
                var $div = $('<div data-wp-chat="data-wp-chat-data"></div>');
                var chatObjects = document.querySelectorAll('[data-wp-chat]');
                var chatUI = null;
                for (var i = 0; i < chatObjects.length; i++) {
                    chatUI = new ChatUI(chatObjects[i]);
                }
                expect($(chatUI.element).data('wp-chat').length).to.be.above(0);
            });

        });
*/

})();

