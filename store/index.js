export const state = () => ({
  hasAccountOpened: false,
  userRegistrationForm: null,
})
export const mutations = {
  account(state,value) {
    state.hasAccountOpened = value
  },
}
