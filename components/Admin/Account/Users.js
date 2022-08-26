import Image from "next/image";

function Users({ users, userDetails, setUserDetails }) {
  // console.log("id is", userDetails && userDetails.id);
  return (
    <div className=" bg-white py-10 shadow-md  w-[500px]">
      <h1 className="px-10 text-xl font-semibold text-slate-800">All Admins</h1>
      <div className="m-10 space-y-2">
        {users &&
          users.map((user) => (
            <div
              key={user.id}
              onClick={() => setUserDetails(user)}
              className={` rounded cursor-pointer ${
                user.id === userDetails.id
                  ? "bg-gradient-to-t from-red-300 to-red-100"
                  : "bg-gray-100 hover:bg-red-100 transition duration-300"
              }`}

              // <div
              //   key={user.id}
              //   onClick={() => setUserDetails(user)}
              //   className={` rounded cursor-pointer bg-gray-100 hover:bg-red-100 transition duration-300 `}
            >
              <div className="">
                <div className="px-7 py-5 flex items-center gap-6 ">
                  <div className="">
                    <Image
                      // src={user.image}
                      src="/images/user2.jpg"
                      alt="user"
                      className="rounded-full"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{user.user_name}</h4>
                    {/* <p className="text-sm">{user.role}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Users;
