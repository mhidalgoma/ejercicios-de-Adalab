"use strict";

document.querySelector("h1").innerHTML = "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

const textElement = document.querySelector ('.body__hola');
textElement.innerHTML = textElement.innerHTML + ' mundo';

const textSelection = document.querySelector ('.body__winner');
const listWinner1 = document.querySelector('.body__name--1')
const listWinner2 = document.querySelector('.body__name--2')
textSelection.innerHTML = textSelection.innerHTML + listWinner1.innerHTML;

const textPassword = document.querySelector ('.password');
textPassword.innerHTML = '*******';

const loremImpsun = document.querySelector ('.complex');
loremImpsun.innerHTML = '<h1>Lorem Ipsum</h1> <img src="http://via.placeholder.com/350x150"></img> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

const emptyList = document.querySelector ('.empty-list');
emptyList.innerHTML = '<li>1</li> <li>2</li> <li>3</li>'

let myAddress = 'Colmenar Viejo 28770'
myAddress = 'Valladolid 47009'

const button1 = document.querySelector ('.button1');
const button2 = document.querySelector ('.button2');
button1.classList.add ('button__inactive')