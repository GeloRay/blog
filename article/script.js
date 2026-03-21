"use strict"
let title = document.querySelector("h1")
if (title != null) {
    document.querySelector("title").textContent = title.textContent
}
else {
    document.querySelector("title").textContent = "无题"
}