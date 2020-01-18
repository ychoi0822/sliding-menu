function openSideMenu() {
    document.getElementById("my-side-menu").style.width = "25%";
    document.getElementById("content").style.marginLeft = "25%";
    document.body.style.backgroundColor = "#cccccc";
}

function closeSideMenu() {
    document.getElementById("my-side-menu").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.body.style.backgroundColor = "#f1f1f1";
}

document.querySelector(".open-menu").addEventListener("click", openSideMenu);
document.querySelector(".fa-times").addEventListener("click", closeSideMenu);