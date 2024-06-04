import MenuItem from "../Sidebar/MenuItem";
import { MdContactPage } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
const StudentMenu = () => {

  return (
    <>
      <MenuItem
        icon={MdContactPage}
        label="My Application"
        address="my-Application"
      />
      <MenuItem
        icon={MdOutlineRateReview}
        label="My reviews"
        address="my-reviews"
      />
    
    
    </>
  );
};

export default StudentMenu;
