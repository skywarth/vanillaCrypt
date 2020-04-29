import {initVector} from "./initVector.js";
import {getRandom} from "./randomGen.js";
import {DES} from "./DES.js";
import {} from "../../node_modules/d3.js"
import {AES} from "./AES.js";
import {util} from "./util.js";

/*function permute(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
}*/

function permute(source, keys) {
    return Array.from(keys, key => source[key]);
}

export class blockCipherSuite{
    static splitToBlocks(orgArray,chunkSize){
        //STEP 3
        if(orgArray.length<chunkSize){
            throw 'nu-uhh, hell naw';
        }
        let backupArray=orgArray.slice();//for new reference variable, otherwise original array might get corrupted or edited.
        let result = [];

        let diff=orgArray.length%chunkSize;

            let tempBlock=[];


            for (let i = 0; i < backupArray.length; i += chunkSize) {
                result.push(backupArray.slice(i, chunkSize + i));
            }

        if(diff!==0) {
            //Filling with random vars until the chunk is equal to chunk size
            let index=result[result.length-1];
            while(index.length!==chunkSize){
                index.push(Math.floor((Math.random() * 256)));
            }

        }



            return result;

    }



   static blockProcessController(blockChunk,permTable,roundNum){
        let permutationTable=permTable.slice();//to get rid of var reference, to prevent original array from corruption
    let cipheredBlock=util.xorArrays(initVector.lastIV,blockChunk);
        const keyA=getRandom(0,31);//because this will be used to select from an Array, so we cannot use 32 as it would exceed
        const keyB=getRandom(0,31);
        //used to determine which columns of the PerTab will be selected

       //continuing as permuting=swapping

       //STEP 10

       //reason for transpose is to easily permute columns (to switching them to rows)
       //so that we can easily change columns. Since columns became rows...

        permutationTable=DES.transpose(permTable);//became 32x16
       AES.sboxMOD=DES.transpose(AES.sboxMOD)//TODO relocate transpose function

       for(let i=0;i<AES.sboxMOD.length;i++){
           AES.sboxMOD[i]=permute(AES.sboxMOD[i],permutationTable[keyA]);
       }

       //keeping permutationTable transposed since we still use columns
       AES.sboxMOD=DES.transpose(AES.sboxMOD)//reverting transpose after modifying
        //STEP 10 finished

       //STEP 11
       for(let i=0;i<AES.sboxMOD.length;i++){
           AES.sboxMOD[i]=permute(AES.sboxMOD[i],permutationTable[keyB]);
       }
       //STEP 11 finished

       //STEP 12

       let oneDimAES=util.toOneDimension(AES.sboxMOD);

        cipheredBlock=util.xorArrays(cipheredBlock,oneDimAES);
        //STEP 12 finished

        //STEP 13
       let xorKey=[];
       for(let i=0;i<256;i++){
        xorKey.push(getRandom(0,255))
       }//random 256 keys between 0 and 255 has been generated
       cipheredBlock=util.xorArrays(cipheredBlock,xorKey);
       //STEP 13 finished

       //STEP 14
        let subBlockSelection=roundNum%4;
        //considering each blockChunk is 256 in length
       let chunks=util.chunkArray(cipheredBlock,cipheredBlock.length/4);//splitting it into 4 pieces
        chunks[subBlockSelection]=permute(chunks[subBlockSelection],DES.initPermTable);
        cipheredBlock=util.toOneDimension(chunks);//merging back the chunks
       //STEP 14 finished

       //STEP 15
        initVector.lastIV=cipheredBlock;
        //STEP 15 finished




    }







}