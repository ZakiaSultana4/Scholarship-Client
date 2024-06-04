import { MdOutlineAddChart } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { GoCodeReview } from "react-icons/go";
import MenuItem from "../Sidebar/MenuItem";

const ModeratorMenu = () => {
  return (
    <>
      <MenuItem icon={MdOutlineAddChart } label="Add Scholarship" address="add-Scholarship" />
      <MenuItem icon={MdOutlineManageHistory} label="Manage Scholarships" address="manage-Scholarships" />
      <MenuItem icon={VscGitStashApply} label="All applied Scholarship" address="all-applied-Scholarship" />
      <MenuItem icon={GoCodeReview} label="All reviews" address="all-reviews" />
    </>
  );
};

export default ModeratorMenu;
