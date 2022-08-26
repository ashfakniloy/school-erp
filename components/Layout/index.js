// //not using at this time

// import { useState, useEffect } from "react";
// import Router, { useRouter } from "next/router";
// import { useSelector, useDispatch } from "react-redux";
// import { API_URL } from "../../config";

// import { getInfo } from "../../redux/features/info/infoSlice";

// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import ScrollTop from "./ScrollTop";
// import Loader from "./Loader";
// import { superAdmin } from "./Sidebar/navlinks/superAdmin";
// import { admin } from "./Sidebar/navlinks/admin";
// import { teacher } from "./Sidebar/navlinks/teacher";
// import { student } from "./Sidebar/navlinks/student";
// import { parent } from "./Sidebar/navlinks/parent";

// function Layout({ children }) {
//   const [showMenu, setShowMenu] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();
//   const dispatch = useDispatch();

//   const { token, id } = useSelector((state) => state.auth);

//   const { logo, user_name, institution_name, role } = useSelector(
//     (state) => state.info
//   );

//   Router.events.on("routeChangeStart", (url) => {
//     setLoading(true);
//   });

//   Router.events.on("routeChangeComplete", (url) => {
//     setLoading(false);
//   });

//   Router.events.on("routeChangeError", (url) => {
//     setLoading(false);
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(`${API_URL}/data/all/${id}`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();

//       if (res.ok) {
//         console.log("data is", data.data);
//         dispatch(getInfo(data.data));
//         // return data.data;
//       } else {
//         return console.log("error", data.message);
//       }
//     };

//     fetchData();

//     // dispatch(getAllData(data));
//   }, [dispatch, id, token]);

//   useEffect(() => {
//     if (!token && !id) {
//       // router.push("/login/admin");
//       router.replace("/");
//     } else {
//       // setLoggedIn(true);
//       console.log("logged in");
//     }
//   }, [token, id, router]);

//   const navLinks = () => {
//     if (role === "super admin") {
//       return superAdmin;
//     }
//     if (role === "admin") {
//       return admin;
//     }
//     if (role === "teacher") {
//       return teacher;
//     }
//     if (role === "student") {
//       return student;
//     }
//     if (role === "parent") {
//       return parent;
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar
//         showMenu={showMenu}
//         setShowMenu={setShowMenu}
//         navLinks={navLinks()}
//         name={role}
//       />

//       <div className="flex-1 min-h-screen">
//         <Header
//           showMenu={showMenu}
//           setShowMenu={setShowMenu}
//           logo={logo}
//           userName={user_name}
//           institutionName={institution_name}
//           role={role}
//         />

//         {loading && <Loader />}

//         {children}

//         <ScrollTop />
//       </div>
//     </div>
//   );
// }

// export default Layout;
