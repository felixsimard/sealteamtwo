function status(msg, bg) {
    var bar = _("status_bar");
    bar.style.top = 0+'px';
    if(bg == "black") {
        bar.style.background = '#be192c'; // '#ff5050';
        bar.style.color = 'white';
    } else if(bg == "dark") {
      bar.style.background = 'black';
      bar.style.color = 'white';
    } else {
        bar.style.background = '#2e8b57'; // '#00cc00';
        bar.style.color = 'white';
    }
    bar.innerHTML = ''+msg+'';
    setTimeout(function() {
        bar.style.top = -50+'px';
        bar.innerHTML = '';
    }, 4500);
}
