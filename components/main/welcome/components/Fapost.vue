<template>
  <div class="fapost mt-6 mb-6">
    <div class="card">
      <div class="card-content post-content">
        <div class="is-flex tittle has-text-weight-semibold">
          <h6 class="title is-6">
            Some posts from farmers
          </h6>
          <a class="is-size-7 pl-1 see-post">See others posts</a>
        </div>
        <div class="df-post">
          <div v-for="j in [9, 7]" :key="j">
            <div class="vvicard">
              <div class="card-content">
                <div class="far-head is-flex">
                  <div class="is-flex">
                    <div class="d-ico-enter is-clickable">
                      <img
                        class="ico-enter is-rounded"
                        src="https://crosscut.com/sites/default/files/styles/max_2000x2000/public/images/articles/veronica_001.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="far-info pl-3">
                      <div>
                        <div>
                          <a class="is-size-6 is-block has-text-weight-semibold"
                            >John Son</a
                          >
                          <span class="is-size-7 is-block from-farm"
                            >From Pretoria</span
                          >
                        </div>
                        <div>
                          <span class="has-text-weight-semibold is-size-7"
                            >2 h &bull;</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="dropdown is-hoverable">
                      <div class="dropdown-trigger is-clickable">
                        <span class="icon is-small">
                          <i class="fas fa-ellipsis-h"></i>
                        </span>
                      </div>
                      <div
                        class="dropdown-menu"
                        id="dropdown-menu3"
                        role="menu"
                      >
                        <div class="dropdown-content ff-dr-co">
                          <a href="#" class="dropdown-item">
                            Overview
                          </a>
                          <a href="#" class="dropdown-item">
                            Modifiers
                          </a>
                          <a href="#" class="dropdown-item">
                            Grid
                          </a>
                          <a href="#" class="dropdown-item">
                            Form
                          </a>
                          <a href="#" class="dropdown-item">
                            Elements
                          </a>
                          <a href="#" class="dropdown-item">
                            Components
                          </a>
                          <a href="#" class="dropdown-item">
                            Layout
                          </a>
                          <hr class="dropdown-divider" />
                          <a href="#" class="dropdown-item">
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fard-d-m card-content">
                <div class="content">
                  Uncle John sowing rice this Friday. <a>#Rice</a>
                  <a>#Fridayfarming</a>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-clickable">
                  <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="none"
                    poster="/videos/poster.jpg"
                    data-setup="{}"
                    onclick="if(this.playing) this.pause(); else this.play();"
                  >
                    <source
                      src="/videos/camilo-pablo-alboran-el-mismo-aire-official-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </figure>
              </div>
              <div class="likes-section is-flex mt-4">
                <div class="d-likes is-flex">
                  <span class="icon pl-4 is-block">
                    <i class="far fa-thumbs-up"></i>
                  </span>
                  <span class="pl-3 is-block has-text-weight-semibold"
                    >6 k</span
                  >
                </div>
                <div class="d-likes is-flex fffirst">
                  <span class="icon pl-4 is-block">
                    <i class="far fa-comment"></i>
                  </span>
                  <span class="pl-3 is-block has-text-weight-semibold"
                    >850</span
                  >
                </div>
                <div class="d-likes is-flex sssecond">
                  <span class="icon pl-4 is-block">
                    <i class="fas fa-share"></i>
                  </span>
                  <span class="pl-3 is-block has-text-weight-semibold">20</span>
                </div>
              </div>
            </div>
          </div>
          <div v-for="i in 4" :key="i">
            <div class="vvicard">
              <div class="card-content">
                <div class="far-head is-flex">
                  <div class="is-flex">
                    <div class="d-ico-enter is-clickable">
                      <img
                        class="ico-enter is-rounded"
                        src="https://www.thehindu.com/sci-tech/agriculture/87sx5z/article30131510.ece/ALTERNATES/LANDSCAPE_1200/NEWS2FARMER"
                        alt="Image"
                      />
                    </div>
                    <div class="far-info pl-3">
                      <div>
                        <div>
                          <a class="is-size-6 is-block has-text-weight-semibold"
                            >John Farmer</a
                          >
                          <span class="is-size-7 is-block from-farm"
                            >From Kigali</span
                          >
                        </div>
                        <div>
                          <span class="has-text-weight-semibold is-size-7"
                            >2 h &bull;</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="dropdown is-hoverable">
                      <div class="dropdown-trigger is-clickable">
                        <span class="icon is-small">
                          <i class="fas fa-ellipsis-h"></i>
                        </span>
                      </div>
                      <div
                        class="dropdown-menu"
                        id="dropdown-menu3"
                        role="menu"
                      >
                        <div class="dropdown-content ff-dr-co">
                          <a href="#" class="dropdown-item">
                            Overview
                          </a>
                          <a href="#" class="dropdown-item">
                            Modifiers
                          </a>
                          <a href="#" class="dropdown-item">
                            Grid
                          </a>
                          <a href="#" class="dropdown-item">
                            Form
                          </a>
                          <a href="#" class="dropdown-item">
                            Elements
                          </a>
                          <a href="#" class="dropdown-item">
                            Components
                          </a>
                          <a href="#" class="dropdown-item">
                            Layout
                          </a>
                          <hr class="dropdown-divider" />
                          <a href="#" class="dropdown-item">
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fard-d-m card-content">
                <div class="content">
                  Uncle John sowing rice this Friday. <a>#Rice</a>
                  <a>#Fridayfarming</a>
                </div>
              </div>
              <div class="card-image">
                <figure class="image is-clickable">
                  <img
                    class="prod-img"
                    src="https://crosscut.com/sites/default/files/styles/max_2000x2000/public/images/articles/veronica_001.jpg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="likes-section is-flex mt-4">
                <div class="d-likes is-flex">
                  <span class="icon pl-4 is-block">
                    <i class="far fa-thumbs-up"></i>
                  </span>
                  <span class="pl-3 is-block has-text-weight-semibold"
                    >6 k</span
                  >
                </div>
                <div class="d-likes is-flex fffirst">
                  <span class="icon pl-4 is-block">
                    <i class="far fa-comment"></i>
                  </span>
                  <span class="pl-3 is-block has-text-weight-semibold"
                    >850</span
                  >
                </div>
                <div class="d-likes is-flex sssecond">
                  <span class="icon pl-4 is-block">
                    <i class="fas fa-share"></i>
                  </span>
                  <span class="pl-3 is-block has-text-weight-semibold">20</span>
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
  data() {
    return {
      isPlaying: false,
    }
  },
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
.post-content {
  padding-bottom: 5rem;
}
.vvicard {
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1rem;
}
.see-post {
  color: #028300;
}
.ff-dr-co {
  position: absolute;
  left: -7rem;
}
.d-likes {
  width: fit-content !important;
  padding-right: 0.9rem;
  text-align: center;
  cursor: pointer;
}
.d-likes span {
  margin: 0 auto;
}
.d-likes:hover {
  color: #028300;
  background-color: #0283000e;
  border-radius: 290486px;
  transition: ease-in 0.1s;
}
.likes-section {
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
.fard-d-m {
  margin-top: -2rem;
}
.likes .icon .fa-thumbs-up {
  color: #028300;
}
.far-info {
  margin-top: -0.3rem;
}
.far-head {
  justify-content: space-between;
}
.see-post:hover {
  text-decoration: underline;
}
.far-info a {
  color: black;
}
.df-post {
  width: 46%;
  height: 800px;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  border-top: 1px solid #dbdbdb;
  overflow: scroll;
  overflow-x: hidden;
  position: relative;
  top: 0.5rem;
  margin: 0 auto;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}
.ico-enter {
  width: 48px;
  height: 48px;
}
.d-ico-enter {
  width: fit-content;
  height: fit-content;
}
.from-farm {
  margin-top: -0.3rem;
}
.prod-img {
  border: 1px solid #dbdbdb;
  border-radius: 5px;
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
@keyframes appear {
  0% {
    transform: translateZ(10px);
  }
}
</style>
