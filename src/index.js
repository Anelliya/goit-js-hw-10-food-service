import './styles.css';
import recipeList from './menu.json';
import itemsTemplate from './templates/items.hbs';

const markup = itemsTemplate(recipeList);
const menuRecipeRef = document.querySelector('.js-menu');
const switchTeameRef = document.querySelector('#theme-switch-toggle');

menuRecipeRef.insertAdjacentHTML('afterbegin', markup);

console.log(switchTeameRef.checked);

function changeThemeFn(event) {
  console.log(event.target);
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.className);
  localStorage.setItem('checkBoxStatus', event.target.checked);
}

function setCheckBoxValue() {
  switchTeameRef.checked = JSON.parse(localStorage.getItem('checkBoxStatus'));
  console.log(switchTeameRef.checked);
}

function setSavedTheme() {
  document.body.className = localStorage.getItem('theme');
}

switchTeameRef.addEventListener('change', changeThemeFn);
setSavedTheme();
setCheckBoxValue();
