import { BsFillLightningFill, BsGearFill, BsPlus } from 'react-icons/bs';
import { FaFire, FaPoo, FaPowerOff } from 'react-icons/fa';

const SideBarIcon = ({ icon, text }: any) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
const SideBarPowerIcon = ({ icon, text }: any) => (
  <div className="sidebar-power-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

const SideBar = () => (
  <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
    <SideBarIcon icon={<FaFire size="28" />} text="Dashboard" />
    <Divider />
    <SideBarIcon icon={<BsPlus size="32" />} text="Add user" />
    <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Fire" />
    <SideBarIcon icon={<FaPoo size="20" />} text="Fire" />
    <Divider />
    <SideBarIcon icon={<BsGearFill size="22" />} text="Setting" />
    <div className="absolute inset-x-0 bottom-0 h-16 ...">
      <SideBarPowerIcon icon={<FaPowerOff size="22" />} text="Log out" />
    </div>
  </div>
);

export default SideBar;
