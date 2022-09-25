// setting.js是对一些项目信息的配置，里面有三个属性
// title：项目名称
// fixedHeader 是固定头部
// siderbarLogo 显示左侧菜单logo
// setting.js中文件在其他位置会引用到，所以这里暂时不去对该文件进行变动

module.exports = {

  title: '帝可得',

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false
}
