function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    return "¡Hola!";
}

console.log("Antes de llamar a outer()");

console.log(outer());
console.log("Despues de llamar a outer()");
 let a = (n) => { return n>2 ? n*a(n-1) : 2}
 console.log(a(6))
 let aaa = 10 + "10"
 console.log(aaa)

 let msg ="hello"
 let msg2 =msg.slice(-1)
 console.log(msg2 ? msg2  : msg2 + msg)