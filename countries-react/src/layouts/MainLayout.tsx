import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;