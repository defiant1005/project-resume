<template>
  <div class="mainLayout__wrapper">
    <div class="mainLayout__container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  components:{
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global_styles/layouts";

</style>
