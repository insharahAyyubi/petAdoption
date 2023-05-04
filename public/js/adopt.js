const catBtn = document.querySelector('.catBtn');
const dogBtn = document.querySelector('.dogBtn');
const card = document.querySelector('.card');

dogBtn.addEventListener("click", () => {
    catBtn.classList.remove("selected");
    dogBtn.classList.add("selected");
})
catBtn.addEventListener("click", () => {
    catBtn.classList.add("selected");
    dogBtn.classList.remove("selected");
})

