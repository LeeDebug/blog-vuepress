
// 侧边栏
// 更多侧边栏配置：
// https://vuepress.vuejs.org/zh/theme/default-theme-config.html
// 侧边栏案例：
// 1. https://lovelijunyi.gitee.io/blog/views/
// 2. https://blog.smallsunnyfox.com/note/html5/html5de-yu-yi-yuan-su.html
module.exports = {
    '/views/': [
        '',
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'front-end/2020前端面试',
                'front-end/2021前端面试总结',
                'front-end/GitHub-Corners',
                'front-end/JavaScript运算符优先级',
                'front-end/LeetCode常见题',
                'front-end/Mac配置多个SSH-Key',
                'front-end/Ubuntu-16-04-部署命令',
                'front-end/VSCode注释高亮插件BetterComments',
                'front-end/Vue3轮播组件-v3-carousel',
                'front-end/Vue源码解读（知识点总结）',
                'front-end/angular',
                'front-end/copy-webpack-plugin处理单独js文件',
                'front-end/git贡献墙gitcalendar',
                'front-end/git推送后没有贡献记录',
                'front-end/git仓库推送脚本（本地简易版）',
                'front-end/hello-world',
                'front-end/js-md5',
                'front-end/jsdelivr',
                'front-end/linear-gradient函数实现线性渐变',
                'front-end/navigator.userAgent获取当前设备信息',
                'front-end/node打包内存溢出',
                'front-end/qiankun-2-0-24-爬坑记录',
                'front-end/qiankun的css沙箱隔离解决方案',
                'front-end/react',
                'front-end/viewerjs查看大图组件',
                'front-end/vue',
                'front-end/vue3的生命周期钩子',
                'front-end/从0开始搭建Hexo个人博客',
                'front-end/预防XSS攻击',
                'front-end/修改element-ui的全局配置',
                'front-end/你不知道的JavaScript（上卷）',
                'front-end/《前端内参》',
                'front-end/查看代码行数',
                'front-end/实现输入框的n种形式',
                'front-end/程序员进修文档',
                'front-end/看完让你彻底搞懂Websocket原理',
                'front-end/安卓微信浏览器中type-file的input框无法使用',
                'front-end/中央事件总线插件vue-bus-ts',
                'front-end/前端个人学习笔记与项目规范',
                'front-end/加载聊天历史记录并保留滚动条当前位置',
                // 'front-end/angular',
            ]
        },
        {
            title: '后端 Back-end',
            collapsable: true,
            children: [
                'back-end/django',
            ]
        },
    ],
    // '/note/': [
    //     {
    //         title: 'HTML5',
    //         collapsable: true,
    //         children: ['html5/HTML5的语义元素', 'html5/HTML5多媒体标签', 'html5/HTML5表单元素', 'html5/HTML5中的API', 'html5/Canvas']
    //     },
    //     {
    //         title: 'CSS',
    //         collapsable: true,
    //         children: ['css/css3新特性', 'css/css3Flip']
    //     },
    //     {
    //         title: 'JS',
    //         collapsable: true,
    //         children: ['js/js数据类型', 'js/js对象', 'js/js继承', 'js/js原型链、闭包', 'js/js函数的四种调用方式']
    //     },
    //     {
    //         title: 'Vue.js',
    //         collapsable: true,
    //         children: ['Vue/Vue基础笔记', 'Vue/Vue组件']
    //     },
    //     {
    //         title: '前端单元测试',
    //         collapsable: true,
    //         children: ['fe-unit-test/chai', 'fe-unit-test/mocha', 'fe-unit-test/vueTestUtils']
    //     },
    //     {
    //         title: '微信小程序',
    //         collapsable: true,
    //         children: ['wechat-mini-program/初识微信小程序']
    //     }
    // ],
}