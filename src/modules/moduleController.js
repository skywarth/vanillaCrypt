import {zigzagReader} from "./matrixReaders/zigzagReader.js";
import {blockCipherSuite} from "./blockCipher.js";
import {initVector} from "./initVector.js";
import {DES} from "./DES.js";
import {util} from "./util.js";
import {encryptionSuite} from "./encryptionSuite.js";

export class moduleController{

    static encryptImage(imageMatrix,roundAmount){
    return encryptionSuite.encrypt(imageMatrix,roundAmount);
    }









}