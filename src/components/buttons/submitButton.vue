<template>
  <button
    class="px-5 py-3 self-end text-green-50 bg-green-800 hover:bg-green-600 rounded transition-colors"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",

  props: [
    "label"
  ]
};
</script>