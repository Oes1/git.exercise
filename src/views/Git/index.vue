<template>
    <div>
        <div>{{gitCommonUse.title}}</div>
        <div v-for="(item,index) in gitCommonUse.list" :key="index">
            <div>
                <span>{{item.instruct}}</span>
                <span>{{item.use}}</span>
                <span>{{item.tips}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const gitCommonUse = {
            title: 'GIT常用指令',
            hint: [
                { name: '这里设置用户签名和将来登录GITHUB（或其他代码托管中心）的账号没有任何关系' }
            ],
            list: [
                {
                    instruct: 'git config --global user.name 用户名',
                    use: '设置用户签名',
                    tips: ''
                },
                {
                    instruct: 'git config --global user.email 邮箱',
                    use: '设置用户前签名',
                    tips: ''
                },
                {
                    instruct: 'git init',
                    use: '初始化本地库',
                    tips: ''
                },
                {
                    instruct: 'git status',
                    use: '查看本地库状态',
                    tips: ''
                },
                {
                    instruct: 'git add 文件名',
                    use: '添加到暂存区',
                    tips: ''
                },
                {
                    instruct: 'git commit -m',
                    use: '提交到本地库',
                    tips: ''
                },
                {
                    instruct: 'git reflog',
                    use: '查看历史记录',
                    tips: ''
                },
                {
                    instruct: 'git reset --hard 版本号',
                    use: '版本穿梭',
                    tips: ''
                },
                {
                    instruct: 'git branch 分支名',
                    use: '创建分支',
                    tips: ''
                },
                {
                    instruct: 'git checkout 分支名',
                    use: '切换分支',
                    tips: ''
                },
                {
                    instruct: 'git merge',
                    use: '合并分支',
                    tips: ''
                },
                {
                    instruct: '',
                    use: '',
                    tips: ''
                },
                {
                    instruct: '',
                    use: '',
                    tips: ''
                },
                {
                    instruct: '',
                    use: '',
                    tips: ''
                },
                {
                    instruct: '',
                    use: '',
                    tips: ''
                },
                {
                    instruct: '',
                    use: '',
                    tips: ''
                },
                {
                    instruct: '',
                    use: '',
                    tips: ''
                },
                {
                    instruct: '',
                    use: '',
                    tips: ''
                },

            ]
        }
        return { gitCommonUse }
    }
})
</script>

<style scoped>

</style>