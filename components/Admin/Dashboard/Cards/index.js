import { ImUsers } from "react-icons/im";
import { MdOutlineGroups } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import Card from "./Card";

function Cards({ students, teachers, parents, earnings }) {
  const totalCounts = [
    {
      title: "students",
      count: students,
      icon: <ImUsers className="fill-blue-700" />,
      color: "from-violet-400 to-violet-200",
    },
    {
      title: "teachers",
      count: teachers,
      icon: <MdOutlineGroups className="fill-red-700" />,
      color: "from-red-400 to-red-200",
    },
    {
      title: "parents",
      count: parents,
      icon: <RiParentFill className="fill-green-700" />,
      color: "from-green-400 to-green-200",
    },
    {
      title: "earnings",
      count: earnings,
      icon: <GiMoneyStack className="fill-orange-700" />,
      color: "from-orange-400 to-orange-200",
    },
  ];

  return (
    <>
      {totalCounts.map((totalCount, i) => (
        <Card
          key={i}
          title={totalCount.title}
          count={totalCount.count}
          icon={totalCount.icon}
          color={totalCount.color}
        />
      ))}
    </>
  );
}

export default Cards;
