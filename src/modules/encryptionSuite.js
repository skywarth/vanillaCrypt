//STEP 2


import {zigzagReader} from "./matrixReaders/zigzagReader.js";
import {blockCipherSuite} from "./blockCipherSuite.js";
import {initVector} from "./initVector.js";
import {DES} from "./DES.js";
import {util} from "./util.js";

export class encryptionSuite {

    static encrypt(imageMatrix,roundAmount) {
        if(roundAmount===undefined || roundAmount===null || roundAmount===""){
            roundAmount=8;
        }
        let imageMatrix1D = zigzagReader(imageMatrix);

        //STEP 3 and 4
        let imageBlocks = blockCipherSuite.splitToBlocks(imageMatrix1D, 256)


        //STEP 5
        new initVector(256, 0, 255);

        let roundCiphers = [];
        let cipheredBlocks = [];

        for (let k = 0; k < roundAmount; k++) {
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

    static displayEncryptedMatrix(cipheredBlocks, desiredX, desiredY, color){
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

    static displayEncryptedImage(cipherBulk,x,y){
        let expectedAmount=x*y*3;

        let imageEncrypted=cipherBulk[cipherBulk.length-1];


        imageEncrypted=util.toOneDimension(imageEncrypted);
        let length=imageEncrypted.length;
        for(let i=0;i<length-expectedAmount;i++){
            imageEncrypted.pop();

        }

        imageEncrypted=util.fillAlpha(imageEncrypted);
        return imageEncrypted;
    }



}