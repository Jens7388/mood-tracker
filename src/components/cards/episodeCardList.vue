<template>
  <episodeCard
    v-for="episode in storedEpisodes"
    :key="episode.id"
    :title="episode.title"
    :rating="episode.rating"
    :date="episode.date"
    :description="episode.description"
  />
  <add-new></add-new>
</template>

<script>
import EpisodeCard from "../cards/episodeCard.vue";
import AddNew from "../buttons/addNew.vue"
export default {
  name: "EpisodeCardList",
  components: {
    EpisodeCard,
    AddNew
  },
  data() {
    return {
      storedEpisodes: [
        {
          id: 1,
          title: "Lorem Ipsum",
          rating: 4,
          date: "En dag",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          rating: 3,
          date: "En anden dag",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          id: 3,
          title: "Lorem Ipsum",
          rating: 1,
          date: "På et eller andet tidspunkt",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  },
  methods: {
    mounted() {
      this.storedEpisodes =
        JSON.parse(localStorage.getItem("storedEpisodes")) || [];
    },
  },
};
</script>