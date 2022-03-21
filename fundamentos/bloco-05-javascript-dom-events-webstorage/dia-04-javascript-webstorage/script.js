"use strict";

document.getElementById('background').addEventListener('change', function(e) {
  document.querySelector('body').style.backgroundColor = e.target.value;
});

document.getElementById('text-color').addEventListener('change', function(e) {
  document.querySelector('body').style.color = e.target.value;
});

document.getElementById('font-size').addEventListener('change', function(e) {
  document.querySelector('article').style.fontSize = e.target.value;
});

document.getElementById('line-height').addEventListener('change', function(e) {
  document.querySelector('article').style.lineHeight = e.target.value;
});

document.getElementById('font-family').addEventListener('change', function(e) {
  document.querySelector('body').style.fontFamily = e.target.value;
});