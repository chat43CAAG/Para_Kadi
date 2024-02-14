
function showText(id) {
    var buttons = document.querySelectorAll('.button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== 'home-button') {
            buttons[i].style.display = 'none';
        }
    }
    document.getElementById(id).style.display = 'block';
}

function showVideo() {
    var buttons = document.querySelectorAll('.button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== 'home-button') {
            buttons[i].style.display = 'none';
        }
    }
    document.getElementById('video-box').style.display = 'block';
}

function reloadPage() {
    location.reload();
}
