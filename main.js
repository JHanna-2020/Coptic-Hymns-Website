var rTitle;
var hideMyForm;
var story;
var topic;
var date;
var verse;

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
function test(){
    date=document.getElementById("dateInput").value;
    document.getElementById("date").innerHTML = date;
};