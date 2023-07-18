<template>
  <footer class="footer-section">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <p>Desenvolvido por:</p>
        <ul>
          <li>Jhénifer Matos</li>
          <li>Gilvan Ferreira</li>
          <li>Angelo Cestari</li>
          <li>Zanelato</li>
        </ul>
      </div>
      <div class="button-container d-flex flex-column">
        <a href="https://colab.research.google.com/drive/1G5NoHiNiGNh2n7u1FRblSz8YKFTTSqYm?usp=sharing" class="btn btn-light" target="_blank">Material Usado</a>
        <a href="#" class="btn btn-secondary mt-2">Fale Conosco</a>
      </div>
    </div>
  </footer>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.site-content {
  flex: 1 0 auto;
}

.footer-section {
  background-color: #00AE30;
  color: #ffffff;
  padding: 20px 0;
  width: 100%;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.d-flex {
  display: flex !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.align-items-center {
  align-items: center !important;
}

.button-container {
  margin-left: auto;
}

.mt-2 {
  margin-top: 8px;
}
</style>