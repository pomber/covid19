const fs = require("fs");
const path = require("path");
const parse = require("csv-parse/lib/sync");

const WORKSPACE = process.env.GITHUB_WORKSPACE;
const DATA_REPO = "data"; // from main.yml checkout action path
const MAIN_REPO = "main"; // from main.yml checkout action path
const FILENAME_CONFIRMED = "time_series_19-covid-Confirmed.csv";
const FILENAME_DEATHS = "time_series_19-covid-Deaths.csv";
const FILENAME_RECOVERED = "time_series_19-covid-Recovered.csv";

const dataPath = path.join(
  WORKSPACE,
  DATA_REPO,
  "csse_covid_19_data",
  "csse_covid_19_time_series"
);
const outputPath = path.join(WORKSPACE, MAIN_REPO, "docs", "timeseries.json");

function extract(filename) {
  const csv = fs.readFileSync(path.resolve(dataPath, filename));
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

const [confirmed, dates] = extract(FILENAME_CONFIRMED);
const [deaths] = extract(FILENAME_DEATHS);
const [recovered] = extract(FILENAME_RECOVERED);
const countries = Object.keys(confirmed);
const results = {};
countries.forEach(country => {
  results[country] = dates.map(date => {
    const [month, day] = date.split("/");
    return {
      date: `2020-${month}-${day}`,
      confirmed: confirmed[country][date],
      deaths: deaths[country][date],
      recovered: recovered[country][date]
    };
  });
});

fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
