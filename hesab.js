var n=Number(prompt("eded daxil edin: "));

function faktorial(n) {
    if (n < 1) return 1;

    return n * faktorial(n-1);
    //5*((4-1)*(3-1)*(2-1)*(1-1))
    //ve buradaki 1-1=0 olduqda şərt odenmir ve 0 əvəzine 1 qaytarir
    //belelikle faktorail hesablanir
    
}

console.log(faktorial(n));
