<template>
  <button @click="this.app.data.addingCard = false" class="px-5 py-3 self-end text-green-50 bg-green-800 hover:bg-green-600 rounded transition-colors">Annuller</button>
</template>

<script>
export default {
  name: "CancelAddition"
};
</script>