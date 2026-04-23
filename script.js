function showProject(){
  alert("This is my project")
}
function toggleDarkMode(){
  document.body.classList.toggle("dark");
}
window.addEventListener("scroll",function()
{
  console.log("Scrolling...");
});
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});