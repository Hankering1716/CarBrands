// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = $(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function image(event)  {    
    modal.style.display = "block";
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks ESC on keyboard, close the modal
document.onkeydown = function (esc) {
    if (esc.keyCode == 27) {
        // Escape key pressed
        modal.style.display = "none";
    }
};
