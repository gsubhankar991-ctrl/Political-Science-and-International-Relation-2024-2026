const content = document.querySelector(".marquee-content");

let pos = window.innerHeight;
let speed = .5;
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

const overlay = document.getElementById('vmodal');
const modalVid = document.getElementById('modal-video');

function openModal(thumb) {
  const src = thumb.querySelector('video').src;
  modalVid.src = src;
  overlay.classList.add('active');
  modalVid.play();
}
function closeModal() {
  overlay.classList.remove('active');
  modalVid.pause();
  modalVid.src = '';
}
function handleOverlayClick(e) {
  if (e.target === overlay) closeModal();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
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