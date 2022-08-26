import Image from "next/image";

function UserDetails({ userDetails }) {
  const {
    user_name,
    first_name,
    last_name,
    role,
    gender,
    joining_date,
    email,
    password,
    phone,
    address,
  } = userDetails;
  return (
    <div className="flex-1 bg-white py-10 shadow-md">
      <h1 className="px-10 text-xl font-semibold text-slate-800">
        Admin Details
      </h1>
      <div className="m-10  flex gap-10">
        <div className="">
          <Image
            // src={userDetails.image}
            src="/images/user2.jpg"
            alt="user"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        <div className="space-y-8">
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Username:</p>
            <p className="text-slate-700 font-semibold">{user_name}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Name:</p>
            <p className="text-slate-700 font-semibold">
              {first_name} {last_name}
            </p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">User Type:</p>
            <p className="text-slate-700 font-semibold">{role}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Gender:</p>
            <p className="text-slate-700 font-semibold">{gender}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Joining Date:</p>
            <p className="text-slate-700 font-semibold">{joining_date}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Email:</p>
            <p className="text-slate-700 font-semibold">{email}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Password:</p>
            <p className="text-slate-700 font-semibold">{password}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Phone:</p>
            <p className="text-slate-700 font-semibold">{phone}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Address:</p>
            <p className="text-slate-700 font-semibold">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
