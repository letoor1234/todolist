const fs = require("fs");
const path = require("path");

// Función completa y ordenada
/*
const read = () => {
  // Leemos nuestro archivo
  const tasks = fs.readFileSync(
    path.join(__dirname, "../tasksData.json"),
    "utf-8"
  );
  // Lo convertimos a objeto de javascript
  const parsedTasks = JSON.parse(tasks);

  // retornamos nuestra data parseada
  return parsedTasks;
};
*/

// Exportamos nuestra función
// module.exports = read;

// Primer refactor
/* 
const read = () => JSON.parse(fs.readFileSync("../tasksData.json", "utf8"));
module.exports = read; 
*/

// Refactor fulero
module.exports = () =>
  JSON.parse(
    fs.readFileSync(path.join(__dirname, "../tasksData.json"), "utf8")
  );
