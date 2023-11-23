// This is navbar toggle arrow <<
const closeToggleBtn = document.getElementById("closeToggleBtn");
const openSideBar = document.getElementById("openSideBar");
const mainContent = document.getElementById("mainContent");
const navbarHeading = document.getElementById("navbarHeading");
var hamburger = document.getElementById("hamburger");

// Function to close the sidebar
function closeSidebar() {
    openSideBar.classList.remove("left-sidebar-open");
    // Add other necessary class removals based on your code
}

closeToggleBtn.addEventListener("click", () => {
    openSideBar.classList.toggle("left-400");
    mainContent.classList.toggle("left-0");
    navbarHeading.classList.toggle("left-0");
    closeToggleBtn.classList.toggle("left-sidebar-toggle-turn");
});

// Show userProfile drop-down
const defaultDropdown = document.getElementById("defaultDropdown");
defaultDropdown.addEventListener("click", (event) => {
    const showDropDown = document.getElementById("showDropDown");
    showDropDown.classList.toggle("show");
    event.stopPropagation();

});

document.addEventListener('click', (event) => {
    if(!showDropDown.contains(event.target) && !defaultDropdown.contains(event.target) && !hamburger.contains(event.target)){
        showDropDown.classList.remove('show')
    }

})

// Show side-bar when click on hamburger
hamburger.addEventListener("click", (event) => {
    openSideBar.classList.toggle("left-sidebar-open");
    event.stopPropagation();
});

// Close sidebar when clicking anywhere outside of it
document.addEventListener("click", (event) => {
    console.log("Body click");
    if (!openSideBar.contains(event.target) && !hamburger.contains(event.target)) {
            openSideBar.classList.remove("left-sidebar-open");
            console.log('closing bside bar ')
        
    }
});

