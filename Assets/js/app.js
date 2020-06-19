// getting the variable needed for adding my nav bar
const navNames = document.querySelectorAll(".section");
const navList = document.querySelector(".nav__list");

navNames.forEach((element) => {
  const navItem = document.createElement("li");
  navItem.classList = "nav__item";
  navItem.dataset.link = element.dataset.nav;
  navItem.innerHTML = `<a class="nav__link" href="#${element.id}">${element.dataset.nav}</a>`;
  navItem.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    
    // Add the active class to the clicked navItem
    this.classList.add("active");
  });
  navList.appendChild(navItem);
});



let start = 150;
const onPageScroll = function () {
  const header = document.querySelector(".mainHeader");
  if (window.pageYOffset > start) {
    header.style.backgroundColor = "#333";
    header.style.height = "10em";
  } else {
    header.style.backgroundColor = "#fff";
    header.style.height = "15em";
  }
};

window.addEventListener("scroll", onPageScroll);
