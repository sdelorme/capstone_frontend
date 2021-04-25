import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MilestonesIndex from "../views/MilestonesIndex.vue";
import MilestonesShow from "../views/MilestonesShow.vue";
import ChildrenNew from "../views/ChildrenNew.vue";
import ChildrenShow from "../views/ChildrenShow.vue";
import ChildrenMilestonesSummary from "../views/ChildrenMilestonesSummary.vue";

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
    path: "/children/:id/milestones",
    name: "children-milestones-summary",
    component: ChildrenMilestonesSummary,
  },
  {
    path: "/milestones/:id",
    name: "milestone-show",
    component: MilestonesShow,
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
