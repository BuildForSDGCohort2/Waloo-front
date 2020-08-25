export const state = () => ({
  hasAccountOpened: false,
  hasAccountUnOpened: false,
  userRegistrationForm: null,
})
export const mutations = {
  account(state,value) {
    state.hasAccountOpened = value
  },
  accountUnopend(state,value) {
    state.hasAccountUnOpened = value
  },
}
