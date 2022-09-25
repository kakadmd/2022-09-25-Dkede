import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

/* require.context 方法 可以实现批量导入文件
require.context(directory, useSubdirectories, regExp)
directory: 要查找的文件路径
useSubdirectories: 是否查找子目录
regExp: 要匹配文件的正则

返回一个方法
返回的方法具有一个 keys 属性
keys 函数 返回一个数组 */

// 第二个参数是子目录，没有子目录所以是false
const req = require.context('./svg', false, /\.svg$/)

// 函数keys属性 是一个方法 这个方法返回一个数组(包括所有svg图片的数组)
// console.log(req.keys()) // 包括所有在icons文件夹下面的svg图片的数组

// map 返回一个和原来数组长度一致的新数组
// 映射

const requireAll = requireContext => requireContext.keys().map(requireContext)
// 先把requireAll封装成一个函数 req去调用这个函数

requireAll(req)

// 这两个是相等的
// console.log(requireAll(req))
// console.log(req.keys().map(req))
