<template>
  <div class="home container">
    <Bewa />
    <Wa />
    <Fapost />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['scroll'],
  computed: {
    isScrolled() {
      if (this.scroll) return true
      return false
    },
  },
})
</script>

<style scoped></style>
