<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
// @ is an alias to /src
import sourceData from "@/data.json";
console.log(sourceData);
import CategoryList from "@/components/CategoryList.vue";
export default {
  name: "home",
  components: {
    CategoryList
  },
  data() {
    return {
      categories: Object.values(sourceData.categories)
    };
  }
};
</script>
