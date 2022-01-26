const btnVisible = document.querySelector(".badge-on-btn-visibility");
const badgeVisible = document.querySelector(".visibility-badge");
btnVisible.addEventListener("click", () => {
    badgeVisible.style.display = "none";
});