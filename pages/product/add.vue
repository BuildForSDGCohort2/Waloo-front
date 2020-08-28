<template>
  <div class="body container box">
    <h1 class="has-text-weight-semibold is-size-6">Adding product</h1>
    <hr />
    <div class="btn-save">
      <div class="field">
        <a @click="back" class="a-previous">
          <span class="icon">
            <i class="fas fa-arrow-left"></i>
          </span>
        </a>
      </div>
    </div>
    <form class="mb-6">
      <h1 class="has-text-weight-semibold is-size-7 mt-2">
        Product's informations
      </h1>
      <hr />
      <ProductPhoto class="f-pic mb-5 mt-5" />
      <div class="body-farm mb-4">
        <div class="field">
          <label class="label is-size-7">Title</label>
          <p class="control">
            <input
              class="input"
              type="text"
              placeholder="Your product's title"
              v-model="title"
            />
          </p>
          <span v-if="notHasTitle" class="is-red is-size-7"
            >This field is required.
          </span>
        </div>
        <div class="field">
          <label class="label is-size-7">Description</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Your product's description"
              v-model="desc"
            ></textarea>
          </div>
          <span v-if="notHasdesc" class="is-red is-size-7"
            >This field requires a number.
          </span>
        </div>
        <div class="field">
          <label class="label is-size-7">Price</label>
          <p class="control">
            <input
              class="input"
              type="text"
              placeholder="Your product's price"
              v-model="price"
            />
          </p>
          <span v-if="notHasPrice" class="is-red is-size-7"
            >This field is required.
          </span>
        </div>
        <div class="field">
          <label class="label is-size-7">Quantity</label>
          <p class="control">
            <input
              class="input"
              type="number"
              placeholder="Your product's quantity"
              v-model="quantity"
              min="1"
            />
          </p>
          <span v-if="notHasQuantity" class="is-red is-size-7"
            >This field is required (a number).
          </span>
        </div>
      </div>
      <div class="is-flex justy-between">
        <div class="btn-save is-pulled-right is-d-centered">
          <div class="field">
            <p class="control has-icons-left">
              <span class="icon is-white btn-left">
                <i class="fas fa-bullhorn"></i>
              </span>
              <button
                type="button"
                @click="continuer"
                class="button btn-subscribe pl-6"
              >
                Save and publish
              </button>
            </p>
          </div>
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
      title: '',
      desc: '',
      price: '',
      quantity: Number,
      notHasTitle: false,
      notHasdesc: false,
      notHasPrice: false,
      notHasQuantity: false,
    }
  },
  methods: {
    submit() {},
    continuer() {
      this.$router.push({
        path: '/product/add',
      })
    },
    back() {
      this.$router.back()
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
  width: 68.3%;
}
.btn-right {
  position: relative;
  left: 9.5rem;
}
.a-previous {
  color: rgb(119, 119, 119);
  opacity: 0.3;
}
.icon {
  background-color: transparent !important;
}
.a-previous:hover {
  color: rgb(119, 119, 119);
  opacity: 1;
  background-color: transparent;
  animation: 1s appear;
}
.a-previous .fa-arrow-left {
  font-size: 24px;
  background-color: transparent !important;
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
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
</style>
