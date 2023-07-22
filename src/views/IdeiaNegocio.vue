<template>
  <div class="viewCus">
    <div class="wigPar">
      <h1 class="title titleIdeia">Monitoramento de transações</h1>
      <div class="realTimeGraph">
        <div class="graphRealPar">
          <Line
            :data="chartData"
            :options="chartOptions"
            v-if="graphValue == 0"
          />
        </div>
      </div>
      <div class="graphInformationSmall transactionsQuan">
        <div class="subInfo">
          <p class="textInf">Transações analisadas</p>
          <p class="textInf green">123123</p>
        </div>
      </div>
      <div class="graphInformationSmall possibleFrauds">
        <div class="subInfo">
          <p class="textInf">Possíveis fraudes</p>
          <p class="textInf red">451</p>
        </div>
      </div>
      <div class="graphInformationSmall lastFrauds">
        <div class="subInfo">
          <p class="textInf">Proporção fraudes</p>
          <p class="textInf green">12%</p>
        </div>
      </div>
      <div class="graphInformationSmall lastTransactions">
        <div class="subInfo">
          <p class="textInf">Últimas transações</p>
          <p class="textInf green">1.03%</p>
        </div>
      </div>
      <div class="graphInformationLarge">
        <div class="subInfo">
          <p class="textInf">Termômetro das Transações</p>
          <p class="textInf blue" v-if="temp == 'low'">ABAIXO DO NORMAL</p>
          <p class="textInf green" v-if="temp == 'normal'">NORMAL</p>
          <p class="textInf yellow" v-if="temp == 'high'">ACIMA DO NORMAL</p>
          <p class="textInf red" v-if="temp == 'alert'">ALERTA!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.viewCus {
  margin: 50px auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 1440px;
  height: 825px;
  color: #2d2d2d;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
}
.wigPar {
  display: grid;
  grid-template-columns: 385px 353px 218px 371px;
  grid-template-rows: 111px 232px 232px 250px;
  grid-template-areas:
    "title title title title"
    "graph graph graph transactionsQuan"
    "graph graph graph possibleFrauds"
    "lastFrauds lastTransactions graphInformationLarge graphInformationLarge";
  width: 92.15%;
  height: 825px;
  border-radius: 20px;
  background: #f0f0f0;
}
.wigPar p {
  margin: 10px 0px;
}
.title {
  color: #2d2d2d;
  font-family: Inter;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
}
.titleIdeia {
  margin: 0;
  padding: 2.41%;
  grid-area: title;
  display: flex;
  align-items: center;
}
.realTimeGraph {
  width: 910px;
  height: 450px;
  margin-left: 3.35%;
  border-radius: 20px;
  background: #e0e0e0;
  grid-area: graph;
  display: flex;
  align-items: center;
  justify-content: center;
}
.graphInformationSmall {
  width: 339px;
  height: 218px;
  border-radius: 20px;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.transactionsQuan {
  grid-area: transactionsQuan;
}
.possibleFrauds {
  grid-area: possibleFrauds;
}
.lastTransactions {
  grid-area: lastTransactions;
}
.lastFrauds {
  grid-area: lastFrauds;
  margin-left: 8.32%;
}
.graphInformationLarge {
  width: 557px;
  height: 218px;
  border-radius: 20px;
  background: #e0e0e0;
  grid-area: graphInformationLarge;
  display: flex;
  align-items: center;
  justify-content: center;
}
.textInf {
  width: 100%;
  color: #2d2d2d;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
}
.green {
  color: #0dab09;
}
.red {
  color: #f00;
}
.blue {
  color: #1ab6b6;
}
.yellow {
  color: #c89c00;
}
.graphRealPar {
  width: 90%;
  height: 90%;
}
</style>
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
  mounted() {
    setInterval(() => {
      this.chartData = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      };
      this.graphValue = 1;
      this.graphValue = 0;
    }, 3000);
  },
  components: {
    Line,
  },
  methods: {},
  data() {
    return {
      getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
      },
      graphValue: 0,
      temp: "low",
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
    };
  },
};
</script>
