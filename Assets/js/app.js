// getting the variable needed for adding my nav bar

const sections = document.querySelectorAll(".section");
const navList = document.querySelector(".nav__list");
const ids = ["connections", "conversations", "goals"];
sections.forEach((element) => {
  const navItem = document.createElement("li");
  navItem.classList = "nav__item";
  navItem.innerHTML = `<a class="nav__link" href="#${element.id}"  data-link="${element.dataset.nav}">${element.dataset.nav}</a>`;
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
  const links = document.querySelectorAll("li a");
});

let start = 150;
const navItem = document.querySelectorAll("li");

const [one, two, three] = navItem;
const [connection, conversations, goals] = ids;
one.id = connection;
two.id = conversations;
three.id = goals;
const header = document.querySelector(".mainHeader");
const onPageScroll = function () {
  if (window.pageYOffset > start) {
    header.style.backgroundColor = "#333";
    header.style.opacity = 0.8;
    if (sections[0].getBoundingClientRect().top < 300 &&
        sections[0].getBoundingClientRect().bottom > 300) {
      one.classList.add("active");
      two.classList.remove("active");
      three.classList.remove("active");
    } else if (sections[1].getBoundingClientRect().top <= 400 &&
                sections[1].getBoundingClientRect().bottom >=270) {
      one.classList.remove("active");
      two.classList.add("active");
      three.classList.remove("active");
    } else if (sections[2].getBoundingClientRect().top <=500) {
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.add("active");
    } else {
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
    }
    header.addEventListener("mouseover", function () {
      header.style.opacity = 1;
    });
  } else {
    header.style.backgroundColor = "#fff";
    header.addEventListener("mouseleave", function () {
      header.style.opacity = 0.8;
    });
  }
};
window.addEventListener("scroll", onPageScroll);

const togglerButton = document.querySelector(".nav__toggler");

togglerButton.addEventListener("click", function () {
  navList.classList.toggle("nav__visible");
});
// the Jquery part
