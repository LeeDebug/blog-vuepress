const personalDev = require('./config/env/personal.config').getConfig()
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  // 启动域名
  host: personalDev.host,
  // 启动端口
  port: personalDev.port,
  // 部署站点的基础路径
  base: isDev ? '/' : '/vuepress/',
  // 是否需要缓存
  // TODO By Licc: 为何写在 npm script 里有效，写在这里却无效？
  // cache: 'blog/.vuepress/.cache',
  // 热更新相关路径？临时文件
  temp: 'blog/.vuepress/.temp',
  // html title + loading + ↖️ logo
  title: '淳淳同学的个人博客',
  description: '日拱一卒无有尽，功不唐捐终入海',
  // 编译产物的路径
  dest: 'blog/.vuepress/dist',
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
  // 更多插件设置：
  // https://vuepress-theme-reco.recoluan.com/views/1.x/recommend.html
  // https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html
  plugins: [
    ['@vuepress/medium-zoom', {
      // selector: 'img.zoom-custom-imgs',
      selector: 'img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      },
    }],
    // process.env.OFFLINE != 'true' ? [
    //     '@vssue/vuepress-plugin-vssue',
    //     {
    //         // 设置 `platform` 而不是 `api`
    //         platform: 'github',
    //         autoCreateIssue: true, //自动创建issue，可以直接评论，私有仓库需要修改vssue
    //         // app_integration_guide\node_modules\vssue\dist\vssue.js 文件，postIssue方法，注释掉下面的逻辑（非admin也可以创建评论）
    //         // // if (!this.isAdmin)
    //         //     return;
    //         owner: 'parkvidaa',
    //         repo: 'comments',
    //         clientId: '77c55d0d7c586ae6d385',
    //         clientSecret: '2530f292ca166586ab640e1aa8de5f3d19b16140',
    //         //1、创建GitHub OAuth App,链接：https://vssue.js.org/zh/guide/github.html
    //         //2、创建GitHub 仓库
    //         //3、使用GitHub，需要解除跨域问题（vssue默认使用了个公共代理，但是现在有限制，自己写了一个）
    //         //4、使用GitHub仓库，用户就需要用GitHub账户登录后才能评论（显示的名字也是GitHub用户名）
    //         proxy: 'https://arv4n0ppak.execute-api.us-west-2.amazonaws.com/cors_proxy?u=https://github.com/login/oauth/access_token', //限制了只代理github这个域名
    //         // app_integration_guide\node_modules\@vssue\api-github-v3\lib\index.js
    //         // public_repo 改为repo，注释掉is:public，可实现私有仓库评论（from https://github.com/meteorlxy/vssue/issues/88）
    //     },
    // ] : [],
  ],
}  
