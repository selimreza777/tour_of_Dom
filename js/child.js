// create Element and set innerText or innerHTML 
const newChild = document.createElement('li');
newChild.innerText = 'new born footballer which he';

//find the parent where you will add the child

const playerList = document.getElementById('player-list');

//append the chield to the parent
playerList.appendChild(newChild);