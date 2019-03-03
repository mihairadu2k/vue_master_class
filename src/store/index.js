import Vue from "vue";
import Vuex from "vuex";
import SourceData from "@/data.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SourceData
  },
  mutations: {
    SET_POST(state, { post, postId }) {
      Vue.set(state.SourceData.posts, postId, post);
    },
    APPEND_POST_TO_THREAD(state, { postId, threadId }) {
      const threads = state.SourceData.threads[threadId].posts;
      Vue.set(threads, postId, postId);
    },
    APPEND_POST_TO_USER(state, { postId, userId }) {
      const user = state.SourceData.users[userId];
      Vue.set(user.posts, postId, postId);
    }
  },
  actions: {
    createPost(context, post) {
      const postId = `greatPost + ${Math.random()}`;
      post[".key"] = postId;
      context.commit("SET_POST", { post, postId });
      context.commit("APPEND_POST_TO_THREAD", {
        threadId: post.threadId,
        postId
      });
      context.commit("APPEND_POST_TO_USER", {
        userId: post.userId,
        postId
      });
      // set the post
      // append the post to the thread
      // append the post to the user
    }
  }
});
