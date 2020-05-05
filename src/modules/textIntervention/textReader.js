export class textReader{
    static toASCII(textString){
        let codes=[];
        for(let i=0;i<textString.length;i++){
            codes.push(textString.charCodeAt(i));
        }
        return codes;
    }

}