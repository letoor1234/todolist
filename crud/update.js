const fs = require("fs");
const path = require("path");
const read = require("./read");

const update = (title, desc) => {
  // Obtener la lista de tareas
  // let previousData = read();

  const lastData = read().map((task) => {
    if (task.title === title) {
      return {
        ...task,
        desc,
      };
    }

    return task;
  });

  fs.writeFileSync(
    path.join(__dirname, "../tasksData.json"),
    JSON.stringify(lastData, null, 2)
  );
};

module.exports = update;
