<template>
  <div
    class="pt-4 container waloo-nav"
    :class="{ 'has-scrolled': isScrolled, 'hasnt-scrolled': !isScrolled }"
  >
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="d-search">
        <div class="is-flex logo-search">
          <nuxt-link class="a-logo is-flex" to="/">
            <Logo class="ml-1" />
            <!-- <span
              class="is-block logo-text ml-2 is-size-4 has-text-weight-semibold"
            >
              <span class="wa">Wa</span><span class="loo">loo by Yaya</span>
            </span> -->
          </nuxt-link>
          <SearchForm class="search-form" />
        </div>

        <div class="is-flex">
          <div class="is-flex centered">
            <nuxt-link
              v-if="$auth.loggedIn"
              to="/product"
              class="button add-pro btn-subscribe"
            >
              <span class="icon">
                <i class="fas fa-plus"></i>
              </span>
              <span>Add product</span>
            </nuxt-link>
            <div v-if="$auth.loggedIn" class="navbar-item centered is-flex">
              <span class="is-block"
                >Hi, {{ $auth.user.name | capitalize }}</span
              >
              <button
                @click="$auth.logout()"
                class="button ml-2 has-no-border is-green"
              >
                <span class="icon"> <i class="fas fa-sign-out-alt"></i> </span
                ><span>Log out</span>
              </button>
            </div>
            <div v-else class="navbar-item centered is-flex">
              <nuxt-link to="/login" class="a-login mr-2">
                Log in
              </nuxt-link>
              <span class="is-block mr-2 or"> or </span>
              <nuxt-link to="/register" class="button btn-subscribe">
                Sign up
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: ['scroll'],
  data() {
    return {
      isFocused: false,
      hasFavorites: false,
      focused: false,
    }
  },
  computed: {
    isScrolled() {
      if (this.scroll) return true
      return false
    },
  },
  created() {
    window.addEventListener('beforeunload', this.handleReresh)
  },
  mounted() {
    if (this.$auth.loggedIn) {
      if (localStorage.user) {
        let user = JSON.parse(localStorage.getItem('user'))
        this.$auth.setUser(user)
      }
    }
    localStorage.removeItem('user')
  },
  methods: {
    handleReresh() {
      localStorage.setItem('user', JSON.stringify(this.$auth.user))
    },
    searchFocus() {
      this.isFocused = true
      this.focused = true
    },
    leaveFocus() {
      this.isFocused = false
      this.focused = false
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
})
</script>

