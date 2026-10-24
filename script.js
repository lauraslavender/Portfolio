// Click any image inside a project page to see it full screen. Click anywhere or press Esc to close.
const box = document.getElementById("lightbox");
if (box) {
  const boxImg = box.querySelector("img");
  document.querySelectorAll(".cover img, .full img, .pair img, .split img, .quad img").forEach((img) => {
    img.addEventListener("click", () => {
      boxImg.src = img.src;
      boxImg.alt = img.alt;
      box.hidden = false;
    });
  });
  box.addEventListener("click", () => (box.hidden = true));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") box.hidden = true; });
}
