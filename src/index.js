document.addEventListener('DOMContentLoaded', () => {
  const coinImgDiv = document.querySelector('.div__coin-img');
  const coinImg = document.querySelector('.img_coin');
  const flipButton = document.querySelector('.btn__flip');
  const resultH1 = document.querySelector('.result'); 

  if (flipButton && coinImgDiv && resultH1) { 
    flipButton.addEventListener('click', () => {
      console.log('Button clicked, starting animation');

      // Reset animations
      coinImgDiv.classList.remove('animate__flipInX', 'animate__bounceOutUp', 'animate__bounceInDown');
      void coinImgDiv.offsetWidth; // Trigger reflow

      // Start the flip animation
      coinImgDiv.classList.add('animate__flipInX');

      // Determine the result after the flip animation
      setTimeout(() => {
        if (Math.random() > 0.5) {
          coinImg.src = '/src/images/img_head.png';
          coinImg.alt = 'image de pièce de monnaie coté face';
          console.log('Image changed to head');
          resultH1.textContent = 'Heads'; 
        } else {
          coinImg.src = '/src/images/img_tail.png';
          coinImg.alt = 'image de pièce de monnaie coté pile';
          console.log('Image changed to tail');
          resultH1.textContent = 'Tails'; 
        }
      }, 1250); // Adjust timing to align with flip animation

      // Handle animation end for flip
      coinImgDiv.addEventListener('animationend', (event) => {
        if (event.animationName === 'flipInX') {
          console.log(`Animation ended: ${event.animationName}`);
          // Bounce out animation
          coinImgDiv.classList.remove('animate__flipInX');
          coinImgDiv.classList.add('animate__bounceOutUp');
        } else if (event.animationName === 'bounceOutUp') {
          console.log(`Animation ended: ${event.animationName}`);
          // Reset to bounce in down animation
          coinImgDiv.classList.remove('animate__bounceOutUp');
          coinImgDiv.classList.add('animate__bounceInDown');
        }
      }, { once: true });
    });
  }
});