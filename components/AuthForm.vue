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
        <p class="control">
          <input
            class="input"
            type="email"
            v-on:keyup="checkEmail"
            placeholder="Enter your email"
            v-model="email"
          />
        </p>
        <span v-if="!emailValid" class="is-red is-size-7"
          >Email is required. Ex: yaya@gmail.com
        </span>
        <span v-if="emailUsed" class="is-red is-size-7">
          <span>This email is already taken.</span>
        </span>
      </div>
      <div v-else class="field">
        <p class="control" :class="{ 'has-icons-right': validEmail }">
          <input
            class="input"
            :class="{ 'has-outline-green': validEmail }"
            type="email"
            v-on:keyup="checkEmail"
            placeholder="Enter your email"
            v-model="email"
          />
          <span v-if="validEmail" class="icon is-small is-green is-right">
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
      <div class="field">
        <p
          class="control"
          :class="{
            'has-icons-right': pwdequal,
          }"
        >
          <input
            class="input"
            :class="{
              'has-outline-green': pwdequal,
              'has-outline-red': notpwdequal,
            }"
            type="password"
            placeholder="Your password"
            v-model="password"
          />
          <span key="stared" v-if="pwdequal" class="icon is-small is-green is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
        <span class="is-size-7">
          <span>password must be at least </span>
          <span v-if="validPwd" class="is-green">8 characers ✔.</span>
          <span v-else class="is-red">8 characters &#215;.</span>
        </span>
      </div>
      <div v-if="hasname" class="field">
        <p
          class="control"
          :class="{
            'has-icons-right': pwdequal,
          }"
        >
          <input
            class="input"
            :class="{
              'has-outline-green': pwdequal,
              'has-outline-red': notpwdequal,
            }"
            type="password"
            placeholder="Your password confirmation"
            v-model="password_confirmation"
          />
          <span key="okstared" v-if="pwdequal" class="icon is-small is-green is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
        <span class="is-size-7">
          <span>password must be at least </span>
          <span v-if="validPwdconf" class="is-green">8 characers ✔.</span>
          <span v-else class="is-red">8 characters &#215;.</span>
        </span>
        <p v-if="notpwdequal">
          <span class="is-red is-size-7"
            >password and password confirmation are not equal.</span
          >
        </p>
      </div>
      <div v-if="hasname" class="field">
        <input
          v-if="
            emailValid &&
            namefill &&
            validPwd &&
            validPwdconf &&
            pwdequal
          "
          type="submit"
          class="button btn-subscribe"
          value="Create an account"
        />
        <input
          v-else
          type="submit"
          class="button btn-subscribe"
          value="Create an account"
          disabled
        />
      </div>
      <div v-else class="field">
        <input
          v-if="!validEmail || !validPwd"
          type="submit"
          class="button btn-subscribe"
          value="Login"
          disabled
        />
        <input
          v-if="validEmail && validPwd"
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
  props: ['textbtn', 'hasname'],
  data() {
    return {
      hasData: false,
      nameEmpty: false,
      namefill: false,
      emailExist: true,
      emailUsed: false,
      emailValid: true,
      email: '',
      name: '',
      password: '',
      password_confirmation: '',
    }
  },
  computed: {
    checkmail() {
      return this.emailExist == true
    },
    validPwd() {
      return this.password.length >= 8
    },
    validPwdconf() {
      return this.password_confirmation.length >= 8
    },
    pwdequal() {
      return (
        this.password.length >= 8 &&
        this.password_confirmation.length >= 8 &&
        (this.password === this.password_confirmation)
      )
    },
    notpwdequal() {
      return (
        this.password.length >= 8 &&
        this.password_confirmation.length >= 8 &&
        (this.password_confirmation !== this.password)
      )
    },
    validEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    },
  },
  methods: {
    checkEmail(e) {
      if (this.email === '') {
        this.emailExist = true
        this.emailValid = false
      }
      if (
        e.keyCode !== 37 &&
        e.keyCode !== 38 &&
        e.keyCode !== 39 &&
        e.keyCode !== 40
      ) {
        this.emailExist = true
        if (this.validEmail) {
          this.emailValid = true
        } else {
          this.emailExist = true
          this.emailValid = false
        }
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
    checkExistence() {
      this.emailExist = true
      this.$axios
        .$post('api/emailExistence', {
          email: this.email,
        })
        .then((response) => {
          this.emailUsed = response == 0 ? true : false
          this.emailExist = response == 0 ? true : false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    submit() {
      if (this.hasname) this.register()
      else this.login()
    },
    register() {
      this.$axios
        .$post('api/register', {
          email: this.email,
          name: this.name,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then((response) => {
          this.$store.commit('account', true)
          this.$router.push('/login')
        })
    },
    async login() {
      this.error = {}
      try {
        await this.$auth.loginWith('local', {
          email: this.email,
          password: this.password,
        })

        // Redirect user after login
        this.$router.push({
          path: '/',
        })
      } catch (err) {
        this.error = err
        // do something with error
      }
    },
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
.fa-times {
  color: red !important;
}
</style>
