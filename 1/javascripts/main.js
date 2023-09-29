let today = new Date();
let time = today.getHours();
let greet;
if (time > 18) {
    greet = "Good evening";
} else if (time > 12) {
    greet = "Good afternoon";
} else if (time > 5) {
    greet = "good morning...how was your night";
} else {
    greet = "Wake the fuck up motherfucker!";
}

document.write("\n\nfrom .js file \n<h3>" + greet + "</h3>");
