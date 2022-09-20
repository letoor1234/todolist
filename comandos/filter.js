const read = require("../crud/read");

module.exports = (text) => read().filter((task) => task.title.includes(text));

