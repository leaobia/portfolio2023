'use strict'


document.addEventListener('DOMContentLoaded', () => {
    const elementsImg = document.querySelectorAll('.projeto_img');
    const elementsProjeto = document.querySelectorAll('.projeto');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-left');
          observer.unobserve(entry.target);
        }
      });
    });
    
    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-right');
          observer.unobserve(entry.target);
        }
      });
    });
    
    elementsImg.forEach(element => {
      observer.observe(element);
    });
    
    elementsProjeto.forEach(element => {
      observer2.observe(element);
    });
  });
  
  