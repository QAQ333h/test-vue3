import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

// createRouter:创建router
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
