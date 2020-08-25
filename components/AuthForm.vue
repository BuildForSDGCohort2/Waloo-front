<template>
  <div>
    <form @submit.prevent="submit" class="container form" autocomplete="off">
      <div class="field">
        <h5 v-if="!hasname" class="title is-5 is-block ml-2 pb-4">
          Log in the application.
        </h5>
        <h5 v-else class="title is-5 is-block ml-2 pb-4">Create an account.</h5>
      </div>
      <div v-if="hasname" class="field">
        <p class="control" :class="{ 'has-icons-right': !emailExist }">
          <input
            class="input"
            :class="{ 'has-outline-green': !emailExist }"
            type="email"
            v-on:keyup="checkEmail"
            placeholder="Enter your email"
            v-model="email"
          />
          <span v-if="!emailExist" class="icon is-small is-green is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
        <span v-if="!emailValid" class="is-red is-size-7"
          >Email is required. Ex: yaya@gmail.com
        </span>
        <span v-if="!emailExist" class="is-green is-size-7">
          <span>This email can be used.</span>
        </span>
      </div>
      <div v-else class="field">
        <p class="control" :class="{ 'has-icons-right': !emailExist }">
          <input
            class="input"
            :class="{ 'has-outline-green': !emailExist }"
            type="email"
            v-on:keyup="checkEmail"
            placeholder="Enter your email"
            v-model="email"
          />
          <span v-if="!emailExist" class="icon is-small is-green is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
        <span v-if="!emailValid" class="is-red is-size-7"
          >Email is required. Ex: yaya@gmail.com
        </span>
      </div>
      <div v-if="hasname" class="field">
        <p class="control" :class="{ 'has-icons-right': namefill }">
          <input
            class="input"
            :class="{ 'has-outline-green': namefill }"
            type="text"
            v-on:keyup="checkName"
            placeholder="Enter your name"
            v-model="name"
          />
          <span v-if="namefill" class="icon is-small is-green is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
        <span v-if="nameEmpty" class="is-red is-size-7">
          <span>Please enter a name.</span>
        </span>
      </div>
      <div v-if="hasname" class="field">
        <p class="control" :class="{ 'has-icons-right': validPwd }">
          <input
            class="input"
            :class="{ 'has-outline-green': validPwd }"
            type="password"
            placeholder="Your password"
            v-model="password"
          />
          <span v-if="validPwd" class="icon is-small is-green is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
        <span class="is-size-7">
          <span>password must be at least </span>
          <span v-if="validPwd" class="is-green">8 characers ✔.</span>
          <span v-else class="is-red">8 characters &#215;.</span>
        </span>
      </div>
      <div v-else class="field">
        <p class="control">
          <input
            class="input"
            type="password"
            placeholder="Your password"
            v-model="password"
          />
        </p>
        <span class="is-size-7">
          <span>password must be at least </span>
          <span v-if="validPwd" class="is-green">8 characers ✔.</span>
          <span v-else class="is-red">8 characters &#215;.</span>
        </span>
      </div>
      <div v-if="hasname" class="field">
        <input
          v-if="!validPwd || emailExist || !namefill"
          type="submit"
          class="button btn-subscribe"
          value="Create an account"
          disabled
        />
        <input
          v-if="validPwd && !emailExist && namefill"
          type="submit"
          class="button btn-subscribe"
          value="Create an account"
        />
      </div>
      <div v-else class="field">
        <input
          v-if="!validPwd || emailExist"
          type="submit"
          class="button btn-subscribe"
          value="Login"
          disabled
        />
        <input
          v-if="validPwd && !emailExist"
          type="submit"
          class="button btn-subscribe"
          value="Login"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['submit', 'textbtn', 'hasname'],
  data() {
    return {
      hasData: false,
      nameEmpty: false,
      namefill: false,
      emailExist: true,
      emailValid: true,
      email: '',
      name: '',
      password: '',
    }
  },
  computed: {
    validPwd() {
      return this.password.length >= 8
    },
    validEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    },
  },
  methods: {
    checkEmail() {
      if (this.validEmail) {
        this.emailValid = true
        this.emailExist = false
        
      } else {
        this.emailValid = false
        this.emailExist = true
      }
    },
    checkName() {
      if (this.name === '') {
        this.nameEmpty = true
        this.namefill = false
      } else {
        this.nameEmpty = false
        this.namefill = true
      }
    },
    checkExistence() {},
  },
}
</script>

<style scoped>
.form {
  width: 30%;
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
