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
          "v12",
          "v4",
          "v11",
          "v17",
          "v3",
          "v7",
          "v16",
          "v2",
        ],
        datasets: [
          {
            label: "Importância Atributos",
            backgroundColor: "#00ae31a8",
            data: [
              0.2836084, 0.1878217, 0.1520566, 0.1328622, 0.06897722,
              0.06582159, 0.04126462, 0.02646653, 0.02555864, 0.01556263,
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
