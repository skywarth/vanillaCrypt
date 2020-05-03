import {imageReader} from "./src/modules/imageIntervention/imageReader.js";
import {util} from "./src/modules/util.js";
import {imageWriter} from "./src/modules/imageIntervention/imageWriter.js";
import {moduleController} from "./src/modules/moduleController.js";
import {encryptionSuite} from "./src/modules/encryptionSuite.js";


let k=imageReader.imageToMatrix(document.getElementById('im')).data;

let n=util.removeAlpha(k);







export function start(){
    /*let testImg1=new faker(50,20,1);
    document.querySelector("#originalMatrix").appendChild(matrixDisplayer.createTable(testImg1.fakeImage));*/
    n=util.toTwoDimension(n,102);
    let cipherBulk=moduleController.encryptImage(n);
    //let imageEncrypted=encryptionSuite.displayEncryptedMatrix(cipherBulk[cipherBulk.length-1],102,102,1);
    let imageEncrypted=encryptionSuite.displayEncryptedImage(cipherBulk,102,102);
    console.log("mod filled=");
    console.log(imageEncrypted);
    let c1 = document.getElementById("myCanvas2");
    let q1=imageWriter.writeImage(imageEncrypted,c1,102,102);
    c1.getContext("2d").putImageData(q1,0,0);
}
export function displayOriginal(){
    n=util.fillAlpha(n);
    let c = document.getElementById("myCanvas");
    console.log("org filled=");
    console.log(n);
    let q=imageWriter.writeImage(n,c,102,102);
    c.getContext("2d").putImageData(q,0,0);
}


document.querySelector('#st2').addEventListener('click', start);
document.querySelector('#st3').addEventListener('click', displayOriginal);

