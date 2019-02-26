<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
// @ is an alias to /src
import sourceData from "@/data.json";
console.log(sourceData)
import ThreadList from "@/components/ThreadList.vue";
export default {
  name: "home",
  components: {
    ThreadList
  },
  data() {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>
