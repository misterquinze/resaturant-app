import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../data/DATA.json';

console.log('Hello Coders! :)');

const navBarToggle = document.querySelector("#navbar-toggle-menu");
const drawerElement = document.querySelector("#topnav");
const mainElement = document.querySelector("main");
 
navBarToggle.addEventListener("click", event => {
 drawerElement.classList.toggle("open");
 event.stopPropagation();
});
 
mainElement.addEventListener("click", event => {
 drawerElement.classList.remove("open");
 event.stopPropagation();
})

// const mainNav = document.getElementById('menu-bar');
// const navBarToggle = document.getElementById('navbar-toggle-menu');

// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });


const getData = (data) => {
  let html = "";
  data.restaurants.forEach(resto => {
    html += `
    <article class="post-item">
    <div class="post-item__thumbnail" style="background-image: url(${resto.pictureId});"alt="">
    
    <span class="post-item__city">${resto.city}</span>
    </div>
    <div class="post-item__content">
      <p class="post-item__date">Rating : <span class="post-item__date__author">${resto.rating}</span>
        </p>
        <h1 class="post-item__title"><a href="#">${resto.name}</a>
        </h1>
        <p class="post-item__description">${resto.description}</p>
    </div>
    </article>
    `;
    
  });
  document.getElementById("posts").innerHTML += html;
}
getData(data)



