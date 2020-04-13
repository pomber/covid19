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

### Projects using this dataset ([+ add yours](#user-content-adding-your-project-to-the-list))

#### APIs

- [COVID-19 Grafana API](https://covid19-grafana.herokuapp.com) ([repo](https://github.com/twei55/covid19-grafana-datasource)): JSON API to visualize stats in Grafana
- [COVID-19 GraphQL API](https://covid19-graphql.now.sh/) ([repo](https://github.com/rlindskog/covid19-graphql))
- [CovidAPI.info](https://covidapi.info) ([repo](https://github.com/backtrackbaba/covid-api)): Lightweight, Superfast REST API built to be consumed by dashboards.
- [COVID-19 Ruby Gem](https://github.com/everythings-cancelled/pomber_covid19)

#### Visualizations

- [COVID-19 World at a Glance!](https://covid-19-world.netlify.com/) ([repo](https://github.com/atapas/covid-19)): Dashboard with COVID-19 Visualization of my Country(India), World Spread Comparator and Country level details across the world.
- [COVID-19 Global Report](https://app.powerbi.com/view?r=eyJrIjoiNTFmNzExYzktN2QyNi00ZGNhLTg1MjQtYTUyOWIyMGYzOGI2IiwidCI6IjE1M2U3N2E0LWMyOWQtNGYyZS04ODU3LWU0MDU5M2YxNjkzMCJ9) ([repo](https://github.com/vinecz-data/coronavirus)): COVID-19 Global Report focus in Brazil and World. Made with Snowflake, Pentaho and Power BI.
- [Corona Status Brazil - Mobile Friendly](https://ericcoutinho.github.io/corona-status-brasil) ([repo](https://github.com/ericcoutinho/corona-status-brasil)): Covid-19 daily report Brazil in a mobile friendly website. 
- [COVID-19 Flight Info](https://www.covid19globalinfo.com/) ([repo](https://github.com/maschad/covid19-banned-flights)): Flight and Travel info as well as other stats related to the outbreak.
- [The Curve](https://thecurve.infinitesimals.space/) ([repo](https://github.com/eminx/thecurve)): The Curve
- [COVID-19 Notifier](https://coronanotifier.com/) ([repo](https://github.com/ElBedeawi/covid19)): Covid-19 Daily Notifier
- [COVID-19 Daily Report](https://covid19dailyreport.000webhostapp.com/) ([repo](https://github.com/Subhash3/COVID19_ANALYSIS)): Covid19 Daily Report Visualizer
- [Covid19 Visualizer](https://ray2294.github.io) ([repo](https://github.com/ray2294/ray2294.github.io)): Covid19 Graphical Visualizer
- [EU stats report on COVID-19](https://covid19eu.jonur.io/) ([repo](https://github.com/Jonur/covid19-eu-report)): COVID-19 tracker for EU countries
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
- [COVID-19 Data Visualization Using R Shiny](https://rahulch.shinyapps.io/covid)([repo](https://github.com/rahulchauhan049/covidDashboard)): Data Summary, Data Visualization, World Map and different Analytics plots. Made in r shiny
- [covid19-psvita-data](https://github.com/robDevs/covid19-psvita-data): An app for viewing COVID-19 Data and graphs on a Playstation Vita
- [COVID-19 Timeline](https://gitlab.com/AuliaYF/covid-19-timeline): A Flutter app for tracking COVID-19 data
- [COVID-19 in Numbers](https://covid-19.samorme.co.uk) ([repo](https://github.com/ormesam/covid-19)): Covid-19 stats and charts by country. Made with Blazor.
- [Corona-Virus-Numbers](https://github.com/robert-northmind/Corona-Virus-Numbers): Android and iOS app for visualising COVID-19 graphs developed using Flutter
- [covid19liveupdates chatbot](https://github.com/danbilokha/covid19liveupdates): Telegram chatbot & assistant for showing the current situation around the world
- [covid-19-Bot](https://github.com/keyzt/COVID-19-Bot): Vkontakte chatbot for showing the current situation around the world.
- [covid-19 charts](https://lucid-mccarthy-7c7e30.netlify.com/) ([repo](https://github.com/royriojas/corona/)): Yet another app with charts to compare the covid-19 outbreak per different countries.
- [Coronavirus Map and Charts](https://coronavirus-map-with-circles.herokuapp.com/) ([repo](https://github.com/clavesi/coronavirus-map)): A simple Flask app that shows a map of all COVID-19 cases and charts for each individual country.
- [ea-covid19-tracker](https://ea-covid19-tracker.herokuapp.com/) ([repo](https://github.com/mugabodeo/ea_covid_19_tracker)): keep tracking coronavirus cases around east africa community countries and discussing on platform .
- [COVID-19 Spread In India Visualization](https://shivampip.github.io/corvis/) ([repo](https://github.com/shivampip/faCorana)): How this pandemic spread in India. Visualization on Map
- [LWC Component COVID19 ](https://github.com/arufian/LWC-Component-COVID19): A LWC component that can be embedded into Account and Contact record page, which will show all COVID-19 statistics data based of Account's and Contact's respective country.
- [Corona Counter](https://edwardleks.github.io/corona_counter/) ([repo](https://github.com/EdwardLeks/corona_counter)): Simple Corona virus counter 🦠
- [Coronavirus WORLD STATISTICS](http://verultimasnoticias.com/covid19/): COVID-19 Stats and Charts
- [Cobot-19](https://discordapp.com/oauth2/authorize?&client_id=690568808154398772&scope=bot&permissions=51200) ([repo](https://github.com/Jackojc/cobot-19)): A Discord bot that graphs Covid-19 statistics.
- [COVIDmap - Global Map Visualization 🗺](https://covidmap.now.sh/) ([repo](https://github.com/mayankverr/COVIDmap)): Map visualization of all the areas affected by coronavirus disease aka COVID-19
- [Covid19 Racing Chart](https://covid19.lkameya.com/) ([repo](https://github.com/lkameya/covid19)): Racing Chart of the cases/deaths evolution through time.
- [Covid19 Visuals](https://covid19visuals.com/) ([repo](https://github.com/priyanshrastogi/covid19visuals)): Global Covid19 Statistics, Visualizations (Maps, Charts, Tables) and Facts.
- [corona-tracker](https://arosisi.github.io/corona-tracker) ([repo](https://github.com/arosisi/corona-tracker)): 3D & 2D visualization of the number of cases worldwide
- [COVID-19 By Country](https://cityxdev.github.io/covid19ByCountry) ([repo](https://github.com/cityxdev/covid19ByCountry)): Comparison of the COVID-19 pandemic by country, weighted by population. Data series aligned by the day that the country reached the 100th case
- [Build a Coronavirus web site with Next.js](https://pomb.us/nextjs-static-props/) ([repo](https://github.com/pomber/nextjs-static-props)) - How to use Next.js to build a static Coronavirus web site
- [Covids' World](https://yakko-w.glitch.me/)([repo](https://github.com/blubbll/yakko-w): A version of Yakkos World. But with covid livedata. Yeah ._.
- [A small COVID-19 dashboard built with Plotly Dash](https://covid-monitor.herokuapp.com/) ([repo](https://github.com/ivan-rivera/covid19))
- [Covid-19 Chart](https://ngmikeng.github.io/angular-chart-covid19/) ([repo](https://github.com/ngmikeng/angular-chart-covid19)): A simple SPA web app build with Angular and Highcharts.
- [covid-vue-chart](https://syui.github.io/covid-vue-chart)([repo](https://github.com/syui/covid-vue-chart)): A simple web site build with Vue and Axios, Apexcharts.

#### Analysis

- [COVID-19 Trends and Growth Rate](https://github.com/dariocazzani/COVID-19-trends): A Python implementation of growth rate and other trend analysis
- [Are we dead yet](https://paroj.github.io/arewedeadyet/) ([repo](https://github.com/paroj/arewedeadyet)): Live graphs of confirmed, infected and infection rate. Outbreak normalised for comparison.
- [epidemic-simulator](https://epidemic-simulator.now.sh) ([repo](https://github.com/RemiTheWarrior/epidemic-simulator)): Mathematical model using Macroscopic Rate Equations for simulating the future of the epidemic
- [Coronavirus Cases, Deaths, and Recoveries by Country](https://nickmccullum.com/coronavirus-data-by-country/) ([repo](https://github.com/nicholasmccullum/website)) - a blog post with charts that update daily
- [COVID-19 Best fit evolution](https://github.com/michetonu/covid19-best-fit-evolution) Visualizing the evolution of a best-fit logistic curve over time, showing the difficulty of predicting the number of future cases and deaths
- [PowerBI-driven COVID-2019 Tracking](https://github.com/andriikopp/powerbi-covid-2019/tree/master): Power BI Desktop dashboard based on JSON data about COVID-2019 spread
- [COVID-19 Linear Regression Model](https://blazpocrnja.github.io/covid-19/) ([repo](https://github.com/BlazPocrnja/covid-19)): React web application using linear regression to plot trendlines for daily case growth.

### Adding your project to the list

Pull requests adding more projects to this list are welcome, just a few rules:
- Add only open source projects
- Make sure the project cite this repo as a data source (with a link) 
- Follow the same order as the rest of the list `- [project-name](your-project-url) ([repo](repo-url)): description`
- Try not to add extra blank lines, it breaks the formatting


👉 [add a new project to the list](https://github.com/pomber/covid19/edit/master/readme.md)

## License

The code from this repo is MIT licensed.  
The data is under [CSSEGISandData/COVID-19](https://github.com/CSSEGISandData/COVID-19/) terms of use.
