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

export default {
    name: 'radio-button-group',
    type: 'bk-radio-group',
    displayName: '按钮组',
    icon: 'bk-drag-bottom-group',
    group: '表单',
    order: 1,
    events: [{
        name: 'change', tips: '单选组选中的值改变时触发此回调函数，回调参数为当前单选组选中值'
    }],
    styles: ['margin'],
    directives: [
        {
            type: 'v-model',
            prop: 'value',
            propTypes: ['string'],
            val: '',
            valType: 'variable'
        }
    ],
    props: {
        value: {
            type: 'string',
            val: 'qq',
            tips: '当前选中的value值'
        },
        slots: {
            name: 'bk-radio-button',
            type: ['radio-button', 'remote'],
            remoteValidate (data) {
                if (!Array.isArray(data)) return '返回值需要是数组'
                const errData = data.find((item) => (!item.hasOwnProperty('label') || !item.hasOwnProperty('value')))
                if (errData) return '返回值每个元素需要含有label和value字段'
            },
            val: [
                { label: 'QQ', value: 'qq', disabled: false },
                { label: '微信', value: 'wx', disabled: false },
                { label: '微博', value: 'weibo', disabled: true }
            ],
            // 生成 slot 时，每个 slot 的属性值映射，例如 bk-checkbox 里的 :label, :value, :checked, :key
            // <bk-checkbox v-for="item in checkboxgroupc57d9bc6Slot" :label="item.label" :value="item.value" :checked="item.checked" :key="item.value">{{ item.label }}</bk-checkbox>
            attrs: [
                { 'key': 'label', 'value': 'label' },
                { 'key': 'value', 'value': 'value' },
                { 'key': 'disabled', 'value': 'disabled' },
                { 'key': 'key', 'value': 'value' }
            ]
        }
    }
}
