var link = document.querySelector(".feedback_btn");
var popup = document.querySelector(".feedback_popup");
var close = popup.querySelector(".popup_close");
var form = popup.querySelector("form");
var user_name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var overlay = document.querySelector(".popup_overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup_show");
  overlay.classList.add("overlay_show");
  user_name.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup_show");
  overlay.classList.remove("overlay_show");
  popup.classList.remove("popup_error");
});

form.addEventListener("submit", function(event) {
  if (!user_name.value || !email.value) {
    event.preventDefault();
    popup.classList.add("popup_error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup_show") && overlay.classList.contains("overlay_show")) {
      popup.classList.remove("popup_show");
      overlay.classList.remove("overlay_show");
      popup.classList.remove("popup_error"); 
    }
  }
});
