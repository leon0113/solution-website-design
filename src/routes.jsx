import { HomeIcon, UserCircleIcon, TableCellsIcon, BellIcon, ArrowRightOnRectangleIcon, UserPlusIcon, PowerIcon } from "@heroicons/react/24/solid";
import { Campaign, CreatedAt, Tutorial } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import MainDashboard from "./pages/MainDashboard/MainDashboard";
import Analytics from "./pages/Analytics";
import UserDashboard from "./pages/User/UserDashboard";
import AdsDetails from "./pages/dashboard/AdsDetails";
import ScheduleBudgeting from "./pages/dashboard/ScheduleBudgeting";
import Targeting from "./pages/dashboard/Targeting";
import Report from "./pages/dashboard/Report";
import './style/sidenavbar.css'
import DashboardStep from "./pages/dashboard/Stepper";
import ChoseCompaign from "./pages/dashboard/ChoseCompaign";
import AllCompaign from "./pages/dashboard/AllCompaign";
import AddCompaign from "./pages/dashboard/AddCompaign";
import AdSet from "./pages/dashboard/AdSet";
import AdSetTwo from "./pages/dashboard/AdSetTwo";
import Subscriptions from "./pages/dashboard/Subscriptions"
import UsersManagement from "./pages/dashboard/UsersManagement";
import UserList from "./pages/dashboard/UserList";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/",
        element: <MainDashboard />,
      },

      {
        icon: <UserCircleIcon {...icon} />,
        name: "Analytics",
        path: "/analytics",
        element: <Analytics />,
      },


      {
        icon: <BellIcon {...icon} />,
        name: "campaign",
        path: "/compaigns",
        element: <AllCompaign />,
      },

      {
        icon: <BellIcon {...icon} />,
        name: "choseCompaign",
        path: "/chose-compaign",
        element: <ChoseCompaign />,
      },

      {
        icon: <BellIcon {...icon} />,
        name: "addCompaign",
        path: "/add-compaign",
        element: <AddCompaign />,
      },


      {
        icon: <BellIcon {...icon} />,
        name: "adSet",
        path: "/adset",
        element: <AdSet />,
      },

      {
        icon: <BellIcon {...icon} />,
        name: "adSetTwo",
        path: "/ad-set",
        element: <AdSetTwo />,
      },


      {
        icon: <BellIcon {...icon} />,
        name: "createAds",
        path: "/createAds",
        element: <DashboardStep />,
      },

      {
        className: 'addDetails',
        icon: <BellIcon {...icon} />,
        name: "adsDetails",
        path: "/adsDetails",
        element: <AdsDetails />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Schedule",
        path: "/ScheduleBudgeting",
        element: <ScheduleBudgeting />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Targeting",
        path: "/Targeting",
        element: <Targeting />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Subscriptions",
        path: "/Subscriptions",
        element: <Subscriptions />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Users Management",
        path: "/UsersManagement",
        element: <UsersManagement />,
      },

      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Campaign",
      //   path: "/campaigns",
      //   element: <Campaign />,
      // },

      {
        icon: <UserCircleIcon {...icon} />,
        name: "Reports",
        path: "/report",
        element: <Report />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "User List",
        path: "/userList",
        element: <UserList />,
      },

      {
        icon: <UserCircleIcon {...icon} />,
        name: "Tutorials",
        path: "/tutorial",
        element: <Tutorial />,
      },

    ],
  },
  {
    // title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
