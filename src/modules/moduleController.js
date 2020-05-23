/*import {zigzagReader} from "./matrixReaders/zigzagReader.js";
import {blockCipherSuite} from "./blockCipherSuite.js";
import {initVector} from "./initVector.js";
import {util} from "./util.js";
*/
import {DES} from "./DES.js";

import {encryptionSuite} from "./encryptionSuite.js";
import {AES} from "./AES.js";

export class moduleController{

    static encryptImage(imageMatrix,roundAmount){
        let cipher=encryptionSuite.encrypt(imageMatrix,roundAmount);
        this.resetCache();
    return cipher;
    }

    static resetCache(){
        DES.resetDES();
        AES.resetAES();
    }









}