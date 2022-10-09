import MainView from "@/views/MainView.vue";
import LoginModule from "@/modules/login/LoginModule.vue";
import DashboardModule from "@/modules/dashboard/DashboardModule.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "/dashboard",
    component: MainView,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardModule,
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: LoginModule,
  }
];

export default routes