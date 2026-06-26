
let b = document.querySelector('button#print');
b.addEventListener('click',greeting);

let i = document.querySelector('input[name="shimei"]');
let aisatsu = document.querySelector('p#message');
i.getAttribute('name');

function greeting() {
    console.log('こんにちは');
    aisatsu.textContent = "こんにちは、"+ i.value +"さん";
}