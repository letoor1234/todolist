const read = require("./crud/read");
const create = require("./crud/create");

const action = process.argv[2];

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
    const isOk = create(title, desc);

    // Si el resultado es 'true' mostramos en consola el éxito
    if (isOk) {
      console.log("Tarea agregada con éxito");
    }
    // Si el resultado es 'false' mostramos en consola
    // que ocurrió un error
    else {
      console.log("Ocurrió un error");
    }

    // Cortamos el bloque
    break;
  }
  case "list": {
    // Obtenemos lista de tareas
    const tasks = read();

    // Iteramos la lista y mostramos sus valores
    // en consola
    for( task of tasks ) {
        console.log("titulo: ", task.title);
        console.log(task.desc);
        console.log("--------------------");
    }

    // Cortamos el bloque
    break;
  }
  default: {
    console.log("Acción inválida");
    break;
  }
}
