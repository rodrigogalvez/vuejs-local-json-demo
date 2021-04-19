<template>
  <div id="app">
    <button @click="cargarDatos()">Cargar datos</button>
    <ul>
      <li v-for="producto of productos" :key="producto.id">
        {{ producto.producto }} - {{ producto.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    productos: [], // productos es un arreglo vacío.
  }),
  methods: {
    // cargarDatos() es una función asíncrona porque el fetch() devuelve una promesa que tarda en ser respondida.
    // await espera a que la promesa sea resuelta.
    // result.json() también devuelve una promesa.
    // la ruta "/data" está configurada en vue.config.js.
    cargarDatos: async function () {
      let result = await fetch("/data");
      this.productos = await result.json();
    },
  },
};
</script>

<style>
</style>
