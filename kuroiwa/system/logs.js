const m = require("moment-timezone");
const gradient = require('gradient-string');

const blu = gradient("#0000ff", "#243aff", "#4687f0"); // Real blue
const red = gradient("#ff0000", "#ff0000", "#ff0000"); // Real red
const yellow = gradient("#ffd700", "#ffff00", "#ff8c00"); // Real yellow

function getTime() {
    return m.tz("Asia/Manila").format("HH:mm:ss");
}

function log(text, color, prefix = `[${getTime()}] [ Kuroiwa ] » `) {
    process.stderr.write(color(`${prefix}${text}\n`));
}

module.exports.hm = (text) => {
    log(text, blu);
};

module.exports.sys = (text) => {
    log(text, blu, `[${getTime()}] [ System ] » `);
};

module.exports.inf = (text) => {
    log(text, blu, `[${getTime()}] [ Info ] » `);
};

module.exports.kuroi = (text) => {
    log(text, blu, '');
};

module.exports.warn = (text) => {
    log(text, yellow); // Real yellow for warning text
};

module.exports.erro = (text) => {
    log(text, red); // Real red for error text
};