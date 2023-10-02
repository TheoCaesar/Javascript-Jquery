function add_element(new_el, txt) {
    var list_container = document.getElementsByTagName("ul")[0];

    //create element;
    var list_item = document.createElement(new_el);
    list_item.setAttribute("class", "list-item");
    // list_item.setAttribute("id", Math.floor(Math.random)* 1000);
   
    list_container.insertBefore(list_item, list_container.firstChild);

    //create text node;
    list_container.firstChild.textContent = txt;
    // list_item.texContent = txt;
    console.log(list_container.children.length);

    // --------------------------
    //display count(list-items);
    // --------------------------
    var head_cont = document.querySelector(".heading");
    var list_length = list_container.children.length;
    if (!document.getElementById("counter")){
        var list_count = document.createElement("span");
        list_count.setAttribute("id","counter");
        list_count.textContent = list_length;

        head_cont.appendChild(list_count);
        console.log(head_cont)
    } else {
        document.getElementById("counter").textContent = list_length
   }
}

add_element("li", "palm oil")
// add_element("li", "sweet potatoes")