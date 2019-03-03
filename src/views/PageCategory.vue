<template>
  <div class="col-full">
    <h1>{{ category.name }}</h1>
    <CategoryListItem :category="category" />
  </div>
</template>

<script>
import CategoryListItem from "@/components/CategoryListItem.vue";
export default {
  name: "PageCategory",
  components: {
    CategoryListItem
  },
  props: {
    id: {
      required: true,
      type: [String, Number]
    }
  },
  computed: {
    category() {
      return this.$store.state.SourceData.categories[this.id];
    }
  }
};
</script>
<style scoped></style>
