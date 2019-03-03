<template>
  <div>
    <div class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{ user.name }}</a>

        <a href="#">
          <img class="avatar-large" :src="user.avatar" alt />
        </a>

        <p class="desktop-only text-small">{{ userPostsCount }} posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>{{ post.text }}</p>
        </div>
      </div>

      <AppDate class="post-date text-faded" :date="post.publishedAt"> </AppDate>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {},
  computed: {
    user() {
      return this.$store.state.SourceData.users[this.post.userId];
    },
    userPostsCount() {
      return Object.keys(this.user.posts).length;
    }
  }
};
</script>
