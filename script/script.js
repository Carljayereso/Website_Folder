
function showPage(pageId) {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}
