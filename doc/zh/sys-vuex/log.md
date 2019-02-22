# log

## state.list

当前的日志记录

## getters.length

### 介绍

返回现存 log (all) 的条数。

### 参数

无

### 示例

``` js
this.$store.getters['d2admin/log/length']
```

## getters.lengthError

### 介绍

返回现存 log (error) 的条数。

### 参数

无

### 示例

``` js
this.$store.getters['d2admin/log/lengthError']
```

## actions.add

### 介绍

添加一个日志。

### 参数

| 参数名 | 介绍 | 必选 | 值类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- | --- |
| type | 日志类型 | 非 | String | log, error | log |
| err | 错误对象 | 非 | Error |  |  |
| instance | vue 实例 | 非 | Object |  |  |
| info | 信息 | 非 | String |  |  |

### 示例

记录日志：

``` js
this.$store.dispatch('d2admin/log/add', {
  info: 'this is a log'
})
```

记录错误：

``` js
import store from '@/store'
export default {
  install (Vue, options) {
    Vue.config.errorHandler = function (err, instance, info) {
      Vue.nextTick(() => {
        store.dispatch('d2admin/log/add', {
          type: 'error',
          err,
          instance,
          info
        })
      })
    }
  }
}
```

## mutations.clean

### 介绍

清空日志。

### 参数

无

### 示例

``` js
this.$store.commit('d2admin/log/clean')
```