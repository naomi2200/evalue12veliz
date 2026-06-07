import { Link, useLocation } from "react-router-dom";
import { Compass, Table2, Globe2 } from "lucide-react";

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-indigo-500/20 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 lg:gap-3 group"
          >
            <div className="relative">
              <Globe2 className="w-6 h-6 lg:w-8 lg:h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
              World Explorer
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex gap-1 lg:gap-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 lg:px-5 py-2 rounded-xl transition-all duration-200 ${
                isActive("/")
                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Compass className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-sm lg:text-base font-medium">Inicio</span>
            </Link>
            
            <Link
              to="/entities"
              className={`flex items-center gap-2 px-3 lg:px-5 py-2 rounded-xl transition-all duration-200 ${
                isActive("/entities")
                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <Table2 className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-sm lg:text-base font-medium">Entities</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;