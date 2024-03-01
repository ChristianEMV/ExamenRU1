<template>
  <div id="app">
    <b-navbar class="navbarstyle">Registro de Estudiantes "UTEZ"
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand class="mx-auto">
        
      </b-navbar-brand>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style scoped>
.navbarstyle {
  background-color: #2b2b2b;
  color: #ffff;
  font-size: 30px;
  font-family: 'Open';
  display: flex;
}
</style>