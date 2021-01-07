<template>
  <form class="flex flex-col space-y-2">
    <h2>Hvordan har du det?</h2>
    <input type ="text" ref="titleInput" placeholder="titel">
    <emojisRating class="mx-auto"/>
    <h2>Beskrivelse</h2>
    <textarea type="text" ref="descriptionInput" placeholder="indsæt lorem ipsum her...."/>
    <other-button @click="AddEpisode" label="Gem"></other-button>
    <other-button label="Annuller"></other-button>
  </form>
</template>

<script>
import EmojisRating from './emojisRating.vue'
import OtherButton from '../buttons/otherButton.vue'
  
export default {
  name: 'AddForm',
  components: {
    EmojisRating,
    OtherButton
  },
  methods:{
//TODO
    /*
    AddEpisode: () =>{
      
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      
      const episode = {
            id: 1,
            title: enteredTitle,
            rating: 12345,
            description: enteredDescription,
            date: "En dag"

      };
    }*/
  }
}
</script>