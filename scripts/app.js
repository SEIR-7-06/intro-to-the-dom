// ---------------------------------- DOM

//--------- Selection - querySelector

{
  key: 'Value'
}

// Select by tag
const h1El = document.querySelector('h1');
// Select by class
const bodyEl = document.querySelector('.special');
// Select by pseudo slector
const secondListItem = document.querySelector('li:nth-child(2)');
const firstListItem = document.querySelector('li:last-child');
const evenItems = document.querySelector('li:nth-child(even)');

//--------- Selection - getElementById
const listEl = document.getElementById('products');


// --------- Selection querySelectorAll

const allListItems = document.querySelectorAll('li'); // Returns a NodeList (not the same as an array)

// allListItems.forEach((item) => {
//   item.style.color = 'yellow';
//   item.style.fontSize = '24px';
//   // item.remove();
//   if (item.classList.contains('sale')) {
//     item.style.background = 'red';
//   }
// });


// for (let i = 0; i <a allListItems.length; i++) {
//   allListItems[i].style.color = 'yellow';
//   allListItems[i].style.fontSize = '24px';
// }

// For Of Loop
for (let item of allListItems) {
  item.style.color = 'yellow';
  item.style.fontSize = '24px';
}

// ---------------------------- MODIFICATION 

// innerHTML - Set/retrieve content as HTML
// textContent - Set/retrieve plain text

// h1El.innerHTML = '<a href="http://google.com"><h1>My Totally Awesome Page</h1></a>';
h1El.textContent = 'My Totally Awesome Page';

// Just Select HTML)
// console.log(h1El.innerHTML);

// console.log(h1El.textContent);

// ------------------------------- ELEMENT ATTRIBUTES

// getAttribute() - returns the selected attribute of an element
// setAttribute() - sets the given attribute to an element
// hasAttribute()

const bobaImg = document.querySelector('img');
const bobaImgSrc = bobaImg.getAttribute('src');
bobaImg.setAttribute('src', 'https://s.yimg.com/ny/api/res/1.2/soTg5zMneth9YIQz0ae_cw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://images.fatherly.com/wp-content/uploads/2018/12/darthvader-header.jpg?q=65&amp;enable=upscale&amp;w=1200');

console.log(bobaImgSrc);
