<template>
  <form class="flex flex-col space-y-2" @submit.prevent="addEpisode">
    <h2>Hvordan har du det?</h2>
    <input type="text" ref="titleInput" placeholder="titel" />
    <emojisRating class="mx-auto" />
    <h2>Beskrivelse</h2>
    <textarea ref="descriptionInput" rows="10" placeholder="indsæt lorem ipsum her...." />
    <save-new type="submit"></save-new>
    <cancel></cancel>
  </form>
</template>

<script>
import EmojisRating from "./emojisRating.vue";
import SaveNew from "../buttons/saveNew.vue";
import Cancel from "../buttons/cancel.vue";

export default {
  name: "AddForm",
  components: {
    EmojisRating,
    SaveNew,
    Cancel
  },
  methods: {
    addEpisode: () => {
      //DOESNT WORK, THANKS JAVASCRIPT
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;

      const newEpisode = {
        id: this.storedEpisodes.count + 1,
        title: enteredTitle,
        rating: 12345,
        description: enteredDescription,
        date: "En dag",
      };
      this.storedEpisodes.unshift(newEpisode);
      localStorage.setItem(
        "storedEpisodes",
        JSON.stringify(this.storedEpisodes)
      );
    },
  },
};
</script>