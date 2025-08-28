import { AppBar } from "@/components/shared/AppBar";
import DynamicBreadcrumbs from "@/components/shared/DynamicBreadcrumbs";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <AppBar />
      <div className="p-8">
        <div className="p-2">
          <DynamicBreadcrumbs />
        </div>
        <div className="p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
