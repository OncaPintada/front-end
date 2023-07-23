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
          "v9",
          "v2",
          "v21",
          "v5",
          "v19",
          "v18",
          "amount",
          "v8",
          "v1",
          "v6",
          "v27",
          "v26",
          "v15",
          "v20",
          "v13",
          "v23",
          "v25",
          "v28",
          "v22",
          "v24",
        ],
        datasets: [
          {
            label: "Importância Atributos",
            backgroundColor: "#00ae31a8",
            data: [
              0.1795496013, 0.1402414572, 0.1134637709, 0.1071960548,
              0.0717591575, 0.0684089591, 0.051742979, 0.0358095597,
              0.0275953393, 0.0216481994, 0.0189321202, 0.0144710446,
              0.012497657, 0.0115483303, 0.0109992943, 0.0108577123,
              0.0106903631, 0.0105968579, 0.0094013483, 0.0091863494,
              0.0088515138, 0.0087359025, 0.0084634276, 0.0074971916,
              0.0068032675, 0.0061521411, 0.0060947312, 0.0056738145,
              0.0051318545,
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
