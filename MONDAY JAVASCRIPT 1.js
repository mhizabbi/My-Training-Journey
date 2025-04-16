document.getElementById('demo').innerText = 'Javascript is awesome';
// document.getElementByClassName('demo1')[0].innerText = 'Hello World';
// document.getElementByClassName('demo1')[1].innerText = 'Hello manful';
let demoElement = document.querySelectorAll('.demo1');
demoElement[0].innerText = 'hello cowboy';
demoElement[1].innerText = 'hello cowgirl';
demoElement[2].innerText = 'hello sunnydays await';
demoElement[3].innerText = 'hello joinus await';

document.getElementsByName('demo').innerText = `<span>Hello what is your name</span>`;
// document.getElementByName('manful 2')[0].innerHTML = `<span>Hello wha is your name</span>`;

// document.getElementsByClassName('mydemo').onclick = function() {

//     alert(document.getElementsByName('manful 2')[0].innerText)
// }

// There are different selectors namely:
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByName();
// document.getElementsByTagName();

// document.querySelector();
// document.querySelector();
