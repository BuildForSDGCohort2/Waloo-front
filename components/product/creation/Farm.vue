<template>
  <div class="body container box">
    <h1 class="has-text-weight-semibold is-size-6">Adding product</h1>
    <hr />
    <form class="mb-6">
      <h1 class="has-text-weight-semibold is-size-7 mt-2">
        Fill farm's informations
      </h1>
      <hr />
      <FarmPhoto class="f-pic mb-5 mt-5" />
      <div class="body-farm mb-4">
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="text"
              placeholder="Your farm's name"
              v-model="farm"
            />
          </p>
          <span v-if="notHasFarm" class="is-red is-size-7"
            >This field is required.
          </span>
        </div>
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="text"
              placeholder="Your farm's size (ha)"
              v-model="size"
            />
          </p>
          <span v-if="notHasSize" class="is-red is-size-7"
            >This field requires a number.
          </span>
        </div>
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="text"
              placeholder="Your farm's location"
              v-model="location"
            />
          </p>
          <span v-if="notHasLocation" class="is-red is-size-7"
            >This field is required.
          </span>
        </div>
      </div>
      <div class="btn-save is-pulled-right">
        <div class="field">
          <p class="control has-icons-right">
            <button
              type="button"
              @click="continuer"
              class="button btn-subscribe pr-6"
            >
              Save and continue
            </button>
            <span class="icon is-white btn-right">
              <i class="fas fa-arrow-right"></i>
            </span>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      farm: '',
      size: '',
      location: '',
      notHasFarm: false,
      notHasLocation: false,
      notHasSize: false,
    }
  },
  methods: {
    submit() {},
    continuer() {
      this.$router.push({
        path: '/product/add',
      })
    },
  },
})
</script>

<style scoped>
form {
  margin: 0 auto;
  width: 40% !important;
}
.body {
  background-color: #fff;
  padding: 2% 2% 5% 2%;
  width: 80%;
}
.btn-right {
  position: relative;
  left: 9.5rem;
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
@media screen and (max-width: 1024px) {
  .f-pic {
    margin-bottom: 2rem;
  }
}
@media screen and (max-width: 747px) {
  form {
    width: 60% !important;
  }
}
@media screen and (max-width: 500px) {
  form {
    width: 80% !important;
  }
}
</style>
