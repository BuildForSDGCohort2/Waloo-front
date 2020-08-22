<template>
  <div class="bewa px-2">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="card">
          <div class="card-content">
            <div
              class="content d-item is-multiline is-size-7 has-text-weight-semibold"
            >
              <a class="navbar-item wal">
                <span class="icon">
                  <i class="fas fa-hat-cowboy-side"></i> </span
                ><span>Livestock and poultry</span>
              </a>
              <a class="navbar-item wal">
                <span class="icon"> <i class="fab fa-forumbee"></i> </span
                ><span>Fruits, honey and bees</span>
              </a>
              <a class="navbar-item wal">
                <span class="icon"> <i class="fas fa-ring"></i> </span
                ><span>Cereals and oilseeds</span>
              </a>
              <a class="navbar-item wal">
                <span class="icon"> <i class="fas fa-carrot"></i> </span
                ><span>Vegetables</span>
              </a>
              <a class="navbar-item wal">
                <span class="icon"> <i class="fas fa-cannabis"></i> </span
                ><span>Tobacco</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card most-card">
          <div class="card-content">
            <div class="is-size-6 has-text-weight-semibold">
              <h6 class="title is-6">
                Most requested
              </h6>
              <div class="columns is-multiline db-prod">
                <div v-for="i in 10" :key="i" class="column prod-taille">
                  <div class="vvcard">
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
          <div class="d-pre-btn is-hidden">
            <button class="button pre-btn is-size-7">
              <span class="icon pr-4">
                <i class="fas fa-user-plus"></i>
              </span>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.bewa {
  position: relative;
  top: 3rem;
  margin-top: 4rem;
  margin: 0 auto;
}
.wal:hover {
  color: #028300 !important;
}
.prod-img {
  width: 100% !important;
}
.prod-taille {
  flex: none;
  width: 33%;
}
.most-card {
  padding-bottom: 3rem;
}
.db-prod {
  height: 773px;
  overflow: scroll;
  padding-left: 5px;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 5px; /* Remove scrollbar space */
  border-radius: 10px;
  animation: 0.2s appear;
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}
.db-prod:hover::-webkit-scrollbar-thumb {
  background: #028300;
}
.vvcard:hover {
  cursor: pointer;
  animation: 0.2s appear;
  background-color: white;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}
@media screen and (max-width: 1215px) {
  .prod-taille {
    width: 33.3333%;
  }
}
@media screen and (max-width: 900px) {
  .prod-taille {
    width: 45%;
  }
  .db-prod {
    width: fit-content !important;
    margin-left: 2rem;
  }
}
@media screen and (max-width: 780px) {
  .prod-taille {
    width: 50%;
  }
  .db-prod {
    width: fit-content !important;
    margin-left: -0.6rem;
  }
}
@media screen and (max-width: 768px) {
  .db-prod {
    display: flex !important;
  }
  .prod-taille {
    width: 33%;
  }
  .d-item {
    display: flex !important;
  }
}
@media screen and (max-width: 750px) {
  .d-item {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 700px) {
  .prod-taille {
    width: 50%;
  }
}
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
</style>
