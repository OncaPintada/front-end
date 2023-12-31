<template>
  <div class="view container container-fluid">
    <h1 class="mt-5 mb-3 title">Análise Modelos</h1>

    <p class="mb-4">
      Agora que já sabemos a forma da nossa base de dados, vamos analisá-la a
      partir do treinamento de modelos de machine learning. Aqui focaremos em
      modelos de aprendizado supervisionado, já que possuímos as anotações de
      cada objeto.
    </p>
    <p class="mb-4">
      Foi decidido que essa análise seria feita com 4 partições de treino
      diferentes:
    </p>
    <ul>
      <li>Dataset original (sem oversampling e undersampling)</li>
      <li>Com undersampling, utilizando o algoritmo RandomUnderSampler</li>
      <li>Com oversampling, utilizando o algoritmo SMOTE</li>
      <li>Com oversampling, utilizando o algoritmo RandomOverSampler</li>
    </ul>
    <p class="mb-4">
      OBS: Nas partições de validação e teste não foram utilizadas esses
      algoritmos. Além disso, as partições mantiveram as proporções de casos de
      fraude/não fraude do dataset original.
    </p>
    <p class="mb-4">
      Os modelos utilizados foram: Árvore de decisão, MLP, XBoosting, SHAP,
      Random Forest e o KNeighbors. Em todos os casos nós fizemos o
      cross-validation para assegurar que as métricas estavam corretas.
    </p>
    <p class="mb-4">
      A primeira coisa a ser observada é que o undersampling não é uma maneira
      eficiente de pre-processar os dados desbalanceados para treinamento. Em
      todos os modelos ele foi o que pior performou, classificando erroneamente
      muitos casos de não fraude como fraude.
    </p>
    <p class="mb-4">
      Matrix de confusão para o modelo de Decision Tree utilizando
      undersampling:
    </p>
    <div class="tablePar">
      <table class="table tableMat table-bordered mb-4 mb-3">
        <caption>
          Predição do modelo
        </caption>
        <thead class="table-success">
          <tr>
            <th></th>
            <th>0</th>
            <th>1</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="table-secondary">0</th>
            <td>40211</td>
            <td>5294</td>
          </tr>
          <tr>
            <th class="table-secondary">1</th>
            <td>5</td>
            <td>59</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mb-4">
      Indo na contramão desse caso, as partições sem undersampling e
      oversampling(dataset original) e as com oversampling (RandomOverSampler)
      obtiveram os melhores resultados. Já as partições com oversampling (SMOTE)
      ficaram no meio do caminho, sendo melhores que as com undersampling mas
      piores que as outras duas partições.
    </p>
    <p class="mb-4">
      O modelo que obteve a melhor performance foi o Random Forest e se
      aproximou de resultados obtidos na
      <a
        class="text-reset link-success link-underline-opacity-25 link-underline-opacity-100-hover"
        href="https://ieeexplore.ieee.org/document/8717766"
        target="_blank"
        >literatura científica</a
      >. Ele não errou nenhum dos casos que classificou como fraude (da partição
      de validação) e obteve as melhores métricas de validação. Para a partição
      de teste, ele atingiu os seguintes resultados:
    </p>
    <div class="tablePar">
      <table class="table tableMat table-bordered mb-4 mb-3">
        <caption>
          Predição do modelo
        </caption>
        <thead class="table-success">
          <tr>
            <th></th>
            <th>0</th>
            <th>1</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="table-secondary">0</th>
            <td>56862</td>
            <td>2</td>
          </tr>
          <tr>
            <th class="table-secondary">1</th>
            <td>22</td>
            <td>76</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tablePar">
      <table class="table table-bordered mb-4 mb-3">
        <caption>
          Métricas de avaliação do modelo
        </caption>
        <thead class="table-success">
          <tr>
            <th></th>
            <th>Precision</th>
            <th>Recall</th>
            <th>F1</th>
            <th>Specificity</th>
            <th>Geom. Mean</th>
            <th>Iba</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="table-secondary">0</th>
            <td>1.00</td>
            <td>1.00</td>
            <td>0.78</td>
            <td>1.00</td>
            <td>0.88</td>
            <td>0.79</td>
            <td>56864</td>
          </tr>
          <tr>
            <th class="table-secondary">1</th>
            <td>0.97</td>
            <td>0.78</td>
            <td>1.00</td>
            <td>0.86</td>
            <td>0.88</td>
            <td>0.76</td>
            <td>98</td>
          </tr>
          <tr>
            <th class="table-secondary">Total/Média</th>
            <td>1.00</td>
            <td>1.00</td>
            <td>0.78</td>
            <td>1.00</td>
            <td>0.88</td>
            <td>0.79</td>
            <td>56962</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="mb-4">
      Decidimos nos aprofundar no Random Forest e analisar os casos que ele
      classificou errado. Com as nossas análises, chegamos a conclusão que
      transações mal classificadas tinham valores de atributos parecidos com
      transações da classe oposta. Ou seja, fraudes mal classificadas tem
      atributos parecidos com não fraudes e não fraudes mal classificadas tem
      atributos parecidos com fraudes. Isso pode ser visualizado no gráfico:
    </p>
    <div class="chart-container mt-3 mb-3">
      <LineGraphParMedian />
    </div>
    <p class="mb-4">
      Além disso, a importãncia dos atributos clareia mais ainda a situação. Ele
      mostra que os atributos mais relevantes para o modelo fazer sua
      classificação são os mesmos que seguem a regra anteriormente vista. Isso
      tudo nos leva a crer que o modelo errou pois tais transações não possuem
      atributos comuns à sua classificação. Ou seja, em tais casos, fraudes se
      parecem com não fraudes e não fraudes se parecem com fraudes.
    </p>
    <div class="chart-container mt-3 mb-3">
      <!-- Gráfico - Importância dos atributos -->
      <BarGraphImpor />
    </div>
    <p class="mb-4">
      Ademais, a fim de obtermos melhores resultados e uma análise mais
      profunda, decidimos retreinar o RandomForest selecionando atributos.
      Utlizamos a mesma ideia das quatro partições vista anteriormente.
    </p>
    <p class="mb-4">Fizemos 3 tipos de seleção:</p>
    <ul>
      <li>Uma utilizando o TruncatedSVD</li>
      <li>Uma utilizando o PCA</li>
      <li>E uma excluindo os atributos</li>
    </ul>
    <p class="mb-4">
      Nos dois primeiros casos, os algoritmos utilizados reduziram os atributos
      com menos de 2% de importância para quatro atributos, resultando numa base
      de dados com quinze atributos. Já no último caso, tais colunas foram
      descartadas, resultando numa base de dados com onze atributos.
    </p>
    <p class="mb-4">
      A redução de atributos obteve resultados muito semelhantes com os
      anteriores. Aqui vemos a matrix de confusão e as métricas obtidas com a
      exclusão de atributos e a utilização do Oversampling (RandomOverSampler)
      para o dataset de teste:
    </p>
    <div class="tablePar">
      <table class="table tableMat table-bordered mb-4 mb-3">
        <caption>
          Predição do modelo
        </caption>
        <thead class="table-success">
          <tr>
            <th></th>
            <th>0</th>
            <th>1</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="table-secondary">0</th>
            <td>56861</td>
            <td>3</td>
          </tr>
          <tr>
            <th class="table-secondary">1</th>
            <td>23</td>
            <td>75</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="chart-container mt-3 mb-3">
      <!-- Gráfico - Resultados da redução de atributos -->
      <div class="tablePar">
        <table class="table table-bordered mb-4 mb-3">
          <caption>
            Métricas de avaliação do modelo
          </caption>
          <thead class="table-success">
            <tr>
              <th></th>
              <th>Precision</th>
              <th>Recall</th>
              <th>F1</th>
              <th>Specificity</th>
              <th>Geom. Mean</th>
              <th>Iba</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="table-secondary">0</th>
              <td>1.00</td>
              <td>1.00</td>
              <td>0.77</td>
              <td>1.00</td>
              <td>0.87</td>
              <td>0.78</td>
              <td>56864</td>
            </tr>
            <tr>
              <th class="table-secondary">1</th>
              <td>0.96</td>
              <td>0.77</td>
              <td>1.00</td>
              <td>0.85</td>
              <td>0.87</td>
              <td>0.75</td>
              <td>98</td>
            </tr>
            <tr>
              <th class="table-secondary">Total/Média</th>
              <td>1.00</td>
              <td>1.00</td>
              <td>0.77</td>
              <td>1.00</td>
              <td>0.87</td>
              <td>0.78</td>
              <td>56962</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="mb-4">A importância dos atributos do mesmo modelo:</p>
    <div class="chart-container mt-3 mb-3">
      <BarGraphImporSel />
    </div>
    <p class="mb-4">
      Portanto, concluímos que a redução de atributos não afeta
      significativamente a performance do modelo, mantendo resultados similares
      aos obtidos anteriormente.
    </p>
    <p class="mb-4">
      Em relação a seleção de atributos, concluímos que ela é benéfica, já que
      não prejudica a qualidade do modelo e aumenta a sua eficiência. Isso
      porque com menos atributos o modelo demora menos para ser treinado e sua
      complexidade diminui.
    </p>
    <p class="mb-4">
      Para melhorar as métricas obtidas, uma alternativa seria aumentar o número
      de atributos da base de dados. Isso porque, o modelo teria acesso à mais
      informação e poderia aprender melhor as características das transações
      fraudulentas e não fraudulentas. Dessa forma, reunimos sugestões de
      atributos que enriqueceriam esse dataset:
    </p>
    <ul>
      <li class="mb-2">Se é a primeira vez utilizando o cartão</li>
      <li class="mb-2">Quantidade de transações recentes</li>
      <li class="mb-2">Localização da transação</li>
      <li class="mb-2">
        Se feita por meio de aplicativo, quantidade de transações pelo mesmo
        dispositivo
      </li>
      <li class="mb-2">Se conta está sendo acessada por dispositivo novo</li>
      <li class="mb-2">Média de valor das transações da conta</li>
      <li class="mb-2">
        Se transação é maior do que o normal para aquela conta
      </li>
      <li class="mb-2">Tipo de transação (Internet, PIX, Máquina, etc)</li>
      <li class="mb-2">País da compra</li>
      <li class="mb-2">Data da transação</li>
      <li class="mb-4">Limite do cartão</li>
    </ul>
    <p class="mb-4">
      Para ver a análise completa acesse:
      <a
        class="text-reset link-success link-underline-opacity-25 link-underline-opacity-100-hover"
        href="https://colab.research.google.com/drive/1G5NoHiNiGNh2n7u1FRblSz8YKFTTSqYm?usp=sharing"
        target="_blank"
        >EntregaFinal.ipynb</a
      >
    </p>
  </div>
</template>
<style>
.view {
  margin: 0 auto;
  width: 1100px;
  color: #2d2d2d;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
}
.tablePar {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tableMat {
  width: 50%;
  height: 80%;
  text-align: center;
}

.table caption {
  text-align: center;
}
.title {
  color: #2d2d2d;
  font-family: Inter;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
}
@media screen and (max-width: 1100px) {
  .view,
  .btn {
    font-size: 19px;
  }
  .title {
    font-size: 35px;
  }
  .tablePar {
    height: 270px;
  }
}
@media screen and (max-width: 800px) {
  .view,
  .btn {
    font-size: 13px;
  }
  .title {
    font-size: 25px;
  }
  .tablePar {
    height: 200px;
  }
}
</style>
<script>
import BarGraphImpor from "@/components/BarGraphImpor.vue";
import BarGraphImporSel from "@/components/BarGraphImporSel.vue";
import LineGraphParMedian from "@/components/LineGraphParMedian.vue";
export default {
  components: { BarGraphImpor, BarGraphImporSel, LineGraphParMedian },
};
</script>
