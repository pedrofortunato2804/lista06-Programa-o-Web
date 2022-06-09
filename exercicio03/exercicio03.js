var list = document.getElementById("list");

toDoButton.onclick = () => {
    var inputContent = document.getElementById("inputContent").value;
    var li = document.createElement("li");

    var contentList = li.innerHTML = `
        <span> ${inputContent} </span>
        <i class="delete fa-regular fa-trash-can" id="deleteBtn" onClick= "deletebtn"></i>`;
    var t = document.createTextNode(inputContent);
    if(inputContent === ""){
        alert("Insira alguma tarefa!");
    }else{
        document.getElementById("list").appendChild(li);
    }

    document.getElementById("inputContent").value = "";
}

var deletebtn = document.getElementsByClassName("delete");
for(var i = 0; i < deletebtn.length; i++){
    deletebtn[i].onclick = () => {
        var div = this.parentElement;
        div.style.display = "none"
    }
}

var listA = document.querySelector('ul');
listA.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
