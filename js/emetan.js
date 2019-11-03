let toggleButton = document.getElementById("navbar-icon");
let navlinks = document.getElementById("baseLinkBar");

toggleButton.addEventListener('click', function(){
    navlinks.classList.toggle('active');
});