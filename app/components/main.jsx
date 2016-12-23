import React from 'react';
import ReactDOM from 'react-dom';

import Imagen from './image';

//se declara la funcion 
function formatName(user) {
  return user.firstName + ' ' + user.lastName;//se concatena 
}
// parametros de funcion
const user = {
  firstName: 'Valeria',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hola Mundo... {formatName(user)}!
  </h1>
);

//ReactDOM.render(
  //element,
  //document.getElementById('container')
//);

const container = document.getElementById('container');
ReactDOM.render(element, container);
