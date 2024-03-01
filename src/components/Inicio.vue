<template>
  <div>
    <h1>Página de inicio</h1>
    <nav class="breadcrumb">
      <ul>
        <li  class="current-page">Inicio> </li>
        <li><a href="/#/registro">Registro</a></li>
      </ul>
    </nav>
  </div>
</template>
  
  <script>
export default {
  name: "Inicio",
  computed: {
    breadcrumbItems() {
      return [
        { text: "Inicio", active: true },
        { text: "Registro", href: "/#/registro" },
      ];
    },
  },
};
</script>
  <style scoped>
.breadcrumb {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}
.breadcrumb ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.breadcrumb li {
  display: inline;
}

.breadcrumb li:not(.current-page):after {
  content: "";
  margin: 0 5px;
}
.breadcrumb li a {
  text-decoration: none;
  color: #333;
}

.breadcrumb li.current-page {
  font-weight: bold;
}
</style>