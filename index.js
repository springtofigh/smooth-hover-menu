const list = document.querySelectorAll(".list");

list.forEach(item => item.addEventListener("click" , activeIcon));

function activeIcon() {
    list.forEach(item => item.classList.remove("active"));
    this.classList.add("active")
}