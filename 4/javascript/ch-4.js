let count = 1, num = 3;
let msg = ""

let conko = document.getElementById("content");
// conko.parentElement.textContent = "hello"

do {
    msg = `<p>${count} + 3 = ${count + num}</p>`
    conko.innerHTML+=msg 
    count++;
} while (count <= 10);

