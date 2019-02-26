import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import PageThreadShow from "@/views/PageThreadShow.vue";
import PageForum from "@/views/PageForum.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/thread/:id",
      name: "thread-show",
      component: PageThreadShow,
      props: true
    },
    {
      path: "/forum/:id",
      name: "forum",
      component: PageForum,
      props: true
    },
    {
      path: "*",
      component: PageNotFound,
      name:"not-found"
    }
  ]
});