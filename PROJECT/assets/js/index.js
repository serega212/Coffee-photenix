// бработчик кнопки
// let toggleBtn = document.querySelector('.toggle-btn');
// let menu = document.querySelector('.menu');
// let CloseMenuBtn = menu.querySelector('.close-btn');

// toggleBtn.onclick = function() {
//  menu.classList.remove('hide-menu');
// }
// CloseMenuBtn.onclick = function() {
//     menu.classList.add('hide-menu');
//    }

   function toggleMenu () {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('hide-menu');
   }

   // async function loadComponent( component, path ) {
   //    let response = await fetch (path);
   //    let content = await response.text();

   //    document.getElementById(component).innerHTML = content;
   // }

   // loadComponent("header", "PROJECT/assets/components/header.html");

   new WOW().init();

   $(".slider").owlCarousel( { 
      items: 4,
      nav: false,
      dots: true,
      loop: true,
      autoplay: true,
      margin: 15,
      responsive : {
    0: { items: 2 },
    768: { items: 4 }
      }
   } );

   let drinksPlace = document.querySelector("#drinks").querySelector('.grid-4');
   let desertsPlace = document.querySelector("#deserts").querySelector('.grid-4');
   let snakcsPlace = document.querySelector("#snacks").querySelector('.grid-4');

   let drinksCard = "";
   let desertCard = "";
   let snackCard = "";

   function renderCards(data, cards, place){
      data.forEach(item => {
         cards +=`
         <div class="product-card">
          <div class="img-wrapper">
           <img src="${item.img}" alt ="">
         </div>
         <span class="type">${item.type}</span> 
         <h3>${item.title}</h3> 
         <span>${item.ptice}</span> 
       </div>
         `;
      });
   place.innerHTML = cards;
 }

 renderCards(coffeeData, drinksCard, drinksPlace);
 renderCards(desertsData, desertCard, desertsPlace);
 renderCards(snacksData, snackCard, snakcsPlace);
   
//    let drinkCard = "";
//    coffeeData.forEach(item =>{
//       if(item.fype == "Кофе"){
//          renderCards( item, drinkCard);
//         }else if(item.type == "закуски"){
//          renderCards( item, drinkCard); 
//          }
//       });

// // drinksPlace.innerHTML(place, item, cards){
//    function renderCards(place, item, cards){
//    drinkCard += `
// <div class="product-card"> 
// <div class="img-wrapper">
// <img src ="${item.img}" alt="">
// </div>
//    <span class="type">${item.type}</span> 
//    <h3>${item.title}</h3> 
//    <span>${item.ptice}</span> 
//  </div>
// `;
// place.innerHTML = cards;
// }