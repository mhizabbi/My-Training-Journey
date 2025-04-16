  var manful = "Computer";

var myh1 = document.getElementsByClassName('demo');
    myh1[0].innerHTML = 'This is the first presentation';
    myh1[1].innerHTML = 'This is the second presentation';

let returndata = document.getElementById('wednes');
let num1 = 23;
let num2 = '34';
let x = 10;
const y = 30;

returndata.innerHTML = typeof num1;

var arr = ['manful', 'computer', 40000, true, false, ['what', 'is', 'your'], 'Javascript', 'PHP'];

let obj = {
    height: '4.0',
    skin: 'chocolate',
    hair: "black",
    address: '16 Off Akamba Nsukara',
    isMarried: false,
    religion: 'christian',
    networth: 90000000000,
    children: ['jasmine', 'whitney', 'Josh', 'Ronaldo']
};

// returndata.innerHTML = arr[5][0];
returndata.innerHTML = 'obj ' + 'has ' + obj.children.length + ' children';

let num33 = 10;
let num44 = 25;
returndata.innerHTML = num33 + num44;

let num22 = 20;
let num55 = 35;
returndata.innerHTML = num22 *=123;

// let tenary = num22 < 20 ? 'yes' : 'no';

// let var1 = 20;
let var2 = 9;

// returndata.innerHTML= var2 >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote';

let mine = document.querySelector('.mine')

let num11 = 50;
let num3 = 50;

mine.innerHTML = num11 === num3 || num11 > 20 || num3 < 10;
mine.innerHTML = num11 > num3 || num11;

let mybtn = document.querySelector('._btn_');
let Email = document.querySelector('.Email');
let pwd = document.querySelector('.Password');

let dbpwd = 'test1234';
let dbemail = 'manfulict@gmail.com';
mybtn.addEventListener('click', function() {
    let validate = Email.value === dbemail && pwd.value === dbpwd;

    mine.innerHTML = validate;

})

let username = "John";
let priceOfGoods = 500;
let goods = "garri";
let isAvailable = true;
let quantity = 100;

// if(isAvailable){
//     returndata.innerHTML = goods + ' is available'
// }else {
//     returndata.innerHTML = 'No, Garri is not available';
// }

// returndata.innerHTML = quantity * priceOfGoods;
function UpdateTime(){
let dte = new Date();
let mnt = dte.getMonth();
let yrs = dte.getFullYear();
let Min = dte.getMinutes();
let hour = dte.getHours();
let second = dte.getSeconds();
let date = dte.getDate();
let day = dte.getDay();
let currMnt;

// returndata.innerHTML = mnt;

switch(hour){
    case 13:
        hour = 1;
    break;

    case 14:
        hour = 2;
    break;

    case 15:
        hour = 3;
    break;

    case 16:
        hour = 4;
    break;

    case 17:
        hour = 5;
    break;

    case 18:
        hour = 6;
    break;

    case 19:
        hour = 7;
    break;

    case 20:
        hour = 8;
    break;

    case 21:
        hour = 9;
    break;

    case 22:
        hour = 10;
    break;

    case 23:
        hour = 11;
    break;

    case 24:
        hour = 12;
    break;

}
    if(hour >= 12){

    }
const checkpm = hour > 12 ? 'pm' : 'am'; 
let myMonthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
returndata.innerHTML = `${weekdays[day]}, ${date}, ${myMonthArr[mnt]}, ${yrs}, ${hour}:${Min}:${second}${checkpm}`;



}

setInterval(UpdateTime, 1000);

// switch(mnt){
//     case 0:
//         currMnt = 'January';
//     break;

//     case 1:
//         currMnt = 'February';
//     break;

//     case 2:
//         currMnt = 'March';
//     break;

//     case 3:
//         currMnt = 'April';
//     break;

//     case 4:
//         currMnt = 'May';
//     break;

//     case 5:
//         currMnt = 'June';
//     break;

//     case 6:
//         currMnt = 'July';
//     break;

