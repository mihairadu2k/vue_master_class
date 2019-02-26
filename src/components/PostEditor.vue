<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="post_input"></label>
        <textarea
          id="post_input"
          cols="30"
          rows="10"
          class="form-input"
          v-model="text"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue" type="submit">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostEditor",
  props: {
    threadId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    save() {
      const postId = "greatPost" + Math.random();
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: "jUjmgCurRRdzayqbRMO7aTG9X1G2",
        ".key": postId
      };

      this.text = "";

      this.$emit("save", { post, postId });
    }
  }
};
</script>

<style scoped></style>
