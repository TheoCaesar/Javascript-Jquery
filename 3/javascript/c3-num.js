//string 
let myNum = 315.235128;

let exp = myNum.toExponential();
let precision = myNum.toPrecision();
let fxd = myNum.toFixed(9);

document.getElementById("heading").textContent = `Original # :--> ${myNum}`

document.getElementById("xtra-1").textContent="Exponential :-->"
document.getElementById("xtra-2").textContent="Precision :-->"
document.getElementById("xtra-3").textContent="Fixed :-->";


document.getElementById("id1").textContent = exp;
document.getElementById("id2").textContent = precision;
document.getElementById("id3").textContent = fxd;
