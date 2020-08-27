export const state = () => ({
  hasAccountOpened: false,
  hasAccountUnOpened: false,
  pageRefresh: false,
  hasFailedAuth: false,
  userRegistrationForm: null,
})
export const mutations = {
  account(state,value) {
    state.hasAccountOpened = value
  },
  refreshing(state,value) {
    state.pageRefresh = value
  },
  accountUnopend(state,value) {
    state.hasAccountUnOpened = value
  },
  noAuth(state,value) {
    state.hasFailedAuth = value
  },
}
