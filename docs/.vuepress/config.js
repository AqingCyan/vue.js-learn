module.exports = {
  title: 'Vue全家桶自学入门指南',
  description: '一个前端学习者的自我修养',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vue.js-learn/',
  serviceWorker: false,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    repo: 'AqingCyan/vue.js-learn',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sidebar: [
      {
        title: 'Vue基础',
        collapsable: false,
        children: [
          ['VueBook/', '如何学习？'],
          'VueBook/StartFromTodoList',
          'VueBook/VuesApiandHisHook',
          'VueBook/ComputedAndWatch',
          'VueBook/StyleAndV-if',
          'VueBook/ListAndV-for',
          'VueBook/Components',
          'VueBook/Slot',
          'VueBook/VuesArt',
        ]
      }
    ]
  }
}
