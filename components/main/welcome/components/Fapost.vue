<template>
  <div class="fapost mt-6 mb-6">
    <div class="card">
      <div class="card-content">
        <div class="is-flex tittle has-text-weight-semibold">
          <h6 class="title is-6">
            Some posts from farmers
          </h6>
          <a class="is-size-7 pl-1 see-post">See others posts</a>
        </div>
        <div class="df-post">
          <div v-for="i in 4" :key="i">
            <div class="vvicard">
              <div class="card-content">
                <div class="level">
                  <div class="level-left">
                    <div class="level-item"></div>
                  </div>
                  <div class="level-right"></div>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    class="prod-img"
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                gb
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.fapost {
  margin: 0 auto;
}
.see-post {
  color: #028300;
}
.see-post:hover {
  text-decoration: underline;
}
.df-post {
  width: 46%;
  margin: 0 auto;
}
@media screen and (max-width: 1023px) {
  .df-post {
    width: 48%;
  }
}
@media screen and (max-width: 1215px) {
  .df-post {
    width: 55%;
  }
}
@media screen and (max-width: 970px) {
  .df-post {
    width: 57%;
  }
}
@media screen and (max-width: 900px) {
  .df-post {
    width: 60%;
  }
}
@media screen and (max-width: 747px) {
  .df-post {
    width: 73%;
  }
}
@media screen and (max-width: 620px) {
  .df-post {
    width: 80%;
  }
}
@media screen and (max-width: 567px) {
  .df-post {
    width: 90%;
  }
}
</style>
