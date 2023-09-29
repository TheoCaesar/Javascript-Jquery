//string 
let mystr = "Home Sweet Home"

let charAt = mystr.charAt(5);
let charCodeAt = mystr.charCodeAt(5);
let endsWith_Home_ = mystr.endsWith("Home");
let includes = mystr.includes("ee");
let indexOf = mystr.indexOf("s");
let lastIndexOf =mystr.lastIndexOf("me");
let replace = mystr.replace("Home", "Village");
let substring = mystr.substring(5,10);
let upperCase = mystr.toUpperCase();
let lowerCase = mystr.toLowerCase();

document.getElementById("xtra-1").textContent="Character@5 :-->"
document.getElementById("xtra-2").textContent="Character Code @5 :-->"
document.getElementById("xtra-3").textContent="Ends with Home? :-->"
document.getElementById("xtra-4").textContent="Character@5 :-->"
document.getElementById("xtra-5").textContent="Includes \'ee\' :-->"
document.getElementById("xtra-6").textContent="Index of \'s\' :-->"
document.getElementById("xtra-7").textContent="last index of \'me\' :-->"
document.getElementById("xtra-8").textContent="replace \'Home\' with \'Village\'  :-->"
document.getElementById("xtra-9").textContent="Substring from 5th index to 9th :-->"
document.getElementById("xtra-10").textContent="to Uppercase :-->"
document.getElementById("xtra-11").textContent=" to Lowercase:-->"


document.getElementById("id1").textContent = charAt;
document.getElementById("id2").textContent = charCodeAt;
document.getElementById("id3").textContent = endsWith_Home_;
document.getElementById("id4").textContent = includes;
document.getElementById("id5").textContent = indexOf;
document.getElementById("id6").textContent = lastIndexOf;
document.getElementById("id7").textContent = replace;
document.getElementById("id8").textContent = substring;
document.getElementById("id9").textContent = upperCase;
document.getElementById("id10").textContent = lowerCase;

console.log(charAt);  
console.log( charCodeAt );
console.log( endsWith_Home_ );
console.log( includes );
console.log( indexOf );
console.log( replace );
console.log( substring );
console.log( upperCase );
console.log( lowerCase );