const body = document.querySelector("body")
body.style.backgroundColor = "lightblue"

const header = document.querySelector(".header")
header.style.width = "90%"
header.style.margin = "auto"
header.style.marginTop = "20px"
header.style.backgroundColor = "gray"
header.style.borderRadius = "10px"
header.style.boxShadow = "2px 2px 10px black"
header.style.color = "white"
header.style.textAlign = "center"
header.style.padding = "10px"


const title = document.getElementById("title")
title.textContent = "Javascript Dom Assignment 1"


const ul = document.querySelector(".nav-item")
ul.style.display = "flex"
ul.style.justifyContent = "center"
ul.style.gap = "2rem"
ul.style.listStyleType = "none"
ul.style.cursor = "pointer"


const userName = document.querySelector("#username")
userName.value = "Anthony"
userName.disabled = true
userName.style.padding = "10px"
userName.style.borderRadius = "10px"
userName.style.border = "none"


const password = document.querySelector("#password")
password.value = "123456"
password.type = "text"
password.disabled = true
password.style.padding = "10px"
password.style.borderRadius = "10px"
password.style.border = "none"


const btn = document.querySelector(".btn")
btn.style.backgroundColor = "rgba(211, 211, 211, 0.781)"
btn.style.color = "#000000"
btn.style.padding = "10px"
btn.style.borderRadius = "10px"
btn.style.border = "none"
btn.textContent = "Giriş Yap"
btn.style.cursor = "pointer"


const section = document.getElementById("projects")
const h3 = section.firstElementChild.textContent = "Js Dom Projects"
section.firstElementChild.style.marginBottom = "20px"
section.firstElementChild.style.color = "black"
section.firstElementChild.style.textAlign = "center"
section.firstElementChild.style.fontSize = "2rem"
section.style.borderRadius = "10px"
section.style.boxShadow = "2px 2px 10px black"
section.style.padding = "30px"
section.style.marginBlock = "30px"
section.style.width = "50%"


const li1 = document.createElement("li") 
const text1 = document.createTextNode("Hello World!")
const ul1 = section.lastElementChild 
ul1.appendChild(li1)
li1.appendChild(text1)
li1.style.fontSize = "1.2rem"
li1.style.marginBlock = "0.5rem"


const li2 = document.createElement("li") 
const text2 = document.createTextNode("Guess Number")
ul1.appendChild(li2)
li2.appendChild(text2)
li2.style.fontSize = "1.2rem"
li2.style.marginBlock = "0.5rem"

const li3 = document.createElement("li") 
const text3 = document.createTextNode("Checkout Page")
ul1.appendChild(li3)
li3.appendChild(text3)
li3.style.fontSize = "1.2rem"
li3.style.marginBlock = "0.5rem"

const li4 = document.createElement("li") 
const text4 = document.createTextNode("Gelir-Gider Projesi")
ul1.appendChild(li4)
li4.appendChild(text4)
li4.style.fontSize = "1.2rem"
li4.style.marginBlock = "0.5rem"

const li5 = document.createElement("li") 
const text5 = document.createTextNode("Api Projects")
ul1.appendChild(li5)
li5.appendChild(text5)
li5.style.fontSize = "1.2rem"
li5.style.marginBlock = "0.5rem"










