const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ( ) => {
    if (window.pageYOffset > 150) {
        toTop.classList.add("active");
  } else {
         toTop.classList.remove("active");
  }
})