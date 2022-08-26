import CountUp from "react-countup";

function Card({ title, count, icon, color }) {
  return (
    // <div className="bg-gradient-to-t [&:nth-child(1)]:from-violet-500 [&:nth-child(1)]:to-violet-300 [&:nth-child(2)]:from-red-500 [&:nth-child(2)]:to-red-300 [&:nth-child(3)]:from-green-500 [&:nth-child(3)]:to-green-300 [&:nth-child(4)]:from-orange-500 [&:nth-child(4)]:to-orange-300 text-white flex justify-between items-center px-8 py-6 gap-40 shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
    <div
      className={`bg-gradient-to-t ${color}  flex justify-between items-center px-8 py-6 gap-40 shadow-md hover:scale-105 hover:shadow-lg transition duration-300`}
    >
      <div className="text-5xl p-4 rounded-full bg-neutral-200">{icon}</div>
      <div className="space-y-2 text-center">
        <h1 className="capitalize text-lg text-slate-600">{title}</h1>
        <h1 className="text-slate-100 font-bold text-2xl">
          {count ? <CountUp end={count} duration={1} /> : "---"}
        </h1>
      </div>
    </div>
  );
}

export default Card;
