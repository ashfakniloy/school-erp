import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  FaBars,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { institutionName } from "../../../config";
import NonSSRWrapper from "../../NonSSRWrapper";
import Messages from "./Messages";
import Notifications from "./Notifications";
import User from "./User";

function Header({
  showMenu,
  setShowMenu,
  logo,
  photo,
  user_name,
  institution_name,
  role,
}) {
  // const { institutionName, username } = useSelector((state) => state.login);

  // const { data } = useSession();
  // const { institution_name, user_name, role } = data ? data.user : "";

  return (
    <div className=" bg-white w-full min-h-[67px] flex justify-between items-center shadow-md pl-2 pr-5 py-2 sticky top-0 z-10">
      <div className=" flex items-center gap-10">
        <div
          className="text-green-500 text-2xl active:scale-90 transition duration-200"
          onClick={() => setShowMenu(!showMenu)}
        >
          {/* <FaBars /> */}
          {showMenu ? (
            <FaArrowAltCircleLeft className="" />
          ) : (
            <FaArrowAltCircleRight />
          )}
        </div>

        <div className="ml-5 flex items-center gap-10">
          {logo && <Image src={logo} alt="logo" width={40} height={40} />}
          {/* <h2 className="text-xl font-semibold">{institutionName}</h2> */}
          <h2 className="text-xl font-semibold text-cyan-600">
            {institution_name}
          </h2>
        </div>
      </div>

      <div className="flex justify-between items-center font-semibold gap-7 relative">
        <div className="flex gap-7">
          <Messages />
          <Notifications />
        </div>
        <User photo={photo} user_name={user_name} role={role} />
      </div>
    </div>
  );
}

export default Header;
