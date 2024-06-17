import "animate.css";

document.addEventListener('DOMContentLoaded', () => {
  const coinImgDiv = document.querySelector('.div__coin-img');
  const coinImg = document.querySelector('.div__coin-img img');
  const flipButton = document.querySelector('.btn__flip');
  const resultH1 = document.querySelector('.result'); 

  if (flipButton && coinImgDiv && resultH1) { 
    flipButton.addEventListener('click', () => {
      console.log('Button clicked, starting animation');


      coinImgDiv.classList.remove('animate__animated', 'animate__bounceInDown', 'animate__flipInX', 'animate__bounceOutUp');
      void coinImgDiv.offsetWidth; 

      coinImgDiv.classList.add('animate__animated', 'animate__flipInX'); 


      setTimeout(() => {
        if (Math.random() > 0.5) {
          coinImg.src = '/src/assets/images/img_head.png';
          coinImg.alt = 'image de pièce de monnaie coté face';
          console.log('Image changed to head');
          resultH1.textContent = 'Heads'; 
        } else {
          coinImg.src = '/src/assets/images/img_tail.png';
          coinImg.alt = 'image de pièce de monnaie coté pile';
          console.log('Image changed to tail');
          resultH1.textContent = 'Tails'; 
        }
      }, 2500); 


      coinImgDiv.addEventListener('animationend', (event) => {
        console.log(`Animation ended: ${event.animationName}`);
        if (event.animationName === 'flipInX') {
          coinImgDiv.classList.remove('animate__flipInX');
          coinImgDiv.classList.add('animate__bounceOutUp');
          coinImgDiv.addEventListener('animationend', (event) => {
            console.log(`Animation ended: ${event.animationName}`);
            if (event.animationName === 'bounceOutUp') {
              coinImgDiv.classList.remove('animate__bounceOutUp');
              coinImgDiv.classList.add('animate__bounceInDown');
            }
          }, { once: true });
        }
      }, { once: true });
    });
  }
});