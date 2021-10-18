var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// let selectedItem = document.querySelector('li.selected');
// let first = selectedItem.previousElementSibling;
// let last = selectedItem.nextElementSibling;
// let list = selectedItem.parentElement;
// let header = selectedItem.parentElement.parentElement;
// let section = selectedItem.parentElement.parentElement.nextElementSibling;

// // Get the header element

// //     Get all the section elements
    
// //     Get the section element with class="current"
    
// //     Get the section that comes after the current section
    
// //     Get the h2 node from the section before the 'current' section
    
// //     Get the div that contains the section that has an h2 with a class of 'highlight'
    
// //     Get all the sections that contain an H2 (using a single statement);

//   //Laziness is your friend...
//   let q = document.querySelector.bind(document)
//   let qa = document.querySelectorAll.bind(document);
  
  
//   q('header');
//   qa('section');
//   q('section.current');
//   q('section.current').nextElementSibling;
//   q('section.current').previousElementSibling.children[0];
//   q('h2.highlight').parentElement.parentElement;
  
//   let foo = Array.from(qa('section h2'))
//       .map(function(headline){
//           return headline.parentElement;
//       });

// // 1. Update the 'Coffee' item to say 'Fair Trade Coffee'

// // 2. Remove 'Twinkies' from the list

// // 3. Add an item 'Cheese Whiz'

// // 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']

// // 5. Add the class 'important' to the muscle milk item.

// let list = document.querySelector('#list');

// //1
// list.children[1].innerHTML = "Fair Trade Coffee";

// //2
// list.children[3].remove();

// //3
// let cheese = document.createElement('li');
// cheese.innerHTML = 'Cheese Whiz';
// list.appendChild(cheese);

// //4
// list.innerHTML = '';
// ['protein powder', 'muscle milk', 'power bars'].forEach(function(itemText){
// 	var li = document.createElement('li');
// 	li.innerHTML = itemText;
// 	list.appendChild(li);
// })

// //5
// list.children[1].className = "important"



//Homework Let's create a simple to do application //
// Show an unordered list of to do's 
// Show an input to enter a new to do 
// Show a button to add a to  do. When the button is clicked: 
// The text from the input box is used to add a list item to the bottom of the list 
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed

// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.
// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
