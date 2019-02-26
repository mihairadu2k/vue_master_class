<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="posts" />
    <PostEditor :threadId="id" @save-post="save" />
  </div>
</template>

<script>
import SourceData from "@/data.json";
import PostList from "@/components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";
export default {
  name: "thread-show",
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      thread: SourceData.threads[this.id]
    };
  },
  components: {
    PostList,
    PostEditor
  },
  computed: {
    posts() {
      const postsIds = Object.values(this.thread.posts);
      return Object.values(SourceData.posts).filter(post =>
        postsIds.includes(post[".key"])
      );
    }
  },
  methods: {
    save(event) {
      this.$set(SourceData.posts, event.postId, event.post);
      this.$set(this.thread.posts, event.postId, event.postId);
      this.$set(
        SourceData.users[event.post.userId].posts,
        event.postId,
        event.postId
      );
    }
  }
};
</script>

<style>
/*  */
</style>
