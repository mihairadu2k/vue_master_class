<template>
  <div>
    <ForumListItem
      v-for="forum in forums"
      :key="forum['.key']"
      :forum="forum"
    />
  </div>
</template>

<script>
import ForumListItem from "./ForumListItem.vue";

export default {
  name: "ForumList",
  components: {
    ForumListItem
  },
  props: {
    forums: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
