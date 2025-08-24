//1. parent node 
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

//2. create child name
const placesSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1')
h1.innerText = 'places i want to visit';
placesSection.appendChild(h1);

// crate ul item 
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'bandor bon jabo';
ul.appendChild(li1);

placesSection.appendChild(ul);

const li2 = document.createElement('li');
li2.innerText = 'shundor bon jabo';
ul.appendChild(li2);

placesSection.appendChild(ul);

// 3. append placeSection to the main container 
mainContainer.appendChild(placesSection);

// easier to create HTML 
const bookSection = document.createElement('section');

bookSection.innerHTML = `
  <h1>Movies which i watched my life</h1>
  <ul>
  <li>gladiator</li>
  <li>Titanic</li>
  <li>Terminal 2</li>
  <li>Toofan</li>
  </ul>
`
mainContainer.appendChild(bookSection);