<template>
  <component :is="layout"/>
</template>

<script lang="ts">
import LoginLayout from "@/layouts/LoginLayout.vue";
import {defineComponent} from "vue";


export default defineComponent ({
  computed: {
    layout() {
      return this.$route.meta.layout || LoginLayout
    },
  },
  components:{
    LoginLayout
  },
})
</script>


<style lang="scss">
@import "@/assets/styles/global_styles/main_styles";
</style>
