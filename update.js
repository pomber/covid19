const fs = require("fs");
const path = require("path");
const parse = require("csv-parse/lib/sync");

const FILENAME_CONFIRMED = "time_series_covid19_confirmed_global.csv";
const FILENAME_DEATHS = "time_series_covid19_deaths_global.csv";
const FILENAME_RECOVERED = "time_series_covid19_recovered_global.csv";

function extract(filepath) {
  const csv = fs.readFileSync(filepath);
  const [headers, ...rows] = parse(csv);
  const [province, country, lat, long, ...dates] = headers;
  const countList = {};

  rows.forEach(([province, country, lat, long, ...counts]) => {
    countList[country] = countList[country] || {};
    dates.forEach((date, i) => {
      countList[country][date] = countList[country][date] || 0;
      countList[country][date] += +counts[i];
    });
  });
  return [countList, dates];
}

const patchCountryNames = {
  Bahamas: "Bahamas, The",
  Gambia: "Gambia, The"
};

function update(dataPath, outputPath) {
  const [confirmed, dates] = extract(
    path.resolve(dataPath, FILENAME_CONFIRMED)
  );
  const [deaths] = extract(path.resolve(dataPath, FILENAME_DEATHS));
  const [recovered] = extract(path.resolve(dataPath, FILENAME_RECOVERED));
  const countries = Object.keys(confirmed);
  const results = {};
  countries.forEach(country => {
    // Some country names are different in the recovered dataset
    const recoverdCountry = patchCountryNames[country] || country;

    if (!recovered[recoverdCountry]) {
      console.warn(`${recoverdCountry} is missing from the recovered dataset`);
    }

    results[country] = dates.map(date => {
      const [month, day] = date.split("/");
      return {
        date: `2020-${month}-${day}`,
        confirmed: confirmed[country][date],
        deaths: deaths[country][date],
        recovered:
          recovered[recoverdCountry] && recovered[recoverdCountry][date] != null
            ? recovered[recoverdCountry][date]
            : null
      };
    });
  });

  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
}

module.exports = update;
