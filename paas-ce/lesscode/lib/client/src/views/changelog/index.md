## 更新日志

<div class="changelog-wrapper">

### v0.2.3
###### 2021.07.01

* **[add]**:
    - 画布: 新增 [@blueking/bkcharts](https://www.npmjs.com/package/@blueking/bkcharts)
    - 画布: Element 基础组件库组件丰富
    - 项目管理: 支持函数的导入导出
    - 项目管理: 删除权限增加是否为数据的创造者的判断逻辑
    - 其他: 复合组件更新
* **[fix]**:
    - 画布: 属性面板多类型属性值切换类型 tab 时，保留编辑的值
    - 其他: 其他体验 bug 修复以及优化

---

### v0.2.2
###### 2021.06.18

* **[add]**:
    - 画布: 支持 json 导入和渲染
* **[fix]**:
    - 其他: 其他体验 bug 修复以及优化

---

### v0.2.1
###### 2021.06.03

* **[add]**:
    - 项目管理: 导航支持配置 query
    - 画布: 新增 sideslider 组件
* **[fix]**:
    - 画布: 修复交互式组件的若干问题
    - 项目管理: 页面绑定路由时未禁用已绑定跳转的路由问题
    - 项目管理: 页面预览图偶发失败的问题
* **[update]**:
    - 项目管理: 导航路由参数 tips 优化

---

### v0.2.0
###### 2021.04.27

* **[add]**:
    - 画布: 属性、指令支持设置变量
    - 画布: 新增复合组件
    - 画布: dialog 组件支持 grid
    - 项目管理: 变量管理
* **[fix]**:
    - 项目管理: 复制项目时不创建默认 home 页面
* **[update]**:
    - 画布: 拖拽排序效果优化为：当鼠标放到拖拽 icon 上时触发拖拽效果
    - 画布: 段落组件自动换行优化
    - 其他: 其他体验 bug 修复以及优化

---

### v0.1.9
###### 2021.04.12

* **[add]**:
    - 其他: 新增开放 API，新增获取发布部署相关信息接口
* **[fix]**:
    - 画布: 修复自由布局高度调整后，计算可拖拽区域没有实时更新的问题
    - 画布: 自由布局容器自适应高度问题
    - 画布: 复制 slot 可拖拽类型组件时预览和生成源码报错问题
    - 画布: 修复属性面板样式体验问题
    - 画布: 修复 grid 外边距设置为负值时，失去焦点后，在右侧属性面板会自动变为 0 的问题
    - 画布: 修复表格列选中排序后，再次点击表格时，排序多选框没有回填回来的问题
    - 画布: 修复 divider 分割线组件外边距不生效的问题
    - 画布: 修复 input value 指令不为空的问题

---

### v0.1.8
###### 2021.03.29

* **[add]**:
    - 预览/部署: 添加项目预览
    - 画布: 表格添加 pagination, showPaginationInfo 配置，支持设置翻页
    - 画布: 表格、导航、tab、step、select、radio、radioButton、面包屑的表头或内容选项，增加拖动排序能力
    - 画布: 步骤组件 steps 支持页面配置
    - 项目管理: 创建项目时新建默认 home 页面和代码查看器样式优化
* **[fix]**:
    - 画布: 修复右侧属性面板中对象类型数据修改失败的问题
    - 画布: 图表高度设置问题
    - 画布: 表格的表头新增，prop 格式不统一问题
    - 画布: 新增表格时表格的条纹、boreder 属性不生效问题
    - 画布: 通过样式设置尺寸宽度为百分比时画布中组件宽度显示不正确的问题
    - 画布: 表格组件分页配置，count 值与默认 data 条数保持一致
    - 预览/部署: 部署页面样式错乱问题
* **[update]**:
    - 画布: 布局 UI 优化
    - 画布: 代码查看器滚动条颜色与工具栏按钮大小调整
    - 项目管理: 优化页面截图实现

---

### v0.1.7
###### 2021.03.16

* **[add]**:
    - 画布: 新增函数调用参数
    - 画布: 新增 divider 分割线组件
    - 画布: 导航模板侧边导航默认展开；右上角显示用户名以及支持退出登录功能
    - 画布: 段落组件支持 v-model
    - 画布: 文字链接组件增加 click 事件
    - 画布: 表格增加首列为多选框的配置
    - 画布: 表格列增加宽度设置
    - 预览/部署: 部署页面增加绑定模块对应的 v3 进程管理页面入口
* **[fix]**:
    - 画布: 修复各个组件中 text slot 的 XSS 问题
    - 画布: 修复段落组件 p 标签下载下来与内容不同的问题
* **[update]**:
    - 画布: 文字链接组件 icon 位置配置改成下拉选择
    - 画布: 属性面板样式调整
    - 画布: dialog 组件交互优化。显示、隐藏按钮常驻，且再交互组件右侧配置面板添加可隐藏/显示的按钮；组件树点击非交互组件，当前交互式组件直接隐藏；遮罩层会添加隐藏组件的具体 id
    - 画布: 远程函数添加说明；小窗复制的函数（未保存状态下）不显示删除和复制的 icon；函数库的说明文档双引号改为单引号

---

### v0.1.6
###### 2021.03.08

* **[add]**:
    - 画布: 新增 v-if, v-show, v-for 指令
    - 画布: 新增 dialog 组件
    - 画布: 基础组件增加 bkflow 流程组件
    - 画布: 新增页面 json 展示
    - 画布: 画布编辑页面增加新手指引
    - 画布: 基础组件新增 Element 组件库以及 vue-weui 组件库
* **[fix]**:
    - 画布: 编辑页面体验问题
    - 画布: 优化 grid、card 组件 hover 和 select 效果
    - 项目管理: 修复共享的项目组件公开范围中特定项目丢失的问题
    - 项目管理: 修复切换项目当前项目数据未更新问题
    - 其他: cookie path 设置
* **[update]**:
    - 画布: 代码查看器及页面配置样式优化
    - 画布: 优化编辑器属性提示
    - 项目管理: 优化没有权限调用 apigateway 接口的提示信息
    - 其他: 更新 postcss 配置

---

### v0.1.5
###### 2021.02.04

* **[add]**:
    - 画布: table 自定义列内容
    - 画布: 组件 slot支持拖拽（card 组件）
    - 画布: 添加段落组件
    - 预览/部署: 新增 BKPAAS_ENVIRONMENT 变量，自定义组件判断环境使用
* **[update]**:
    - 项目管理: 自定义组件文档增加本地调试指引

---

### v0.1.4
###### 2021.01.26

* **[fix]**:
    - 体验 bug 修复以及优化

---

### v0.1.3
###### 2021.01.15

* **[add]**:
    - 画布: 新增组件树
    - 画布: 新增函数支持编辑函数标识
* **[fix]**:
    - 体验 bug 修复以及优化

---

### v0.1.2
###### 2021.01.07

* **[add]**:
    - 项目管理: 新增操作审计功能
    - 画布: chart 图表类型支持动态设置数据和属性
* **[fix]**:
    - 体验 bug 修复以及优化

---

### v0.1.1
###### 2020.12.22

* **[add]**:
    - 项目管理: 布局模板实例新增[**复合型导航布局**](/help/layout)，方便用户更快速的搭建页面
    - 画布: 支持设置自定义样式，可自定义编写 CSS 代码
* **[fix]**:
    - 画布: 体验 bug 修复以及优化

---

### v0.1.0
###### 2020.12.03

* **[add]**:
    - 项目管理: 新增成员管理模块，用来管理项目的成员以及权限
    - 项目管理: 新增布局模板实例模块，用来设置页面的导航布局，方便用户更快速的搭建页面
    - 项目管理: 发布部署，绑定蓝鲸应用模块时，列表包含已下架的应用
    - 画布: 新增图标面板，与基础组件、自定义组件面板区分开来，方便用户拖拽图标
    - 画布: 新增[自由布局](/help/free-layout)
* **[update]**:
    - 项目管理: 为初次进入系统的用户创建 demo 项目时，数据添加 createUser 和 updateUser

---

### v0.0.9
###### 2020.11.10

* **[add]**:
    - 项目管理: 为初次进入系统的用户新增了 demo 项目
* **[fix]**:
    - 画布: 修复预览页面与部署后页面样式不一致的问题
    - 画布: 自定义组件 ID 中带有 `_数字` 时，生成源码 eslint 检测不通过的问题

---

### v0.0.8
###### 2020.10.28

* **[add]**:
    - 项目管理: 自定义组件支持设置公开范围，可公开到特定项目以及所有项目（包括后续新增的项目）
    - 项目管理: 函数模块，远程函数支持调用 APIGW API（需先绑定蓝鲸应用模块）
    - 画布: 自定义组件新增收藏功能
    - 画布: grid 支持背景色设置
    - 画布: 新增[函数使用指引](/help/method)
    - 画布: 新增按钮组组件
    - 项目管理/画布: 函数支持自己调用自己
* **[fix]**:
    - 画布: 修复 tree 组件查看源码的错误和数据问题
* **[update]**:
    - 画布: 组件属性设置中，优化 Array 类型数据的编辑模式，采用 jsonView 的形式
    - 其他优化: 优化帮助入口；画布中鼠标改为手型；优化左侧栏收起的样式；部署页面优化；导航 logo 设置鼠标样式为 pointer，可点击跳转等等

---

### v0.0.7
###### 2020.10.16

* **[add]**:
    - 新增页面生命周期配置
    - 新增自定义组件下架逻辑
    - 新增[表格查询案例文档](/help/case-table-search)
    - 部署模块新增下架功能、同步 Paas 平台部署记录

---

### v0.0.6
###### 2020.09.25

* **[add]**:
    - 新增项目级别路由配置功能
    - 新增部分基础组件
    - 画布中，组件新增指令配置，可用来配置组件的指令，在编辑函数时，可以通过编辑器自动补全、代码提示来获取组件的对应属性指令值
    - 函数编辑新增 eslint 检测，代码提示等等
* **[fix]**:
    - 自定义组件、项目部署、函数库模块部分 bug 修复
* **[update]**:
    - text, img 标签使用原生html标签，优化原生标签的 class 添加
    - 自定义组件文档体验优化、文档完善

---

### v0.0.5
###### 2020.09.03

* **[add]**:
    - 新增发布部署模块，与蓝鲸 PaaS 平台打通
    - 新增自定义组件库模块
    - 新增项目级别的源码下载，方便二次开发
    - 新增页面配置，支持简单的页面路由设置
    - 组件新增 v-model 配置
* **[fix]**:
    - 拖拽部分 bug 修复

---

### v0.0.4
###### 2020.08.14

* **[add]**:
    - 新增项目管理模块
    - 新增页面管理模块
    - 新增函数管理模块
* **[update]**:
    - 拖拽画布中的函数管理优化

---

### v0.0.3
###### 2020.06.12

* **[add]**:
    - 新增【图表】类型组件，增加【折线图】、【柱状图】、【饼状图】示例
    - 增加复制、粘贴、撤销、恢复、删除等快捷操作
    - 每个组件必要的属性增加 tip 说明
    - 画布仅剩一个 grid 时，不允许删除；
    - 增加清空 grid 操作
* **[fix]**:
    - 修复刷新页面时，没有选中组件但右侧面板会显示 grid 属性的问题
    - 修复其他 bug
* **[update]**:
    - 右侧组件属性、样式、事件说明
    - 细节优化

---

### v0.0.2
###### 2020.05.26

* **[add]**:
    - 添加[帮助文档](/help)
    - 每个组件必要的属性增加 tip 说明
    - 页面添加开源版入口
* **[fix]**:
    - 修复预览页面高度截断 bug
* **[update]**:
    - 细节样式优化

---

### v0.0.1
###### 2020.04.28

* **[add]**:
    - 可视化开发平台（lesscode）初始版本

</div>

<!-- <script>
    import pkg from '../../../../../../../package.json'

    export default {
        data () {
            return {
                pkgName: pkg.name
            }
        }
    }
</script> -->
