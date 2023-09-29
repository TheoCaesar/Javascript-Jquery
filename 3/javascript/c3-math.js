let val = Math.random()
document.getElementById("heading").textContent = "Math Module " + val


let roundDown = Math.floor(val)
let abs = Math.abs(val);
let PI = Math.PI;
let sq_root = Math.sqrt(val);

document.getElementById("xtra-1").textContent="round down :-->"
document.getElementById("xtra-2").textContent="absolute :-->"
document.getElementById("xtra-3").textContent="PI :-->";
document.getElementById("xtra-4").textContent="Square Root :-->";


document.getElementById("id1").textContent = roundDown;
document.getElementById("id2").textContent = abs;
document.getElementById("id3").textContent = PI;
document.getElementById("id4").textContent = sq_root;

let yr= new Date().getFullYear();

let copyContainer; 
if (document.getElementById("copy")){
    copyContainer= document.getElementById("copy");
    copyContainer.innerHTML = "Copyright &copy; " + yr;
} else {
    delete copyContainer;
}
