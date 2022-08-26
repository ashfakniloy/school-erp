import {
  AiOutlineDashboard,
  AiOutlineAreaChart,
  AiOutlineHome,
  AiFillSetting,
} from "react-icons/ai";
import { ImUsers, ImLibrary } from "react-icons/im";
import { MdOutlineGroups, MdMessage } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { GiMoneyStack, GiBus } from "react-icons/gi";
import { SiGooglesheets } from "react-icons/si";
import { FaBookOpen, FaClipboardList } from "react-icons/fa";
import { BsCalendar3, BsCalendarX } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

export const admin = [
  {
    id: 1,
    name: "dashboard",
    link: "/admin",
    icon: <AiOutlineDashboard className="fill-green-400" />,
  },
  {
    id: 2,
    name: "students",
    link: "/students",
    icon: <ImUsers className="fill-green-400" />,
    subLinks: [
      {
        id: 2,
        name: "all students",
        link: "/admin/students/all-students",
      },
      {
        id: 2,
        name: "admission form",
        link: "/admin/students/admission-form",
      },
      {
        id: 2,
        name: "student promotion",
        link: "/admin/students/student-promotion",
      },
    ],
  },
  {
    id: 3,
    name: "teachers",
    link: "/teachers",
    icon: <MdOutlineGroups className="fill-green-400" />,
    subLinks: [
      {
        name: "all teachers",
        link: "/admin/teachers/all-teachers",
      },
      {
        name: "add teacher",
        link: "/admin/teachers/add-teacher",
      },
      {
        name: "payment",
        link: "/admin/teachers/payment",
      },
    ],
  },
  {
    id: 4,
    name: "parents",
    link: "/parents",
    icon: <RiParentFill className="fill-green-400" />,
    subLinks: [
      {
        name: "all parents",
        link: "/admin/parents/all-parents",
      },
      {
        name: "add parent",
        link: "/admin/parents/add-parent",
      },
    ],
  },
  {
    id: 5,
    name: "library",
    link: "/library",
    icon: <ImLibrary className="fill-green-400" />,
    subLinks: [
      {
        name: "all books",
        link: "/admin/library/all-books",
      },
      {
        name: "add book",
        link: "/admin/library/add-book",
      },
    ],
  },
  {
    id: 6,
    name: "accounting",
    link: "/accounting",
    icon: <GiMoneyStack className="fill-green-400" />,
    subLinks: [
      {
        name: "all expenses",
        link: "/admin/accounting/all-expenses",
      },
      {
        name: "add expense",
        link: "/admin/accounting/add-expense",
      },
      {
        name: "all fees",
        link: "/admin/accounting/all-fees",
      },
      {
        name: "add fee",
        link: "/admin/accounting/add-fee",
      },
      {
        name: "all salaries",
        link: "/admin/accounting/all-salaries",
      },
      {
        name: "add salary",
        link: "/admin/accounting/add-salary",
      },
      {
        name: "all earnings",
        link: "/admin/accounting/all-earnings",
      },
      {
        name: "add earning",
        link: "/admin/accounting/add-earning",
      },
    ],
  },
  {
    id: 7,
    name: "class routine",
    link: "/class-routine",
    icon: <BsCalendar3 className="fill-green-400" />,
    subLinks: [
      {
        name: "all classes",
        link: "/admin/class-routine/all-classes",
      },
      {
        name: "add new class",
        link: "/admin/class-routine/add-new-class",
      },
    ],
  },
  {
    id: 8,
    name: "subject",
    link: "/subject",
    icon: <FaBookOpen className="fill-green-400" />,
    subLinks: [
      {
        name: "all subjects",
        link: "/admin/subject/all-subjects",
      },
      {
        name: "add subject",
        link: "/admin/subject/add-subject",
      },
    ],
  },
  {
    id: 9,
    name: "attendance",
    link: "/admin/attendance",
    icon: <SiGooglesheets className="fill-green-400" />,
  },
  {
    id: 10,
    name: "leave",
    link: "/leave",
    icon: <BsCalendarX className="fill-green-400" />,
    subLinks: [
      {
        name: "student leave",
        link: "/admin/leave/student-leave",
      },
      {
        name: "teacher leave",
        link: "/admin/leave/teacher-leave",
      },
      // {
      //   name: "all leaves",
      //   link: "/admin/leave/all-leaves",
      // },
      // {
      //   name: "add leave",
      //   link: "/admin/leave/add-leave",
      // },
    ],
  },
  {
    id: 11,
    name: "exam",
    link: "/exam",
    icon: <GoChecklist className="fill-green-400" />,
    subLinks: [
      {
        name: "all exam",
        link: "/admin/exam/all-exam",
      },
      {
        name: "add exam",
        link: "/admin/exam/add-exam",
      },
    ],
  },
  {
    id: 12,
    name: "result",
    link: "/admin/result",
    icon: <AiOutlineAreaChart className="fill-green-400" />,
  },
  {
    id: 13,
    name: "transport",
    link: "/transport",
    icon: <GiBus className="fill-green-400" />,
    subLinks: [
      {
        name: "all transport",
        link: "/admin/transport/all-transport",
      },
      {
        name: "add transport",
        link: "/admin/transport/add-transport",
      },
    ],
  },
  {
    id: 14,
    name: "hostel",
    link: "/hostel",
    icon: <AiOutlineHome className="fill-green-400" />,
    subLinks: [
      {
        name: "All hostel rooms",
        link: "/admin/hostel/all-hostel-rooms",
      },
      {
        name: "add new room",
        link: "/admin/hostel/add-new-room",
      },
    ],
  },
  {
    id: 15,
    name: "notice",
    link: "/notice",
    icon: <FaClipboardList className="fill-green-400" />,
    subLinks: [
      {
        name: "Notice Board",
        link: "/admin/notice/notice-board",
      },
      {
        name: "Add Notice",
        link: "/admin/notice/add-notice",
      },
    ],
  },
  {
    id: 16,
    name: "message",
    link: "/admin/message",
    icon: <MdMessage className="fill-green-400" />,
  },
  {
    id: 17,
    name: "email",
    link: "/admin/email",
    icon: <MdMessage className="fill-green-400" />,
  },
  {
    id: 18,
    name: "sms",
    link: "/admin/sms",
    icon: <MdMessage className="fill-green-400" />,
  },
  {
    id: 19,
    name: "admin accounts",
    link: "/admin/admin-accounts",
    icon: <AiFillSetting className="fill-green-400" />,
  },
  {
    id: 20,
    name: "billing",
    link: "/admin/billing",
    icon: <AiFillSetting className="fill-green-400" />,
    subLinks: [
      {
        name: "All Bills",
        link: "/admin/billing/all-bills",
      },
      {
        name: "Pay Bills",
        link: "/admin/billing/pay-bills",
      },
    ],
  },
];
