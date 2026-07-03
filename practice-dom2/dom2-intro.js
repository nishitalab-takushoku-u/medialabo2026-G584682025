let b = document.querySelector('button#henkou');
b.addEventListener('click',changeDom);

function changeDom(){
    let i = document.createElement('li');
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend',i);
    i.textContent = "ヨット";
    let l = document.querySelector('img#bluemoon');
    l.setAttribute('src','bluemoon.jpg');
    let p = document.querySelector('p#takudai');
    let a = document.createElement('a');
    p.insertAdjacentElement('afterend',a);
    a.textContent= '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    l = document.querySelector('li#mochi');
    l.remove();
    u = document.querySelector('ul#kassen');
    u.remove();
    u = document.createElement('ul');
    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend',l);
    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend',l);
    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend',l);
    p = document.querySelector('p#primary'); 
    p.insertAdjacentElement('afterend',u);
}