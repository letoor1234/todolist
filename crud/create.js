const fs = require("fs");
const read = require("./read");
const path = require("path");

const create = (title, desc) => {
  // Leemos nuestro archivo
  const previousData = read();

  // Definir nuestro objeto a agregar
  const newTask = {
    title: title,
    desc: desc,
  };

  // Formamos el nuevo array de tareas
  // para sobreescribir el JSON
  const lastData = [...previousData, newTask];

  // Convertimos el nuevo array a objeto JSON
  const parsedData = JSON.stringify(lastData, null, 2);

  // Escribimos nuestro archivo
  fs.writeFileSync(path.join(__dirname, "../tasksData.json"), parsedData);
  // Retornamos verdadero
  return true;
};

module.exports = create;
