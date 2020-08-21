<template>
  <div class="location container">
    <div
      class="dropdown"
      :class="{ 'is-active': isActive }"
      @click="openClose"
      v-click-outside="hideIt"
    >
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span class="icon is-color-4a">
            <i class="fas fa-flag"></i> </span
          ><span class=""> {{ curcountry }}</span>
          <span class="icon is-small pt-1">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="sp-pa ttop"></div>
          <a
            v-for="country in continents"
            :key="country"
            class="dropdown-item"
            @click="setCountry(country)"
          >
            {{ country }}
          </a>
          <hr class="navbar-divider" />
          <a
            v-for="(country, index) in countries"
            :key="index"
            class="dropdown-item"
            @click="setCountry(country)"
          >
            {{ country }}
          </a>
          <div class="sp-pa bbot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      curcountry: 'Algeria',
      isActive: false,
      closeByDrop: false,
      countries: [
        'Algeria',
        'Angola',
        'Burkina Faso',
        'Cameroon',
        'Chad',
        'Democratic Republic of the Congo',
        'Egypt',
        'Gabon',
        'Ghana',
        'Ivory Coast',
        'Kenya',
        'Mali',
        'Morocco',
        'Niger',
        'Nigeria',
        'Rwanda',
        'Senegal',
        'South Africa',
        'Tunisia',
        'Uganda',
        'Zambia',
      ],
      continents: ['Africa', 'America', 'Asia', 'Europa', 'Oceania'],
    }
  },
  methods: {
    openClose(): void {
      this.isActive = !this.isActive
    },
    hideIt(): void {
      this.isActive = false
    },
    setCountry(country: string): void {
      this.curcountry = country
    },
  },
})
</script>

<style scoped>
.location,
.dropdown-menu {
  z-index: 999;
}
.dropdown-menu {
  height: 625px;
  animation: 0.2s appear;
}
.dropdown-content {
  height: 80%;
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 5px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}
.dropdown-content:hover::-webkit-scrollbar-thumb {
  background: #028300;
}
.location {
  border-bottom: 1px solid #dbdbdb46;
}
.button {
  border: none !important;
}
.button:hover span svg {
  color: #028300;
}
.button:focus,
.button:active {
  outline: transparent !important;
  border: none !important;
}
@keyframes appear {
  0% {
    transform: translateY(-10px);
  }
}
</style>
