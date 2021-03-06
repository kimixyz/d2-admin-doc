module.exports = {
  base: '/d2-admin/doc/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'D2 Admin',
      description: 'Elegant management system front-end integration'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'D2 Admin',
      description: '优雅的管理系统前端集成方案'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo@2x.png` }],
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?4dc4058555bdd10f93ff99cfc3fded4d";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']
  ],
  themeConfig: {
    // 项目仓库地址
    repo: 'd2-projects/d2-admin',
    // 文档仓库地址
    docsRepo: 'd2-projects/d2-admin-doc',
    // 文档不是放在仓库的根目录下
    docsDir: 'doc',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 多国语言
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last update'
      },
      '/zh/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新',
        nav: [
          {
            text: '学习',
            items: [
              { text: '教程', link: '/zh/learn-guide/' },
              { text: '基础知识', link: '/zh/learn-knowledge/' }
            ]
          },
          {
            text: '模块',
            items: [
              { text: '组件', link: '/zh/sys-components/' },
              { text: '插件', link: '/zh/sys-plugins/' },
              { text: 'vuex', link: '/zh/sys-vuex/' },
              { text: '路由', link: '/zh/sys-route/' },
              { text: '菜单', link: '/zh/sys-menu/' },
              { text: '异步请求', link: '/zh/sys-ajax/' },
              { text: '多页面', link: '/zh/sys-multi-page/' },
              { text: '国际化', link: '/zh/sys-locales/' },
              { text: '数据持久化', link: '/zh/sys-db/' },
              { text: 'CSS 实用类', link: '/zh/sys-css/' },
              { text: 'JS Util', link: '/zh/sys-util/' },
              { text: 'cli3 和 webpack', link: '/zh/sys-cli3-webpack/' }
            ]
          },
          {
            text: '生态',
            items: [
              { text: 'D2 Admin start kit', link: '/zh/ecosystem-d2-admin-start-kit/' },
              { text: 'D2 CRUD 2.x', link: '/zh/ecosystem-d2-crud/' },
              { text: 'D2 CRUD 1.x', link: '/zh/ecosystem-d2-crud-v1/' },
              { text: 'D2 Ribbons', link: '/zh/ecosystem-d2-ribbons/' },
              { text: 'D2 日报', link: '/zh/ecosystem-d2-daily/' }
            ]
          },
          { text: '文章', link: '/zh/article/' },
          {
            text: '其它',
            items: [
              { text: '更新日志', link: '/zh/change-log/' },
              { text: '参与者名单', link: '/zh/collaborator/' },
              { text: '借鉴 D2Admin 的项目', link: '/zh/plagiarize/' },
              {
                text: '交流',
                items: [
                  { text: '微信公众号', link: '/zh/communication-we/' },
                  { text: '交流群', link: '/zh/communication-group-chat/' }
                ]
              },
              {
                text: '关注我们',
                items: [
                  { text: '掘金', link: 'https://juejin.im/user/57a48b632e958a006691b946/posts' },
                  { text: 'CSDN', link: 'https://blog.csdn.net/fairyever' },
                  { text: 'segmentfault', link: 'https://segmentfault.com/blog/liyang-note-book' },
                  { text: '知乎', link: 'https://www.zhihu.com/people/fairy-ever/activities' }
                ]
              },
              {
                text: 'D2 在其它地方',
                items: [
                  { text: 'awesome-vue', link: 'https://github.com/vuejs/awesome-vue' },
                  { text: 'ant design scaffolds', link: 'http://scaffold.ant.design/#/scaffolds/d2-admin' },
                  { text: 'awesomes.cn', link: 'https://www.awesomes.cn/repo/d2-projects/d2-admin' },
                  { text: 'oschina.net', link: 'https://www.oschina.net/p/D2admin' },
                  { text: 'ctolib.com', link: 'https://www.ctolib.com/FairyEver-d2-admin.html' }
                ]
              }
            ]
          },
          { text: '常见问题', link: '/zh/question/' },
          {
            text: '旧版文档',
            items: [
              { text: '1.1.11', link: 'http://app.d3collection.cn/d2-admin-doc/1.1.11/zh/' }
            ]
          }
        ],
        sidebar: {
          '/zh/learn-guide/': sideBarLearnGuide(),
          '/zh/learn-knowledge/': sideBarKnowledge(),
          '/zh/sys-components/': sideBarSysComponents(),
          '/zh/sys-plugins/': sideBarSysPlugins(),
          '/zh/sys-vuex/': sideBarSysVuex(),
          '/zh/article/': sideBarArticle('版本发布', 'Cookbook', '记录'),
          '/zh/ecosystem-d2-mock-suit/': sideBarEcosystemD2MockSuit('D2 Mock Suit', '使用指南', 'API'),
          '/zh/ecosystem-d2-crud/': sideBarEcosystemD2Crud('D2 CRUD', '使用指南', 'API', '示例', '迁移'),
          '/zh/ecosystem-d2-crud-v1/': sideBarEcosystemD2CrudV1('D2 CRUD 1.x', '使用指南', 'API', '示例')
        }
      }
    }
  }
}

function sideBarLearnGuide () {
  return [
    {
      collapsable: false,
      children: [
        '',
        'getting-started'
      ]
    }
  ]
}

function sideBarKnowledge () {
  return [
    {
      collapsable: false,
      children: [
        '',
        'javascript.md'
      ]
    }
  ]
}

function sideBarSysComponents () {
  return [
    {
      collapsable: false,
      children: [
        'container',
        'icon',
        'icon-svg',
        'icon-select',
        'ueditor',
        'markdown',
        'highlight',
        'count-up',
        'charts'
      ]
    }
  ]
}

function sideBarSysPlugins () {
  return [
    {
      collapsable: false,
      children: [
        'data-export',
        'data-import',
        'filters-dayjs',
        'i18n',
        'mock',
        'error',
        'log',
        'console'
      ]
    }
  ]
}

function sideBarSysVuex () {
  return [
    {
      collapsable: false,
      children: [
        '',
        'account',
        'db',
        'fullscreen',
        'gray',
        'log',
        'menu',
        'page',
        'releases',
        'search',
        'size',
        'theme',
        'transition',
        'ua',
        'user'
      ]
    }
  ]
}

function sideBarArticle (titleUpdate, titleCookbook, titleNote) {
  return [
    {
      title: titleCookbook,
      collapsable: false,
      children: [
        'cookbook/what-is-cookbook',
        'cookbook/combinable-questionnaire'
      ]
    },
    {
      title: titleUpdate,
      collapsable: false,
      children: [
        'update/crud',
        'update/1.2.0',
        'update/1.1.5',
        'update/1.1.4',
        'update/0.0.0',
        'update/introduce'
      ]
    },
    {
      title: titleNote,
      collapsable: false,
      children: [
        'note/how-to-make-start-kit'
      ]
    }
  ]
}

function sideBarEcosystemD2Crud (titleReadme, titleGuide, titleApi, titleExample, migration) {
  return [
    {
      title: titleReadme,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: titleGuide,
      collapsable: false,
      children: [
        'guide'
      ]
    },
    {
      title: titleApi,
      collapsable: false,
      children: [
        'crud',
        'events',
        'methods',
        'slots',
        'columns',
        'options',
        'loading-options',
        'index-row',
        'selection-row',
        'row-handle',
        'add-template',
        'edit-template',
        'form-options',
        'pagination'
      ]
    },
    {
      title: titleExample,
      collapsable: false,
      children: [
        'example'
      ]
    },
    {
      title: migration,
      collapsable: false,
      children: [
        'migration'
      ]
    }
  ]
}

function sideBarEcosystemD2CrudV1 (titleReadme, titleGuide, titleApi, titleExample) {
  return [
    {
      title: titleReadme,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: titleGuide,
      collapsable: false,
      children: [
        'guide'
      ]
    },
    {
      title: titleApi,
      collapsable: false,
      children: [
        'crud',
        'events',
        'slots',
        'columns',
        'options',
        'loading-options',
        'index-row',
        'selection-row',
        'row-handle',
        'add-button',
        'form-template',
        'form-options',
        'pagination'
      ]
    },
    {
      title: titleExample,
      collapsable: false,
      children: [
        'example'
      ]
    }
  ]
}

function sideBarEcosystemD2MockSuit (titleReadme, titleGuide, titleApi) {
  return [
    {
      title: titleReadme,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: titleGuide,
      collapsable: false,
      children: [
        'guide'
      ]
    },
    {
      title: titleApi,
      collapsable: false,
      children: [
        'api-1',
        'api-2'
      ]
    }
  ]
}