//document.querySelector() - selects the first instance of an element that appears on the document
//To select all elements of a particular type on a document use document.querySelectorAll();
//document.querySelectorAll() stores references to elements in an array-like object called a NodeList

//Store element reference in a variable
const link = document.querySelector('a');
//change text ~ Node.textContent
link.textContent = 'Mozilla Developer Network';
//Change link address
link.href = 'https://developer.mozilla.org';

//Creating and placing nodes
const sect = document.querySelector('section');
//add a paragraph in section
const para = document.createElement('p');
para.textContent = 'This is getting interesting';
sect.appendChild(para);

//add text node to paragraph
const text = document.createTextNode(' - the premier source for web development knowledge.');

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

//move linkPara to the bottom of the section
sect.appendChild(linkPara);
 
//clone element - cloneNode() accepts a boolean argument
const clone = linkPara.cloneNode(true);
sect.appendChild(clone);

//remove element
sect.removeChild(clone);

//you also write it as below
//clone.remove();
