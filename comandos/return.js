const read = require("../crud/read");

module.exports = (title) => {
  const existsTask = read().find((task) => task.title === title);

  if (existsTask) {
    return existsTask.desc;
  }

  return "No se ha encontrado la tarea";
};
