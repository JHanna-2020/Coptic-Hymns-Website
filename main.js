var rTitle;
var hideMyForm;
var showMyForm;
var story;
var topic;
var date;
var verse;
var sortTest;
var getLan;
var getLangauge;
var langInput;
var setDate;

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



function setDate(){
    
    document.getElementById("currentDate").replaceWith(Date());
};

