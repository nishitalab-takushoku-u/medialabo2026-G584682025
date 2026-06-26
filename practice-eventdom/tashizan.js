let a = document.querySelector('input[name="left"]');
let b = document.querySelector('input[name="right"]');

let i = document.querySelector('button#calc');
i.addEventListener('click',greeting);
a.getAttribute('name');
b.getAttribute('name');
let keisann = document.querySelector('span#answer');

function greeting() {
    let x = Number(a.value)+Number(b.value);
    console.log(x);
    keisann.textContent = x;
}