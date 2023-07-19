<template>
  <div class="view  container container-fluid ">
    <h1 class="mt-5 mb-3 title text-center">Base de Dados</h1>
    <p class="">
      A
      <a href="https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud" class="text-reset">base de dados</a>
      que iremos analisar contém transações de cartões de crédito feitas por
      usuários europeus em setembro de 2013. O dataset é o resultado de uma
      transformação dos dados originais pelo algoritmo PCA
      <a href="https://medium.com/analytics-vidhya/pca-a-linear-transformation-f8aacd4eb007" class="text-reset">(Principal
        component analysis)</a>. Ele possui 31 atributos sendo 3 identificáveis (time, amount e class) e
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
          <th class="table-secondary  mb-4">Proporção</th>
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
    <div class="mb-4 barPar">
      <BarGraph nameAttr="time" />
    </div>
    <div class="dropdown mb-4  d-flex justify-content-center">
      <button class="btn btn-success dropdown-toggle " type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        Escolher Atributo
      </button>

      <ul class="dropdown-menu text-center scroll">
        <!-- Opções de atributos -->
        <li class="dropdown-item" v-on:click="onClick('time')" >time</li>
        <li class="dropdown-item">v1</li>
        <li class="dropdown-item">v2</li>
        <li class="dropdown-item">v3</li>
        <li class="dropdown-item">v4</li>
        <li class="dropdown-item">v1</li>
        <li class="dropdown-item">v5</li>
        <li class="dropdown-item">v6</li>
        <li class="dropdown-item">v7</li>
        <li class="dropdown-item">v8</li>
        <li class="dropdown-item">v9</li>
        <li class="dropdown-item">v10</li>
        <li class="dropdown-item">v11</li>
        <li class="dropdown-item">v12</li>
        <li class="dropdown-item">v13</li>
        <li class="dropdown-item">v14</li>
        <li class="dropdown-item">v15</li>
        <li class="dropdown-item">v16</li>
        <li class="dropdown-item">v17</li>
        <li class="dropdown-item">v18</li>
        <li class="dropdown-item">v19</li>
        <li class="dropdown-item">v20</li>
        <li class="dropdown-item">v21</li>
        <li class="dropdown-item">v22</li>
        <li class="dropdown-item">v23</li>
        <li class="dropdown-item">v24</li>
        <li class="dropdown-item">v25</li>
        <li class="dropdown-item">v26</li>
        <li class="dropdown-item">v27</li>
        <li class="dropdown-item">v28</li>
        <li class="dropdown-item">amount</li>
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
      <h3>grafico aqui</h3>
    </div>
    <p class="mb-4">
      Percebemos que há uma correlação negativa da classe com as colunas v1, v3,
      v5, v6, v7, v10, v12, v14, v16, v17 e v18 e uma correlação positiva com os
      atributos v2, v4 e v11. Agora vamos visualizar como são os valores dos
      atributos de transações fraudulentas e não fraudulentas:
    </p>
    <div class="mb-4">
      <!-- Gráfico - Valores dos atributos -->
      <h3>grafico aqui</h3>
    </div>
    <p class="">
      Através do gráfico, vemos que os atributos que mais se diferem entre as
      classes (fraude ou não fraude) são esses: v3, v7, v9, v10, v11, v12, v14,
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

.view a:hover {
  color: #00ae30;
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
</style>
<script>
import PieGraph from "@/components/PieGraph.vue";
import BarGraph from "@/components/BarGraph.vue"
export default {
  components: { PieGraph, BarGraph },
  methods: {
    onClick(str) {
      console.log(str)
    }
  }
};

</script>