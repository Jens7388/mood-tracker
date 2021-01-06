<template>
  <h2>Hvordan har du det?</h2>
  <form id="test">
    <emojisRating />
    <input type ="text">
    <textarea type="text" label="Beskrivelse"/>
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