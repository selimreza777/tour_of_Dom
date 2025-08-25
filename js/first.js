console.log('first file')

// kono ekta tag name diye joto gula oi name section ace niye asbo  
const allSections = document.getElementsByTagName('section');
console.log(allSections);

//getElementById() // id diye kono tag er elemnt k pawya
const firstTitle = document.getElementById('first-title'); // id diye
console.log(firstTitle.innerText); // vitorer text dekhar jonno inner text
firstTitle.innerText = 'features section title'; // notun title liklam 
console.log(firstTitle.innerText);