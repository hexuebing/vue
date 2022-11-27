import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
import type { GlobalAPI } from 'types/global-api'

// 此处不用class 是为了方便后续给Vue实例混入实例成员
function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

//@ts-expect-error Vue has function type
initMixin(Vue) // 注册了vm的 _init() 方法
//@ts-expect-error Vue has function type
stateMixin(Vue) // 注册 vm 的 $data/$props/$set/$delete/$watch
//@ts-expect-error Vue has function type
eventsMixin(Vue) // 初始化事件相关方法
//@ts-expect-error Vue has function type
lifecycleMixin(Vue) // 初始化生命周期相关的混入方法 _update/$forceUpdate/$destroy
//@ts-expect-error Vue has function type
renderMixin(Vue) // 混入render $nextTick/ _render

export default Vue as unknown as GlobalAPI
