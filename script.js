function opentab(tabId) {

    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(tabId).style.display = 'block'; 
}

document.addEventListener("DOMContentLoaded", function() {
    opentab('home');
});