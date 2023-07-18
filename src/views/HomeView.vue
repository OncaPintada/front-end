<template>
  <div class="view">
    <h1 class="mt-5 mb-3 title">Base de Dados</h1>
    <p class="">
      A
      <a
        href="https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud"
        class="text-reset"
        >base de dados</a
      >
      que iremos analisar contém transações de cartões de crédito feitas por
      usuários europeus em setembro de 2013. O dataset é o resultado de uma
      transformação dos dados originais pelo algoritmo PCA
      <a
        href="https://medium.com/analytics-vidhya/pca-a-linear-transformation-f8aacd4eb007"
        class="text-reset"
        >(Principal component analysis)</a
      >. Ele possui 31 atributos sendo 3 identificáveis (time, amount e class) e
      28 não identificáveis. A proporção dos casos de fraude pode ser vista
      graficamente:
    </p>
    <div class="paiPie mb-3">
      <!-- Gráfico - Proporção de casos de fraude -->
      <PieGraph class="pie" />
    </div>

    <table class="table table-striped">
      <!-- Tabela de dados -->
      
    </table>
    <p class="">
      Como podemos observar, o dataset é muito desbalanceado, possuindo
      pouquíssimos casos de fraude. Já seus atributos variam de forma diferente,
      como é possível observar:
    </p>
    <div class="">
      <!-- Gráfico - Variação dos atributos -->
      <h3>grafico aqui</h3>

    </div>
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Escolher Atributo
      </button>

      <ul class="dropdown-menu">
        <!-- Opções de atributos -->
        <li class="dropdown-item">atributo1</li>
        <li class="dropdown-item">atributo2</li>
        <li class="dropdown-item">atributo3</li>
      </ul>
    </div>
    <p class="">
      Percebemos que a maior parte deles se concentra em um intervalo pequeno de
      valores, ou seja, possuem um grau alto de compactação. É possível analisar
      a correlação dos atributos com sua classificação, estabelecendo que 1 (ou
      -1) é a correlação máxima (proporcionais) e 0 é a mínima (sem correlação):
    </p>
    <div class="">
      <!-- Gráfico - Correlação dos atributos -->
      <h3>grafico aqui</h3>
    </div>
    <p class="">
      Percebemos que há uma correlação negativa da classe com as colunas v1, v3,
      v5, v6, v7, v10, v12, v14, v16, v17 e v18 e uma correlação positiva com os
      atributos v2, v4 e v11. Agora vamos visualizar como são os valores dos
      atributos de transações fraudulentas e não fraudulentas:
    </p>
    <div class="">
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
export default {
  components: { PieGraph },
};
</script>
