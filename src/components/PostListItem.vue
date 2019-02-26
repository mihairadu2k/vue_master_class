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

      <div class="post-date text-faded">6 hours ago</div>
    </div>
  </div>
</template>

<script>
import SourceData from "@/data.json";
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    user() {
      return SourceData.users[this.post.userId];
    },
    userPostsCount() {
      return Object.keys(this.user.posts).length;
    }
  }
};
</script>
