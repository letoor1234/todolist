const fs = require("fs");
const path = require("path");
const read = require("./read");

const update = (title, desc) => {
  // Obtener la lista de tareas
  let previousData = read();

  // Iterar sobre nuestro array de tareas
  for (task of previousData) {
    // Si el titulo de nuestro elemento actual
    // es igual al parametro 'title'
    if (task.title === title) {
      // Modificamos la 'desc'
      // del mismo elemento
      task.desc = desc;
      // Y cortamos el bucle
      return "Modificado con éxito";
    }
  }

  // Si lo anterior no sucede
  return "No se ha encontrado el título";
};

module.exports = update;
