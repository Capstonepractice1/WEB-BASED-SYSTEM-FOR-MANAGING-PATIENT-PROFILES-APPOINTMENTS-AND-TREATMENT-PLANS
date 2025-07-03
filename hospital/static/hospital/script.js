const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelectorAll('.login-register a')[1];  // 2nd link for "Login"
const registerLink = document.querySelectorAll('.login-register a')[0]; // 1st link for "Register"
console.log("Flash message script loaded");

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const flash = document.querySelector('.flash-message');
  if (flash) {
    console.log("Flash message found, fading out...");
    setTimeout(() => {
      flash.style.opacity = '0';
      setTimeout(() => {
        flash.remove();
        console.log("Flash message removed.");
      }, 500);
    }, 4000);
  }
});


