Draggable.create(".dragme", {
    type: 'x',
    bounds: ".container"
})


function checkOverlap() {
    var div1 = document.querySelector(".cir");
    var div2 = document.querySelector(".dragme");
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();

    if (
        rect1.left < rect2.right
    ) {
        // document.querySelector("#para").style.display.opacity = 0;
        document.querySelector(".video1").style.opacity = 0;
        document.querySelector(".para").style.display = "none";

    } else {
        document.querySelector(".video1").style.opacity = 1;
        document.querySelector(".para").style.display = "initial";
    }
}
// if (rec2.right > rect2.initial) { document.querySelector(".para").style.display = "none"; }
window.addEventListener("mousemove", checkOverlap);

// function delay() {
//     var div2 = document.querySelector(".dragme");
//     var rect2 = div2.getBoundingClientRect();
//     if (rect2.right !== rect2.initial) {
//         document.querySelector(".para").style.display = "none";
//     } else {
//         document.querySelector(".para").style.display = "initial";
//     }
// }
// window.addEventListener("click", delay);