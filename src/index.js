import './styles.css';
import recipeList from './menu.json';
import itemsTemplate from './templates/items.hbs';

const markup = itemsTemplate(recipeList);
const menuRecipeRef = document.querySelector('.js-menu');
const switchTeameRef = document.querySelector('#theme-switch-toggle');

menuRecipeRef.insertAdjacentHTML('afterbegin', markup);

function changeThemeFn() {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.className);
}

function setSavedTheme() {
  document.body.className = localStorage.getItem('theme');
}

switchTeameRef.addEventListener('change', changeThemeFn);
setSavedTheme();
