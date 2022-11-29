module.exports = {
    title: 'tasker 使用说明',
    description: 'tasker的使用',
    themeConfig: {
        // 导航栏配置
        nav: [
            {text: '首页', link: '/docs'},
            {text: 'guide', link: '/docs/guide'},
        ],
        //  左侧导航栏配置
        sidebar: {
            'htmldocs': [
                {
                    text: 'guide', children: [
                        {text: '概况', link: '/docs/guide'}
                ]}
            ],
        }
    }
}