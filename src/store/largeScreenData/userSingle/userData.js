export default {
  state: {
    memberFamily: [{
      MAN: 'XXX',
      WOMEN: 'XXX',
      OLD: 'XXX',
      CHILD: 'XXX'
    }],
    tagMessage: [],
    viewingFlow: []
  },
  actions: {},
  mutations: {
    UPDATE_USER_DATA (state, data) {
      // 更新用戶數據
      state.memberFamily = data.memberFamily
      state.tagMessage = data.tagMessage
      state.viewingFlow = data.viewingFlow
    }
  }
}
