const input = require("input");

async function customInput(quest) {
    return await input.text(quest);
}

module.exports = customInput;