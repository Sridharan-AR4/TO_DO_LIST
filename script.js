var popupbutton=document.getElementById("popupbtn");
var popupoverlay=document.getElementById("overlay");
var popupbox=document.getElementById("popupbox");

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

var cancelbutton=document.getElementById("cancelbtn");
cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})
