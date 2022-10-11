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
];

export default routes