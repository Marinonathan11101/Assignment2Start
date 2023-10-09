// constants for query selector

var customNumber = document.querySelector("#customNumber");
var changeCustomColourButton = document.querySelector(".custColor");
var changeRandomColourButton = document.querySelector(".randColor");
var pTag = document.querySelector("#myStudentId");
var imageSelect = document.querySelector("#imageSelect");
var imageSources = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];
var images = document.querySelector("#images");

var imageValue 
addList();

// function to change bg color from user input and add student id
function changeCustomColor(value) {
    pTag.textContent = "Nathan Marino 200527317";
    
    if (value < 0 || value > 100)
        document.body.style.backgroundColor = "red";

    else if (value > 0 && value < 20)
        document.body.style.backgroundColor = "green";

    else if (value > 20 && value < 40)
        document.body.style.backgroundColor = "blue";

    else if (value > 40 && value < 60)
        document.body.style.backgroundColor = "orange";

    else if (value > 60 && value< 80)
        document.body.style.backgroundColor = "purple";

    else
        document.body.style.backgroundColor = "yellow";

}

// function to change bg color from random no.
function changeRandomColor() {
    var randomValue = Math.floor(Math.random() * 100) + 1;

    changeCustomColor(randomValue);

}

// function to generate options for select list
function addList() {
    for (let i = 0; i < imageSources.length; i++)
    {
        var createImage = document.createElement("option");
        createImage.text = imageSources[i];
        imageSelect.add(createImage);
        
       
    }
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {
    for (let i = 0; i < imageSources.length; i++)
    {
        if (imageSelect.value === imageSources[i])
            images.src = imageSources[i];
            
    }
}

// event listeners for on click event of buttons and select
changeCustomColourButton.addEventListener("click", function() {
    changeCustomColor(customNumber.value);
});
changeRandomColourButton.addEventListener("click", changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener("change",changeImage)
