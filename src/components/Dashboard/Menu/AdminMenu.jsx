import { MdOutlineAddChart } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { GoCodeReview } from "react-icons/go";
import MenuItem from "../Sidebar/MenuItem";
import { FaPeopleRoof } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
const AdminMenu = () => {
  return (
    <>
    <MenuItem icon={MdOutlineAddChart } label="Add Scholarship" address="add-Scholarship-admin" />
    <MenuItem icon={MdOutlineManageHistory} label="Manage Scholarships" address="manage-Scholarship-admin" />
    <MenuItem icon={VscGitStashApply} label="Manage Applied Scholarship" address="all-applied-Scholarship-admin" />
    <MenuItem icon={GoCodeReview} label="Manage Reviews" address="all-reviews-admin" />
    <MenuItem icon={FaPeopleRoof} label="Manage Users" address="all-users" />
    <MenuItem icon={ImStatsBars} label="Statistics" address="adminStatistics" />
  </>
  )
}

export default AdminMenu