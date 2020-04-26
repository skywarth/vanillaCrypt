import {initVector} from "./initVector";


export class blockCipherSuite{
    static splitToBlocks(orgArray,chunkSize){
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
            let index=result[result.length-1];
            while(index.length!==chunkSize){
                index.push(Math.floor((Math.random() * 256)));
            }

        }



            return result;

    }



   static blockProcessController(blockChunk){
    let cipheredBlock=this.xorArrays(initVector.getLatestIV(),blockChunk);

    }

    static xorArrays(arr1,arr2){
    return arr1.filter(x => !arr2.includes(x));
    }



}