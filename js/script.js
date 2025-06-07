document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
});

function scrollToShop() {
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}
