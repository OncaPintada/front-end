<template>
  <div class="viewCus">
    <div class="wigPar">
      <h1 class="title titleIdeia">Monitoramento de transações</h1>
      <div class="realTimeGraph">
        <div class="graphRealPar">
          <Line
            :data="this.chartData"
            :options="this.chartOptions"
            v-if="graphValue == 0"
          /><Line
            :data="this.chartData"
            :options="this.chartOptions"
            v-if="graphValue == 1"
          />
        </div>
      </div>
      <div class="graphInformationSmall transactionsQuan">
        <div class="subInfo">
          <p class="textInf">Transações analisadas</p>
          <p class="textInf green">
            {{ numberTransations }}
          </p>
        </div>
      </div>
      <div class="graphInformationSmall possibleFrauds">
        <div class="subInfo">
          <p class="textInf">Possíveis fraudes</p>
          <p class="textInf red">{{ possibleFrauds }}</p>
        </div>
      </div>
      <div class="graphInformationSmall lastFrauds">
        <div class="subInfo">
          <p class="textInf">Proporção fraudes</p>
          <p class="textInf red" v-if="tendency == 'down'">
            <img src="../assets/up.png" alt="Up triangle" />
            {{ Math.round((possibleFrauds / numberTransations) * 100) }}%
          </p>
          <p class="textInf green" v-if="tendency == 'up'">
            <img src="../assets/down.png" alt="Down triangle" />
            {{ Math.round((possibleFrauds / numberTransations) * 100) }}%
          </p>
        </div>
      </div>
      <div class="graphInformationSmall lastTransactions">
        <div class="subInfo">
          <p class="textInf">Últimas transações</p>
          <p class="textInf red" v-if="tendencyLast == 'down'">
            <img src="../assets/up.png" alt="Up triangle" />{{
              lastTransactions
            }}%
          </p>
          <p class="textInf green" v-if="tendencyLast == 'up'">
            <img src="../assets/down.png" alt="Down triangle" />{{
              lastTransactions
            }}%
          </p>
        </div>
      </div>
      <div class="graphInformationLarge">
        <div class="subInfo">
          <p class="textInf">Termômetro das transações</p>
          <p class="textInf blue" v-if="this.temp == 'low'">ABAIXO DO NORMAL</p>
          <p class="textInf green" v-if="this.temp == 'normal'">NORMAL</p>
          <p class="textInf yellow" v-if="this.temp == 'high'">
            ACIMA DO NORMAL
          </p>
          <p class="textInf red" v-if="this.temp == 'alert'">ALERTA!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.viewCus {
  padding: 0;
  margin: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
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
  width: 1327px;
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.textInf img {
  width: 13.14%;
  margin: 2%;
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
@media screen and (max-width: 1350px) {
  .viewCus {
    margin: 40px 0px;
    height: 675px;
  }
  .realTimeGraph {
    width: 655px;
    height: 368px;
  }
  .graphInformationSmall {
    width: 244px;
    height: 178px;
  }
  .graphInformationLarge {
    width: 400px;
    height: 178px;
  }
  .wigPar {
    width: 955px;
    height: 675px;
    grid-template-columns: 277px 254px 156px 267px;
    grid-template-rows: 91px 189px 189px 215px;
  }
  .textInf {
    font-size: 20px;
  }
  .title {
    font-size: 35px;
  }
}
@media screen and (max-width: 980px) {
  .viewCus {
    margin: 30px 0px;
    height: 487px;
  }
  .realTimeGraph {
    width: 463px;
    height: 265px;
  }
  .graphInformationSmall {
    width: 172px;
    height: 128px;
  }
  .graphInformationLarge {
    width: 283px;
    height: 128px;
  }
  .wigPar {
    width: 675px;
    height: 487px;
    grid-template-columns: 195px 179px 113px 188px;
    grid-template-rows: 65px 137px 137px 132px;
  }
  .textInf {
    font-size: 14px;
  }
  .title {
    font-size: 28px;
  }
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
import x_test from "@/assets/X_test.json";
//
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
  async mounted() {
    let jsonResponse;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listItems: x_test,
      }),
    };
    jsonResponse = await this.fetchClassification("http://127.0.0.1:8000/classificationAll", requestOptions)
    this.classficationList = jsonResponse.classification
    setInterval(() => {
      const aux = [];
      const aux_ = [];
      const lastLastTransaction = this.lastTransactions;
      const lastProportionFrauds = Math.round(
        (this.possibleFrauds / this.numberTransations) * 100
      );
      this.chartData.datasets[0].data.forEach((ele) => aux.push(ele));
      this.chartData.labels.forEach((ele) => aux_.push(ele));
      aux.push(this.classficationList[this.numberTransations]);
      aux_.push(this.numberTransations + 1);
      this.numberTransations += 1;
      if (aux.slice(-1)[0] == 1) {
        this.possibleFrauds += 1;
      }
      this.lastTransactions = Math.round(
        (aux.filter((el) => el == 1).length / aux.length) * 100
      );
      if (lastLastTransaction > this.lastTransactions) {
        this.tendencyLast = "up";
      } else if (lastLastTransaction < this.lastTransactions) {
        this.tendencyLast = "down";
      }
      this.proportionFrauds = Math.round(
        (this.possibleFrauds / this.numberTransations) * 100
      );
      if (lastProportionFrauds > this.proportionFrauds) {
        this.tendency = "up";
      } else if (lastProportionFrauds < this.proportionFrauds) {
        this.tendency = "down";
      }
      if (this.lastTransactions > 15) {
        this.temp = "alert";
      } else if (this.lastTransactions > 10) {
        this.temp = "high";
      } else if (this.lastTransactions > 5) {
        this.temp = "normal";
      } else {
        this.temp = "low";
      }
      this.chartData = {
        labels: aux_.slice(-30),
        datasets: [
          {
            label: "Classificação",
            backgroundColor: "#00ae31a8",
            borderColor: "#00ae31a8",
            data: aux.slice(-30),
          },
        ],
      };
      this.graphValue = 0;
      this.graphValue = 1;
    }, 1000);
  },
  components: {
    Line,
  },
  methods: {},
  data() {
    return {
      async fetchClassification(url, requestOptions) {
        let response = await fetch(url, requestOptions);
        response = await response.json();
        return response;
      },
      getRandomInt() {
        return Math.floor(Math.random() + 0.25);
      },
      classficationList: [],
      graphValue: 0,
      temp: "low",
      numberTransations: 20,
      possibleFrauds: 1,
      proportionFrauds: 5,
      lastTransactions: 5,
      tendency: "up",
      tendencyLast: "up",
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        borderColor: "#00ae31a8",
        scales: {
          y: {
            max: 1.5,
            min: -0.5,
          },
        },
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
            display: false,
            text: "Distribuição atributos",
            font: {
              size: 23,
              family: "'Raleway', sans-serif",
            },
          },
          tooltip: {
            // This more specific font property overrides the global property
            titleFont: {
              size: 23,
              family: "'Raleway', sans-serif",
            },
            bodyFont: {
              size: 23,
              family: " sans-serif",
            },
            padding: 15,
          },
        },
      },
      chartData: {
        labels: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        ],
        datasets: [
          {
            label: "Classificação",
            backgroundColor: "#00ae31a8",
            data: [
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ],
          },
        ],
      },
    };
  },
};
</script>
