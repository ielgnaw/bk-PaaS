/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

const Test = {
    async getMockData (ctx) {
        const count = 20
        const data = []
        for (let i = 0; i < count; i++) {
            data.push({
                id: i,
                projectId: `id-${i}`,
                projectCode: `code-${i}`,
                projectName: `项目-${i}`,
                name: `名称-${i}`
            })
        }
        try {
            ctx.send({
                code: 0,
                message: 'success',
                data
            })
        } catch (err) {
            ctx.throwError({
                message: err.message
            })
        }
    },

    getTable (ctx) {
        try {
            ctx.send({
                code: 0,
                data: {
                    msg: [
                        {
                            cluster_config: {
                                creator: 'system',
                                cluster_name: '测试1',
                                create_time: '2019-11-19 17:52:08',
                                cluster_id: 1,
                                port: 10004,
                                domain_name: '',
                                is_editable: false,
                                state: true
                            },
                            is_editable: true
                        },
                        {
                            cluster_config: {
                                creator: 'system',
                                cluster_name: '测试2',
                                create_time: '2019-11-19 17:52:08',
                                cluster_id: 2,
                                port: 10004,
                                domain_name: '127.0.0.1',
                                is_editable: true,
                                state: true
                            },
                            is_editable: true
                        },
                        {
                            cluster_config: {
                                creator: 'system',
                                cluster_name: '测试3',
                                create_time: '2019-11-19 17:52:08',
                                cluster_id: 3,
                                port: 10004,
                                domain_name: '127.0.0.1',
                                is_editable: true,
                                state: false
                            },
                            is_editable: true
                        },
                        {
                            cluster_config: {
                                creator: 'system',
                                cluster_name: '测试4',
                                create_time: '2019-11-19 17:52:08',
                                cluster_id: 4,
                                port: 10004,
                                domain_name: '',
                                is_editable: true,
                                state: true
                            },
                            is_editable: true
                        },
                        {
                            cluster_config: {
                                creator: 'system',
                                cluster_name: '搜索测试5',
                                create_time: '2019-11-19 17:52:08',
                                cluster_id: 5,
                                port: 10004,
                                domain_name: '',
                                is_editable: false,
                                state: false
                            },
                            is_editable: false
                        }
                    ]
                },
                message: 'ok'
            })
        } catch (err) {
            ctx.throwError({
                message: err.message
            })
        }
    },

    remove (ctx) {
        try {
            ctx.send({
                code: 0,
                data: {
                    msg: '删除成功'
                },
                message: 'ok'
            })
        } catch (err) {
            ctx.throwError({
                message: err.message
            })
        }
    }
}

module.exports = Test
