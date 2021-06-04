const iconGroupList = {
    小图标: [
        'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-left', 'angle-down', 'angle-right', 'angle-up', 'arrows-left', 'arrows-right', 'arrows-down', 'arrows-up', 'check-1', 'close', 'edit2', 'plus'
    ],

    填充图标: [
        'apps-shape', 'arrows-down-circle-shape', 'arrows-down-shape', 'arrows-left-circle-shape', 'arrows-left-shape', 'arrows-m-down-shape', 'arrows-m-left-shape', 'arrows-m-right-shape', 'arrows-m-up-shape', 'arrows-right-circle-shape', 'arrows-right-shape', 'arrows-up-circle-shape', 'arrows-up-shape', 'back-shape', 'block-shape', 'calendar-shape', 'check-circle-shape', 'circle-shape', 'clipboard-shape', 'clock-shape', 'close-circle-shape', 'close3-shape', 'cog-shape', 'cry-shape', 'dashboard-2-shape', 'dashboard-shape', 'data-shape', 'data2-shape', 'dialogue-empty-shape', 'dialogue-shape', 'dispirited-shape', 'down-shape', 'email-shape', 'empty-shape', 'exclamation-circle-shape', 'exclamation-triangle-shape', 'eye-shape', 'eye-slash-shape', 'file-plus-shape', 'file-shape', 'folder-open-shape', 'folder-plus-shape', 'folder-shape', 'heart-shape', 'home-shape', 'id-shape', 'image-shape', 'info-circle-shape', 'left-shape', 'lock-shape', 'minus-circle-shape', 'minus-square-shape', 'mobile-shape', 'next-shape', 'order-shape', 'panel-shape', 'password-shape', 'pc-shape', 'pie-chart-shape', 'pipeline-shape', 'play-circle-shape', 'play-shape', 'plus-circle-shape', 'plus-square-shape', 'qq-shape', 'question-circle-shape', 'right-shape', 'save-shape', 'sina-shape', 'sitemap-shape', 'smile-shape', 'star-shape', 'stop-shape', 'tree-application-shape', 'tree-group-shape', 'tree-module-shape', 'tree-process-shape', 'unlock-shape', 'up-shape', 'user-shape', 'weixin-shape', 'rtx'
    ],

    线性图标: [
        'apps', 'area-chart', 'arrows-down-circle', 'arrows-left-circle', 'arrows-right-circle', 'arrows-up-circle', 'back', 'back2', 'bar-chart', 'bk', 'calendar', 'chain', 'check-circle', 'circle-2-1', 'circle-4-1', 'circle', 'clipboard', 'clock', 'close-circle', 'code', 'cog', 'cry', 'dashboard-2', 'dashboard', 'data', 'data2', 'dedent', 'delete', 'dialogue-empty', 'dialogue', 'dispirited', 'docker', 'download', 'edit', 'ellipsis', 'email', 'empty', 'end', 'exclamation-circle', 'exclamation-triangle', 'exclamation', 'execute', 'eye-slash', 'eye', 'file-plus', 'file', 'folder-open', 'folder-plus', 'folder', 'full-screen', 'heart', 'hide', 'home', 'id', 'image', 'indent', 'info-circle', 'info', 'key', 'line-chart', 'list', 'lock', 'minus-circle', 'minus-square', 'minus', 'mobile', 'monitors-cog', 'monitors', 'more', 'move', 'next', 'order', 'panel-permission', 'panel', 'panels', 'password', 'pause', 'pc', 'pie-chart', 'pipeline', 'play', 'play2', 'play3', 'plus-circle', 'plus-square', 'project', 'qq', 'question-circle', 'question', 'refresh', 'save', 'script-file', 'script-files', 'search', 'sina', 'sitemap', 'smile', 'sort', 'star', 'stop', 'tree-application', 'tree-module', 'tree-process', 'un-full-screen', 'unlock', 'upload', 'user', 'weixin', 'work-manage'
    ]
}

const iconList = []
for (const [key, value] of Object.entries(iconGroupList)) {
    const iconObj = value.map(iconName => {
        return {
            name: `icon-${iconName}`,
            displayName: '',
            type: 'bk-icon',
            icon: iconName,
            events: [{ name: 'click' }],
            group: key,
            order: 1,
            styles: ['margin', 'display', 'font'],
            renderStyles: {
                display: 'inline-block',
                fontSize: '14px'
            },
            props: {
                type: {
                    type: 'string',
                    val: iconName,
                    display: false
                }
            }
        }
    })
    iconList.push(...iconObj)
}

export default [...iconList]
