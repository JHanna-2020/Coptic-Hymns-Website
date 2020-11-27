"use strict";
fetch("./verses.json")
    .then(function(testFunc) {
     return testFunc.json();   
    })
    .then(function(result){
        console.log(data);
    });