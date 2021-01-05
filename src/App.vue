<template>
  <div class="max-w-md m-auto bg-green-100 ">
    <add-new></add-new>
  </div>
  
</template>


<script>
import AddNew from "./components/buttons/addNew.vue"
export default {
  name: 'App',
  components: {
    AddNew
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
