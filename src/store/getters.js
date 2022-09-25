const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device

  // 根据要求 其他的用不到 先注释掉 怕出啥问题
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name
}
export default getters
