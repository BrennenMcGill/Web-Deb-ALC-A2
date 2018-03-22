//Variables//
//This grabs the id of the first modal and sets it equal to modal
var modal = document.getElementById("modal");
//This grabs the button with the id "change"
//This allows us to call a function with a click later
var changeBtn = document.getElementById("change");
// This grabs the preview
var preview = document.getElementById("preview");

//Functions
//function to set Preview Boxes
//This sets teh Preview Box color in the modal to the currently selected color

function Preview(){
    color = document.querySelector('input[name="colors"]:checked').value;
    console.log("The color is" + color);
    preview.style.background = color;
}

function changeColor(){
    console.log("The color is" + color);
    document.body.style.backgound = color;
}

changeBtn.onclick = function() {
    modal.style.display = "grid";
}

function Close() {
    modal.style.display = "none";
    preview.style.background = "#1a1a1a";
    document.querySelector('input[name="colors"]:checked').checked = false;
}

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none";
        preview.style.background = "#1a1a1a";
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
}