<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '@/views/login/config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import router from '@/router'

export default defineComponent({
  props: {},
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate(valid => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
        }
      })

      localCache.setCache('token', 1)

      router.push('/')

      console.log('执行到这里')
    }

    return {
      account,
      rules,
      loginAction,
      //注意用ref获取数据的时候,这里的Ref要暴露出去才行
      formRef
    }
  }
})
</script>

<style scoped lang="scss"></style>
