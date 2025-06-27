import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <nav className="flex gap-4 mb-6 border-b">
        <Link to="/dashboard">Overview</Link>
        <Link to="/dashboard/all-items">All Items</Link>
        <Link to="/dashboard/my-items">My Items</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
