import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MilestonesIndex from "../views/MilestonesIndex.vue";
import ChildrenNew from "../views/ChildrenNew.vue";
import ChildrenShow from "../views/ChildrenShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "children-index",
    component: Home,
  },
  {
    path: "/children",
    name: "children-index",
    component: Home,
  },
  {
    path: "/children/new",
    name: "children-new",
    component: ChildrenNew,
  },
  {
    path: "/children/:id",
    name: "children-show",
    component: ChildrenShow,
  },
  {
    path: "/milestones",
    name: "milestones-index",
    component: MilestonesIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
