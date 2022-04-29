const open = document.getElementById("open-menu");
const menu = document.getElementById("hamburger-menu");
open.addEventListener('click',
    function() {
        menu.style.display="block";
    }
)

const close = document.getElementById("close-menu");
close.addEventListener('click',
    function() {
        menu.style.display="none";
    }
)