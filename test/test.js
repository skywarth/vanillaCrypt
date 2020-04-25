import {faker,zigzagReader} from "./importController.js"


let isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};
QUnit.module("Misc and Faker class", function(hooks) {
    QUnit.test("faker existence test", function (assert) {
        assert.ok(
            new faker(1024, 768, 1).fakeImage !== undefined

            , "Passed!");
    });

    QUnit.test("isArray mechanism test", function (assert) {
        assert.notOk(
            isArray(Math.random())

            , "Passed!");
        assert.notOk(
            isArray('testing')

            , "Passed!");
    });

    QUnit.test("fake image array test", function (assert) {
        assert.ok(
            isArray(new faker(1024, 768, 1).fakeImage)

            , "Passed!");
    });
});

QUnit.module("zigzagReader Class", function(hooks) {
    QUnit.test("Equal dimension matrix - 3*3/Exact", function (assert) {
        //let a=JSON.stringify(zigzagReader([[1,2,3],[4,5,6],[7,8,9]]));
        assert.ok(
            JSON.stringify(zigzagReader([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) === JSON.stringify([1, 2, 4, 7, 5, 3, 6, 8, 9])


            , "Passed!");
    });

    QUnit.test("Equal dimension matrix - 4*4/Exact", function (assert) {

        assert.ok(
            JSON.stringify(zigzagReader([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])) === JSON.stringify([1, 2, 5, 9, 6, 3, 4, 7, 10, 13, 14, 11, 8, 12, 15, 16])


            , "Passed!");
    });


    QUnit.test("Equal dimension matrix - 5*5/Exact", function (assert) {

        assert.ok(
            JSON.stringify(zigzagReader([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])) === JSON.stringify([1, 2, 6, 11, 7, 3, 4, 8, 12, 16, 21, 17, 13, 9, 5, 10, 14, 18, 22, 23, 19, 15, 20, 24, 25])


            , "Passed!");
    });


    QUnit.test("Unequal dimension matrix - 5*3/Exact", function (assert) {

        assert.ok(
            JSON.stringify(zigzagReader([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]])) === JSON.stringify([1, 2, 4, 7, 5, 3, 6, 8, 10, 13, 11, 9, 12, 14, 15])


            , "Passed!");
    });

    QUnit.test("Unequal dimension matrix - 6*3/Exact", function (assert) {

        assert.ok(
            JSON.stringify(zigzagReader([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]])) === JSON.stringify([1, 2, 4, 7, 5, 3, 6, 8, 10, 13, 11, 9, 12, 14, 16, 17, 15, 18])


            , "Passed!");
    });

    QUnit.test("Unequal dimension matrix - 5*4/Exact", function (assert) {

        assert.ok(
            JSON.stringify(zigzagReader([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]])) === JSON.stringify([1, 2, 5, 9, 6, 3, 4, 7, 10, 13, 17, 14, 11, 8, 12, 15, 18, 19, 16, 20])


            , "Passed!");
    });


    QUnit.test("Unequal dimension matrix - 3*4/Exact", function (assert) {

        assert.ok(
            JSON.stringify(zigzagReader([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])) === JSON.stringify([1, 2, 5, 9, 6, 3, 4, 7, 10, 11, 8, 12])


            , "Passed!");
    });

    QUnit.test("Image-like matrix, 1024*768px/fake", function (assert) {
        const arr1 = new faker(1024, 768, 1).fakeImage;
        const arr2 = zigzagReader(arr1);
        assert.ok(
            arr2.length === (arr1.length) * (arr1[0].length)


            , "Passed!");
        assert.ok(
            arr2[0] === arr1[0][0]


            , "Passed!")
        assert.ok(
            arr2[arr2.length - 1] === arr1[arr1.length - 1][arr1[arr1.length - 1].length - 1]


            , "Passed!");


    });

});