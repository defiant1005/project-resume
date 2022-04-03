<template>
  <div class="home__container">
    <div class="home__authorization">
      <div class="home__authorization-title">Снизу приведены данные из тестового бекенда, полученные по API через Axios</div>
      <el-table :data="post_table_data" style="width: 100%" border height="700">
        <el-table-column prop="id" label="id" width="100" sortable/>
        <el-table-column prop="userId" label="userId" width="100" sortable/>
        <el-table-column prop="title" label="title" width="180" sortable/>
        <el-table-column prop="body" label="body" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapActions, mapGetters} from "vuex";

export default defineComponent ({
  data() {
    return {
      search_body: '',
    }
  },
  methods: {
    ...mapActions({
      get_posts_from_api: 'get_posts_from_api',
    })
  },
  computed: {
    post_table_data() {
      let post_table_data = this.get_posts
      return post_table_data
    },
    ...mapGetters({
      get_posts: 'get_posts',
    })
  },
  mounted() {
    this.get_posts_from_api()
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/home";

</style>
