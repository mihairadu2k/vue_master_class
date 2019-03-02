<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link
        :to="{ name: 'category', params: { id: category['.key'] } }"
        >{{ category.name }}</router-link
      >
    </h2>
    <ForumList :forums="categoryForums" />
  </div>
</template>

<script>
import ForumList from "./ForumList";
import SourceDate from "@/data.json";
export default {
  name: "CategoryListItem",
  components: {
    ForumList
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    categoryForums() {
      return Object.values(SourceDate.forums).filter(
        forum => forum.categoryId === this.category[".key"]
      );
    }
  }
};
</script>

<style scoped></style>
