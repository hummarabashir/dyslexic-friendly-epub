document
  .getElementById("dyslexia-mode-toggle")
  .addEventListener("click", function () {
    // document.body.classList.toggle("dyslexia-mode");
    document.body.style.fontFamily = "font-family: OpenDyslexic, Georgia, 'Times New Roman', Times, serif;";

    // document.getElementById("div1").classList.toggle("dyslexia-mode");
    // Store the dyslexia-friendly mode state in local storage
    var dyslexiaModeEnabled = document.body.classList.contains("dyslexia-mode");
    localStorage.setItem("dyslexiaMode", dyslexiaModeEnabled);
  });
window.addEventListener("load", function () {
  var dyslexiaModeEnabled = localStorage.getItem("dyslexiaMode");

  if (dyslexiaModeEnabled === "true") {
    document.body.classList.add("dyslexia-mode");
  }
});
