<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <i-ep-d-arrow-right v-if="isFold" />
      <i-ep-d-arrow-left v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  props: {},
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      handleFoldClick,
      isFold
    }
  }
})
</script>

<style scoped lang="scss"></style>
