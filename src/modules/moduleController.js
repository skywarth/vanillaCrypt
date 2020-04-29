import {zigzagReader} from "./matrixReaders/zigzagReader.js";
import {blockCipherSuite} from "./blockCipher.js";
import {initVector} from "./initVector.js";
import {DES} from "./DES.js";

export class moduleController{

    static execute(imageMatrix){
    //STEP 2


    let imageMatrix1D=zigzagReader(imageMatrix);

    //STEP 3 and 4
    let imageBlocks=blockCipherSuite.splitToBlocks(imageMatrix1D,256)


    //STEP 5
    let IV=new initVector(256,0,255);

    let roundCiphers=[];
    let cipheredBlocks=[];

    for(let k=0;k<1;k++)
    {
        cipheredBlocks.length=0;

        console.log("Round "+k+" started")
        //STEP 6

        for(let i=0;i<imageBlocks.length;i++){

            //STEP 8
            let permTableDES=DES.generatePermutationTable();
            console.log("Block "+i+" cipher process has started")
            let cipheredBlock=blockCipherSuite.blockProcessController(imageBlocks[i],permTableDES,k);

            //console.log(cipheredBlock);
            if(cipheredBlock===undefined || cipheredBlock===null || cipheredBlock===[] || cipheredBlock.length===0){
                debugger

            }
            cipheredBlocks.push(JSON.parse(JSON.stringify( cipheredBlock )));
        }


        roundCiphers.push(cipheredBlocks);

    }

    console.log(roundCiphers);


    }






}