<template>
  <div class="max-w-md m-auto bg-green-100 p-5 border">
    <episode-card-list></episode-card-list>
    <add-new></add-new>
  </div>
  
</template>


<script>
import AddNew from "./components/buttons/addNew.vue"
import EpisodeCardList from "./components/cards/episodeCardList.vue"
export default {
  name: 'App',
  components: {
    AddNew,
    EpisodeCardList
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
