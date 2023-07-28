<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default {
  name: "BarGraphImpor",
  components: {
    Bar,
  },
  data() {
    return {
      chartData: {
        labels: [
          "v14",
          "v10",
          "v4",
          "v12",
          "v11",
          "v17",
          "v3",
          "v16",
          "v7",
          "v2",
        ],
        datasets: [
          {
            label: "Importância Atributos",
            backgroundColor: "#00ae31a8",
            data: [
              0.288352, 0.1747, 0.142909, 0.131275, 0.080431, 0.068549,
              0.044386, 0.027654, 0.026582, 0.015164,
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {},
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
            text: "Correlação atributos",
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
