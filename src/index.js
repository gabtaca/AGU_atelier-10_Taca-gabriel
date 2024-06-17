import "animate.css";

import imgHead from './assets/images/img_head.png';
import imgTail from './assets/images/img_tail.png';

document.addEventListener('DOMContentLoaded', () => {
  const coinImgDiv = document.querySelector('.div__coin-img');
  const coinImg = document.querySelector('.img_coin');
  const flipButton = document.querySelector('.btn__flip');
  const resultH1 = document.querySelector('.result'); 

  if (flipButton && coinImgDiv && resultH1) { 
    flipButton.addEventListener('click', () => {
      console.log('Button clicked, starting animation');

      coinImgDiv.classList.remove('animate__flipInX', 'animate__bounceOutUp', 'animate__bounceInDown');
      void coinImgDiv.offsetWidth; // Trigger reflow

      coinImgDiv.classList.add('animate__flipInX');

      setTimeout(() => {
        if (Math.random() > 0.5) {
          coinImg.src = imgHead;
          resultH1.textContent = 'Heads'; 
        } else {
          coinImg.src = imgTail;
          resultH1.textContent = 'Tails'; 
        }
      }, 1250); 

      coinImgDiv.addEventListener('animationend', (event) => {
        if (event.animationName === 'flipInX') {
          coinImgDiv.classList.remove('animate__flipInX');
          coinImgDiv.classList.add('animate__bounceOutUp');
        } else if (event.animationName === 'bounceOutUp') {
          coinImgDiv.classList.remove('animate__bounceOutUp');
          coinImgDiv.classList.add('animate__bounceInDown');
        }
      }, { once: true });
    });
  }
});