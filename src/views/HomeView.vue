<template>
  <div class="view">
    <h1 class="text-center mt-5 mb-3">Base de Dados</h1>
    <p class="text-center"> A <a href="https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud" class="text-reset">base de
        dados</a>
      que iremos analisar contém transações de cartões de crédito feitas por usuários europeus em setembro de 2013. O
      dataset é o resultado de uma transformação dos dados originais pelo algoritmo PCA <a
        href="https://medium.com/analytics-vidhya/pca-a-linear-transformation-f8aacd4eb007" class="text-reset">(Principal
        component analysis)</a>. Ele possui 31 atributos sendo 3 identificáveis (time, amount e class) e 28 não
      identificáveis. A proporção dos casos de fraude pode ser vista graficamente:</p>
    <div class="text-center">
      <!-- Gráfico - Proporção de casos de fraude -->

      <h3>grafico aqui</h3>
    </div>

    <table class="table table-striped">
      <!-- Tabela de dados -->

    </table>
    <p class="text-center">Como podemos observar, o dataset é muito desbalanceado, possuindo pouquíssimos casos de fraude.
      Já seus atributos variam de forma diferente, como é possível observar:</p>
    <div class="text-center">
      <!-- Gráfico - Variação dos atributos -->
      <h3>grafico aqui</h3>
    </div>
    <div class="text-center dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Escolher Atributo
      </button>

      <ul class="dropdown-menu">
        <!-- Opções de atributos -->
        <li><a class="dropdown-item" href="#">atributo1</a></li>
        <li><a class="dropdown-item" href="#">atributo2</a></li>
        <li><a class="dropdown-item" href="#">atributo3</a></li>
      </ul>
    </div>
    <p class="text-center">Percebemos que a maior parte deles se concentra em um intervalo pequeno de valores, ou seja,
      possuem um grau alto de compactação. É possível analisar a correlação dos atributos com sua classificação,
      estabelecendo que 1 (ou -1) é a correlação máxima (proporcionais) e 0 é a mínima (sem correlação):</p>
    <div class="text-center">
      <!-- Gráfico - Correlação dos atributos -->
      <h3>grafico aqui</h3>
    </div>
    <p class="text-center">Percebemos que há uma correlação negativa da classe com as colunas v1, v3, v5, v6, v7, v10,
      v12, v14, v16, v17 e v18 e uma correlação positiva com os atributos v2, v4 e v11. Agora vamos visualizar como são os
      valores dos atributos de transações fraudulentas e não fraudulentas:</p>
    <div class="text-center">
      <!-- Gráfico - Valores dos atributos -->
      <h3>grafico aqui</h3>
    </div>
    <p class="text-center">Através do gráfico, vemos que os atributos que mais se diferem entre as classes (fraude ou não
      fraude) são esses: v3, v7, v9, v10, v11, v12, v14, v16, v17, v18.</p>
  </div>
</template>

<style>
.view {
  margin: 0 auto;
  width: 90%;
}
</style>


