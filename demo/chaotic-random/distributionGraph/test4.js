import {ultraMegaFusionRandom} from "../../../src/modules/chaoticRandom/ultraMegaFusionRandom.js";

let theButton=document.querySelector("#start");
let spice=document.querySelector("#spice");
let truncate=document.querySelector("#truncate");
theButton.onclick = function () {
    cleanUp();

start(truncate.checked);

};

function cleanUp() {
    document.querySelector("#uint32").innerHTML="";
    document.querySelector("#int32").innerHTML="";
}
    function start(truncate) {


const ITERATIONS = 100000;
const SEED = Math.floor((Math.random()*100000)+1);



var uData = [];
var iData = [];
var noSpiceRNG = new ultraMegaFusionRandom(SEED,false);
var spiceRNG = new ultraMegaFusionRandom(SEED,true);

for (var i = 0; i < ITERATIONS; i ++) {
    if(truncate){
        uData[i] = noSpiceRNG.getNext();//without truncate because after truncate process
        iData[i] = spiceRNG.getNext();
    }else{
        uData[i] = noSpiceRNG._getNext();//without truncate because after truncate process
        iData[i] = spiceRNG._getNext();
    }

}

var utrace = {
    x: uData,
    type: 'histogram'
};
var itrace = {
    x: iData,
    type: 'histogram'
};

Plotly.newPlot('uint32', [utrace], { title: 'Without Spice' });
Plotly.newPlot('int32', [itrace], { title: 'With spice' });
}