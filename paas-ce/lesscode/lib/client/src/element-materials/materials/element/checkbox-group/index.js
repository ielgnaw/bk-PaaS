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
    name: 'el-checkbox-group',
    type: 'el-checkbox-group',
    displayName: '多选框',
    icon: 'bk-drag-checkbox',
    group: '表单',
    order: 1,
    styles: ['margin'],
    events: [{ name: 'change' }],
    directives: [
        {
            type: 'v-model',
            prop: 'value',
            propTypes: ['array'],
            val: '',
            valType: 'variable'
        }
    ],
    props: {
        slots: {
            name: 'el-checkbox',
            type: ['el-checkbox', 'remote'],
            remoteValidate (data) {
                if (!Array.isArray(data)) return '返回值需要是数组'
                const errData = data.find((item) => (!item.hasOwnProperty('label')))
                if (errData) return '返回值每个元素需要含有label字段'
            },
            val: [
                { label: '选项一' },
                { label: '选项二' },
                { label: '选项三' }
            ],
            // 生成 slot 时，每个 slot 的属性值映射，例如 bk-checkbox 里的 :label, :value, :checked, :key
            // <bk-checkbox v-for="item in checkboxgroupc57d9bc6Slot" :label="item.label" :value="item.value" :checked="item.checked" :key="item.value">{{ item.label }}</bk-checkbox>
            attrs: [
                { 'key': 'label', 'value': 'label' },
                { 'key': 'key', 'value': 'value' }
            ]
        },
        value: {
            type: 'array',
            val: ['选项一', '选项二']
        }
    }
}
