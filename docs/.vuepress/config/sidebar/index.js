
// 侧边栏
// 更多侧边栏配置：
// https://vuepress.vuejs.org/zh/theme/default-theme-config.html
// 侧边栏案例：
// 1. https://lovelijunyi.gitee.io/blog/views/
// 2. https://blog.smallsunnyfox.com/note/html5/html5de-yu-yi-yuan-su.html
module.exports = {
    '/note/': [
        {
            title: 'HTML5',
            collapsable: true,
            children: ['html5/HTML5的语义元素', 'html5/HTML5多媒体标签', 'html5/HTML5表单元素', 'html5/HTML5中的API', 'html5/Canvas']
        },
        {
            title: 'CSS',
            collapsable: true,
            children: ['css/css3新特性', 'css/css3Flip']
        },
        {
            title: 'JS',
            collapsable: true,
            children: ['js/js数据类型', 'js/js对象', 'js/js继承', 'js/js原型链、闭包', 'js/js函数的四种调用方式']
        },
        {
            title: 'Vue.js',
            collapsable: true,
            children: ['Vue/Vue基础笔记', 'Vue/Vue组件']
        },
        {
            title: '前端单元测试',
            collapsable: true,
            children: ['fe-unit-test/chai', 'fe-unit-test/mocha', 'fe-unit-test/vueTestUtils']
        },
        {
            title: '微信小程序',
            collapsable: true,
            children: ['wechat-mini-program/初识微信小程序']
        }
    ],
    '/views/': [
        '',
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'docs/views/front-end/vue',
                'docs/views/front-end/react',
                'docs/views/front-end/angular',
            ]
        },
        {
            title: '后端 Back-end',
            collapsable: true,
            children: [
                'views/back-end/django',
                'back-end/django',
                'docs/category1/2018/121501',
                'docs/vue/vue---router',
            ]
        },
        // {
        //     title: '前端 Front-end',
        //     collapsable: true,
        //     children: [
        //         'frontend/EChartsStudy',
        //         'frontend/js-json',
        //         'frontend/viaStart',
        //     ]
        // },
        // {
        //     title: '后端 Back-end',
        //     collapsable: true,
        //     children: [
        //         'backend/HashMap',
        //         'backend/docker',
        //     ]
        // },
    ]
}