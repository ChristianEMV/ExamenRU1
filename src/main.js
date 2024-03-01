import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Inicio from "./components/Inicio.vue";
import Registro from "./components/Registro.vue";
import { BootstrapVue, BBreadcrumb, BBreadcrumbItem } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.component('BBreadcrumb', BBreadcrumb)
Vue.component('BBreadcrumbItem', BBreadcrumbItem)

const routes = [
  { path: "/", component: Inicio },
  { path: "/registro", component: Registro },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
