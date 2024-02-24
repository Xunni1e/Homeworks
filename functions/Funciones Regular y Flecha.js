let x = 16;

const funcionR = function (x) {
    if (x % 2 == 0){
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

console.log(funcionR(x));

const funcionF = (x) => {
    if (x % 2 == 0){
        
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

console.log(funcionF(x));