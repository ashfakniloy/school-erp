import { FaRegEnvelope, FaRegUserCircle } from "react-icons/fa";
import useDropdown from "../../Hooks/useDropdown";
import { messagesData } from "./messagesData";

function Messages() {
  const [showDropdown, setShowDropdown, node] = useDropdown();

  return (
    <div ref={node} className="relative">
      <div
        className="cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FaRegEnvelope
          className={`text-xl ${
            showDropdown ? "text-blue-700" : "text-teal-700"
          }`}
        />
        <div className="absolute -top-5 -right-4 bg-teal-500 border-2 border-white text-sm text-white rounded-full p-[2px]  w-7 text-center  shadow-lg">
          {messagesData.length}
        </div>
      </div>

      {showDropdown && (
        <div className="absolute w-[400px] font-light top-[43.5px] right-0 bg-white shadow-md">
          <p className="px-1 py-4 bg-gradient-to-t  from-teal-600 to-teal-300 text-white transition duration-300 text-center cursor-default">
            Messages
          </p>

          <div className="divide-y overflow-y-scroll h-[324px]">
            {messagesData.map((message) => (
              <div
                key={message.id}
                className="flex gap-3 p-5 hover:bg-slate-100 transition duration-300 cursor-pointer"
              >
                <div className="">
                  <FaRegUserCircle className="fill-teal-700 text-3xl" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold ">{message.name}</h4>
                    <p className="text-xs font-light">{message.time}</p>
                  </div>
                  <div className="text-[13px]">
                    <p className="">{message.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;
