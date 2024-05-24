// let input = document.querySelector('input');
// let pass_Hide = document.querySelector('.pass_Hide');
// let pass_Show = document.querySelector('.pass_Show');

// pass_Hide.addEventListener("click", function() {
//     input.type = "password";
//     pass_Hide.style.display = "none";
//     pass_Show.style.display = "block";
// });

// pass_Show.addEventListener("click", function() {
//     input.type = "text";
//     pass_Hide.style.display = "block";
//     pass_Show.style.display = "none";
// });




// window.addEventListener("scroll", () => {
// let ouTre = document.querySelector(".outer");
// let inNer = document.querySelector(".inner");
// let bodyHeight = document.documentElement.scrollHeight;
// let clientHeight = document.documentElement.clientHeight;
// let fromTop = document.documentElement.scrollTop;

// let sub = bodyHeight - clientHeight;
// let result = fromTop * 100 / sub;
// let exactly = Math.round(result);

//     ouTre.style.backgroundImage = `conic-gradient(rgb(255, 156, 26) ${exactly}%, rgb(140, 140, 159) ${exactly}%)`;
//     inNer.innerHTML = exactly;
//     inNer.style.color = "rgb(255, 156, 26)"
// });


window.addEventListener("scroll", () => {
    let inner = document.querySelector(".inner");
    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromTop = document.documentElement.scrollTop;

    let real_Height = height - clientHeight;
    let result = fromTop * 100 / real_Height;
    let absolute_result = Math.round(result);

    inner.style.width = `${absolute_result}%`;
});


let inPut = document.querySelector("input");
let button = document.querySelector(".btn");
let image = document.querySelector(".placeholder");

button.addEventListener("click", function() {
    let inputValue = inPut.value;
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inputValue}`;
});


let three_dote = document.querySelector(".three_dote");
let cross = document.querySelector(".cross");
let slider = document.querySelector("#slider");
let body = document.querySelector(".body");



three_dote.addEventListener("click", function() {
    slider.style.display = "block";
    slider.classList.add("vvvvv");
    body.style.display = "block";
});

cross.addEventListener("click", function() {
    slider.style.display = "none";
    slider.classList.remove("vvvvv");
    body.style.display = "none";
});

body.addEventListener("click", function() {
    slider.style.display = "none";
    slider.classList.remove("vvvvv");

    body.style.display = "none";
});
