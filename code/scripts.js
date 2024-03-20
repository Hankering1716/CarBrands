// Get the modal
var modal = document.getElementById("myModal");
var modalMessage = document.getElementById("modalMessage")
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

const para = document.createElement("p");
para.innerHTML = "You turned off the Modal image of car!";
para.style.position = "fixed";
para.style.top = "50%"
para.style.border = "1px solid green"
para.style.fontSize = "1vmax"
para.style.marginLeft = "5%"
// When the user clicks on <span> (x), close the modal

document.onkeydown = function (esc) {
    if (esc.keyCode == 27||modal.style.display=="block") {
        
        // Escape key pressed
        modal.style.display = "none";

        setTimeout(() => {
            para.style.display = "none"
        }, 1000); //
      
        if(para.style.display=="none") {
            return para.style.display = "block"
        }
    }
    
};


span.onclick = function () {
    modal.style.display = "none";
    document.body.appendChild(para);


   // optional functions to info user about that he got closed modalImg
    setTimeout(() => {
        para.style.display = "none"
    }, 1000); //
  
    if(para.style.display=="none") {
        return para.style.display = "block"
    }


    
}

// When the user clicks ESC on keyboard, close the modal
