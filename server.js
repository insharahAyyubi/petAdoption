const registerLink = document.querySelector('.register-link');
const signUp = document.querySelector('.signUp');
const wrapper = document.querySelector('.wrapper');

    signUp.addEventListener('click', ()=>{
        console.log("clicked in");
        clicked="true";
        window.location = "/views/register.html";
    })
