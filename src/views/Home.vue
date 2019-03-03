<template>
  <div class="col-full push-top">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryList from "@/components/CategoryList.vue";
export default {
  name: "home",
  components: {
    CategoryList
  },

  computed: {
    categories() {
      return Object.values(this.$store.state.categories);
    }
  }
};
</script>
