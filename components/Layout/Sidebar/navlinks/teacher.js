import { AiOutlineDashboard, AiOutlineAreaChart } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";
import { BsCalendar3, BsCalendarX } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

export const teacher = [
  {
    id: 1,
    name: "dashboard",
    link: "/teacher",
    icon: <AiOutlineDashboard className="fill-green-400" />,
  },
  {
    id: 2,
    name: "class routine",
    link: "/teacher/class-routine",
    icon: <BsCalendar3 className="fill-green-400" />,
  },
  {
    id: 3,
    name: "my students",
    link: "/teacher/my-students",
    icon: <ImUsers className="fill-green-400" />,
  },
  {
    id: 4,
    name: "exam",
    link: "/teacher/exam",
    icon: <GoChecklist className="fill-green-400" />,
  },
  {
    id: 5,
    name: "result",
    link: "/teacher/result",
    icon: <AiOutlineAreaChart className="fill-green-400" />,
  },
  {
    id: 6,
    name: "salary",
    link: "/teacher/salary",
    icon: <GiMoneyStack className="fill-green-400" />,
  },
  {
    id: 7,
    name: "leave",
    link: "/teacher/leave",
    icon: <BsCalendarX className="fill-green-400" />,
  },
];
