
import {faker} from "./src/modules/moduleController.js";
import {zigzagReader,tracker2} from "./src/modules/matrixReaders/zigzagReader.js";

let testFaker=new faker(1024,768,false);

//let test11=[[1,2,3],[4,5,6],[7,8,9]];//success
let test11=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(test11);
let ret=zigzagReader(test11);
console.log(ret);
