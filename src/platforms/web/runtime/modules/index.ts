import attrs from './attrs'
import klass from './class'
import events from './events'
import domProps from './dom-props'
import style from './style'
import transition from './transition' // 处理过渡动画

// 生命周期的钩子函数组成的数组
export default [attrs, klass, events, domProps, style, transition]
