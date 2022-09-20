// const tasks = require("../tasksData");
const read = require("../crud/read");

/* const find = (title) => {
  return read().some((task) => task.title === title);
  
  // for (let i = 0; i < tasks.length; i++) {
  //  if (tasks[i].title === title) {
  //    return true;
  //  }
  // }

  // return false;
}; */

module.exports = (title) => read().some( (task) => task.title === title );
