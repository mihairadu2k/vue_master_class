import Vue from "vue";
import Vuex from "vuex";
import SourceData from "@/data.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...SourceData,
    authId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3"
  },
  mutations: {
    SET_POST(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },
    APPEND_POST_TO_THREAD(state, { postId, threadId }) {
      const threads = state.threads[threadId].posts;
      Vue.set(threads, postId, postId);
    },
    APPEND_POST_TO_USER(state, { postId, userId }) {
      const user = state.users[userId];
      Vue.set(user.posts, postId, postId);
    },
    SET_USER(state, { user, userId }) {
      Vue.set(state.posts, userId, user);
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
    },
    updateUser({ commit }, user) {
      commit("SET_USER", { userId: user[".key"], user });
    }
  },
  getters: {
    authUser(state) {
      return state.users[state.authId];
    }
  }
});
