import {ultraMegaFusionRandom} from "../../../src/modules/chaoticRandom/ultraMegaFusionRandom.js";

let theButton=document.querySelector("#start");
let seedVal=document.querySelector("#seedVal");


theButton.onclick = function () {
    cleanUp();

start();

};

function cleanUp() {
}
    function start() {
    let seed=Math.floor((Math.random()*100000)+1);
    seedVal.innerHTML=seed;
        let noSpiceRand=new ultraMegaFusionRandom(seed,false);
        let spiceRand=new ultraMegaFusionRandom(seed,true);
        var GRID_SIZE = 512;
        var BLOCK_SIZE = 2;

        var noSpice = document.getElementById('noSpice').getContext('2d');
        var spice = document.getElementById('spice').getContext('2d');


        var count = 0;

        for (var x = 0; x < GRID_SIZE; x += BLOCK_SIZE) {
            for (var y = 0; y < GRID_SIZE; y += BLOCK_SIZE) {
                //noSpice draw
                let val1=noSpiceRand.getNextRange(0,2);
                if (val1 === 0) {
                    noSpice.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
                    count++;
                }

                //spice draw
                let val2=spiceRand.getNextRange(0,2);
                if (val2 === 0) {
                    spice.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
                    count++;
                }

            }
        }
}