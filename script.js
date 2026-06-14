// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
  mobileMenu.classList.toggle("hidden");
};

// FILTER SYSTEM
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(btn => {
  btn.addEventListener("click", () => {

    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const type = btn.dataset.filter;

    projects.forEach(p => {
      if(type === "all" || p.classList.contains(type)) {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
    });

  });
});

// MODAL
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");

function openModal(imageSrc) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = imageSrc;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});