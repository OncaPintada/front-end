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
        <a href="/documento.pdf" class="btn btn-light">Material Usado</a>
        <a href="#" class="btn btn-secondary mt-2">Fale Conosco</a>
      </div>
    </div>
  </footer>
</template>

<style>
.footer-section {
  background-color: #343a40;
  color: #ffffff;
  padding: 20px 0;
  width: 100%;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.button-container {
  margin-left: auto;
}

.mt-2 {
  margin-top: 8px;
}
</style>
