const h1 = document.querySelector(".title:first-child h1");


function handleTitleClick() {
  h1.style.color = "blue";
}

function MouseEnter(){
  h1.innerText = "Mouse is here!";
}

function MouseLeave(){
  h1.innerText = "Mouse is gone!";
}

function handleResizeWindow(){
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowPaste(){
  alert("paste");
}

function handleWindowOffline(){
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", MouseEnter);
h1.addEventListener("mouseleave", MouseLeave);


window.addEventListener("resize", handleResizeWindow);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("paste", handleWindowPaste);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
