import { FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";
import useDropdowm from "../../Hooks/useDropdown";
import useLogOut from "../../Hooks/useLogOut";

function User({ photo, user_name, role }) {
  const [showDropdown, setShowDropdown, node] = useDropdowm();

  const { logoutUser } = useLogOut();

  const handleLogOut = () => {
    logoutUser();
  };

  return (
    <div ref={node} className="relative">
      <div
        className="flex justify-between items-center px-3 py-[2px]  gap-3 rounded hover:bg-slate-200 transition duration-300 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex text-end gap-2">
          <div className="">
            <h4 className="">{user_name}</h4>
            <p className="text-sm font-extralight">{role}</p>
          </div>

          <span className="pt-1 text-sm">
            <GoTriangleDown
              className={showDropdown ? "text-blue-700" : "text-emerald-500"}
            />
          </span>
        </div>
        <div className="">
          {photo ? (
            <Image
              src={photo}
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            // <div className="">
            //   <FaUserCircle className="fill-emerald-500 text-3xl" />
            // </div>
            <Image
              src="/images/user.webp"
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
        </div>
      </div>

      {showDropdown && (
        <div className="absolute w-[250px] font-light top-[58.5px] right-1 bg-white shadow-md">
          <p className="px-1 py-4 bg-gradient-to-t from-emerald-600 to-emerald-300 text-white transition duration-300 text-center cursor-default">
            Username
          </p>

          <div className="text-sm divide-y cursor-pointer">
            <p className="px-5 py-3 flex items-center gap-2 hover:bg-slate-100 transition duration-300">
              <FaRegUserCircle />
              My Profile
            </p>
            <p className="px-5 py-3 flex items-center gap-2 hover:bg-slate-100 transition duration-300">
              <AiOutlineSetting />
              Account Settings
            </p>
            <p
              className="px-5 py-3 flex items-center gap-2 hover:bg-slate-100 transition duration-300"
              onClick={handleLogOut}
            >
              <AiOutlineLogout />
              Log Out
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
