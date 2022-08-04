addEventListener("click", event => {
    const btn = event.target;
    if (btn.tagName.toLowerCase() !== "button") return;
    const id = btn.textContent;
    const div = document.getElementById(id);
    if (div.requestFullscreen) 
        div.requestFullscreen();
    else if (div.webkitRequestFullscreen) 
        div.webkitRequestFullscreen();
    else if (div.msRequestFullScreen) 
      div.msRequestFullScreen();
});
