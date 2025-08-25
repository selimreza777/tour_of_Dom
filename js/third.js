console.log('third file')

// get the parent 
const thirdList = document.getElementById('third-list')
console.log(thirdList);

//crate element 
const li = document.createElement('li');
li.innerText = 'band new list items';

// add kore nibo third list er vitore 
thirdList.appendChild(li);

