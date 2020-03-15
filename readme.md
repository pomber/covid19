Transforms the data from [CSSEGISandData/COVID-19](https://github.com/CSSEGISandData/COVID-19) into a json file. Available at [https://pomber.github.io/covid19/timeseries.json](https://pomber.github.io/covid19/timeseries.json).

Updated three times a day using GitHub Actions.

The json contains the number of Coronavirus confirmed cases, deaths, and recovered cases for every country and every day since 2020-1-22:

```json
{
  "Thailand": [
    {
      "date": "2020-1-22",
      "confirmed": 2,
      "deaths": 0,
      "recovered": 0
    },
    {
      "date": "2020-1-23",
      "confirmed": 3,
      "deaths": 0,
      "recovered": 0
    },
    ...
  ],
  ...
}
```

### Projects using this dataset
- [COVID-19 Daily Report](https://icebob.info/covid19/) ([repo](https://github.com/icebob/covid19)): Coronavirus daily report, updated hourly

[+ Add yours](https://github.com/pomber/covid19/edit/master/readme.md)
