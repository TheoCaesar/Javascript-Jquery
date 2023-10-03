// form validations
var unameEL = document.getElementsByName("uname")[0]
// ==============================================================================
 function checkUsername(e) {
    // var unameEL = document.getElementById("username"); //works fine
    var unameEL = document.getElementsByName("uname")[0]
    var username;
    // console.log(unameEL.value.length);

    if (unameEL.value.length > 0) {
        username = unameEL.value;
        if (username.length < 5) {
            var errMsgEL = document.createElement("p");
            var error_msg;  

            error_msg = "Sorry. Make sure username is more than 5 characters.";
            errMsgEL.textContent = error_msg; 
            errMsgEL.setAttribute("class", "error-msg")
            console.log(errMsgEL);

            //append error msg
            document.querySelector(".field").appendChild(errMsgEL)
        }
    }
    console.log("e.target :-->", e.target)
}

// unameEL.addEventListener('blur', checkUsername, false);

// ===============================================================================

/* addEventListener in DOM
var pwdEL = document.getElementsByName("pwd")[0]
function checkPassword() {
    var password="---";
    console.log(password)

    if (pwdEL.value.length > 0) {
        password = pwdEL.value;  
        if (password.length < 5) {
            var errMsgEL = document.createElement("p");
            var error_msg;  

            error_msg = "Sorry. Make sure password is more than 8 characters.";
            errMsgEL.textContent = error_msg; 
            errMsgEL.setAttribute("class", "error-msg")
            console.log(errMsgEL);

            //append error msg 
            document.querySelector(".field")[1].appendChild(errMsgEL)
        }
    }
    console.log("in username")
}
console.log(pwdEL)
pwdEL.addEventListener('blur', checkPassword, false); */

// ===============================================================================

/* event objects (e params), teh target prop of e obj returns teh element triggering 
event lisener, once we tie it to a dom node with the event listener function.
function checkUname(e) {
    var targetEL = e.target; //get target of event;
    console.log("checkUname function triggered!\ne.target --> ", targetEL)
}
unameEL.addEventListener('blur', checkUsername, false);

===============================================================================
function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return `target -> ${e.target}` || `src -> ${e.srcElement}`;
}

getTarget(); */
// ================================================================================
/* 
function checkLength(e, minLength=3) {
    //if no event param, get from browser
    if (!e) {
        console.log("not")
        e = window.event;
    }
    //get element triggering event;
    var eventEL = e.target // || e.srcElement;
    console.log(eventEL.value); //- passed
if (eventEL.value.length < minLength){
        //create errmsg
        var errmsg = "";
        var errmsgEL = document.createElement("p");
        errmsg = `Sorry, the length of the strings provided must be ${minLength}`;
        errmsgEL.textContent=errmsg;
        errmsgEL.setAttribute("class", "error-msg")
        console.log(errmsgEL);

        eventEL.parentNode.appendChild(errmsgEL, eventEL)
    }
}

var unameEL = document.getElementById("username")
unameEL.addEventListener('blur', function (e) {checkLength(e,5)}, false);
 */
    
var submitBtn = document.getElementsByTagName('button')[0];

function login(e) {
    console.log('ho')
    if (!e) {
        e = window.event;
    }
    var clickedBtn = e.target;
    
    clickedBtn.preventDefault();
    var popup = document.createElement("div");
    popup.setAttribute('class', "popup");
    popup.textContent = "logging you in..."
    document.body.appendChild(popup); console.log(submitBtn)
}
submitBtn.addEventListener("click", function(e) {login}, false)