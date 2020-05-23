import {util} from "../../src/modules/util.js";
import {moduleController} from "../../src/modules/moduleController.js";
import {textReader} from "../../src/modules/textIntervention/textReader.js";
import {textWriter} from "../../src/modules/textIntervention/textWriter.js";
import {CKG} from "../../src/modules/randomGen.js";

let seed=document.querySelector("#seed");
let spice=document.querySelector("#spice");
let input=document.querySelector("#textInput");
let outputORG=document.querySelector("#textOutputORG");
let outputMOD=document.querySelector("#textOutputMOD");


export function start(){
    if(seed.value==="" || seed.value===undefined || seed.value===null){
        seed.value=Math.floor(Math.random()*100000)+1;
    }
    new CKG(seed.value,spice.checked);
    let asciiCode=textReader.toASCII(input.value);
    asciiCode=util.toTwoDimension(asciiCode,10);
    let cipherBulk=moduleController.encryptImage(asciiCode);
    let cipher=util.toOneDimension(cipherBulk[cipherBulk.length-1]);
    outputMOD.value=textWriter.ASCIItoText(cipher);

}
export function displayOriginal(){
let asciiCode=textReader.toASCII(input.value);
outputORG.value=textWriter.ASCIItoText(asciiCode);

}


document.querySelector('#st2').addEventListener('click', start);
document.querySelector('#st3').addEventListener('click', displayOriginal);