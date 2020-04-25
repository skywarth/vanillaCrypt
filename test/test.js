import {faker} from "./importController.js"

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "faker existence test", function( assert ) {
    assert.ok(
        new faker(1024,768,1)!==undefined

        , "Passed!" );
});

QUnit.test( "access ?", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

