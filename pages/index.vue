<template>
  <div class="waloo">
    <div class="header-nav">
      <div class="navbar is-fixed-top" :class="{ 'has-scrolled': isScrolled }">
        <Header :scroll="scroll" />
      </div>
    </div>
    <div class="wawa mt-1">
      <div class="d-wawa">
        <Home :scroll="scroll" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      scroll: false,
    }
  },
  computed: {
    isScrolled() {
      if (this.scroll) return true
      return false
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    },
  },
})
</script>

<style scoped>
.waloo {
  width: 100%;
  height: 1024px !important;
}
.navbar {
  width: 100% !important;
}
.has-scrolled {
  box-shadow: 0 0.5em 1em -0.95em rgba(10, 10, 10, 0.1),
    0 0px 0 0px rgba(10, 10, 10, 0.02);
}
.header-nav {
  height: 82px;
}
@keyframes appear2 {
  0% {
    opacity: 0;
  }
}
</style>
