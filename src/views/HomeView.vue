<template>
  <div class="view container container-fluid">
    <h1 class="mt-5 mb-3 title">Base de Dados</h1>
    <p class="">
      A
      <a
        href="https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud"
        class="text-reset link-success link-underline-opacity-25 link-underline-opacity-100-hover"
        >base de dados</a
      >
      que iremos analisar contém transações de cartões de crédito feitas por
      usuários europeus em setembro de 2013. O dataset é o resultado de uma
      transformação dos dados originais pelo algoritmo PCA
      <a
        href="https://medium.com/analytics-vidhya/pca-a-linear-transformation-f8aacd4eb007"
        class="text-reset link-success link-underline-opacity-25 link-underline-opacity-100-hover"
        >(Principal component analysis)</a
      >. Ele possui 31 atributos sendo 3 identificáveis (time, amount e class) e
      28 não identificáveis. A proporção dos casos de fraude pode ser vista
      graficamente:
    </p>
    <div class="paiPie mb-4">
      <!-- Gráfico - Proporção de casos de fraude -->
      <PieGraph class="pie" />
    </div>

    <table class="table table-bordered mb-4 mb-3">
      <thead class="table-success">
        <tr>
          <th></th>
          <th>Fraude</th>
          <th>Não Fraude</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="table-secondary mb-4">Quantidade</th>
          <td>492</td>
          <td>284315</td>
          <td>284807</td>
        </tr>
        <tr>
          <th class="table-secondary mb-4">Proporção</th>
          <td>0.173%</td>
          <td>99.827%</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>
    <p class="mb-4">
      Como podemos observar, o dataset é muito desbalanceado, possuindo
      pouquíssimos casos de fraude. Já seus atributos variam de forma diferente,
      como é possível observar:
    </p>
    <div class="mb-4" id="barPar">
      <BarGraph :nameAttr="value" v-if="attr == 0" />
      <BarGraph :nameAttr="value" v-if="attr == 1" />
    </div>
    <div class="dropdown mb-4 d-flex justify-content-center">
      <button
        class="btn btn-success dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Escolher Atributo
      </button>

      <ul class="dropdown-menu text-center scroll">
        <!-- Opções de atributos -->
        <li class="dropdown-item" @click="onClick('time')">time</li>
        <li class="dropdown-item" @click="onClick('v1')">v1</li>
        <li class="dropdown-item" @click="onClick('v2')">v2</li>
        <li class="dropdown-item" @click="onClick('v3')">v3</li>
        <li class="dropdown-item" @click="onClick('v4')">v4</li>
        <li class="dropdown-item" @click="onClick('v5')">v5</li>
        <li class="dropdown-item" @click="onClick('v6')">v6</li>
        <li class="dropdown-item" @click="onClick('v7')">v7</li>
        <li class="dropdown-item" @click="onClick('v8')">v8</li>
        <li class="dropdown-item" @click="onClick('v9')">v9</li>
        <li class="dropdown-item" @click="onClick('v10')">v10</li>
        <li class="dropdown-item" @click="onClick('v11')">v11</li>
        <li class="dropdown-item" @click="onClick('v12')">v12</li>
        <li class="dropdown-item" @click="onClick('v13')">v13</li>
        <li class="dropdown-item" @click="onClick('v14')">v14</li>
        <li class="dropdown-item" @click="onClick('v15')">v15</li>
        <li class="dropdown-item" @click="onClick('v16')">v16</li>
        <li class="dropdown-item" @click="onClick('v17')">v17</li>
        <li class="dropdown-item" @click="onClick('v18')">v18</li>
        <li class="dropdown-item" @click="onClick('v19')">v19</li>
        <li class="dropdown-item" @click="onClick('v20')">v20</li>
        <li class="dropdown-item" @click="onClick('v21')">v21</li>
        <li class="dropdown-item" @click="onClick('v22')">v22</li>
        <li class="dropdown-item" @click="onClick('v23')">v23</li>
        <li class="dropdown-item" @click="onClick('v24')">v24</li>
        <li class="dropdown-item" @click="onClick('v25')">v25</li>
        <li class="dropdown-item" @click="onClick('v26')">v26</li>
        <li class="dropdown-item" @click="onClick('v27')">v27</li>
        <li class="dropdown-item" @click="onClick('v28')">v28</li>
        <li class="dropdown-item" @click="onClick('amount')">amount</li>
      </ul>
    </div>
    <p class="mb-4">
      Percebemos que a maior parte deles se concentra em um intervalo pequeno de
      valores, ou seja, possuem um grau alto de compactação. É possível analisar
      a correlação dos atributos com sua classificação, estabelecendo que 1 (ou
      -1) é a correlação máxima (proporcionais) e 0 é a mínima (sem correlação):
    </p>
    <div class="mb-4">
      <!-- Gráfico - Correlação dos atributos -->
      <BarGraphCor />
    </div>
    <p class="mb-4">
      Percebemos que há uma correlação negativa da classe com as colunas v1, v3,
      v5, v6, v7, v10, v12, v14, v16, v17 e v18 e uma correlação positiva com os
      atributos v2, v4 e v11. Agora vamos visualizar como são os valores dos
      atributos de transações fraudulentas e não fraudulentas:
    </p>
    <div class="mb-4">
      <!-- Gráfico - Valores dos atributos -->
      <LineGraphPar />
    </div>
    <p class="mb-4">
      Através do gráfico, vemos que os atributos que mais se diferem entre as
      classes (fraude ou não fraude) são esses: v3, v4, v9, v10, v11, v12, v14,
      v16, v17, v18.
    </p>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

.view {
  margin: 0 auto;
  width: 1100px;
  color: #2d2d2d;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
}

.dropdown-menu {
  max-height: 300px;
  overflow-y: scroll;
}

.dropdown-menu li:active {
  background-color: #00ae31a8;
}

p a:hover {
  color: #00ae31a8;
}

.title {
  color: #2d2d2d;
  font-family: Inter;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
}

.paiPie {
  width: 60%;
  margin: auto;
}
.link-success {
  color: #00ae31a8;
}
</style>
<script lang="jsx">
import PieGraph from "@/components/PieGraph.vue";
import BarGraph from "@/components/BarGraph.vue";
import BarGraphCor from "@/components/BarGraphCor.vue";
import LineGraphPar from "@/components/LineGraphPar.vue";

export default {
  components: { PieGraph, BarGraph, BarGraphCor, LineGraphPar },
  methods: {
    onClick(str) {
      if (this.attr == 0) {
        this.value = `${str}`;
        this.attr = 1;
      } else {
        this.value = `${str}`;
        this.attr = 0;
      }
    },
  },
  data() {
    return {
      attr: 0,
      value: "time",
    };
  },
};
</script>
