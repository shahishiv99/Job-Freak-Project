const home = document.getElementById("home");
const information = document.getElementById("information");
const guide = document.getElementById("guide");
const contact = document.getElementById("contact");
const section = document.querySelectorAll("section");

function showComponent(name) {
  section.forEach((e) => {
    e.classList.add("hide");
  });
  if (name === "home") {
    home.classList.remove("hide");
  } else if (name === "information") {
    information.classList.remove("hide");
  } else if (name === "guide") {
    guide.classList.remove("hide");
  } else if (name === "contact") {
    contact.classList.remove("hide");
  }
}
