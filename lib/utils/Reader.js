// require module
const fs = require("fs");

// Create a reader class
class Reader {
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

// Export the reader class
module.exports = Reader;