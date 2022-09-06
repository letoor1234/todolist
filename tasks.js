const find = require("./comandos/find");

const action = process.argv[2];

if (!action) {
  console.log("Olvidaste introducir la acción a ejecutar");
  return;
}

switch (action) {
  case "find": {
    const title = process.argv[3];

    if (!title) {
      console.log("Olvidaste introducir el título");
      break;
    }

    const exists = find(title);

    console.log("Título: ", title);
    console.log("Existe: ", exists);

    break;
  }

  default: {
    console.log("Acción inválida");
    break;
  }
}
