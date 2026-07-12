"use strict";
let imgs = document.querySelectorAll("img");
imgs.forEach((v, k, p)=>{
    if (v.alt != null && v.alt != undefined){
        let introduction = document.createElement("section");
        introduction.textContent = v.alt;
        v.parentNode.insertBefore(introduction, v.nextSibling);
    }
});
