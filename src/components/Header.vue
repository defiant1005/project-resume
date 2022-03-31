<template>
  <div class="header__container">
    <div class="header__name-container">
      <div class="header__name">{{user}}</div>
      <el-popconfirm title="Вы уверены, что хотите удалить имя?">
        <template #reference>
          <el-button type="text" class="header__name-btn" @click="removeName">Удалить имя</el-button>
        </template>
      </el-popconfirm>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

export default defineComponent ({
  props: {
    user: {
      required: true
    }
  },
  setup(props, context) {
    const router = useRouter()
    const removeName = () => {
      context.emit('removeName')
      router.push({
        name:'login',
      })
    }
    return {
      removeName
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/header";

</style>
