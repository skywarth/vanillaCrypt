
import {faker,zigzagReader,ultraMegaFusionRandom} from "./importController.js"


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

QUnit.module("UltraMegaFusionRandom class (PRNG), chaotic random", function(hooks) {



    QUnit.test("Null/Undefined Check - NO SPICE - 100k Generation", function (assert) {
        //let a=JSON.stringify(zigzagReader([[1,2,3],[4,5,6],[7,8,9]]));
        let randomRangeIndicator= Math.floor((Math.random() * 100000) + 1);
        let randObj=new ultraMegaFusionRandom( Math.floor((Math.random() * 1000000) + 1),false);//with random seed
        let genAmount=100000;
        let errStat=false;
        for(let i=0;i<genAmount;i++){
            let val=randObj.getNextRange(0,randomRangeIndicator);
            if(val===undefined || val===null){
                errStat=true;
                throw "There is a null/undefined !";


            }
        }

        assert.ok(
            errStat!==true



            , "Passed!, No null/undefined generated");
    });

    QUnit.test("Null/Undefined Check - SPICE - 100k Generation", function (assert) {
        //let a=JSON.stringify(zigzagReader([[1,2,3],[4,5,6],[7,8,9]]));
        let randomRangeIndicator= Math.floor((Math.random() * 100000) + 1);
        let randObj=new ultraMegaFusionRandom( Math.floor((Math.random() * 1000000) + 1),true);//with random seed
        let genAmount=100000;
        let errStat=false;
        for(let i=0;i<genAmount;i++){
            let val=randObj.getNextRange(0,randomRangeIndicator);
            if(val===undefined || val===null){
                errStat=true;
                throw "There is a null/undefined !";


            }
        }

        assert.ok(
            errStat!==true



            , "Passed!, No null/undefined generated");
    });

    QUnit.test("Distribution difference for coin flip is not greater than 20% - NO SPICE- 10k flips", function (assert) {
        //let a=JSON.stringify(zigzagReader([[1,2,3],[4,5,6],[7,8,9]]));
        let randomRangeIndicator= Math.floor((Math.random() * 10000) + 1);
        let randObj=new ultraMegaFusionRandom( Math.floor((Math.random() * 100000) + 1),false);//with random seed
        let heads=0;
        let tails=0;
        let flipAmount=100;
        for(let i=0;i<flipAmount;i++){
            let val=randObj.getNextRange(randomRangeIndicator,randomRangeIndicator+2);
            if(val===randomRangeIndicator)
                heads++;
            else
                tails++;
        }
        let diff=(Math.max(heads,tails)-Math.min(heads,tails))*100/flipAmount;
        assert.ok(
            diff<=20



            , "Passed!, Difference amount this time was="+diff+"%");
    });

    QUnit.test("AVERAGE Distribution difference for coin flip is not greater than 10% - NO SPICE - 10k flips - 100k RUNS", function (assert) {
        //let a=JSON.stringify(zigzagReader([[1,2,3],[4,5,6],[7,8,9]]));

        let runAmount=100000;
        let diffs=0;
        for (let i = 0; i <runAmount ; i++) {


        let randomRangeIndicator= Math.floor((Math.random() * 10000) + 1);
        let randObj=new ultraMegaFusionRandom( Math.floor((Math.random() * 100000) + 1),false);//with random seed
        let heads=0;
        let tails=0;
        let flipAmount=100;
        for(let i=0;i<flipAmount;i++){
            let val=randObj.getNextRange(randomRangeIndicator,randomRangeIndicator+2);
            if(val===randomRangeIndicator)
                heads++;
            else
                tails++;
        }
        let diff=(Math.max(heads,tails)-Math.min(heads,tails))*100/flipAmount;
        diffs+=diff;
        }
        assert.ok(
            diffs/runAmount<=10



            , "Passed!, AVERAGE difference amount is="+diffs/runAmount+"%");
    });

    QUnit.test("Distribution difference for coin flip is not greater than 20% - SPICE - 10k flips", function (assert) {
        //let a=JSON.stringify(zigzagReader([[1,2,3],[4,5,6],[7,8,9]]));
        let randomRangeIndicator= Math.floor((Math.random() * 10000) + 1);
        let randObj=new ultraMegaFusionRandom( Math.floor((Math.random() * 100000) + 1),true);//with random seed
        let heads=0;
        let tails=0;
        let flipAmount=100;
        for(let i=0;i<flipAmount;i++){
            let val=randObj.getNextRange(randomRangeIndicator,randomRangeIndicator+2);
            if(val===randomRangeIndicator)
                heads++;
            else
                tails++;
        }
        let diff=(Math.max(heads,tails)-Math.min(heads,tails))*100/flipAmount;
        assert.ok(
            diff<=20



            , "Passed!, Difference amount this time was="+diff+"%");
    });

    QUnit.test("AVERAGE Distribution difference for coin flip is not greater than 10% - SPICE - 10k flips - 100k RUNS", function (assert) {
        //let a=JSON.stringify(zigzagReader([[1,2,3],[4,5,6],[7,8,9]]));

        let runAmount=100000;
        let diffs=0;
        for (let i = 0; i <runAmount ; i++) {


            let randomRangeIndicator= Math.floor((Math.random() * 10000) + 1);
            let randObj=new ultraMegaFusionRandom( Math.floor((Math.random() * 100000) + 1),true);//with random seed
            let heads=0;
            let tails=0;
            let flipAmount=100;
            for(let i=0;i<flipAmount;i++){
                let val=randObj.getNextRange(randomRangeIndicator,randomRangeIndicator+2);
                if(val===randomRangeIndicator)
                    heads++;
                else
                    tails++;
            }
            let diff=(Math.max(heads,tails)-Math.min(heads,tails))*100/flipAmount;
            diffs+=diff;
        }
        assert.ok(
            diffs/runAmount<=10



            , "Passed!, AVERAGE difference amount is="+diffs/runAmount+"%");
    });

});