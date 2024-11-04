document.getElementById("professionalBtn").addEventListener("click", function() {
  document.getElementById("professional").classList.add("active");
  document.getElementById("personal").classList.remove("active");
});

document.getElementById("personalBtn").addEventListener("click", function() {
  document.getElementById("personal").classList.add("active");
  document.getElementById("professional").classList.remove("active");
});
