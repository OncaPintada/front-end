<template>
  <Bar :data="chartData" :options="chartOptions" :nameAttr="nameAttr" />
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
  name: "BarGraph",
  props: {
    nameAttr: String,
  },
  components: {
    Bar,
  },
  data() {
    switch (this.nameAttr) {
      case "time":
        return {
          chartData: {
            labels: [
              10799.5, 32398.5, 53997.5, 75596.5, 97195.5, 118794.5, 140393.5,
              161992.5,
            ],
            datasets: [
              {
                label: "time",
                backgroundColor: "#00ae31a8",
                data: [12340, 35057, 46846, 50541, 11595, 35837, 49585, 43006],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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
      case "v1":
        return {
          chartData: {
            labels: [
              -52.73, -45.37, -38.01, -30.66, -23.3, -15.94, -8.58, -1.22,
            ],
            datasets: [
              {
                label: "v1",
                backgroundColor: "#00ae31a8",
                data: [1, 2, 14, 36, 114, 397, 4824, 279419],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v2":
        return {
          chartData: {
            labels: [-66.79, -54.95, -43.1, -31.25, -19.41, -7.56, 4.29, 16.13],
            datasets: [
              {
                label: "v2",
                backgroundColor: "#00ae31a8",
                data: [2, 2, 15, 52, 292, 19878, 264497, 69],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v3":
        return {
          chartData: {
            labels: [
              -44.72, -37.51, -30.29, -23.08, -15.86, -8.65, -1.44, 5.78,
            ],
            datasets: [
              {
                label: "v3",
                backgroundColor: "#00ae31a8",
                data: [1, 0, 19, 41, 118, 1377, 271770, 11481],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v4":
        return {
          chartData: {
            labels: [-4.27, -1.45, 1.37, 4.19, 7.01, 9.83, 12.65, 15.47],
            datasets: [
              {
                label: "v4",
                backgroundColor: "#00ae31a8",
                data: [4606, 135843, 132514, 11389, 344, 84, 23, 4],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v5":
        return {
          chartData: {
            labels: [
              -104.46, -85.89, -67.32, -48.75, -30.19, -11.62, 6.95, 25.52,
            ],
            datasets: [
              {
                label: "v5",
                backgroundColor: "#00ae31a8",
                data: [1, 0, 0, 2, 23, 5275, 279464, 42],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v6":
        return {
          chartData: {
            labels: [-19.94, -7.51, 4.92, 17.35, 29.79, 42.22, 54.65, 67.09],
            datasets: [
              {
                label: "v6",
                backgroundColor: "#00ae31a8",
                data: [18, 19550, 265195, 42, 1, 0, 0, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v7":
        return {
          chartData: {
            labels: [-33.3, -12.78, 7.74, 28.26, 48.78, 69.29, 89.81, 110.33],
            datasets: [
              {
                label: "v7",
                backgroundColor: "#00ae31a8",
                data: [19, 3837, 280908, 41, 1, 0, 0, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v8":
        return {
          chartData: {
            labels: [
              -67.39, -55.74, -44.08, -32.43, -20.78, -9.13, 2.53, 14.18,
            ],
            datasets: [
              {
                label: "v8",
                backgroundColor: "#00ae31a8",
                data: [1, 3, 6, 18, 176, 3321, 281191, 91],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v9":
        return {
          chartData: {
            labels: [-11.62, -7.99, -4.36, -0.73, 2.89, 6.52, 10.15, 13.78],
            datasets: [
              {
                label: "v9",
                backgroundColor: "#00ae31a8",
                data: [4, 45, 2054, 243364, 38582, 737, 20, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v10":
        return {
          chartData: {
            labels: [-21.57, -15.53, -9.48, -3.44, 2.6, 8.64, 14.68, 20.72],
            datasets: [
              {
                label: "v10",
                backgroundColor: "#00ae31a8",
                data: [10, 57, 139, 85872, 197607, 1058, 63, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v11":
        return {
          chartData: {
            labels: [-3.75, -1.64, 0.46, 2.56, 4.66, 6.76, 8.87, 10.97],
            datasets: [
              {
                label: "v11",
                backgroundColor: "#00ae31a8",
                data: [334, 86840, 178984, 18318, 201, 75, 40, 15],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v12":
        return {
          chartData: {
            labels: [-17.03, -13.71, -10.39, -7.08, -3.76, -0.44, 2.87, 6.19],
            datasets: [
              {
                label: "v12",
                backgroundColor: "#00ae31a8",
                data: [30, 56, 58, 155, 12132, 256761, 15612, 3],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v13":
        return {
          chartData: {
            labels: [-4.98, -3.37, -1.75, -0.14, 1.47, 3.09, 4.7, 6.32],
            datasets: [
              {
                label: "v13",
                backgroundColor: "#00ae31a8",
                data: [1, 1343, 46743, 165987, 66427, 4295, 10, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v14":
        return {
          chartData: {
            labels: [-17.36, -13.64, -9.92, -6.2, -2.48, 1.23, 4.95, 8.67],
            datasets: [
              {
                label: "v14",
                backgroundColor: "#00ae31a8",
                data: [11, 68, 144, 496, 51087, 232403, 582, 16],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v15":
        return {
          chartData: {
            labels: [-3.66, -1.99, -0.32, 1.35, 3.03, 4.7, 6.37, 8.04],
            datasets: [
              {
                label: "v15",
                backgroundColor: "#00ae31a8",
                data: [865, 28530, 170357, 83824, 1207, 18, 5, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v16":
        return {
          chartData: {
            labels: [-12.16, -8.23, -4.3, -0.37, 3.56, 7.49, 11.42, 15.35],
            datasets: [
              {
                label: "v16",
                backgroundColor: "#00ae31a8",
                data: [50, 111, 2975, 274500, 7161, 9, 0, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v17":
        return {
          chartData: {
            labels: [-23.01, -18.71, -14.41, -10.11, -5.8, -1.5, 2.8, 7.1],
            datasets: [
              {
                label: "v17",
                backgroundColor: "#00ae31a8",
                data: [19, 36, 84, 83, 164, 239121, 45166, 134],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v18":
        return {
          chartData: {
            labels: [-8.59, -6.77, -4.96, -3.14, -1.32, 0.5, 2.31, 4.13],
            datasets: [
              {
                label: "v18",
                backgroundColor: "#00ae31a8",
                data: [26, 31, 118, 2153, 79799, 188763, 13863, 54],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v19":
        return {
          chartData: {
            labels: [-6.41, -4.81, -3.21, -1.61, -0.01, 1.59, 3.19, 4.79],
            datasets: [
              {
                label: "v19",
                backgroundColor: "#00ae31a8",
                data: [2, 24, 1250, 37435, 206743, 36970, 2334, 49],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v20":
        return {
          chartData: {
            labels: [
              -48.63, -36.89, -25.15, -13.41, -1.67, 10.07, 21.81, 33.55,
            ],
            datasets: [
              {
                label: "v20",
                backgroundColor: "#00ae31a8",
                data: [1, 0, 18, 186, 283919, 669, 12, 2],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v21":
        return {
          chartData: {
            labels: [-30.95, -23.2, -15.45, -7.69, 0.06, 7.82, 15.57, 23.33],
            datasets: [
              {
                label: "v21",
                backgroundColor: "#00ae31a8",
                data: [1, 7, 33, 563, 283252, 858, 79, 14],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v22":
        return {
          chartData: {
            labels: [-9.59, -6.91, -4.23, -1.55, 1.12, 3.8, 6.48, 9.16],
            datasets: [
              {
                label: "v22",
                backgroundColor: "#00ae31a8",
                data: [14, 21, 329, 111804, 172429, 192, 14, 4],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v23":
        return {
          chartData: {
            labels: [-40.6, -32.18, -23.77, -15.35, -6.93, 1.49, 9.9, 18.32],
            datasets: [
              {
                label: "v23",
                backgroundColor: "#00ae31a8",
                data: [2, 2, 13, 54, 760, 283776, 183, 17],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v24":
        return {
          chartData: {
            labels: [-2.37, -1.45, -0.52, 0.41, 1.34, 2.27, 3.19, 4.12],
            datasets: [
              {
                label: "v24",
                backgroundColor: "#00ae31a8",
                data: [354, 22360, 89213, 158824, 13930, 9, 96, 21],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v25":
        return {
          chartData: {
            labels: [-9.18, -6.96, -4.73, -2.5, -0.27, 1.95, 4.18, 6.41],
            datasets: [
              {
                label: "v25",
                backgroundColor: "#00ae31a8",
                data: [2, 6, 33, 3050, 271644, 10032, 31, 9],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v26":
        return {
          chartData: {
            labels: [-2.22, -1.46, -0.69, 0.07, 0.84, 1.6, 2.37, 3.13],
            datasets: [
              {
                label: "v26",
                backgroundColor: "#00ae31a8",
                data: [5, 1988, 74107, 161432, 45221, 1564, 445, 45],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v27":
        return {
          chartData: {
            labels: [-19.18, -12.41, -5.64, 1.14, 7.91, 14.68, 21.45, 28.23],
            datasets: [
              {
                label: "v27",
                backgroundColor: "#00ae31a8",
                data: [1, 6, 1006, 283729, 63, 1, 0, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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

      case "v28":
        return {
          chartData: {
            labels: [-12.35, -6.19, -0.03, 6.13, 12.29, 18.45, 24.61, 30.77],
            datasets: [
              {
                label: "v28",
                backgroundColor: "#00ae31a8",
                data: [3, 196, 284429, 149, 14, 14, 1, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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
      case "amount":
        return {
          chartData: {
            labels: [
              1605.7, 4817.09, 8028.49, 11239.88, 14451.28, 17662.67, 20874.07,
              24085.46,
            ],
            datasets: [
              {
                label: "amount",
                backgroundColor: "#00ae31a8",
                data: [284571, 206, 22, 4, 1, 1, 1, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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
      default:
        return {
          chartData: {
            labels: [
              1605.7, 4817.09, 8028.49, 11239.88, 14451.28, 17662.67, 20874.07,
              24085.46,
            ],
            datasets: [
              {
                label: "amount",
                backgroundColor: "#00ae31a8",
                data: [284571, 206, 22, 4, 1, 1, 1, 1],
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
                    size: 19,
                    family: "'Raleway', sans-serif",
                  },
                },
              },
              title: {
                display: true,
                text: "Distribuição atributos",
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
    }
  },
};
</script>
