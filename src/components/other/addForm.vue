<template>
  <h2>Hvordan har du det?</h2>
  <form class="flex flex-col">
    <emojisRating />
    <input type ="text" placeholder="titel">
    <textarea type="text" class="my-2" placeholder="indsæt lorem ipsum her...."/>
    <submitButton label="Gem minde"/>
  </form>
</template>

<script>
import EmojisRating from './emojisRating.vue'
import SubmitButton from '../buttons/submitButton.vue'
  
export default {
  name: 'AddForm',
  components: {
    EmojisRating,
    SubmitButton
  }
}
</script>