const read = require("./read");
const fs = require("fs");
const path = require("path");

module.exports = (title) => {
  //   Almacenamos en una nueva variable (const)
  // lo que retorna el metodo filter
  // de nuestra data previa ( read() ).
  //   Dentro del filter, retornamos falso
  // si el título de nuestro elemento coincide
  // con el parámetro title.

  /* const newData = read().filter((task) => {
    if (task.title === title) {
      return false;
    }

    return true;
  }); */

  const newData = read().filter((task) => task.title !== title);

  fs.writeFileSync(
    path.join(__dirname, "../taskData.json"),
    JSON.stringify(newData, null, 2)
  );
};
