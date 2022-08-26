import { useState } from "react";
import Tab from "./Tab";

function LeaveTabs() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const tabOptions = ["accepted", "pending", "rejected"];

  return (
    <>
      <div className="p-2 flex justify-center items-center">
        <div className="flex border cursor-pointer divide-x-[1px] divide-slate-300">
          {tabOptions.map((option, i) => (
            <div
              key={i}
              className={`px-8 py-2 hover:bg-gray-200 ${
                toggleState === i && "bg-gray-200"
              }`}
              onClick={() => toggleTab(i)}
            >
              <p className="capitalize">{option}</p>
            </div>
          ))}
          {/* <div
            className={`px-8 py-2 hover:bg-gray-200 ${
              toggleState === 1 && "bg-gray-200"
            }`}
            onClick={() => toggleTab(1)}
          >
            <p>Accecpted</p>
          </div>
          <div
            className={`px-8 py-2 hover:bg-gray-200 ${
              toggleState === 2 && "bg-gray-200"
            }`}
            onClick={() => toggleTab(2)}
          >
            <p>Pending</p>
          </div>
          <div
            className={`px-8 py-2 hover:bg-gray-200 ${
              toggleState === 3 && "bg-gray-200"
            }`}
            onClick={() => toggleTab(3)}
          >
            <p>Rejected</p>
          </div> */}
        </div>
      </div>

      {toggleState === 0 && <Tab name="accepted" />}

      {toggleState === 1 && <Tab name="pending" />}

      {toggleState === 2 && <Tab name="rejected" />}
    </>
  );
}

export default LeaveTabs;
