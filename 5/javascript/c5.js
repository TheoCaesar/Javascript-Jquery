// ==================================================
// DOM MANIPULATION
// ==================================================
// -------------- CREATEELEMENT()--------------------
var li5 = document.createElement("li");
// -------------- CREATETEXTNODE()--------------------
var li5txt = document.createTextNode("warm lard");
// -------------- APPENDCHILD()--------------------
li5.appendChild(li5txt);
// console.log(li5)
// document.getElementsByTagName("ul")[0].appendChild(li5);
// -------------- REMOVECHILD()--------------------
var ul = document.getElementsByTagName("ul")[0];
var lastli = document.getElementsByTagName("li"); //[-1];
var num = lastli.length
// console.log(lastli[num-1])
lastli= lastli[num-1];
// ul.removeChild(lastli);

// ------------ attributes ---------------------

for (var i = 0; i < 4; i++ ) {
    var ul_li = document.getElementsByTagName("li")[i];
    console.log("ul_li", ul_li)
    if (ul_li.hasAttribute('class')){
        var attr = ul_li.getAttribute('class');
        // console.log("attr", attr);
        if (attr == "hot"){
            ul_li.setAttribute("class", "cold")
        }   
    }else {
            ul_li.setAttribute("class", "hot")
    }
}


// ============ innerHTML ======================
// var ul = document.getElementsByTagName("ul")[0];
// ul.innerHTML += "<li> <b>warm</b> lard</li>"


// ------------textContent > innerText--------------------
// var txt = document.getElementById("one").textContent; //best
// var intxt = document.getElementById("one").innerText;   //obeys css-try setting em display=none in CSS.
// console.log(txt,"\n",intxt)

//-------------node value--------------------
// var li1 = document.getElementById("one");
// li1.firstChild.nextSibling.nodeValue = "meat"

// var li_tag2txt =  document.getElementById("two").firstChild.nodeValue;
// console.log(li_tag2txt);
// var li2txt = li_tag2txt.replace("pine", "ground");
// document.getElementById("two").firstChild.nodeValue = li2txt;
// li1.firstChild.nextSibling.textContent = "food";

// =============== Ind'l Selectors - getElementById() & querySelector()===============================
// var conko = document.getElementById("header");
// conko.className = 'cool'



//multi selectors - querySelectorAll(), getElementsbyTagName(), getElementsbyClassName(),
// var li_tag = document.getElementsByTagName("h1")
// // li_tag[3].className ="cold";
// console.log(li_tag)

// li_tag2 = document.getElementsByClassName("hot");
// console.log(li_tag2.length)
// for (let i = 0; i < li_tag2.length;  i++) {
//     li_tag2[i].className = "cold";
//     console.log(li_tag2[i])
// }
// function do_alot() {
//     var ek = document.querySelectorAll("li.hot")
//     console.log("ek",ek)

//     if (ek.length != 0 ){
//         let x = 0;
//         while (x<ek.length){
//             // ek[x].className = "cold";
//             ek[x].setAttribute("class", "cold");
//             console.log(ek[x]);        
//             x++;        
//         };
//     }

//     var ul= document.getElementsByTagName("ul")[0];
//     var ullc = ul.lastChild;
//     ullc.previousSibling.className = "hot"
//     // ullc.previousSibling.setAttribute = ("class","hot")
//     console.log("ullc", ullc)
// }

// do_alot();

