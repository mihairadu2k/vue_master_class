<template>
  <div class="col-full">
    <h1>{{category.name}}</h1>
    <CategoryListItem :category="category" />
  </div>
</template>

<script>
import SourceData from "@/data.json";
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
      return SourceData.categories[this.id];
    }
  }
};
</script>

<style scoped></style>
