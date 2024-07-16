let SlideOpen = document.getElementById("slideopen");
let content = document.getElementById("content");
let close = document.getElementById("close");

SlideOpen.addEventListener('click', ()=>{

    content.style.display="initial";
    console.log("working")
})



close.addEventListener("click", ()=>{

    content.style.display = "none"
})