<template>
  <div class="wawa container mt-6">
    <h6 class="title is-6 has-text-centered">
      Buy from your favourites farmers, sell your products directly to consumer
      or invest in a farmer.
    </h6>
    <div class="columns d-d-pre mt-5">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                class="pre-img"
                src="/images/presentation/consumer.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content is-size-6 has-text-weight-semibold">
              Buy from your favourites farmers and stay in touch.
            </div>
          </div>
          <div class="d-pre-btn">
            <button class="button pre-btn is-size-7">
              <span class="icon pr-4">
                <i class="fas fa-user-plus"></i>
              </span>
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                class="pre-img"
                src="/images/presentation/farm.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content is-size-6 has-text-weight-semibold">
              Sell your products to consumers entirely by your own.
            </div>
          </div>
          <div class="d-pre-btn">
            <button class="button pre-btn is-size-7">
              Learn more
              <span class="icon pl-4">
                <i class="fas fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                class="pre-img"
                src="/images/presentation/invest.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content is-size-6 has-text-weight-semibold">
              Invest in a farmer to support him or be a partner.
            </div>
          </div>
          <div class="d-pre-btn">
            <button class="button pre-btn is-size-7">
              Learn more
              <span class="icon pl-4">
                <i class="fas fa-arrow-right"></i>
              </span>
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
.wawa {
  width: 60%;
  position: relative;
  top: 5rem;
  padding-bottom: 6rem;
  margin: 0 auto;
}
.card {
  padding-bottom: 1rem;
}
.pre-btn,
.d-pre-btn {
  width: 100%;
}
.pre-btn {
  color: white;
  background-color: #028300;
  border: none !important;
}
.pre-btn:hover {
  transform: scale(1.08);
  animation: 0.2s appear;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}
.card:hover .d-pre-btn {
  display: block !important;
}
@media screen and (max-width: 768px) {
  .d-d-pre {
    width: 80%;
    margin: 0 auto;
  }
}
.card:hover {
  transform: scale(1.03);
  animation: 0.2s appear;
}
.d-pre-btn {
  position: relative;
  width: 90%;
  margin: 0 auto;
}
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
@keyframes appear2 {
  0% {
    transform: translateY(10px);
  }
}
</style>
