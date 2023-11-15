const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");}
list.forEach((item) => item.addEventListener("click", activeLink));
const darkModeToggleBtn = document.getElementById('darkModeToggle');
const body = document.body;
const navigation = document.querySelector('.navigation');
const products = document.querySelectorAll('.product');
function setDarkMode() {
  body.classList.add('dark-mode');
  navigation.classList.add('dark-mode');
  products.forEach(product => {
    product.classList.add('dark-mode');});}
function setLightMode() {
  body.classList.remove('dark-mode');
  navigation.classList.remove('dark-mode');
  products.forEach(product => {
    product.classList.remove('dark-mode');});}
function toggleDarkMode() {
  if (darkModeToggleBtn.checked) {
    setDarkMode();
    localStorage.setItem('darkMode', true);
  } else {
    setLightMode();
    localStorage.setItem('darkMode', false);}}
const isDarkMode = localStorage.getItem('darkMode') === 'true';
darkModeToggleBtn.checked = isDarkMode;
if (isDarkMode) {setDarkMode();} else {setLightMode();}
darkModeToggleBtn.addEventListener('change', toggleDarkMode);
var sections = document.querySelectorAll('section');
sections.forEach(function (section) {section.style.display = 'none';});
document.getElementById('home').style.display = 'block';
function showContent(sectionId) {
  sections.forEach(function (section) {
    section.style.display = 'none';});
  document.getElementById(sectionId).style.display = 'block';}
  const buyButtons = document.querySelectorAll('.buy-button');
const flashcardBox = document.querySelector('.flashcard-box');
function showFlashcard() {
  const productName = 'نام محصول';
  const productDescription = 'توضیحات محصول اینجا قرار می‌گیرد.';
  const productPrice = 'قیمت محصول';
  flashcardBox.querySelector('.flashcard-title').textContent = productName;
  flashcardBox.querySelector('.flashcard-description').textContent = productDescription;
  flashcardBox.querySelector('.flashcard-price').textContent = productPrice;
  flashcardBox.style.display = 'block';}
buyButtons.forEach((button) => {
  button.addEventListener('click', showFlashcard);});