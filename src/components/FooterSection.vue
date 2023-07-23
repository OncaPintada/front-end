<template>
  <footer class="footer-section">
    <div
      class="container d-flex justify-content-between align-items-center subFooter"
    >
      <div class="subFooterDevs">
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
      <div class="imgPan">
        <a href="https://pantanal.dev" target="_blank"
          ><img src="../assets/logo-pantanal.png" alt="Logo pantanal.dev"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
.devs {
  list-style: none;
  padding: 0;
}

.devs a {
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.devs a:hover {
  color: rgb(3, 70, 13);
}
.footer-section p {
  margin: 0;
}
.footer-section {
  height: 211px;
  width: 100%;
  background-color: #00ae30;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}
.subFooterDevs {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.subFooter {
  height: 100%;
}
.imgPan {
  height: 70%;
}
.imgPan img {
  height: 100%;
}
@media screen and (max-width: 1100px) {
  .footer-section {
    height: 180px;
    font-size: 12px;
  }
  .devs a {
    font-size: 12px;
  }
}
@media screen and (max-width: 950px) {
  .footer-section {
    height: 160px;
  }
}
@media screen and (max-width: 800px) {
  .footer-section {
    height: 140px;
    font-size: 9px;
  }
  .devs a {
    font-size: 9px;
  }
}
</style>
