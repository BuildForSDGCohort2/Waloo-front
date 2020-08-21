<template>
  <div
    class="pt-4 container waloo-nav"
    :class="{ 'has-scrolled': isScrolled, 'hasnt-scrolled': !isScrolled }"
  >
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="d-search">
        <div class="is-flex logo-search">
          <a class="a-logo is-flex" href="/">
            <Logo class="ml-1" />
            <span
              class="is-block logo-text ml-2 is-size-4 has-text-weight-semibold"
            >
              <span class="wa">Wa</span><span class="loo">loo</span>
            </span>
          </a>
          <div class="navbar-item respo-search ml-2 is-hidden">
            <a class="favorite-ico pt-2" @click="focused = !focused">
              <span class="icon">
                <i class="fas fa-search"></i>
              </span>
            </a>
          </div>
          <div
            class="s003 tohide-search is-hidden"
            :class="{ 'search-focused': focused }"
          >
            <form autocomplete="off">
              <div class="inner-form">
                <a class="delete input-del" @click="focused = false"></a>
                <div class="input-field second-wrap">
                  <input
                    id="search"
                    class="respo-put"
                    @focus="searchFocus"
                    @blur="leaveFocus"
                    type="text"
                    placeholder="Make a search..."
                  />
                </div>
                <div class="input-field third-wrap">
                  <button
                    class="btn-search"
                    type="button"
                    :class="{ 'has-focus': isFocused }"
                  >
                    <span class="icon">
                      <i class="fas fa-search"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="s003 ddd-search">
            <form autocomplete="off">
              <div class="inner-form">
                <div class="input-field second-wrap">
                  <input
                    id="search"
                    class="ss-input"
                    @focus="searchFocus"
                    @blur="leaveFocus"
                    type="text"
                    placeholder="Make a search..."
                  />
                </div>
                <div class="input-field third-wrap">
                  <button
                    class="btn-search"
                    type="button"
                    :class="{ 'has-focus': isFocused }"
                  >
                    <span class="icon">
                      <i class="fas fa-search"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="is-flex d-subscribe">
          <div class="is-flex">
            <div
              class="navbar-item d-waloo-drop has-dropdown is-hoverable mr-2"
            >
              <a class="navbar-link waloo-link has-text-weight-semibold">
                Waloo
              </a>

              <div class="waloo-drop navbar-dropdown box">
                <a class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-chalkboard-teacher"></i> </span
                  ><span class="ml-1">How it works ?</span>
                </a>
                <a class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-sign-language"></i> </span
                  ><span class="ml-1">I'm a farmer.</span>
                </a>
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-chart-area"></i> </span
                  ><span class="ml-1">Invest in a farming.</span>
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-address-book"></i> </span
                  ><span class="ml-1">Contact us.</span>
                </a>
              </div>
            </div>
            <div class="navbar-item fav-fav">
              <a class="favorite-ico is-flex">
                <span v-if="hasFavorites" class="icon is-block">
                  <i class="fas fa-heart" key="unstared"></i>
                </span>
                <span v-else class="icon is-block">
                  <i class="far fa-heart" key="stared"></i>
                </span>
                <span class="is-block pl-1 has-text-weight-semibold is-size-6">My List</span>
              </a>
            </div>
            <div class="navbar-item has-dropdown shop-d-cart is-hoverable">
              <a
                class="navbar-link d-waloo-drop-cart-link waloo-link has-text-weight-semibold"
              >
                <span class="icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <span class="tag is-rounded span-number total-shop ml-2">
                  21
                </span>
              </a>

              <div class="waloo-drop d-waloo-drop-cart navbar-dropdown box">
                <a class="navbar-item">
                  <span class="icon"> <i class="fab fa-opencart"></i> </span
                  ><span class="ml-1">My shopping cart</span>
                  <span class="tag is-rounded span-number ml-2">
                    19
                  </span>
                </a>
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-shopping-bag"></i> </span
                  ><span class="ml-1">My orders</span>
                  <span class="tag is-rounded span-number ml-2">
                    2
                  </span>
                </a>
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-history"></i> </span
                  ><span class="ml-1">My shopping history</span>
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-trash"></i> </span
                  ><span class="ml-1">Empty shopping cart</span>
                </a>
              </div>
            </div>
            <div
              class="navbar-item is-hidden d-login-respo has-dropdown is-hoverable mr-4"
            >
              <a class="navbar-link respo-link has-text-weight-semibold">
                <span class="icon pr-2"> <i class="fas fa-user"></i> </span>
                Log in
              </a>

              <div class="respo-waloo-drop waloo-drop navbar-dropdown box">
                <a class="button btn-logg box">
                  Log in
                </a>
                <span
                  class="is-block log-or pb-2 has-text-weight-semibold has-text-centered"
                  >Or</span
                >
                <hr class="div-log navbar-divider" />
                <a class="button btn-reg box mt-3">
                  <span class="icon pr-4">
                    <i class="fas fa-user-plus"></i>
                  </span>
                  Sign up
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <span class="icon"> <i class="fas fa-address-book"></i> </span
                  ><span class="ml-1">Contact us.</span>
                </a>
              </div>
            </div>
            <div class="d-log-btn navbar-item is-flex">
              <a class="a-login mr-2">
                Log in
              </a>
              <span class="is-block mr-2 or"> or </span>
              <button class="button btn-subscribe">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
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
  methods: {
    searchFocus(): void {
      this.isFocused = true
      this.focused = true
    },
    leaveFocus(): void {
      this.isFocused = false
      this.focused = false
    },
  },
})
</script>

<style scoped>
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
  width: fit-content;
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
    margin-top: 0.6rem;
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
    top: 0.1rem;
  }
  .d-login-respo {
    margin-top: -0.9rem !important;
  }
  .d-waloo-drop-cart-link {
    margin-top: -0.3rem !important;
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
