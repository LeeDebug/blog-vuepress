module.exports = {
  // html title + loading + ↖️ logo
  title: '淳淳同学的个人博客',
  description: '日拱一卒无有尽，功不唐捐终入海',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
    // ["script", { src: "scripts/demo.js" }],
  ],
  // 多语言
  locales: {
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      // 将会被设置为 <html> 的 lang 属性
      lang: 'en-US',
      // title: '淳淳同学的个人博客',
      // description: 'Vue-powered Static Site Generator',
    },
    // 键名是该语言所属的子路径
    // '/zh/': {
    //   lang: 'zh-CN',
    //   // html title + ↖️ logo
    //   title: '淳淳同学的个人博客',
    //   description: '日拱一卒无有尽，功不唐捐终入海',
    // },
  },
  theme: 'reco',
  // 主题相关
  themeConfig: {
    locales: {
      '/': {
        recoLocales: {
          homeBlog: {
            article: '美文', // 默认 文章
            tag: '标识', // 默认 标签
            category: '类别', // 默认 分类
            friendLink: '友链' // 默认 友情链接
          },
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          },
        }
      },
      // '/en/': {
      // }
    },
    // 右上角大菜单
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      // 默认自带
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      {
        text: '文档链接', 
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco-theme', link: '/docs/theme-reco/' }
        ]
      },
      {
        text: '个人社区',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/LeeDebug', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        // 这里是干啥的呢？
        '',
        'theme',
        'plugin',
        'api'
      ]
    },
    // 启用页面滚动效果
    smoothScroll: true,
    // 隐藏后，即可开启首页模式
    // 自定义首页，参考：https://vuepress-theme-reco.recoluan.com/views/1.x/home.html#home-blog
    type: 'blog',
    // 博客设置（插入大菜单中）
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Cate分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // 更多侧边栏配置：https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Licc',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: '鲁ICP备19000206号',
    // 项目开始时间
    startYear: '2018'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  // MarkDown
  markdown: {
    lineNumbers: true
  },
  // 更多插件设置：https://vuepress-theme-reco.recoluan.com/views/1.x/recommend.html
}  
