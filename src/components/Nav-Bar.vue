<template>
  <div>
  <nav class="navbar bg-body-tertiary" style="background-color: #F0F0F0">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="Fraude Pintada" width="200" height="50">
      </a>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg custom-bg shadow">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link text-decoration-none">
            <a>Introdução</a>
          </router-link>
          <router-link to="/analise" class="nav-link text-decoration-none">
            <a>Análise Modelos</a>
          </router-link>
          <router-link to="/prevencao" class="nav-link text-decoration-none">
            <a>Prevenção</a>
          </router-link>
          <router-link to="/ideia" class="nav-link text-decoration-none">
            <a>Ideia de negócio</a>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

.view {
  font-family: 'Raleway', sans-serif;
}

.custom-bg .nav-link {
  color: white;
}

.logo {
  width: 7.36%;
  margin-left: 1.52%;
}

.subNavOnca {
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.navbarOnca {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.nameGroup{
  color: #000;
  font-family: Raleway, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: bold;
  margin-left: 2.63%;
}
.nav {
  width: 100%;
  background-color: #00AE30;
}
.navbar {
  width: 1440px;
  margin: 0 auto;
}

.navbar a {
  color: #FFF;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}
</style>