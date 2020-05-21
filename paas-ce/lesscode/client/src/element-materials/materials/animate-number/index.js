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
    name: 'animate-number',
    type: 'bk-animate-number',
    displayName: '动画数字',
    icon: 'bk-drag-animatenumber',
    group: '数据',
    order: 1,
    styles: ['margin', 'display', 'font', 'backgroundColor'],
    defaultStyles: {
        display: 'inline-block'
    },
    props: {
        value: {
            type: 'number',
            val: 20
        },
        digits: {
            type: 'number',
            val: 2
        },
        'ext-cls': {
            type: 'string'
        }
    }
}
