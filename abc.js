var myList = document.querySelector('#my-list');
var listItems = document.querySelectorAll('#my-list li');
var mainHeader = document.querySelector('#main-header');
var para = document.querySelector('#para');
var myButton = document.querySelector('#my-button');
var newItemCounter = 1;


myList.addEventListener('click', activateItems);
myButton.addEventListener('click', addItems);


function activateItems(e){
  if(e.target.nodeName = 'LI'){  
  mainHeader.innerHTML = e.target.innerHTML;
  para.innerHTML = e.target.innerHTML + (' !'); 
  for(i = 0; i < e.target.parentNode.children.length; i++){
    e.target.parentNode.children[i].classList.remove('active');
  }
  e.target.classList.add('active');
  mainHeader.classList.add('tr');
  para.classList.add('th');
  setTimeout(() => para.remove(), 3000);
  }
}

function addItems(){
  myList.innerHTML += '<li>Item ' +newItemCounter+ '</li>'
  newItemCounter++;
}

