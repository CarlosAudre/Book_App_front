// src/components/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../navbar/Sidebar";
import Topbar from "../navbar/Topbar";

function MainLayout({ usuario }) {
  return (

    <div className="flex flex-col min-h-screen">
      <Topbar usuario={usuario} />

      <div className="flex flex-1">
        
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-50 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
