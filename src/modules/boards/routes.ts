import BoardsModule from './BoardsModule.vue';
import BoardsView from './views/BoardsView.vue';

export const BoardsRoutes = [
  {
    path: "/boards",
    name: "Boards",
    component: BoardsModule,
    children: [
      {
        path: "",
        name: "BoardsView",
        component: BoardsView,
      },
    ],
  }
]