<template>
  <div class="post-list">
    <!--insert the post list item-->
    <post-list-item
      v-for="post in posts"
      :post="post"
      :key="post['.key']"
    ></post-list-item>
  </div>
</template>

<script>
import PostListItem from "./PostListItem.vue";

export default {
  name: "PostList",
  components: { PostListItem },
  props: {
    components: {
      PostListItem
    },
    posts: {
      type: Array,
      required: true
    }
  },

};
</script>

<style scoped></style>
