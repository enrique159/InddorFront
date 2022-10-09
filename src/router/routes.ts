import MainView from "@/views/MainView.vue";

// Login
import { LoginRoutes } from "@/modules/login/routes";

// Dashboard Routes
import { DashboardRoutes } from "@/modules/dashboard/routes";

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "/dashboard",
    component: MainView,
    children: [
      ...DashboardRoutes,
    ]
  },
  ...LoginRoutes,
];

export default routes