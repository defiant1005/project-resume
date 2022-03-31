<template>
  <div class="login__container">
    <div class="login__authorization">
      <el-form
          :model="authorization_form"
          label-width="100px"
          ref="authorization_form_ref"
          :rules="authorization_form_rules"
      >
        <el-form-item label="Ваше имя" prop="name">
          <el-input v-model="authorization_form.name" placeholder="Минимум 5 символов"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="authorization_submit(authorization_form_ref)">Продолжить</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {useLoginForm} from "@/composition_api/loginPage/login_form";
import {useCookies} from "vue3-cookies";
import {useRouter} from "vue-router";

export default defineComponent ({
  setup() {
    const { cookies } = useCookies();
    const router = useRouter()
    onMounted(() => {
      let _user_name = JSON.parse(cookies.get("user_name"));
      if (_user_name) {
        router.push({
          name:'home',
        })
      }
    })

    return {
      ...useLoginForm(),
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/login";

</style>
