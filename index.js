// index.js

// Remove the <main> element with id 'main'
const main = document.querySelector('main#main');
main.remove();

// Create a new header element
const newHeader = document.createElement('h1');

// Set the id of the new header to 'victory'
newHeader.id = 'victory';

// Set the inner text of the new header to 'YOUR-NAME is the champion'
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new header to the document body
document.body.appendChild(newHeader);
