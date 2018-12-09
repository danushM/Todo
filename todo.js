//fetching the ul element and creating a global variable for the list items
var unorderList = document.getElementById('list');
var listItem;
var checkBox;

//adding an event listener for the add todo item button
var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

//adding an event listener for the remove todo item button
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

//add todo item function
function addItem() {
  var input = document.getElementById('input');
  var inputValue = input.value;
  var textNode = document.createTextNode(inputValue);

    console.log('add clicked');
    listItem = document.createElement('li');
    checkBox = document.createElement('input')
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', 'check');

    //creating a label
    var label = document.createElement('label');

    //add the elements to the todo list
    unorderList.appendChild(label);
    listItem.appendChild(checkBox);
    label.appendChild(textNode);
    listItem.appendChild(label);
    unorderList.insertBefore(listItem, unorderList.childNodes[0]);

    setTimeout(() => {
      listItem.className='visual';
    }, 2);

    input.value = ''
}


//remove todo item function
function removeItem() {
  listItem = unorderList.children
  for (var i = 0; i < listItem.length; i++) {
    while (listItem[i] && listItem[i].children[0].checked) {
      console.log('remove clicked and element removed');
      unorderList.removeChild(listItem[i])
    }
  }
}
