document.getElementById('button-1').addEventListener("click", () => {
  document.getElementById('floor-2').scrollIntoView({behavior: "smooth"});
});
document.getElementById('button-2').addEventListener("click", () => {
  document.getElementById('floor-1').scrollIntoView({behavior: "smooth"});
});
document.getElementById('button-3').addEventListener("click", () => {
  document.getElementById('floor-3').scrollIntoView({behavior: "smooth"});
});
document.getElementById('button-4').addEventListener("click", () => {
  document.getElementById('floor-2').scrollIntoView({behavior: "smooth"});
});
document.getElementById('enter-building').addEventListener("click", () => {
  document.getElementById('floor-1').scrollIntoView({behavior: "smooth"});
});
document.getElementById('book-cover').addEventListener("click", () => {
  document.getElementById('book-content').className = "active";
  document.getElementById('book-cover').className = "";
});
document.getElementById('book-content').addEventListener("click", () => {
  document.getElementById('book-content').className = "";
  document.getElementById('book-cover').className = "active";
});
