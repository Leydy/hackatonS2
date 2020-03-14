function countChar(charCount){
    var countWords = charCount.replace(',' ,'').split(' ');
    //console.log(countWords);
    var wordShort = '';
    for(var i = 0; i <= countWords.length; i++){
        //console.log(countWords[i]);
        if(countWords[i] != undefined){
            if(i === 0){
               wordShort = countWords[i];
            }
            //console.log(wordLong)
            if(wordShort.length  >  countWords[i].length){
              //console.log(countWords[i])
                wordShort =  countWords[i];
            }
        }
    }
    console.log('Palabra corta: '+wordShort);
}
countChar('Hola, soy Leydy y me gustan los gatos');
