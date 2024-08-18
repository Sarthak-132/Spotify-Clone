// on mouse event library

const iconLibrary = document.getElementById("iconLibrary");
const collapseContent = document.querySelector(".collapse-content");

iconLibrary.onmouseenter = function () {
    collapseContent.style.display = "block";
};

iconLibrary.onmouseleave = function () {
    collapseContent.style.display = "none";
};


// on mouse event plus icon

const plusIcon = document.getElementById("plusIcon");
const collapsePlusIcon = document.querySelector(".collapse-plus-icon");
const clickOn = document.querySelector(".click-on");

plusIcon.onmouseenter = () =>{
    collapsePlusIcon.style.display = "block"
   
}

plusIcon.onmouseleave = () =>{
    collapsePlusIcon.style.display = "none"
   
}

// on click event plus icon
plusIcon.onclick = () =>{
    clickOn.style.display = "block"
}
plusIcon.onmouseout = () =>{
    clickOn.style.display = "none"
}












