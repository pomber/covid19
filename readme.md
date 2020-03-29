Transforms the data from [CSSEGISandData/COVID-19](https://github.com/CSSEGISandData/COVID-19) into a json file. Available at [https://pomber.github.io/covid19/timeseries.json](https://pomber.github.io/covid19/timeseries.json). Updated three times a day using GitHub Actions.

The json contains the number of Coronavirus confirmed cases, deaths, and recovered cases for every country and every day since 2020-1-22:

```
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

For example, if you want to use it from a web site:

```js
fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
      console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    );
  });
```

### Projects using this dataset ([+ add yours](https://github.com/pomber/covid19/edit/master/readme.md))

#### APIs

- [COVID-19 Grafana API](https://covid19-grafana.herokuapp.com) ([repo](https://github.com/twei55/covid19-grafana-datasource)): JSON API to visualize stats in Grafana
- [COVID-19 GraphQL API](https://covid19-graphql.now.sh/) ([repo](https://github.com/rlindskog/covid19-graphql))
- [CovidAPI.info](https://covidapi.info) ([repo](https://github.com/backtrackbaba/covid-api)): Lightweight, Superfast REST API built to be consumed by dashboards.
- [COVID-19 Ruby Gem](https://github.com/everythings-cancelled/pomber_covid19)

#### Visualizations

- [CoronaStatistics.live](https://coronastatistics.live) ([repo](https://github.com/OssamaRafique/Corona-Statistics-And-Tracker-Dashboard-Angular-9)): COVID-19 Global Report
- [COVID-19 World](https://andreasagap.github.io/Covid19-World/) ([repo](https://github.com/andreasagap/Covid19-World)): COVID-19 Global Report
- [COVID-19 Comparator](https://covid-comparator.netlify.com/) ([repo](https://github.com/ElSamplio/coronavirus-comparator)): Coronavirus cases comparator by countries, from chosen date and number of days (PWA)
- [Mobile Friendly COVID-19 Report](http://corona-status.live/) ([repo](https://github.com/ameerthehacker/corona-status)): Coronavirus daily report in a mobile friendly website (PWA)
- [COVID-19 Daily Report](https://icebob.info/covid19/) ([repo](https://github.com/icebob/covid19)): Coronavirus daily report, updated hourly
- [COVID-19 GLOBAL Report](https://mdusmanansari.github.io/COVID-19-Global-Report/) ([repo](https://github.com/mdusmanansari/COVID-19-Global-Report/))
- [covid-charts](https://jeetiss.github.io/covid-charts/) ([repo](https://github.com/jeetiss/covid-charts)): chart widget with Coronavirus stats for specified country
- [COVID-19 Global Chart](https://gabrielcesar.github.io/covid/) ([repo](https://github.com/gabrielcesar/covid)): Chart GeoMap with last status by country.
- [COVID-19 Stats](https://corona.netflex.dev/) ([repo](https://github.com/thomas-alrek/covid-19-stats)): A simple mobile friendly dashboard visualizing the latest stats of the COVID-19 outbreak.
- [Corona.log](https://corona-log.now.sh/) ([repo](https://github.com/biewxw/corona.log)): A simple COVID-19 data checker per region
- [COVID-19 How Bad Is It](https://faizalazman.github.io/) ([repo](https://github.com/faizalazman/faizalazman.github.io)): Live graphs with latest news involving Covid-19,
- [COVID-19 Sri Lanka Tracker](https://covid-19-sl.netlify.com/) ([repo](https://github.com/dhanushkac/covid-19-sl-tracker)): Live Updates of COVID-19 Patients in Sri Lanka
- [COVID-19 Countries Trends & Comparison](https://energ.ee/corona-virus) ([repo](https://github.com/energee/corona-virus)): Country comparison of COVID-19 cases, with per-capita and growth views.
- [felipec covid-19](https://felipec.github.io/covid-19/) ([repo](https://github.com/felipec/covid-19)): Trajectory of confirmed COVID-19 cases per country after 100 in logarithmic scale and growth factor.
- [COVID-19 Global Report](https://nodimon.github.io/covid-19-report) ([repo](https://github.com/Nodimon/covid-19-report)): Vue.js app for monitoring the spread of the new coronavirus
- [COVID-19 Regional Relative TimeSeries](https://zbraniecki.github.io/covid19-timeseries/) ([repo](https://github.com/zbraniecki/covid19-timeseries)): Normalized regional comparative timeseries.
- [COVID-19 Country Travel Bans](https://www.travelsignals.io/coronavirus-country-travel-bans/) ([repo](https://github.com/eversionsystems/covid19)): An interactive map showing countries with travel restrictions and infection counts.
- [COVID-19 Stats and Trends](https://ritomsonowal.github.io/COVID-19-Stats-and-Trends/) ([repo](https://github.com/ritomsonowal/COVID-19-Stats-and-Trends))
- [COVID Reports](https://covidreports.netlify.com/) ([repo](https://github.com/kwasniew/covid.reports)): Coronavirus trends comparison by country
- [#daysbehinditaly](https://daysbehinditaly.com/) ([repo](https://github.com/peachteaboba/daysbehinditaly)): Number of days various countries are behind Italy in total COVID-19 cases assuming similar case growth rate
- [Covid-19 Project to track the spread of coronavirus](https://main-sh4.github.io/cv19/) ([repo](https://github.com/main-sh4/cv19)): Coronavirus information by country
- [Covid-19 Progress Reports by Country](https://www.bigpicturing.com/) ([repo](https://github.com/Psyzoo/covid19)): Coronavirus (Fight against) Progress by country
- [COVID-19-LK](https://hela-pawura.github.io/COVID-19-Sri-Lanka/) ([repo](https://github.com/Hela-Pawura/COVID-19-Sri-Lanka)): A Sri Lankan COVID-19 Tracker with a map and dark theme <3
- [COVID-19 Mauritius Statistics](https://covid19-mauritius.netlify.com/) ([repo](https://github.com/MrSunshyne/covid19-mauritius/)): A simple page with stats about the current COVID-19 situation in the small island of Mauritius.
- [Flattening the Curve by Country | COVID-19 🦠](https://flattening-the-curve.commutatus.com/) ([repo](https://github.com/commutatus/covid-19-flattening-the-curve)): A simple dashboard to showcase flattening of the curve by each country affected with COVID-19 - plotted over time.
- [World map and country comparison timeline](https://jsfiddle.net/highcharts/ehg3zwvy/show): Select multiple countries on the map for a clean comparison of how the number of cases develop.
- [COVID-19 Panel for Digital Signage](https://covid19.dsplay.tv/?countries=Global%2CChina%2CItaly%2CUS%2CSpain&duration=5) ([repo](https://github.com/dsplay/covid19-ds-panel)): Digital Signage-ready and configurable Panel with COVID-19 data.
- [COVID-19 Trends](https://bmaupin.github.io/covid19-trends/) ([repo](https://github.com/bmaupin/covid19-trends)): Simple charts showing COVID-19 trends
- [Covid-19 Race](https://thijmen.xyz/coronarace/) ([repo](https://github.com/Wendelstein7/Covid19-Race)) A basic html5/css/js webapp to compare the cases from a select few countries.
- [COVID-19 India dashboard](https://cov19in.herokuapp.com/) ([repo](https://github.com/ankushop2/CoVID19DashBoard)) - A simple dashboard made with Flask specifically for India with stats of various states and predictions of what's going to happen in the next five days.
- [Open COVID19 Map](https://covid19map.io) ([repo](https://github.com/daniel-karl/covid19-map)) Open map visualization with alternative data sources, containment scores, testing rate projection, replay mode
- [I am Covid -19 🦠](https://iamcovid-19.netlify.com/) ([repo](https://github.com/cryptodoct0r/Covid-19-Status-gql)) - Visualization of the covid-19 dataset using Nuxtjs(vuejs), Graphql and valuable information about getting through the Covid-19 pandemic.
- [Simple COVID-19 Tracker](https://www.randallarms.com/covid-19) ([repo](https://github.com/randallarms/covid-19)): Mobile-friendly and minimal page that displays the current total count of coronavirus cases and deaths in a selected region.
- [COVID-19 Report](https://covid19-report.netlify.com/) ([repo](https://github.com/viniciusrodrigues1a/covid19-report)): Coronavirus information by country in a mobile-friendly SPA.
- [Visualizing COVID-19 with D3](https://covid.lonnygomes.com) ([repo](https://github.com/LonnyGomes/covid-sankey-vizualization)): A responsive D3-based data visualization that leverages a [Sankey diagram](https://en.wikipedia.org/wiki/Sankey_diagram) to display the breakdown of the worldwide COVID-19 cases.
- [Coronavirus-meter](https://coronavirus-meter.com) ([repo](https://github.com/agaktr/coronavirus-meter)): Coronavirus meter provides statistics from cases all around the world. View cases from each country up to two months before. Coronavirus cases, deaths, recovered in statistical numbers from all around the world.
- [Telegram COVID-19 Monitoring](https://github.com/f2acode/covid-19-telegram) Telegram alert everyday with the statistics of COVID-19 in each country.
- [Coronavirus Infections](https://coronavirus.herrblauzahn.de/) ([repo](https://github.com/HerrBlauzahn/Coronavirus)): Track Coronavirus infections, deaths, recovers and active cases per country in chart and table.
- [Corona in Charts](https://coronaincharts.com/) ([repo](https://github.com/blaz-blazer/coronaincharts)): Corona graphs for each country with total cases, active cases, recovered and fatalities.
- [COVID-19 Monitoring And Charting](https://covid.ngaah.id/)([repo](https://github.com/ximplah/covidjs)): World COVID-19 Tracking, historical data and overview using NodeJS Server
- [COVID-19 Reaction Tracker](https://zealous-dubinsky-aae850.netlify.com) ([repo](https://github.com/tpkahlon/javascript100/tree/master/29)): Track user reactions across the globe
- [COVID-19 Data Visualization Using R Shiny](https://rahulch.shinyapps.io/covid)([repo](https://github.com/rahulchauhan049/covidDashboard)): Data Summary, Data Visualization, World Map and differnt Analytics plots. Made in r shiny
- [covid19-psvita-data](https://github.com/robDevs/covid19-psvita-data): An app for viewing COVID-19 Data and graphs on a Playstation Vita
- [COVID-19 in Numbers](https://covid-19.samorme.co.uk) ([repo](https://github.com/ormesam/covid-19)): Covid-19 stats and charts by country. Made with Blazor.

#### Analysis

- [COVID-19 Trends and Growth Rate](https://github.com/dariocazzani/COVID-19-trends): A Python implementation of growth rate and other trend analysis
- [Are we dead yet](https://paroj.github.io/arewedeadyet/) ([repo](https://github.com/paroj/arewedeadyet)): Live graphs of confirmed, infected and infection rate. Outbreak normalised for comparison.
- [epidemic-simulator](https://epidemic-simulator.now.sh) ([repo](https://github.com/RemiTheWarrior/epidemic-simulator)): Mathematical model using Macroscopic Rate Equations for simulating the future of the epidemic
- [Coronavirus Cases, Deaths, and Recoveries by Country](https://nickmccullum.com/coronavirus-data-by-country/) ([repo](https://github.com/nicholasmccullum/website)) - a blog post with charts that update daily
- [COVID-19 Best fit evolution](https://github.com/michetonu/covid19-best-fit-evolution) Visualizing the evolution of a best-fit logistic curve over time, showing the difficulty of predicting the number of future cases and deaths
