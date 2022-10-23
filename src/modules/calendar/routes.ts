import CalendarModule from './CalendarModule.vue';
import CalendarView from './views/CalendarView.vue';

export const CalendarRoutes = [
  {
    path: "/calendar",
    name: "Calendar",
    redirect: "/calendar/home",
    component: CalendarModule,
    children: [
      {
        path: "/calendar/home",
        name: "CalendarHome",
        component: CalendarView,
      },
    ],
  }
]