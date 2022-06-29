const img_vazifa = document.querySelectorAll(".img_vazifa");

img_vazifa.forEach((img_vazifa) => {
  img_vazifa.addEventListener("click", () => {
    removeActiveClasses();
    img_vazifa.classList.add("active");
    document.textContent("Lamborgini");
  });
});

function removeActiveClasses() {
  img_vazifa.forEach((img_vazifa) => {
    img_vazifa.classList.remove("active");
  });
}
