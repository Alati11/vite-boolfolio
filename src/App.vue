<script >
import ProjectIndex from './pages/projects/Index.vue';
import AppHeader from './components/AppHeader.vue';
  export default {
    components: {
      ProjectIndex,
      AppHeader,
    }
  }

</script>

<template>
  <div>
    <!-- <ProjectIndex/> -->
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss"

</style>
