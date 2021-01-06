<template>
  <emojis />

  <article class = "bg-white p-5 rounded mb-5">
    <h1 class ="font-bold">{{ title }}</h1>
    <p class="text-gray-400">{{ date }}</p>
    <p>{{ description }}</p>
    <p>Rating: {{ rating }}</p>
 
  </article>
</template>

<script>
import Emojis from "../other/emojis.vue"
export default {
  name: 'EpisodeCard',
  props: [
    "title",
    "description",
    "date",
    "rating"
  ],
  components: {
    Emojis
  }
}
</script>