//     case 7:
//         currMnt = 'August';
//     break;

//     case 8:
//         currMnt = 'September';
//     break;

//     case 9:
//         currMnt = 'October';        
//     break;

//     case 10:
//         currMnt = 'November';
//     break;

//     case 11:
//         currMnt = 'December';
//         // returndata.innerHTML = currMnt;
//     break;
// }
// returndata.innerHTML = currMnt;

// let hour = dte.getHours();


for(let x = 0; x < 5; x++){
    mine.innerHTML += x + ' ';
}


// let rtn = document.querySelector('.rtn')
// for(let x=0; x <= 12; x++){
//     rtn.innerHTML += 'value of x=' + x + '<br>';
// }

let myh3 = document.getElementsByClassName

let imgTag = document.querySelector('_slidder_');
let imgArray = []

// let bodyEl = document.body;
// for(const element in dataset){
//     // console.log(dataset[element])
//     let newDiv = document.createElement('div');
//         newDiv.className = 'my_generate';
//         newDiv.id = 'dkd';
//     for(let obj in element){
//         // console.log(element)
//         newDiv.innerHTML = `
//             <div>Id :</div>
//         `;
//         //OR
//         newDiv.innerHTML = `
//             ${element[obj]}
//         `;
//     }

//     bodyEl.appendChild(newDiv);


// }

let rtn3 = document.getElementsByClassName('wed');
let alpha = "abcdefghijklmnopqrstuvwxyz"

rtn3.innerHTML = alpha.length;

// let pwd1 = document.querySelector('._pwd1_');
// let pwd2 = document.querySelector('._pwd2_');
// let _btn_ = document.querySelector('._submitter_');
// let eyeWrapper = document.querySelector('.reveal');

// _btn_.addEventListener('click', function(){
//     if(pwd1.value !== pwd2.value){
//         rtn3.innerHTML = 'Password not match!';
//     }else if (pwd1.value < 8){
//         rtn3.innerHTML = 'Password is too short';
//     }else {

//         rtn3.innerHTML = 'Password is okay';
//     }
// })

// eyeWrapper.forEach((eyebtn, index) => {
//     eyebtn.onclick = function(){
//         //closet(); //return the closest element that match description
//         let passworInput = this.closest('.inpt');

//         if(passwordInput);
//     }
// })


let demo2 = document.querySelector('.demo2');
let image = "C:\Users\pc\Pictures\FASHION GALLERY\Pin on New in Prom Dresses.jpg"
let slash = image.lastIndexOf('/');
demo2.innerHTML = image.substring(slash+1);

function validateForm(event){
    event.preventDefault
}


input = document.querySelector('.fn');
goBtn = document.querySelector('.goBtn');

input.onkeydown = function(){
    if(this.value.search(/^[a-z @.]/) !== -1){
        goBtn.disabled = true;
    }else {
        goBtn.disabled = false;
    }
}
// const form = document.querySelector('.form');
//     form.onsubmit = function(event){
//         event.preventDefault();
//     }

//     form.addEventListener('submit', function(event){
//         event.preventDefault()
//     })

let sss = "Hello World, Today is Thursday, Manful Computer, Uyo, Manful is located in Nwaniba Manful ";
// demo2.innerHTML = sss.slice(0, -1);
// demo2.innerHTML = sss.substring(10, -2);
// demo2.innerHTML = sss.toUpperCase(0, -1);
// demo2.innerHTML = sss.toLowerCase(0, -1);
// demo2.innerHTML = sss.concat();
// demo2.innerHTML = sss.replace('Manful computer', `<b style= "color:red;">${mnf}</b>`);   

let strArr = sss.split(' ');

let mnf = strArr[2];
console.log(mnf)
let mytxt;
// let li= inj;
    // strArr.forEach((txt, i) => {
    //     if(txt == 'manful computer'){
    //         mytxt += `<span>${txt}</span>`;
    //     }

    //     mytxt = txt;
    // })