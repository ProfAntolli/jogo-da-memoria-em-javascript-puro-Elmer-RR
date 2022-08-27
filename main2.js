const cardBord = document.querySelector ("#cardboad")
const images = [
    'angula.svg',
    'aurelia.svg',
    'vue.svg',
    'react.svg',
    'backbone.svg',
    'ember.svg'
];

let cardHTML = '';

images.forEach(img => {
   cardHTML +=` 
   <div calass="memory-card">
      <img src="img/${img}">
      <img src="img/js-badge.svg">
    </div>
    `;
   
});

cardBord.innerHTML = cardHTML;