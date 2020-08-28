<template>
  <div class="container">
    <div class="picture is-flex justy-between">
      <div class="is-flex">
        <div>
          <figure @click="openImage" class="is-clickable image">
            <img
              class="my-pic has-a-border is-border-radius-5px"
              :src="image"
            />
          </figure>
          <div class="modal" :class="{ 'is-active': open }">
            <div class="modal-background"></div>
            <div class="modal-content full-width">
              <p class="image">
                <img
                  class="is-border-radius-5px c-fig is-d-centered"
                  :src="image"
                  alt=""
                />
              </p>
            </div>
            <button
              type="button"
              @click.prevent="openImage"
              class="modal-close is-large"
              aria-label="close"
            ></button>
          </div>
          <input
            id="fileid"
            @change="changeImage"
            key="this"
            type="file"
            ref="file"
            name="file"
            hidden
          />
        </div>
        <div class="is-flex is-col-flex flext-start">
          <div>
            <a
              @click="uploadFile" title="Add a picture"
              class="my-add-btn is-block ml-4 has-text-weight-semibold"
            >
              <span class="icons box add-btn mr-2">
                <i class="fas fa-plus"></i>
              </span>
            </a>
            <a
              v-if="remove" title="remove the picture"
              @click="removeImage"
              class="mt-4 my-add-btn ml-4 d-remove is-block is-flex-self-start has-text-weight-semibold"
            >
              <span class="icons box is-red add-btn mr-2">
                <i class="fas fa-minus"></i>
              </span>
            </a>
          </div>
          <span
            v-if="notImage"
            class="pl-4 mt-2 is-block is-red is-size-7 has-text-weight-semibold"
            >Image is required with size < 5MB</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      open: false,
      remove: false,
      notImage: false,
      file: '',
      image: '/images/cart.png',
      imageSaved: '/images/cart.png',
    }
  },
  methods: {
    openImage() {
      this.open = !this.open
    },
    removeImage() {
      this.notImage = false
      this.file = ''
      this.image = this.imageSaved
      this.remove = false
    },
    uploadFile() {
      document.getElementById('fileid').value = ''
      document.getElementById('fileid').click()
    },
    changeImage() {
      this.notImage = false
      this.file = this.$refs.file.files[0]
      let reader = new FileReader()
      reader.addEventListener(
        'load',
        function () {
          this.image = reader.result
        }.bind(this),
        false
      )
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          if (this.file.size < 5000000) {
            reader.readAsDataURL(this.file)
            this.remove = true
          } else this.notImage = true
        } else this.notImage = true
      }
    },
    setImage() {
      const fileInput = document.querySelector(
        '#file-js-example input[type=file]'
      )
      if (fileInput.files.length > 0) {
        const fileName = document.querySelector('#file-js-example .file-name')
        fileName.textContent = fileInput.files[0].name
      }
    },
  },
})
</script>

<style scoped>
.d-remove {
  animation: 0.1s appear;
}
.ch-img {
  padding: 2%;
  width: 100% !important;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.c-fig {
  overflow: scroll;
  max-width: 80% !important;
  max-height: auto !important;
}
.modal-content {
  overflow: scroll !important;
  overflow-x: hidden !important;
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
.modal-content:hover::-webkit-scrollbar-thumb {
  background: #028300;
}
.img-box {
  width: 80% !important;
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
.zz {
  width: 200px !important;
  height: fit-content !important;
}
.my-add-btn {
  height: fit-content;
  width: fit-content;
  align-self: flex-end;
  color: black;
}
.my-pic {
  width: 128px !important;
  height: 128px !important;
}
.dd-inf {
  width: 50% !important;
}
.fa-plus {
  color: #028300;
}
.icons {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 8px;
  width: 8px;
}
.btn-right {
  position: relative;
  left: 0rem;
}
.save-btn {
  padding-left: 2.5rem !important;
}
.add-btn {
  border-radius: 290486px;
}
.my-add-btn:hover .add-btn {
  animation: 1s appear;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.192);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.192);
}
@media screen and (max-width: 747px) {
  img {
    width: 64px !important;
    height: 64px !important;
  }
  .c-fig {
    width: 70% !important;
    height: 70% !important;
  }
}
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
</style>
