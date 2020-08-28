<template>
  <div class="waloo mt-6">
    <div class="header-nav">
      <div class="navbar is-fixed-top" :class="{ 'has-scrolled': isScrolled }">
        <Header :scroll="scroll" />
      </div>
    </div>
    <div class="body container box">
      <article
        v-if="this.$store.state.hasAccountUnOpened"
        class="mb-6 message is-d-centered is-danger fited-width is-border-radius-5px"
      >
        <div class="message-header">
          <p>Email is already used or something went wrong.</p>
          <button
            @click="close"
            class="delete ml-2"
            aria-label="delete"
          ></button>
        </div>
      </article>
      <AuthForm :textbtn="'Register'" :hasname="true" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  auth: false,
  data() {
    return {
      scroll: false,
      result: null,
      issue: false,
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
  mounted() {
    this.$axios.defaults.withCredentials = true
    this.$axios.setHeader('Content-Type', 'application/json')
    this.$axios.setHeader('Accept', 'application/json')
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    },
    close() {
      this.$store.commit('accountUnopend', false)
    },
  },
})
</script>

<style scoped>
.body {
  background-color: #fff;
  padding: 5% 2% 5% 2%;
  width: 60%;
}
.waloo {
  width: 100%;
  height: 1024px !important;
  animation: 0.3s appear2;
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
@media screen and (max-width: 1024px) {
  .body {
    width: 80% !important;
  }
}
@media screen and (max-width: 767px) {
  .body {
    width: 90% !important;
  }
}
@media screen and (max-width: 540px) {
  .body {
    width: 100% !important;
  }
}
@keyframes appear2 {
  0% {
    opacity: 0;
  }
}
</style>
