var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item")

    //create li tag with text code
    var li = document.createElement('li') //add li tag
    
    var liText = document.createTextNode(todo_item.value) //insert text
    li.appendChild(liText)

    //create delete button
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    //create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(li)
    todo_item.value=""
    // console.log(li);
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue=prompt("Enter Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}