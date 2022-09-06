const tasks = require("../tasksData");

const find = (title) => {
  // return tasks.find((task) => task.title === title);

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      return true;
    }
  }

  return false;
};

module.exports = find;
