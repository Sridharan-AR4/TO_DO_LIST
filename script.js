var popupbutton=document.getElementById("popupbtn");
var popupoverlay=document.getElementById("overlay");
var popupbox=document.getElementById("popupbox");
var popupboxoverlay=document.getElementById("popupboxoverlay");
function addtask(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
    popupboxoverlay.style.display="flex";
}

var cancelbutton=document.getElementById("cancelbtn");
cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
    popupboxoverlay.style.display="none";
})
var container=document.querySelector(".container")
var addbutton=document.getElementById("taskform");
addbutton.addEventListener("submit",function(event){
    event.preventDefault();
    var input_task_name=document.getElementById("inputtaskname");
    var input_task_date=document.getElementById("inputtaskdate");
    var input_task_desc=document.getElementById("inputtaskdesc");
    var todoitem=document.createElement("div");
    todoitem.setAttribute("class","todo_item");
    todoitem.innerHTML=`<h3>${input_task_name.value}</h3>
                        <p>${input_task_date.value}</p>
                        <h5>${input_task_desc.value}</h5>
                        <button onclick="deleteitem(event)">delete</button>`;
    container.append(todoitem);

    input_task_name.value = "";
    input_task_date.value = "";
    input_task_desc.value = "";

    popupoverlay.style.display="none";
    popupbox.style.display="none";
    popupboxoverlay.style.display="none";
})
function deleteitem(event){
    event.target.parentElement.remove();
}