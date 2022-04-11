import SideBar from '../../components/SideBar';
import TopNavigation from '../../components/SideBar/TopNavigation';

const Dashboard = () => (
  <div>
    <SideBar />
  </div>
);

export default Dashboard;

Dashboard.getLayout = function PageLayout(page: any) {
  return (
    <>
      <TopNavigation />
      {page}
    </>
  );
};
