var rTitle;
var hideMyForm;
var showMyForm;
var story;
var topic;
var date;
var verse;
var sortTest;
var getLan;

function changeTitle() {
    rTitle = document.getElementById("titleText").value;
    document.getElementById("title").innerHTML = rTitle;

}
function hideForm() {
    hideMyForm = document.getElementById("myForm");
    if (myForm.style.display === "none") {
        myForm.style.display = "block";
    } else {
        myForm.style.display = "none";
    }


};


function sort(){
getLan=document.getElementById("sort")
 sortTest=document.getElementById("sortInput");
 if (sortTest=="English" || sortTest =="Language..." && getLan=="English") {
    display===""
 } else {
  display==="none"   
 }

}

document.getElementById('currentDate').innerHTML=Date();
    
