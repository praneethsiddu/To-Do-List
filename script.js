const addToButton = document.getElementById('addToDo');
const toDoContainer= document.getElementById('toDoContainer');
const inputField=document.getElementById('inputField');

addToButton.addEventListener('click',function()
{
var para = document.createElement('p');
para.classList.add('paragraph-styling');
para.innerText=inputField.value;
toDoContainer.appendChild(para);
inputField.value="";
para.addEventListener('click',function(){
para.style.textDecoration='line-through';
});
para.addEventListener('dblclick',function(){
toDoContainer.removeChild(para);
});
});