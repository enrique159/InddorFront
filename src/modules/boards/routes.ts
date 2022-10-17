import BoardsModule from './BoardsModule.vue';
import BoardsView from './views/BoardsView.vue';

export const BoardsRoutes = [
  {
    path: "/boards",
    name: "Boards",
    redirect: "/boards/all",
    component: BoardsModule,
    children: [
      {
        path: "/boards/all",
        name: "BoardsView",
        component: BoardsView,
      },
    ],
  }
]