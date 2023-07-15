<template>
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
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default {}
</script>

<style>
.custom-bg {
  background-color: #00AE30;
}

.custom-bg .nav-link {
  color: white;
}
</style>