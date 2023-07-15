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
          <a class="nav-link" aria-current="page" href="#">Introdução</a>
          <a class="nav-link" href="#">Análise Modelos</a>
          <a class="nav-link" href="#">Prevenção</a>
          <a class="nav-link" href="#">Ideia de negócio</a>
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