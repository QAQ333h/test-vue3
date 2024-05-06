// Vue3 api 模块化
// Vue2 中对 vue 库是全量引用
// Vue3 几乎兼容所有 Vue2 的语法 平滑的过度
// Vue3 推荐组合式 API
// vue3 干掉了一些
/

- name
- data
- methods
- computed
- watch
- components
- mixins
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destoryed
- ...
  /

  1.使用 createApp(根组件) 创建根组件
  2.setup = beforeCreate + created
  3.setup 是 vue3 API(和 vue2 选项配置) 的入口
  4.setup 函数返回的对象中的属性才能被模板使用 5.使用 ref 定义响应式数据 ref 定义的数据都需要使用.value 取值(模板语法的{{}}除外)                6.使用 reactive 定义响应式数据 不能用于基本数据类型的响应式数据的定义
  7.ref 式 reactive 的语法糖 (ref 就是基于 reactive 实现的)
  8.ref 用于任意数据类型，reactive 仅用于对象
  9.toRef：将 reactive 定义的响应式数据的某个属性转换为某个 ref 响应式数据
  10.toRefs：批量转换 解构保持响应式

  ...js
  import {reactive} from 'vue';
  const $ref = (initValye)=>{({value:initValue})

  }
  ...
