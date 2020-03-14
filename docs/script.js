window.onload = function() {
  var app = new Vue({
    el: "#app",

    data() {
      return {
        data: null,
        charts: {}
      };
    },

    mounted() {
      return fetch("timeseries.json")
        .then(res => res.json())
        .then(rawData => {
          this.data = Object.freeze(
            Object.keys(rawData)
              .sort()
              .map(key => ({ id: this.key2ID(key), key, data: rawData[key] }))
          );

          setTimeout(() => {
            this.data.forEach(item => this.generateChart(item.key, item.data));
          }, 500);
        });
    },

    methods: {
      key2ID(key) {
        return key.replace(/[^\w]/g, "");
      },

      generateChart(name, data) {
        const ctx = document
          .querySelector(`#${this.key2ID(name)} canvas`)
          .getContext("2d");
        Vue.set(
          this.charts,
          name,
          new Chart(ctx, {
            type: "line",
            data: {
              datasets: [
                {
                  label: "Confirmed",
                  data: data.map(item => ({
                    x: moment(item.date, "YYYY-M-DD"),
                    y: item.confirmed
                  })),

                  fill: false,
                  borderColor: "rgb(75, 154, 192)",
                  pointRadius: 1
                },

                {
                  label: "Deaths",
                  data: data.map(item => ({
                    x: moment(item.date, "YYYY-M-DD"),
                    y: item.deaths
                  })),

                  fill: false,
                  borderColor: "rgb(192, 75, 75)",
                  pointRadius: 1
                },

                {
                  label: "Recovered",
                  data: data.map(item => ({
                    x: moment(item.date, "YYYY-M-DD"),
                    y: item.recovered
                  })),

                  fill: false,
                  borderColor: "rgb(75, 192, 84)",
                  pointRadius: 1
                }
              ]
            },

            options: {
              maintainAspectRatio: false,
              responsive: false,
              animation: {
                duration: 0
              },

              legend: {
                position: "bottom"
              },

              scales: {
                yAxes: [
                  {
                    type: "linear",
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ],

                xAxes: [
                  {
                    type: "time",
                    time: {
                      unit: "day"
                    }
                  }
                ]
              }
            }
          })
        );
      }
    }
  });
};
