<template>
  <div class="waloo mt-6">
    <div class="header-nav">
      <div class="navbar is-fixed-top" :class="{ 'has-scrolled': isScrolled }">
        <Header :scroll="scroll" />
      </div>
    </div>
    <div>
      <article
        v-if="this.$store.state.hasAccountOpened"
        class="mb-6 message is-d-centered is-success fited-width is-border-radius-5px"
      >
        <div class="message-header">
          <p>Accounted created ✔.</p>
          <button
            @click="close"
            class="delete ml-2"
            aria-label="delete"
          ></button>
        </div>
      </article>
      <AuthForm ref="authformlog" :textbtn="'Login'" :hasname="false" />
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
    close() {
      this.$store.commit('account', false)
    },
  },
})
</script>

<style scoped>
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
@keyframes appear2 {
  0% {
    opacity: 0;
  }
}
</style>