<style scoped>
.centered {
  justify-items: center;
  align-items: center;
}
.has-scrolled {
  padding-top: 0rem !important;
}
.hasnt-scrolled {
  animation: 0.3s appear2;
}
.d-search {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.a-logo {
  width: auto;
  align-items: center;
  color: #000000;
}
.logo-text {
  margin-top: -0.5rem;
}
.wa {
  color: #028300;
}
.has-focus {
  background: #028300 !important;
  border: #028300 !important;
  color: white !important;
}
.search-focused {
  display: block !important;
}
.d-subscribe > div {
  font-size: 18px;
}
.d-log-btn {
  font-size: 16px;
  align-items: center;
}
@media screen and (max-width: 747px) {
  .d-waloo-drop,
  .d-log-btn {
    display: none !important;
  }
  .d-login-respo {
    position: relative;
    display: block !important;
    right: 1rem !important;
    top: 0.9rem;
  }
  .logo-search {
    width: 100% !important;
  }
  .respo-waloo-drop {
    position: absolute;
    left: -5.5rem !important;
  }
}
.tohide-search {
  position: absolute;
  top: 2.5rem;
}
.input-del {
  position: absolute;
  left: 2rem;
}
.respo-put {
  padding-left: 3rem !important;
}
.search-focused {
  display: block;
  animation: 0.3s appear2;
}
@media screen and (min-width: 611px) {
  .tohide-search {
    display: none !important;
  }
  .respo-search {
    display: none !important;
  }
}
.total-shop {
  position: absolute;
  top: 4px;
  left: 18px;
}
.navbar-item .span-number {
  background: #028300;
  color: rgb(255, 255, 255) !important;
}
@media screen and (max-width: 1023px) {
  .hasnt-scrolled {
    animation: 0s appear2;
  }
  .waloo-nav {
    padding-top: 0.3rem !important;
  }
  .shop-d-cart {
    margin-top: 0.7rem;
  }
  .navbar-dropdown {
    position: absolute;
    display: none !important;
  }
  .is-hoverable:hover .navbar-dropdown {
    display: block !important;
  }
  .d-waloo-drop {
    display: none !important;
  }
  .d-waloo-drop-cart {
    position: absolute;
    left: -12.5rem !important;
  }
  .total-shop {
    top: -9px;
    left: 18px;
  }
  .fav-fav {
    margin-top: 0.7rem !important;
  }
}
.d-fav-cart {
  align-items: center;
}
.ss-input,
.respo-put {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.btn-search {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
@media screen and (max-width: 610px) {
  .has-scrolled {
    padding-top: 0rem !important;
    animation: 0.3s stop;
  }
  .shop-d-cart {
    margin-top: 0.2rem;
  }
  .hasnt-scrolled {
    animation: 0.3s stop;
  }
  .fav-fav {
    margin-top: 0rem !important;
  }
  .waloo-nav {
    padding-top: 1rem !important;
  }
  .ddd-search {
    display: none !important;
  }
  .respo-search {
    display: block !important;
    position: relative;
    top: 0rem;
  }
  .d-login-respo {
    margin-top: -0.9rem !important;
  }
  .d-waloo-drop-cart-link {
    margin-top: -0.3rem !important;
  }
}
@media screen and (max-width: 550px) {
  .search-form {
    display: none !important;
  }
}
@media screen and (max-width: 350px) {
  .search-form,
  .add-pro {
    display: none !important;
  }
}
.d-subscribe .navbar-link:hover,
.navbar-item.has-dropdown:hover .navbar-link {
  background-color: transparent !important;
  color: #028300;
  font-weight: 600;
}
.waloo-drop .navbar-item span {
  color: #4a4a4a;
}
.waloo-drop .navbar-item:hover span {
  color: #028300;
}
.favorite-ico {
  color: #4a4a4a;
}
.favorite-ico span svg,
.fa-shopping-cart {
  font-size: 18px;
}
.favorite-ico:hover,
.favorite-ico:focus,
.favorite-ico:active {
  color: #028300;
}
.fa-user {
  font-size: 14px;
}
.respo-link {
  font-size: 16px;
}
.waloo-link {
  font-size: 16px;
}
.btn-logg {
  margin: 0 auto;
  width: 80%;
  border: none !important;
  background-color: #028300;
  color: white;
}
.btn-logg:hover,
.btn-logg:focus,
.btn-logg:active {
  color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #028300;
}
.btn-reg {
  margin: 0 auto;
  width: 80%;
  border: none !important;
  background-color: #004e66;
  color: white;
}
.btn-reg:hover,
.btn-reg:focus,
.btn-reg:active {
  color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #004e66;
}
.log-or {
  margin-top: -1rem;
}
.div-log {
  margin: 0rem 0 !important;
}
.logo-search {
  width: 60%;
}
.navbar-link::after {
  color: #028300 !important;
  border-color: #028300 !important;
}
.a-login {
  color: #028300 !important;
  font-weight: 600;
}
.a-login:hover,
.a-login:focus,
.a-login:active {
  text-decoration: underline;
}
.btn-subscribe {
  background: #028300 !important;
  border: #028300 !important;
  color: white !important;
}
.btn-subscribe:hover,
.btn-subscribe:focus,
.btn-subscribe:active {
  background: #027900 !important;
  border: #027900 !important;
}
@keyframes appear2 {
  0% {
    transform: translateY(-10px);
  }
}
@keyframes disapear {
  0% {
    transform: translateY(0px);
  }
}
@keyframes stop {
  0% {
    transform: translateY(0px);
  }
}
</style>
