<template>
  <div class="forum-wrapper">
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>Cooking</h1>
          <p class="text-lead">Discuss your passion for food and cooking</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full">
      <div class="category-item">
        <div class="forum-list">
          <h2 class="list-title">Recipes</h2>

          <div class="forum-listing">
            <div class="forum-details">
              <a href="#" class="forum-name">{{ forum.name }}</a>

              <p class="forum-description ">
                {{ forum.description }}
              </p>
            </div>

            <div class="threads-count">
              <p class="count text-lead">1</p>
              {{ Object.values(forum.threads).length }}
            </div>

            <div class="last-thread">
              <img
                class="avatar"
                src="http://cleaneatsfastfeets.com/wp-content/uploads/2013/05/Mr-Burns.gif"
                alt=""
              />
              <div class="last-thread-details">
                <a href="#">How I grill my fish</a>
                <p class="text-xsmall">
                  By <a href="profile.html">Charles Montgomery Burns</a>, 2 days
                  ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadList :threads="threads" />
    </div>
  </div>
</template>

<script>
import ThreadList from "../components/ThreadList";
import SourceData from "@/data.json";
export default {
  name: "PageForum",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: { ThreadList },
  computed: {
    forum() {
      return SourceData.forums[this.id];
    },
    threads() {
      return Object.values(SourceData.threads).filter(
        thread => thread.forumId === this.id
      );
    }
  }
};
</script>

<style scoped>
.forum-wrapper {
  width: 100%;
}
</style>
