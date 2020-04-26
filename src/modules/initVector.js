import {getRandom} from "./randomGen.js";

export class initVector{

constructor(valueAmount,rangeStart,rangeEnd) {
    let tempArr=[];
    for(let i=0;i<valueAmount;i++){
    tempArr.push(getRandom(rangeStart,rangeEnd));
    }
    this.vectorInstance=tempArr;
    initVector._last=tempArr;
    }


    static getLatestIV(){
    //accessor GET
    return initVector._last;
    }



}

initVector._last=[];//basically a static var for the class (because static props are not widely supported yet)