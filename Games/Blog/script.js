let mybutton = document.getElementById("back");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";

    } 
    
    else {
        mybutton.style.display = "none";
    }
}