const path = require("path");
const update = require("../update");

const dataPath = path.join(__dirname, "data");
const outputPath = path.join(__dirname, "output", "timeseries.json");

update(dataPath, outputPath);
