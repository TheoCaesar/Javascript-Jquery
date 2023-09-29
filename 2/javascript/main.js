// ===============================================
//  .textContent
// ===============================================
var price = 5;
var qty = 15;
var total = price * qty;

var costEl = document.getElementById("cost");
costEl.textContent = "$" + total;

// ======================================
//.innerHTML
// ======================================

let username = "Jack Jones";
let msg = "how are you doing today";
let linked_msg = '<a href=\"https://www.google.com\"> Click Here</a>';

let greetnContainer = document.getElementById("greet-user");
let msgContainer = document.getElementById("message");
let linkedMsgContainer = document.getElementById('linkedMsg')

greetnContainer.textContent = "Howdy "+ username;
msgContainer.textContent =  msg 
linkedMsg.innerHTML =  linked_msg; 

// ================================================
// .className
// ================================================
var inStock = True;
var shippn = False;

var iconAvail =document.getElementById("available")
var iconShip =document.getElementById("shipping")

iconAvail.className = inStock;
iconShip.className = shippn;

// ================================================
//  arrays
// ================================================
let colours = ['red', 'magenta', 'blue', 'green']
