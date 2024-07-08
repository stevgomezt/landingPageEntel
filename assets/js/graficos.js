var circle = document.getElementById("myCircleGraph").getContext("2d");

var myCircleGraph = new Chart(circle, {
  type: "pie",
  data: {
    labels: ["MOVISTAR", "VTR", "CLARO", "ENTEL", "WOM"],
    datasets: [
      {
        label: "Compras",
        data: [20.9, 1.3, 16.7, 34.6, 25.7],
        borderWidth: 2,
        borderColor: "#ffffff",
        backgroundColor: [
          "rgba(1, 157, 244, 0.6)",
          "rgba(255, 44, 131, 0.6)",
          "rgba(227, 6, 19, 0.6)",
          "rgba(0, 46, 255, 0.6)",
          "rgba(153, 102, 255, 0.6)"
        ],
        lineTension: 0.1
      }
    ]
  },
  options: {
    layout: {
      padding: {
        top: 15  // Añade 15px de padding en la parte superior
      }
    },
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 10,
        fontColor: "#444444",
        fontSize: 16
      }
    },
    plugins: {
      datalabels: {
        formatter: function (value, ctx) {
          var label = ctx.chart.data.labels[ctx.dataIndex];
          var sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
          var percentage = ((value / sum) * 100).toFixed(1) + "%";
          return label + ": " + percentage;
        },
        color: '#fff',
        font: {
          size: 14
        },
        anchor: 'end',
        align: 'start',
        offset: 70,
      }
    }
  }
});

var circle = document.getElementById("myCircleGraph1").getContext("2d");

var myCircleGraph = new Chart(circle, {
  type: "pie",
  data: {
    labels: ["MOVISTAR", "VTR", "CLARO", "ENTEL", "WOM"],
    datasets: [
      {
        label: "Compras",
        data: [20.9, 1.3, 16.7, 34.6, 25.7],
        borderWidth: 2,
        borderColor: "#ffffff",
        backgroundColor: [
          "rgba(1, 157, 244, 0.6)",
          "rgba(255, 44, 131, 0.6)",
          "rgba(227, 6, 19, 0.6)",
          "rgba(0, 46, 255, 0.6)",
          "rgba(153, 102, 255, 0.6)"
        ],
        lineTension: 0.1
      }
    ]
  },
  options: {
    layout: {
      padding: {
        top: 15  // Añade 15px de padding en la parte superior
      }
    },
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 10,
        fontColor: "#444444",
        fontSize: 16
      }
    },
    plugins: {
      datalabels: {
        formatter: function (value, ctx) {
          var label = ctx.chart.data.labels[ctx.dataIndex];
          var sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
          var percentage = ((value / sum) * 100).toFixed(1) + "%";
          return label + ": " + percentage;
        },
        color: '#fff',
        font: {
          size: 14
        },
        anchor: 'end',
        align: 'start',
        offset: 70,
      }
    }
  }
});
