<template>
  <div>
    <CategoryListItem
      v-for="category in categories"
      :category="category"
      :key="category['.key']"
    />
  </div>
</template>

<script>
import CategoryListItem from "./CategoryListItem.vue";

export default {
  name: "CategoryList",
  components: {
    CategoryListItem
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
