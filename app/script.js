const button = document.querySelector(".subir")

button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

console.log(button);
