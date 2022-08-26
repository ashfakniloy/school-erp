import { AiOutlineDashboard, AiOutlineAreaChart } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";
import { SiGooglesheets } from "react-icons/si";

export const parent = [
  {
    id: 1,
    name: "dashboard",
    link: "/parent",
    icon: <AiOutlineDashboard className="fill-green-400" />,
  },
  {
    id: 2,
    name: "my student",
    link: "/parent/my-student",
    icon: <ImUsers className="fill-green-400" />,
  },
  {
    id: 3,
    name: "result",
    link: "/parent/result",
    icon: <AiOutlineAreaChart className="fill-green-400" />,
  },
  {
    id: 4,
    name: "attendance",
    link: "/parent/attendance",
    icon: <SiGooglesheets className="fill-green-400" />,
  },
  {
    id: 5,
    name: "fees",
    link: "/parent/fees",
    icon: <GiMoneyStack className="fill-green-400" />,
  },
];
