import { FaUsers, FaTachometerAlt, FaVoteYea } from "react-icons/fa";

export const AdminNavItems: any[] = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaTachometerAlt size={25} />,
  },
  {
    label: "Election",
    path: "/admin/election",
    icon: <FaVoteYea size={25} />,
  },
  {
    label: "Candidates",
    path: "/admin/candidates",
    icon: <FaUsers size={25} />,
  },
  {
    label: "Voters",
    path: "/admin/voters",
    icon: <FaUsers size={25} />,
  },
];
