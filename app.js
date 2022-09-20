const read = require("./crud/read");
const create = require("./crud/create");
const update = require("./crud/update");
const deleteFunction = require("./crud/delete");
const filter = require("./comandos/filter");
const returnFunction = require("./comandos/return");
const find = require("./comandos/find");

const action = process.argv[2];

const execCase = (callback) => {
  const text = process.argv[3];

  // Verificamos que el argumento existan
  if (!text) {
    // Si no existe, mostramos mensaje y cortamos el bloque
    console.log("Olvidaste introducir un título");
    return;
  }

  console.log(callback(text));
};

if (!action) {
  console.log("Olvidaste introducir la acción a ejecutar");
  return;
}

switch (action) {
  case "add": {
    // Almacenamos nuestros argumentos
    const title = process.argv[3];
    const desc = process.argv[4];

    // Verificamos que los argumentos existan
    if (!title || !desc) {
      // Si no existen, mostramos mensaje y cortamos el bloque
      console.log("Olvidaste introducir un título y/o una descripción");
      break;
    }

    // Almacenamos en una variable el resultado de
    // ejecutar nuestra función 'create'
    create(title, desc);

    // Cortamos el bloque
    break;
  }
  case "list": {
    // Obtenemos lista de tareas
    console.log(read());

    // Cortamos el bloque
    break;
  }
  case "edit": {
    const title = process.argv[3];
    const desc = process.argv[4];

    // Verificamos que los argumentos existan
    if (!title || !desc) {
      // Si no existen, mostramos mensaje y cortamos el bloque
      console.log("Olvidaste introducir un título y/o una descripción");
      break;
    }

    update(title, desc);
  }
  case "delete": {
    execCase(deleteFunction);

    break;
    /*     const title = process.argv[3];

    // Verificamos que el argumento existan
    if (!title) {
      // Si no existe, mostramos mensaje y cortamos el bloque
      console.log("Olvidaste introducir un título");
      break;
    }

    deleteFunction(title); */
  }
  case "filter": {
    execCase(filter);
    break;
    /* const text = process.argv[3];

    // Verificamos que el argumento existan
    if (!text) {
      // Si no existe, mostramos mensaje y cortamos el bloque
      console.log("Olvidaste introducir un título");
      break;
    }

    console.log(filter(text)); */
  }
  case "return": {
    execCase(returnFunction);
    break;
    /* const title = process.argv[3];

    // Verificamos que el argumento existan
    if (!title) {
      // Si no existe, mostramos mensaje y cortamos el bloque
      console.log("Olvidaste introducir un título");
      break;
    }

    console.log(returnFunction(title)); */
  }
  case "find": {
    execCase(find);
    break;
    /* const title = process.argv[3];

    // Verificamos que el argumento existan
    if (!title) {
      // Si no existe, mostramos mensaje y cortamos el bloque
      console.log("Olvidaste introducir un título");
      break;
    }

    console.log(find(title)); */
  }

  default: {
    console.log("Acción inválida");
    break;
  }
}
