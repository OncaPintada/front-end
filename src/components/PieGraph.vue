<template>
  <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Tooltip, Legend, Title, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, Title, ArcElement);

export default {
  name: "BarChart",
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ["Não Fraude", "Fraude"],
        datasets: [
          {
            backgroundColor: ["#00ae31a8", "#ff3737d4"],
            data: [284315, 492],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 23,
                family: "'Raleway', sans-serif",
              },
            },
          },
          title: {
            display: true,
            text: "Proporção base de dados",
            font: {
              size: 23,
              family: "'Raleway', sans-serif",
            },
          },
          tooltip: {
              // This more specific font property overrides the global property
              titleFont: {
                size: 23,
                family: "'Raleway', sans-serif"
              },
              bodyFont: {
                size: 23,
                family: " sans-serif"
              },
              padding: 15
          },
        },
      },
    };
  },
};
</script>
