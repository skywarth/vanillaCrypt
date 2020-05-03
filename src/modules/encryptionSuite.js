//STEP 2


import {zigzagReader} from "./matrixReaders/zigzagReader.js";
import {blockCipherSuite} from "./blockCipher.js";
import {initVector} from "./initVector.js";
import {DES} from "./DES.js";
import {util} from "./util.js";

export class encryptionSuite {

    static encrypt(imageMatrix) {

        let imageMatrix1D = zigzagReader(imageMatrix);

        //STEP 3 and 4
        let imageBlocks = blockCipherSuite.splitToBlocks(imageMatrix1D, 256)


        //STEP 5
        let IV = new initVector(256, 0, 255);

        let roundCiphers = [];
        let cipheredBlocks = [];

        for (let k = 0; k < 8; k++) {
            cipheredBlocks.length = 0;

            console.log("Round " + k + " started")
            //STEP 6

            for (let i = 0; i < imageBlocks.length; i++) {

                //STEP 8
                let permTableDES = DES.generatePermutationTable();
                console.log("Block " + i + " cipher process has started")
                let cipheredBlock = blockCipherSuite.blockProcessController(imageBlocks[i], permTableDES, k);

                //console.log(cipheredBlock);
                if (cipheredBlock === undefined || cipheredBlock === null || cipheredBlock === [] || cipheredBlock.length === 0) {
                    debugger

                }
                cipheredBlocks.push(JSON.parse(JSON.stringify(cipheredBlock)));
            }


            roundCiphers.push(cipheredBlocks);
        }

        console.log(roundCiphers);

        return roundCiphers;
    }

    static displayEncrypted(cipheredBlocks,desiredX,desiredY,color){
        let cipheredBlocks1D=util.toOneDimension(cipheredBlocks);
        let imageEncrypted=[];

        for(let i=0;i<desiredX;i++){
            let row=[];

            for(let k=0;k<desiredY;k++){
                let pixel=cipheredBlocks1D.shift();
                row.push(pixel);
            }
            imageEncrypted.push(row);
        }

        return imageEncrypted;
    }


    static displayEncryptedImage(){

    }

}