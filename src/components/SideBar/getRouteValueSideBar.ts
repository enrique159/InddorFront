import { RouteRecordName } from "vue-router";

export const getRouteValueSideBar = (route: RouteRecordName | null | undefined): string => {
  switch (route) {
    // DASHBOARD
    case "Dashboard":
      return "1";
    // BOARDS
    case "Boards":
      return "2";
    case "BoardsView":
      return "2";
    // CONTRACTS
    case "Contracts":
      return "3";
    case "Suppliers":
      return "4";
    // CALENDAR
    case "Calendar":
      return "5";
    case "CalendarHome":
      return "5";
    case "Statistics":
      return "6";
    case "Inbox":
      return "7";
    case "Finances":
      return"8";
    case "Organization":
      return "9";
    default:
      return "1";
  }
}