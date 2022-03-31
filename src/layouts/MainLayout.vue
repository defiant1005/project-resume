<template>
  <div class="mainLayout__wrapper">
    <div class="mainLayout__container">
      <Header :user="user" @removeName="removeNameHandler"/>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import Header from "@/components/Header.vue";
import {useCookies} from "vue3-cookies";
import {useRouter} from "vue-router";

export default defineComponent ({
  setup() {
    const { cookies } = useCookies();
    let user = ref('')
    const router = useRouter()
    const removeNameHandler = () => {
      cookies.remove("user_name")
    }
    onMounted(() => {
      let user_name_by_cookie = JSON.parse(cookies.get("user_name"));
      if (!user_name_by_cookie) {
        router.push({
          name:'login',
        })
      } else {
        user.value = user_name_by_cookie
      }
    })
    return {
      cookies,
      user,
      removeNameHandler
    };
  },
  components: {
    Header,
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global_styles/layouts";

</style>
