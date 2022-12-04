import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
// 生命周期钩子函数组成的对象，组成的数组
const modules = platformModules.concat(baseModules)

// 柯里化 的函数
export const patch: Function = createPatchFunction({ nodeOps, modules })
