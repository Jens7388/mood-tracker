<template>
  <episodeCard title="Lorem Ipsum" rating="4" date="En dag" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
  <episodeCard title="Lorem Ipsum" rating="3" date="En anden dag" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
  <episodeCard title="Lorem Ipsum" rating="1" date="På et eller andet tidspunkt" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
</template>

<script>
import EpisodeCard from "../cards/episodeCard.vue"
export default {
  name: 'EpisodeCardList',
  components: { 
    EpisodeCard 
  }
}
</script>
