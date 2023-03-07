const registerLink = document.querySelector('.register-link');
const signUp = document.querySelector('.signUp');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');

if(signUp)
{
    signUp.addEventListener('click', ()=>{
        
        window.location = "/views/register.html";
       
    })
}
   
    
    registerLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
     });

    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
     });   

