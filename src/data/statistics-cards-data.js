import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  // {
  //   color: "blue",
  //   icon: BanknotesIcon,
  //   title: "Today's Money",
  //   value: "$53k",
  //   footer: {
  //     color: "text-green-500",
  //     value: "+55%",
  //     label: "than last week",
  //   },
  // },
  {
    color: "pink",
    icon: UserIcon,
    title: "Cost & Impression",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Clicks",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Action",
    value: "35",
    footer: {
      color: "text-green-500",
      value: "-15.0%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
