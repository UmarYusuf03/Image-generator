const btn = document.querySelector(".btn");

const container = document.querySelector(".container");

btn.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btn.offsetLeft);
    const y = (event.pageY - btn.offsetTop);

    btn.style.setProperty("--xPos", x +"px");
    btn.style.setProperty("--yPos", y +"px");
})

btn.addEventListener("click", ()=>{
    imageNum = 10;
    addNewImages();
});

function addNewImages(){

    for (let index = 0; index < imageNum; index++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        container.appendChild(newImg);
        
    }
    

}