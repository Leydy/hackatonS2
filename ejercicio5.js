function format(input)
{
var num = input.toString().replace(/\./g,'');
if(!isNaN(num)){
num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
num = num.split('').reverse().join('').replace(/^[\.]/,'');
console.log(num);
return input = num;
}
 
else{ alert('Solo se permiten numeros');
input = input.toString().replace(/[^\d\.]*/g,'');
console.log(input);
return input;
}
}

format(1000);