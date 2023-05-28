let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header .logo ul li a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    header.style.color = "white";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerAnchor.forEach((a) => {
      a.style.color = "#09777d";
    });
  }
});




// Get all the accordion items
const accordionItems = document.querySelectorAll('.accordion-item');
 // Loop through the accordion items and add an event listener to each
accordionItems.forEach(function(item) {
  item.querySelector('.accordion-header').addEventListener('click', function() {
    // Get the currently open accordion item
    const openItem = document.querySelector('.accordion-item.open');
     // Toggle the open class on the clicked accordion item
    item.classList.toggle('open');
     // If there is a currently open item and it is not the clicked item, close it
    if (openItem && openItem !== item) {
      openItem.classList.remove('open');
    }
  });
});