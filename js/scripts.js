
var link = document.querySelector(".link-search");
var popup = document.querySelector(".interest-form");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
