<template>
  <div>
    <h1>Página de registro de alumnos</h1>
    <nav class="breadcrumb">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li class="current-page"><a href="/registro">Registro</a></li>
      </ul>
    </nav>

    <b-card class="shadow"
        style="display: flex; ">
      <b-form @submit="submitForm">
        <b-form-group
          label="Nombre"
          label-for="nombre"
          :state="!validateNombre ? false : null"
          invalid-feedback="El nombre no debe contener números.*"
        >
          <b-form-input
            id="nombre"
            placeholder="Nombre completo del estudiante"
            v-model="alumno.nombre"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Edad"
          label-for="edad"
          :state="!validateEdad ? false : null"
          invalid-feedback="La edad debe ser un número positivo no mayor a 100.*"
        >
          <b-form-input
            id="edad"
            placeholder="Edad del estudiante"
            v-model="alumno.edad"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Cuatrimestre"
          label-for="cuatrimestre"
          :state="!validateCuatrimestre ? false : null"
          invalid-feedback="El cuatrimestre debe ser un número entre 1 y 12."
        >
          <b-form-input
            id="cuatrimestre"
            placeholder="Cuatrimestre actual del estudiante"
            v-model="alumno.cuatrimestre"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Carrera"
          label-for="carrera"
          :state="!validateCarrera ? false : null"
          invalid-feedback="La carrera no debe contener números."
        >
          <b-form-input
            id="carrera"
            placeholder="Carrera a la que pertenece el estudiante"
            v-model="alumno.carrera"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="shadow"
        style="display: flex; justify-content: center; align-items: center">Registrar alumno</b-button>
      </b-form>
    </b-card>
    <br/>
    <h2>Alumnos Registrados</h2>
    <b-table :items="alumnos" :fields="fields" :current-page="currentPage"
      :per-page="perPage"
      :total-rows="totalRows"
      @row-clicked="onRowClicked"> </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      aria-controls="registro-table"
      align="center"
    ></b-pagination>
  </div>
</template>
  
  <script>
export default {
  name: "Registro",
  data() {
    return {
      alumno: {
        nombre: "",
        edad: null,
        cuatrimestre: null,
        carrera: "",
      },
      alumnos: [
      {
        "nombre": "Juan",
        "edad": 20,
        "cuatrimestre": 3,
        "carrera": "Ingeniería Civil",
        "ID": 1
    },
    {
        "nombre": "María",
        "edad": 22,
        "cuatrimestre": 5,
        "carrera": "Medicina",
        "ID": 2
    },
    {
        "nombre": "Luis",
        "edad": 19,
        "cuatrimestre": 2,
        "carrera": "Psicología",
        "ID": 3
    },
    {
        "nombre": "Ana",
        "edad": 21,
        "cuatrimestre": 4,
        "carrera": "Derecho",
        "ID": 4
    },
    {
        "nombre": "Pedro",
        "edad": 23,
        "cuatrimestre": 6,
        "carrera": "Administración de Empresas",
        "ID": 5
    }
      ],
      fields: ["nombre", "edad", "cuatrimestre", "carrera"],
      currentPage: 1,
      perPage: 3,
      validateNombre: true,
      validateEdad: true,
      validateCuatrimestre: true,
      validateCarrera: true,
    };
  },
  computed: {
    breadcrumbItems() {
      return [
        { text: "Inicio", href: "/" },
        { text: "Registro", active: true },
      ];
    },
    totalRows() {
      return this.alumnos.length;
    },
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      if (!/^[a-zA-Z\s]*$/.test(this.alumno.nombre)) {
        this.validateNombre = false;
        return;
      }

      // Validación de la edad
      if (
        isNaN(this.alumno.edad) ||
        this.alumno.edad <= 0 ||
        this.alumno.edad > 100
      ) {
        this.validateEdad = false;
        return;
      }

      // Validación del cuatrimestre
      if (
        isNaN(this.alumno.cuatrimestre) ||
        this.alumno.cuatrimestre < 1 ||
        this.alumno.cuatrimestre > 12
      ) {
        this.validateCuatrimestre = false;
        return;
      }

      // Validación de la carrera
      if (/\d/.test(this.alumno.carrera)) {
        this.validateCarrera = false;
        return;
      }
      // Generar el ID en relación al último registro
      const lastID =
        this.alumnos.length > 0 ? this.alumnos[this.alumnos.length - 1].id : 0;
      this.alumno.id = lastID + 1;
      // Agregar el alumno a la lista
      this.alumnos.push({ ...this.alumno });
      // Reiniciar el formulario
      this.alumno = {
        nombre: "",
        edad: null,
        cuatrimestre: null,
        carrera: "",
      };
      // Reiniciar las validaciones
      this.validateNombre = true;
      this.validateEdad = true;
      this.validateCuatrimestre = true;
      this.validateCarrera = true;
    },
  },
};
</script>

<style scoped>

.breadcrumb{
  background-color:#f2f2f2;
  padding:10px;
  border-radius: 5px;
}
.breadcrumb ul{
  list-style-type: none;
  margin:0;
  padding: 0;
}

.breadcrumb li{
  display: inline;
}

.breadcrumb li:not(.current-page):after{
  content:">";
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