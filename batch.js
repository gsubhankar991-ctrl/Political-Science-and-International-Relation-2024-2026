const content = document.querySelector(".marquee-content");

let pos = window.innerHeight;
let speed = 1.2;
let autoScroll = true;
let timer;

function marqueeUp() {

    if (autoScroll) {
        pos -= speed;
    }

    content.style.transform = `translateY(${pos}px)`;

    if (Math.abs(pos) > content.offsetHeight) {
        pos = window.innerHeight;
    }

    requestAnimationFrame(marqueeUp);
}

marqueeUp();

document.addEventListener("wheel", (e) => {

    autoScroll = false;

    pos -= e.deltaY * 0.5;

    clearTimeout(timer);

    timer = setTimeout(() => {
        autoScroll = true;
    }, 500);
});


$(function(){

    $(".popup img").click(function(){

        let src = $(this).attr("src");

        $(".img-show img").attr("src", src);

        $(".show").fadeIn(50,function(){

            requestAnimationFrame(function(){
                $(".show").addClass("active");
            });

        });

    });

    $(".overlay, .img-show span").click(function(){

        $(".show").removeClass("active");

        setTimeout(function(){
            $(".show").fadeOut(150);
        },1000);

    });

});
const container = document.querySelector(".mouse-particles");

document.addEventListener("mousemove", (e) => {

    const spark = document.createElement("span");
    spark.classList.add("spark");

    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";

    const size = Math.random() * 6 + 3;
    spark.style.width = size + "px";
    spark.style.height = size + "px";

    container.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 800);

});