<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name: 'thread-show', params: {id: thread['.key']}}">
          {{ thread.title }}
        </router-link>
      </p>
      <p class="text-faded text-xsmall">
        By
        <a href="#">{{ user.name }}</a>, <AppDate :date="thread.publishedAt"></AppDate>.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{ repliesCount }}
      </p>

      <!--<img-->
        <!--class="avatar-medium"-->
        <!--src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png"-->
        <!--alt-->
      <!--&gt;-->
      <!-- 
      <div>
        <p class="text-xsmall">
          <a href="profile.html">Bruce Wayne</a>
        </p>
        <p class="text-xsmall text-faded">2 hours ago</p>
      </div>-->
    </div>
  </div>
</template>

<script>
  import SourceData from "@/data.json"
export default {
  name: "threadListItem",
  data () {
    return {
      users: SourceData.users,
    }
  },
  props: {
    thread: {
      type: Object,
      required: true
    }
  },
  computed: {
    repliesCount() {
      return `${ Object.keys(this.thread.posts).length - 1 } replies`
    },
    user () {
      return this.users[this.thread.userId]
    }
  }
};
</script>

<style>
</style>
