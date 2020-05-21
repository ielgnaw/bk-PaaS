/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import { paramCase, camelCase } from 'change-case'

const codeMixin = {
    data () {
        return {
            refreshGenerateCodeKey: +new Date(),
            code: '',
            scriptStr: '',
            cssStr: '',
            dataStr: '',
            methodsStr: '',
            lifeCircleStr: '',
            createdStr: '',
            existFunc: [],
            slotTagMap: {
                'bk-table': 'bk-table-column',
                'bk-select': 'bk-option',
                'bk-checkbox-group': 'bk-checkbox',
                'bk-radio-group': 'bk-radio',
                'bk-tab': 'bk-tab-panel'
            },
            checkboxGroupVModelList: []
        }
    },
    computed: {
        // ...mapGetters('drag', [
        //     'getMethodById'
        // ])
    },
    watch: {
        refreshGenerateCodeKey () {
            this.code = ''
            this.scriptStr = ''
            this.cssStr = ''
            this.dataStr = ''
            this.lifeCircleStr = ''
            this.methodsStr = ''
            this.createdStr = ''
            this.existFunc = []
            this.checkboxGroupVModelList = []
        }
    },
    methods: {
        getMethodById (methodId) {
            let returnMethod = {
                id: '',
                funName: '',
                code: 'function emptyFunc () {}'
            }
            const functionGroup = JSON.parse(localStorage.getItem('functionGroup'))
            functionGroup.forEach((group) => {
                const funChildren = group.children || []
                const method = funChildren.find(x => x.id === methodId)
                if (method) {
                    returnMethod = method
                }
            })
            return returnMethod
        },

        generateComponment (item) {
            // item.componentId = item.componentId.replace('_', '')
            const itemProps = this.getItemProps(item.type, item.renderProps, item.componentId)
            const { itemStyles = '', itemClass = '' } = this.getItemStyles(item.componentId, item.renderStyles)
            const itemEvents = this.getItemEvents(item.renderEvents)

            return `
                    <${item.type} ${itemProps} ${itemStyles} ${itemClass} ${itemEvents}>
                        ${this.renderSlot(item.type, item.renderProps.slots, item.componentId)}
                    </${item.type}>`
        },
        generateCss () {
            const head = `<style lang="css">
                            .container {
                                margin: 10px;
                            }
                            .bk-layout-row {
                                display: flex;
                            }
                            .bk-layout-row:after {
                                display: block;
                                clear: both;
                                content: "";
                                font-size: 0;
                                height: 0;
                                visibility: hidden;
                            }
                            .bk-layout-col {
                                float: left;
                                position: relative;
                                min-height: 1px;
                            }
                            .bk-form-radio {
                                margin-right: 20px;
                            }
                            .bk-form-checkbox {
                                margin-right: 20px;
                            }
                            /* 还原 bk-button 组件的 vertical-align 样式 */
                            .bk-layout-col button.bk-button {
                                vertical-align: baseline;
                            }
                            /* 每个组件之间默认外边距 5px */
                            .bk-layout-component {
                                margin: 5px;
                            }
                        `
            const end = '</style>\n'

            return head + this.cssStr + end
        },
        generateTemplate () {
            return '<template>\n<section class="container">' + this.generateCode(this.targetData) + '\n</section>\n</template>\n\n'
        },
        generateScript () {
            let scriptContent = `${this.getData() ? `${this.getData()},` : ''}
                            ${this.getCreated() ? `${this.getCreated()},` : ''}
                            ${this.getMethods() ? `${this.getMethods()},` : ''}`
            if (scriptContent.endsWith(',')) {
                scriptContent = scriptContent.substr(0, scriptContent.length - 1)
            }
            return `<script>export default { ${scriptContent} }<\/script>\n`
        },
        generateCode (v) {
            const len = v.length
            let code = ''
            for (let i = 0; i < len; i++) {
                const item = v[i]
                if (item.type === 'render-grid') {
                    /* eslint-disable */
                    const { itemStyles = '', itemClass = '' } = this.getItemStyles(item.componentId, item.renderStyles)
                    code += `
                        ${itemClass ? `<div class="bk-layout-row ${item.componentId}">` : '<div class="bk-layout-row">'}
                            ${item.renderProps.slots && item.renderProps.slots.val && item.renderProps.slots.val.map(col => {
                                return `<div class="bk-layout-col" style="width: ${col.width || ''}">
                                            ${col.children.length ? `${this.generateCode(col.children)}` : ''}
                                        </div>`
                    }).join('\n')}
                        </div>
                    `
                    /* eslint-disable */
                } else {
                    code += this.generateComponment(item)
                }
            }
            return code
        },
        getCode () {
            return this.generateTemplate() + this.generateScript() + this.generateCss()
        },
        getItemProps (type, props, compId) {
            const hasProps = props && typeof props === 'object' && Object.keys(props).length > 0
            let itemProps = ''
            if (hasProps) {
                itemProps = this.getPropsStr(type, props, compId)
            }
            return itemProps
        },
        getPropsStr (type, props, compId) {
            let propsStr = ''
            compId = camelCase(compId)

            for (const i in props) {
                if (i !== 'slots') {
                    let propsValue = ''
                    let putToData = false
                    if (typeof props[i].val === 'object' && props[i].type === 'array') {
                        this.dataTemplate(compId, JSON.stringify(props[i].val))
                        putToData = true
                    }
                    if (props[i].type === 'remote') {
                        putToData = true
                        this.dataTemplate(compId, JSON.stringify([]))
                        this.remoteMethodsTemplate(compId, props[i].payload || {})
                        this.createdTemplate(compId, JSON.stringify(props[i].payload || {}))
                    }
                    if (props[i].val !== undefined) {
                        propsValue = putToData ? compId : (typeof props[i].val === 'object' ? JSON.stringify(props[i].val).replace(/\"/g, '\'') : props[i].val)
                    }
                    propsStr += `${props[i].type === 'string' || props[i].val === undefined ? '' : ':'}${i}="${propsValue}" `
                } else {
                    if (type === 'bk-checkbox-group') {
                        const checkedValue = props['slots'].val.filter(c => c.checked === true).map(c => c.value)
                        this.dataTemplate(compId, JSON.stringify(checkedValue))
                        propsStr += `v-model="${compId}"`
                    }
                }
            }
            return propsStr
        },
        getItemStyles (compId, styles) {
            // 分离class和其它style属性
            let className = compId
            let hasStyle = false
            if (styles && typeof styles === 'object' && Object.keys(styles).length > 0) {
                for(var key in styles) {
                    if(!styles[key]) {
                      delete styles[key]
                    }
                }
                hasStyle = Object.keys(styles).length > 0
            }
            // 有设置class的话，将样式写至<style>
            if (hasStyle) {
                let tmpStr = ''
                for (const i in styles) {
                    tmpStr += `${paramCase(i)}: ${styles[i]};\n`
                }
                this.cssStr += `\n.${className} {\n${tmpStr}}`
            }

            // const itemStyles = `${(!hasStyle || className) ? '' : `:style='${JSON.stringify(styles)}'`}`
            const itemStyles = ''
            const itemClass = `${!hasStyle ? `class='bk-layout-component'` : `class='bk-layout-component ${className}'`}`

            return { itemStyles, itemClass }
        },
        getItemEvents (events = {}) {
            let eventStr = ''
            if (typeof events === 'object' && Object.keys(events).length) {
                for (const key in events) {
                    const fun = this.getMethodById(events[key])
                    if (fun.funName) {
                        eventStr += `@${key}="${fun.funName}" `
                        if (this.existFunc.indexOf(events[key]) === -1) {
                            this.existFunc.push(events[key])
                            const code = fun.code.replace('function ', '')
                            this.methodsStr += `${code},`
                        }
                    }
                }
            }
            return eventStr
        },
        renderSlot (type, slot, compId) {
            if (!slot) {
                return ''
            }

            let slotStr = ''
            // compId = `${compId}Slot`.replace('-', '')
            compId = `${camelCase(compId)}Slot`

            if (typeof slot.val === 'string') {
                slotStr = slot.val
            } else if (typeof slot === 'object') {
                const slotType = this.slotTagMap[type] ? this.slotTagMap[type] : ''
                if (slotType) {
                    if (slot.type === 'remote') {
                        slot.val = []
                        slotType === 'bk-option' && (slot.attrs = [{ 'key': 'id', 'value': 'id' }, { 'key': 'name', 'value': 'name' }, { 'key': 'key', 'value': 'id' }])
                        this.dataTemplate(compId, JSON.stringify([]))
                        this.remoteMethodsTemplate(compId, slot.payload || {})
                        this.createdTemplate(compId, JSON.stringify(slot.payload || {}))
                        /* eslint-disable */
                        slotStr = `<${slotType} v-for="item in ${compId}"
                                        ${slot.attrs && slot.attrs.map((iitem, index) => {
                                            return `:${iitem.key}="item.${iitem.value}"`
                                    }).join('\n')}
                                    ></${slotType}>`
                        /* eslint-disable */
                    } else {
                        slot.val && slot.val.map(item => {
                            const itemProps = this.getSlotPropsStr(item)
                            slotStr += ''
                                + `<${slotType} ${itemProps}>`
                                + (slotType === 'bk-checkbox' ? item.label : '')
                                + `</${slotType}>`
                                + '\n'
                        })
                    }
                }
            }
            return slotStr
        },
        getSlotPropsStr (props) {
            let propsStr = ''
            for (const i in props) {
                if (i !== 'slots') {
                    const propsValue = typeof props[i] === 'object' ? JSON.stringify(props[i]).replace(/\"/g, '\'') : props[i]
                    propsStr += `${typeof props[i] === 'string' ? '' : ':'}${i}="${propsValue}" `
                }
            }
            return propsStr
        },
        getData () {
            let data = ''
            if (this.dataStr) {
                data += `data () {
                    return {
                        ${this.dataStr}
                    }
                }`
            }
            return data
        },
        getMethods () {
            let methods = ''
            if (this.methodsStr.endsWith(',')) {
                this.methodsStr = this.methodsStr.substr(0, this.methodsStr.length - 1)
            }
            if (this.methodsStr) {
                methods += `methods: {
                    ${this.methodsStr}
                }`
            }
            return methods
        },
        getCreated () {
            let created = ''
            if (this.createdStr) {
                created += `created () {
                    ${this.createdStr}
                }`
            }
            return created
        },
        dataTemplate (key, value) {
            this.dataStr += `'${key}': ${value},\n`
        },
        remoteMethodsTemplate (key, payload) {
            const method = this.getMethodById(payload.methodId)
            const data = {
                url: payload.url,
                type: payload.method
            }
            const previewStr = `this.${key} = await this.$store.dispatch('getApiData', ${JSON.stringify(data)}).then(${method.code})`
            const vueCodeStr = `this.${key} = await this.$http.${payload.method}('${payload.url}').then(${method.code})`
            const contentStr = this.pageType === 'vueCode' ? vueCodeStr : previewStr
            this.methodsStr += `
                async get${key} () {
                    ${contentStr}
                },\n`


        },
        createdTemplate (key) {
            this.createdStr += `this.get${key}()\n`
        }
    }
}

export default codeMixin
