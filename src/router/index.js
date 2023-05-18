import TestOne from "@/view/TestOne/TestOne.vue";
import { createRouter, createWebHistory } from "vue-router";
import TestTwo from "@/view/TestTwo/TestTwo.vue";
import ReportTable from "@/view/ReportTable/ReportTable.vue";
import SystemPath from "../store";

const routes = [
  {
    path: SystemPath.home.path,
    component: TestOne,
    name: SystemPath.home.name,
  },
  {
    path: SystemPath.blog.path,
    component: TestTwo,
    name: SystemPath.blog.name,
  },
  {
    path: SystemPath.report.path,
    component: ReportTable,
    name: SystemPath.report.name,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
