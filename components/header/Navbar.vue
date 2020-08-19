<template>
  <div class="mt-4 container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="d-search">
        <div class="navbar-brand">
          <a class="a-logo is-flex" href="/">
            <Logo />
            <span
              class="is-block logo-text ml-2 is-size-4 has-text-weight-semibold"
            >
              <span class="wa">Wa</span><span class="loo">loo</span>
            </span>
          </a>
          <div class="s003">
            <form autocomplete="off">
              <div class="inner-form">
                <div class="input-field second-wrap">
                  <input
                    id="search"
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
            <div class="navbar-item has-dropdown is-hoverable mr-2">
              <a class="navbar-link has-text-weight-semibold">
                Waloo
              </a>

              <div class="waloo-drop navbar-dropdown box">
                <a class="navbar-item">
                  <span class="icon is-block">
                    <i class="fas fa-chalkboard-teacher"></i> </span
                  ><span class="ml-1">How it works ?</span>
                </a>
                <a class="navbar-item">
                  <span class="icon is-block">
                    <i class="fas fa-sign-language"></i> </span
                  ><span class="ml-1">I'm a farmer.</span>
                </a>
                <a class="navbar-item">
                  <span class="icon is-block">
                    <i class="fas fa-chart-area"></i> </span
                  ><span class="ml-1">Invest in a farming.</span>
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <span class="icon is-block">
                    <i class="fas fa-address-book"></i> </span
                  ><span class="ml-1">Contact us.</span>
                </a>
              </div>
            </div>
            <div class="navbar-item">
              <a class="a-login mr-2">
                Log in
              </a>
              <span class="mr-2"> or </span>
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
  data() {
    return {
      isFocused: false,
    }
  },
  methods: {
    searchFocus(): void {
      this.isFocused = true
    },
    leaveFocus(): void {
      this.isFocused = false
    },
  },
})
</script>

<style>
.d-search {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.navbar-brand {
  width: 50% !important;
  justify-content: space-between;
}
.a-logo {
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
.d-subscribe > div {
  font-size: 18px;
}
.d-subscribe .navbar-link:hover,
.navbar-item.has-dropdown:hover .navbar-link {
  background-color: transparent !important;
  color: #028300;
  font-weight: 600;
}
.waloo-drop .navbar-item:hover span {
  color: #028300 !important;
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
</style>
