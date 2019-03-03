<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/TheNavbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
@import "./assets/css/style.scss";
</style>
