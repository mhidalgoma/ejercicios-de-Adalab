'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';


userAvatar = '';
document.querySelector(".user__avatar").src =  userAvatar || DEFAULT_AVATAR;


//Ejercicio control de acceso
let nombre = 'monica';

if (nombre ==='Maria'|| nombre === 'Luisa'){
    console.log ('Bienvenida, ' + nombre)
} else {
    console.log ('Lo siento pero el usuario que has introducido no está regristrado.')
}

//Ejercicio completa las condiciones

const number = -90;

if (number===0) {
    console.log('El número es 0')
} else if (number < 0) {
    console.log('El número es negativo')
} else if (number + 2 > 13 && number + 2 <= 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (number > 20 && number < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
} else {
    console.log('el número no es 123123125')
}

  //Ejercicio conversor de edad de perro a humano

const dogAge = 5;

if (dogAge === 1) {
    console.log('Tu perro tiene 15 años')
} else if (dogAge === 2) {
    console.log('Tu perro tiene 24 años')
} else if (dogAge > 2) {
    console.log('Tu perro tiene ' + (24+((dogAge-2)*5)) + 'años')
} else if (dogAge === 1) {
    console.log('El número es mayor que 20 pero menor que 50')
} else {
    console.log('el número no es 123123125')
}

//Ejercicio notificaciones arcoiris

const notification = document.querySelector ('.js-notification');
const title = document.querySelector ('.notificacion');
const message = document.querySelector ('.mensaje')


if (notification.classList.contains ('warning')){
    title.innerHTML = 'AVISO'
    message.innerHTML = 'Tenga cuidado'
} else if (notification.classList.contains ('error')){
    title.innerHTML = 'ERROR'
    message.innerHTML = 'Ha surgido un error'
} else if (notification.classList.contains ('success')){
    title.innerHTML = 'CORRECTO'
    message.innerHTML = 'Los datos son correctos'
}