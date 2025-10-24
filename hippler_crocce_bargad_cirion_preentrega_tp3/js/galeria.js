// cuando el usuario aprieta Ctrl (Win/Linux) o Cmd (Mac), activamos el overlay
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey) {
    const overlays = document.querySelectorAll(".web-overlay");
    overlays.forEach(ov => {
      ov.style.display = "block";
    });
  }
});

// cuando suelta las teclas modificadoras, desactivamos el overlay
document.addEventListener("keyup", (e) => {
  if (!e.ctrlKey && !e.metaKey) {
    const overlays = document.querySelectorAll(".web-overlay");
    overlays.forEach(ov => {
      ov.style.display = "none";
    });
  }
});

// click en overlay → abrir en nueva pestaña
document.addEventListener("click", (e) => {
  const overlay = e.target.closest(".web-overlay");
  if (!overlay) return;

  const url = overlay.getAttribute("data-url");
  if (!url) return;

  window.open(url, "_blank");
});
