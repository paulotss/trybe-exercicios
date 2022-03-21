"use strict";

const body = document.querySelector('body');
const article = document.querySelector('article');

body.style.backgroundColor = localStorage.getItem('background') ? localStorage.getItem('background') : 'white';
document.getElementById('background').value = localStorage.getItem('background') ? localStorage.getItem('background') : 'white';

body.style.color = localStorage.getItem('text-color') ? localStorage.getItem('text-color') : 'black';
document.getElementById('text-color').value = localStorage.getItem('text-color') ? localStorage.getItem('text-color') : 'black';

// article.style.fontSize = e.target.value;
// article.style.lineHeight = e.target.value;
// body.style.fontFamily = e.target.value;

document.getElementById('background').addEventListener('change', function(e) {
  localStorage.setItem('background', e.target.value);
  body.style.backgroundColor = e.target.value;
});

document.getElementById('text-color').addEventListener('change', function(e) {
  localStorage.setItem('text-color', e.target.value);
  body.style.color = e.target.value;
});

document.getElementById('font-size').addEventListener('change', function(e) {
  article.style.fontSize = e.target.value;
});

document.getElementById('line-height').addEventListener('change', function(e) {
  article.style.lineHeight = e.target.value;
});

document.getElementById('font-family').addEventListener('change', function(e) {
  body.style.fontFamily = e.target.value;
});