function par(n){
    if (n==0) return 1;
    else return (impar(n-1));
   } 
   function impar(n){
    if (n==0) return 0;
    else return(par(n-1));
   }
   
   function parImpar(x){
     if (par(x))
      console.log("El número es par");
    else
      console.log("El número es impar"); 
   }
   
   parImpar(6);