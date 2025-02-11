const container = document.querySelector('#container');

//add div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is awesome';
container.appendChild(content);

//add paragraph
const para = document.createElement('p');
para.classList.add('para'); //add - toggle is preferred
para.textContent = 'Hey I\'m red';
para.style.cssText = 'color: red'; //inline style method 1
container.appendChild(para);

//add h3
const headLine = document.createElement('h3');
headLine.classList.toggle('heading'); //toggle
headLine.textContent = 'I\'m a blue h3';
headLine.style.color = 'blue'; //inline style method 2
container.appendChild(headLine);

//add another div
const display = document.createElement('div');
display.classList.toggle('display');
display.setAttribute('style', 'border: solid 2px black; background: pink;');

//add h1 to display
const bigText = document.createElement('h1');
bigText.classList.toggle('bigText');
bigText.textContent = 'I\'m in a div';
display.appendChild(bigText);

//add p to display
const info = document.createElement('info');
info.classList.toggle('info');
info.textContent = 'ME TOO!';
display.appendChild(info);

//append display to container
container.appendChild(display);