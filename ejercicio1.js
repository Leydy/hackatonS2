function countChar(charCount){
    var countWords = charCount.replace(',' ,'').split(' ');
    console.log(countWords);
    var wordLong = '';
    for(var i = 0; i <= countWords.length; i++){
        //console.log(countWords[i]);
        if(countWords[i] != undefined){
            //console.log(countWords[i]);
            if(countWords[i].length > wordLong.length){
                wordLong =  countWords[i];
                //console.log('Palabra larga temp '+wordLong);
            }
        }
    }
    console.log('Palabra larga: '+wordLong);
}
countChar('Hola, soy Leydy y me gustan los gatos');


