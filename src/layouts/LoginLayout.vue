<template>
  <div class="loginLayout__wrapper">
    <div class="loginLayout__container">
      <Login/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Login from "@/views/Login.vue";

export default defineComponent ({
  components:{
    Login,
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global_styles/layouts";

</style>
