let hotel = {
    name : 'Mariott City Hotel',
    rooms: 821,
    booked: 508,
    roomType: ['single', 'apartment', 'suites', 'penthouse'],

    availableRooms: function() {
        return this.rooms - this.booked;    // diff btn self & this??/
    }
}

let roomCountContainer = document.getElementById("room-count");
// roomCountContainer.textContent = hotel.availableRooms();

// =================================================================
// obj creating function -constructor function
// =================================================================

function HotelCreator(nom, chambres=100, bookd=0, chambresType=[]){
    this.name = nom;
    this.rooms = chambres;
    this.booked = bookd;
    this.roomType =chambresType;

    // this.availableRooms=(function (){
    // return this.rooms - this.booked;
    // })
    this.availableRooms=this.rooms - this.booked;

}

let laPalm = new HotelCreator(
                'La Palm Royale Beach',
                350,
                259,
                ['appartment', "duplex", "suites", "offices"]
            )
roomCountContainer.textContent = laPalm.availableRooms;
document.getElementById("name").textContent = laPalm.name


// ------------------- addn or removing props ----------------------

laPalm.pool = true;
laPalm.casino = false;
laPalm.club = true

let detail1Cont = document.getElementById('xtras-1');
let detail2Cont = document.getElementById('xtras-2');
let detail3Cont = document.getElementById('xtras-3');

console.log(laPalm['pool'])
detail1Cont.textContent="pool";
detail2Cont.textContent= "casino";
detail3Cont.textContent= "club";

iContainers = document.getElementsByClassName("fa-icon");
// let xtras = ['pool', 'casino', 'club']

let icon1Cont = document.getElementById('icon1');
let icon2Cont = document.getElementById('icon2');
let icon3Cont = document.getElementById('icon3');

if (laPalm['pool']) {
    icon1Cont.innerHTML = "<i class=\'fa fa-check-square\' aria-hidden=\'true\'></i>"
} else {
    icon1Cont.innerHTML = "<i class=\'fa fa-close\' ></i>"
}

if (laPalm['casino']) {
    icon2Cont.innerHTML = "<i class=\'fa fa-check-square\' aria-hidden=\'true\'></i>"
} else {
    icon2Cont.innerHTML = "<i class=\'fa fa-close\' ></i>"
}

if (laPalm['club']) {
    icon3Cont.innerHTML = "<i class=\'fa fa-check-square\' aria-hidden=\'true\'></i>"
} else {
    icon3Cont.innerHTML = "<i class=\'fa fa-close\' ></i>"
}

// remove prop
delete laPalm.pool
console.log(laPalm)

if (laPalm['pool']) {
    icon1Cont.innerHTML = "<i class=\'fa fa-check-square\' aria-hidden=\'true\'></i>"
} else {
    icon1Cont.innerHTML = "<i class=\'fa fa-close\' ></i>"
}


let car = new Object();

car.licensePlate = 'TC 002 24';
car.make = "Nissan";
car.model = "Pathfinder 2024";
console.log(car)

// ===================================================================================
// Object Models - Browser/Window || Document || String
// ===================================================================================

// Browser
let info = ["browser window", "history", "screen"]
let bw1Cont = document.getElementById("bw-1").textContent=info[0];
let bw2Cont = document.getElementById("bw-2").textContent=info[1];
let bw3Cont = document.getElementById("bw-3").textContent=info[2];


var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var history = window.history.length;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;


let bwd1Cont = document.getElementById("bwd1");
let bwd2Cont = document.getElementById("bwd2");
let bwd3Cont = document.getElementById("bwd3");

bwd1Cont.innerHTML += `<span>width ==> ${windowWidth}</span>`;
bwd1Cont.innerHTML += `<span>height ==> ${windowHeight}</span>`;

bwd2Cont.innerHTML += `<span>items ==> ${history}</span>`;

bwd3Cont.innerHTML += `<span>width ==> ${screenWidth}</span>`;
bwd3Cont.innerHTML += `<span>height ==> ${screenHeight}</span>`;

let mystr = `Current page url :-> ${window.location}`
// window.alert()


//document 
console.log(document.lastModified);
console.log(document.title);
console.log(document.location.href);

