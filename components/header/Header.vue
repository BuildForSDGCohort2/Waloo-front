<template>
  <div class="header">
    <Location />
    <Navbar :scroll="scroll" />
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

<style scoped>
.header {
  width: 100%;
}
</style>
