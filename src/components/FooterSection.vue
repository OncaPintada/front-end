<template>
  <footer class="footer-section">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <p>Desenvolvido por:</p>
        <ul class="devs">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jhenifermendonca/"
              >Jhénifer Matos</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gilvan-ferreira-07698b1a5/"
              >Gilvan Ferreira</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/angelo-henrique-peres-cestari-junior-105574191/"
              >Angelo Cestari</a
            >
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/pdrzan/"
              >Pedro Zanelato</a
            >
          </li>
        </ul>
        <p>© Copyright 2023 Grupo Cionça Pindados</p>
      </div>
      <a href="https://pantanal.dev" target="_blank"
        ><img src="../assets/logo-pantanal.png" alt="Logo pantanal.dev"
      /></a>
    </div>
  </footer>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.devs {
  list-style: none;
  padding: 0;
}

.devs a {
  color: #fff;
}

.devs a:hover {
  color: rgb(3, 70, 13);
}
.site-content {
  flex: 1 0 auto;
}

.footer-section {
  background-color: #00ae30;
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
