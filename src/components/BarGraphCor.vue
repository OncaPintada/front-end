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
  name: "BarGraphCor",
  components: {
    Bar,
  },
  data() {
    return {
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
        datasets: [
          {
            label: "Correlação com classificação",
            backgroundColor: "#00ae31a8",
            data: [
              -0.01, -0.1, 0.09, -0.19, 0.13, -0.09, -0.04, -0.19, 0.02, -0.1,
              -0.22, 0.15, -0.26, 0.0, -0.3, 0.0, -0.2, -0.33, -0.11, 0.03,
              0.02, 0.04, 0.0, 0.0, -0.01, 0.0, 0.0, 0.02, 0.01, 0.01,
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            max: 1.0,
            min: -1.0,
          },
        },
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
