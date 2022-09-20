var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300 ) {
        myNav.classList.add("nav-white");
        myNav.classList.remove("nav-colored");
    } 
    else {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-white");
    }
};


