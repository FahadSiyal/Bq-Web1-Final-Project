let navList=document.querySelector('.nav-bar ul')
let logo=document.querySelector('.header h1')
let menuColor=document.querySelector('.menu-logo')

let menuIcon=document.querySelector('.menu-logo').addEventListener('click',()=>{
navList.classList.toggle('active')
logo.classList.toggle('color-toggle')
menuColor.classList.toggle('menu-color-toggle')
})


let changingImage=document.querySelector('.profile-image img')
let fahad = document.querySelector(".fahad")
let ammar = document.querySelector(".ammar")
let irsam = document.querySelector(".irsam")
let pHeading = document.querySelector(".profile-heading")
let pText = document.querySelector(".profile-des")

let colorToggle = document.querySelector(".fahad")

let color2Toggle = document.querySelector(".ammar")

let color3Toggle = document.querySelector(".irsam")

let faq = document.querySelectorAll(".faq-qs-ans")
faq.forEach(faq => {
  faq.addEventListener(("click"), () => {
    faq.classList.toggle("active")
  });
})

const ColorFunc1 = () => {
  fahad.style.color = "blue"
  ammar.style.color = "white"
  irsam.style.color = "white"
  fahad.style.borderBottom = "1px solid white"
  ammar.style.borderBottom = "1px solid blue"
  irsam.style.borderBottom = "1px solid blue"
}
const ColorFunc2 = () => {
  fahad.style.color = "white"
  ammar.style.color = "blue"
  irsam.style.color = "white"
  fahad.style.borderBottom = "1px solid blue"
  ammar.style.borderBottom = "1px solid white"
  irsam.style.borderBottom = "1px solid blue"
}
const ColorFunc3 = () => {
  fahad.style.color = "white"
  irsam.style.color = "blue"
  ammar.style.color = "white"
  fahad.style.borderBottom = "1px solid blue"
  ammar.style.borderBottom = "1px solid blue"
  irsam.style.borderBottom = "1px solid white"
}


fahad.addEventListener('click', () => {
  pHeading.innerText = "Fahad"
  changingImage.src="images/fahad.jpg"
  pText.innerHTML = "I am a passionate web developer specializing in HTML, CSS, and JavaScript. With a keen eye for design and a strong understanding of web technologies, I create responsive and user-friendly websites that provide seamless experiences."
  ColorFunc1()
})
ammar.addEventListener('click', () => {
  pHeading.innerText = "Ammar"
changingImage.src="images/ammarreal.jpg"
  pText.innerHTML = "I am a creative web developer with a strong foundation in HTML, CSS, and JavaScript. My mission is to transform ideas into interactive digital experiences that captivate and inspire users."
  ColorFunc2()

})
irsam.addEventListener('click', () => {
  pHeading.innerText = "Unknown"
    changingImage.src="images/unknown.jpg"
  pText.innerHTML = "As a dedicated web developer specializing in HTML, CSS, and JavaScript, I am passionate about creating innovative and engaging web experiences. My goal is to blend functionality with aesthetics, ensuring every project is both visually appealing and highly usable."
  ColorFunc3()


})