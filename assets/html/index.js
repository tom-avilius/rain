
// all imports and declaration are mentioned below

// getting the menu button
const menuBtn = document.getElementById('menu-btn');


// -------------------------------------------------------------------------------


// adding event listener to the menu-btn 
menuBtn.addEventListener('click', () => {

    // sending info via menuClick channel to the main script
    // that the menu button was clicked.
    window.menu.click(true);
})
