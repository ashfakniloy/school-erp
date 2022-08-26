import { AiOutlineDashboard, AiOutlineAreaChart } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { SiGooglesheets } from "react-icons/si";
import { BsCalendar3, BsCalendarX } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

export const student = [
  {
    id: 1,
    name: "dashboard",
    link: "/student",
    icon: <AiOutlineDashboard className="fill-green-400" />,
  },
  {
    id: 2,
    name: "class routine",
    link: "/student/class-routine",
    icon: <BsCalendar3 className="fill-green-400" />,
  },
  {
    id: 3,
    name: "attendance",
    link: "/student/attendance",
    icon: <SiGooglesheets className="fill-green-400" />,
  },
  {
    id: 4,
    name: "exam",
    link: "/student/exam",
    icon: <GoChecklist className="fill-green-400" />,
  },
  {
    id: 5,
    name: "result",
    link: "/student/result",
    icon: <AiOutlineAreaChart className="fill-green-400" />,
  },
  {
    id: 6,
    name: "fees",
    link: "/student/fees",
    icon: <GiMoneyStack className="fill-green-400" />,
  },
  {
    id: 7,
    name: "leave",
    link: "/student/leave",
    icon: <BsCalendarX className="fill-green-400" />,
  },
];
