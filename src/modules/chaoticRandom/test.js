import {ultraMegaFusionRandom} from "./ultraMegaFusionRandom.js";

let a=new ultraMegaFusionRandom(12312,true);
let val;
let fives=0;
let sixes=0;
for (let i = 0; i < 1000; i++) {
    val=a.getNextRange(5,7);
    //val=Math.floor(val*5)+5;

    if(val===5){
        fives++;
    }
    else{
        sixes++;
    }
    console.log(val);

}
console.log(fives);
console.log(sixes);