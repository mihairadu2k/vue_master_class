<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <thread-list-item
      v-for="thread in threads"
      :key="thread['.key']"
      :thread="thread"
    ></thread-list-item>
  </div>
</template>

<script>
import ThreadListItem from "./ThreadListItem.vue";
export default {
  name: "thread-list",
  components: {
    ThreadListItem
  },
  props: {
    threads: {
      required: true,
      type: Array
    }
  }
};
</script>

<style></style>
