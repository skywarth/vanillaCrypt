
import {faker} from "./src/modules/fakeImage.js";
import {zigzagReader} from "./src/modules/matrixReaders/zigzagReader.js";

//let test11=[[1,2],[3,4]];//success                                                                    //2*2
//let test11=[[1,2],[3,4],[5,6]];//success                                                                //3*2
//let test11=[[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]];//success                                  //5*3
//let test11=[[1,2,3],[4,5,6],[7,8,9]];//success                                                   //3*3
//let test11=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; //success                              //4*4
//let test11=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];//success                      //5*4
//let test11=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];//success    //5*5
//meaning it works well with equal dimension matrix
console.log(test11);
let ret=zigzagReader(test11);
console.log(ret);
