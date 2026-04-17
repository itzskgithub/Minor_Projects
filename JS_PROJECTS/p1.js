let boxes = document.querySelectorAll(".btn");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        let color = getComputedStyle(box).backgroundColor; 
        document.body.style.backgroundColor = color;
    });
});