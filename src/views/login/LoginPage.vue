<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  props: {},
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login-bg.svg');
}
</style>
