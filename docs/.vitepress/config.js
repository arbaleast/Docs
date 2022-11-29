import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'tasker 使用说明',
    description: 'tasker的使用',
    themeConfig: {
        // 导航栏配置
        nav: [
            {text: '首页', link: '/'},
            {text: 'tasker', link: '/Tasks/GetStart.md'},
        ],
        // 左侧导航栏配置
        sidebar: {
            '/docs/': [
                {
                    text: "tasker tutorial",
                    items: [
                        { text: "Actions", link: '/Tasks/Actions.md' },
                        { text: "FlowControl", link: '/Tasks/FlowControl.md' },
                        { text: "TaskerVariables", link: '/Tasks/TaskerVariables.md' },
                        { text: "TaskScheduling", link: '/Tasks/TaskScheduling.md' },
                    ],
                    collapsible: true,
                }
            ]
        },
        docFooter: { prev: 'Prev', next: 'Next' }
    }
})