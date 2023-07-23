<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import json from "@/assets/feat-values.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Line,
  },
  data() {
    const dataset = [];
    let label = "";
    let backCol = "#BBB";
    let borderColor;
    for (let x = 0; x < 2; x++) {
      if (json[x]["class"] == 1) {
        label = "Fraude";
        backCol = "#ff3737d4";
        borderColor = "#ff3737d4";
      } else {
        label = "Não Fraude";
        backCol = "#00ae31a8";
        borderColor = "#00ae31a8";
      }
      dataset.push({
        label: label,
        backgroundColor: backCol,
        borderColor: borderColor,
        data: [
          json[x]["time"],
          json[x]["v1"],
          json[x]["v2"],
          json[x]["v3"],
          json[x]["v4"],
          json[x]["v5"],
          json[x]["v6"],
          json[x]["v7"],
          json[x]["v8"],
          json[x]["v9"],
          json[x]["v10"],
          json[x]["v11"],
          json[x]["v12"],
          json[x]["v13"],
          json[x]["v14"],
          json[x]["v15"],
          json[x]["v16"],
          json[x]["v17"],
          json[x]["v18"],
          json[x]["v19"],
          json[x]["v20"],
          json[x]["v21"],
          json[x]["v22"],
          json[x]["v23"],
          json[x]["v24"],
          json[x]["v25"],
          json[x]["v26"],
          json[x]["v27"],
          json[x]["v28"],
          json[x]["amount"],
        ],
      });
    }
    return {
      data: json,
      chartData: {
        labels: [
          "time",
          "v1",
          "v2",
          "v3",
          "v4",
          "v5",
          "v6",
          "v7",
          "v8",
          "v9",
          "v10",
          "v11",
          "v12",
          "v13",
          "v14",
          "v15",
          "v16",
          "v17",
          "v18",
          "v19",
          "v20",
          "v21",
          "v22",
          "v23",
          "v24",
          "v25",
          "v26",
          "v27",
          "v28",
          "amount",
        ],
        datasets: dataset,
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 19,
                family: "'Raleway', sans-serif",
              },
            },
          },
          title: {
            display: true,
            text: "Valores dos atributos",
            font: {
              size: 19,
              family: "'Raleway', sans-serif",
            },
          },
          tooltip: {
            // This more specific font property overrides the global property
            titleFont: {
              size: 19,
              family: "'Raleway', sans-serif",
            },
            bodyFont: {
              size: 19,
              family: " sans-serif",
            },
            padding: 15,
          },
        },
      },
    };
  },
};
</script>
