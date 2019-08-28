---
sidebar: auto
---

# 国际化

## 依赖

本项目国际化依赖插件 [vue-i18n](http://kazupon.github.io/vue-i18n/zh/)

> Vue I18n 是 Vue.js 的国际化插件

## 安装

> 项目中已经安装完成，可以直接使用

D2Admin 使用 Vue Cli 3.x 构建，所以使用下面的安装方式：

``` sh
vue add i18n
```

安装完毕之后删除生成的一些无用文件。

## 配置

* [.env](https://github.com/d2-projects/d2-admin/blob/master/.env)

```
VUE_APP_I18N_LOCALE=zh-chs
VUE_APP_I18N_FALLBACK_LOCALE=en
```

* [vue.config.js](https://github.com/d2-projects/d2-admin/blob/master/vue.config.js)

``` js
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh-chs',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
```

* [src/i18n.js](https://github.com/d2-projects/d2-admin/blob/master/src/i18n.js)

``` js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import util from '@/libs/util'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const messages = loadLocaleMessages()

Vue.prototype.$languages = Object.keys(messages).map(langlage => ({
  label: messages[langlage]._name,
  value: langlage
}))

export default new VueI18n({
  locale: util.cookies.get('lang') || process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  messages
})
```

* [src/main.js](https://github.com/d2-projects/d2-admin/blob/master/src/main.js)

``` js {7}
import Vue from 'vue'
import i18n from './i18n'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  ...
})
```

* [src/App.vue](https://github.com/d2-projects/d2-admin/blob/master/src/App.vue)

``` vue
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import util from '@/libs/util'
export default {
  name: 'app',
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  created () {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    i18nHandle (val, oldVal) {
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public-class.scss';
</style>
```

* [src/layout/header-aside/components/header-locales/index.vue](https://github.com/d2-projects/d2-admin/blob/master/src/layout/header-aside/components/header-locales/index.vue)

``` vue
<template>
  <el-dropdown
    placement="bottom"
    size="small"
    @command="onChangeLocale">
    <el-button class="d2-mr btn-text can-hover" type="text">
      <d2-icon name="language" style="font-size: 16px;"/>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="language in $languages"
        :key="language.value"
        :command="language.value">
        <d2-icon :name="$i18n.locale === language.value ? 'dot-circle-o' : 'circle-o'" class="d2-mr-5"/>
        {{ language.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  methods: {
    onChangeLocale (command) {
      this.$i18n.locale = command
      // 下面的部分可以去掉
      let message = `当前语言：${this.$t('_name')} [ ${this.$i18n.locale} ]`
      if (['TRAVIS', 'NETLIFY'].includes(process.env.VUE_APP_BUILD_MODE)) {
        message = [
          `当前语言：${this.$t('_name')} [ ${this.$i18n.locale} ]`,
          `仅提供切换功能，没有配置具体的语言数据 `,
          `文档参考：<a class="el-link el-link--primary is-underline" target="_blank" href="https://doc.d2admin.fairyever.com/zh/sys-locales/">《国际化 | D2Admin》</a>`
        ].join('<br/>')
      }
      this.$notify({
        title: '语言变更',
        dangerouslyUseHTMLString: true,
        message
      })
    }
  }
}
</script>
```

> 别忘了在 [src/layout/header-aside/layout.vue](https://github.com/d2-projects/d2-admin/blob/master/src/layout/header-aside/layout.vue) 中加入上面这个新的组件 

如果你需要在登录页面添加语言切换，可以参考 [src/views/system/login/page.vue](https://github.com/d2-projects/d2-admin/blob/master/src/views/system/login/page.vue)

``` html {3-9}
<div class="page-login--content-footer">
  <p class="page-login--content-footer-locales">
    <a
      v-for="language in $languages"
      :key="language.value"
      :command="language.value"
      @click="$i18n.locale = language.value">
      {{ language.label }}
    </a>
  </p>
</div>
```
