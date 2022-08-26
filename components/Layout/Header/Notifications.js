import { FaRegBell } from "react-icons/fa";
import useDropdowm from "../../Hooks/useDropdown";
import { notificationsData } from "./notificationsData";

function Notifications() {
  const [showDropdown, setShowDropdown, node] = useDropdowm();

  return (
    <div ref={node} className="relative">
      <div
        className="cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FaRegBell
          className={`text-xl ${
            showDropdown ? "text-blue-700" : "text-red-500"
          }`}
        />
        <div className="absolute -top-5 -right-4 bg-red-500 border-2 border-white text-sm text-white rounded-full p-[2px]  w-7 text-center  shadow-lg">
          {notificationsData.length}
        </div>
      </div>

      {showDropdown && (
        <div className="absolute w-[400px] font-light top-[43.5px] right-0 bg-white shadow-md">
          <p className="px-1 py-4 bg-gradient-to-t from-red-600 to-red-300 text-white transition duration-300 text-center cursor-default">
            Notifications
          </p>

          <div className="divide-y overflow-y-scroll h-[340px]">
            {notificationsData.map((notification) => (
              <div
                key={notification.id}
                className="px-7 py-5 space-y-2 hover:bg-slate-100 transition duration-300 cursor-pointer"
              >
                <h4 className="text-sm font-semibold ">{notification.name}</h4>
                <p className="text-xs font-light">{notification.time} ago</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
