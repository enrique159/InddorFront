import MainView from "@/views/MainView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

// Modules
import { LoginRoutes } from "@/modules/login/routes";
import { BoardsRoutes } from "@/modules/boards/routes";
import { DashboardRoutes } from "@/modules/dashboard/routes";
import { CalendarRoutes } from "@/modules/calendar/routes";

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "/dashboard",
    component: MainView,
    children: [
      ...DashboardRoutes,
      ...BoardsRoutes,
      ...CalendarRoutes,
    ]
  },
  ...LoginRoutes,
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFoundView
  }
];

export default routes