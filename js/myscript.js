document.querySelector("#menu").addEventListener("click", popUp);
document.querySelector("#cross img").addEventListener("click", hide);

function popUp() {
  console.log("popUp");
  document.querySelector("#popUp").classList.remove("hide");
}
function hide() {
  console.log("hide");
  document.querySelector("#popUp").classList.add("hide");
}
