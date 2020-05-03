
import {faker} from "./src/modules/fakeImage.js";

import {moduleController} from "./src/modules/moduleController.js";
import {matrixDisplayer} from "./src/matrixDisplayer.js";
import {encryptionSuite} from "./src/modules/encryptionSuite.js";

//let test11=[[1,2],[3,4]];//success                                                                    //2*2
//let test11=[[1,2],[3,4],[5,6]];//success                                                                //3*2
//let test11=[[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]];//success                                  //5*3
//let test11=[[1,2,3],[4,5,6],[7,8,9]];//success                                                   //3*3
//let test11=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]; //success                              //4*4
//let test11=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];//success                      //5*4
//let test11=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];//success    //5*5
//meaning it works well with equal dimension matrix
/*console.log(test11);
let ret=zigzagReader(test11);
console.log(ret);*/

/*let testArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]



console.log(blockCipherSuite.splitToBlocks(testArr,6));*/

/*let IV=new initVector(256,0,256);
console.log(IV);*/

/*console.log(DES.sboxORG);
console.log(DES.generatePermutationTable());*/

export function start(){
    let testImg1=new faker(50,20,1);
    document.querySelector("#originalMatrix").appendChild(matrixDisplayer.createTable(testImg1.fakeImage));
    let cipherBulk=moduleController.encryptImage(testImg1.fakeImage);
    let imageEncrypted=encryptionSuite.displayEncryptedMatrix(cipherBulk[cipherBulk.length-1],50,20,1);
    document.querySelector("#encryptedMatrix").appendChild(matrixDisplayer.createTable(imageEncrypted));
}

document.querySelector('#st').addEventListener('click', start)