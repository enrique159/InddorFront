import MainView from "@/views/MainView.vue";

// Modules
import { LoginRoutes } from "@/modules/login/routes";
import { BoardsRoutes } from "@/modules/boards/routes";
import { DashboardRoutes } from "@/modules/dashboard/routes";

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "/dashboard",
    component: MainView,
    children: [
      ...DashboardRoutes,
      ...BoardsRoutes,
    ]
  },
  ...LoginRoutes,
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: "404",
    component: () => import("@/views/404.vue")
  }
];

export default routes