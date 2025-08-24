import { Filter, Grid3X3, List, Search, User } from "lucide-react";
import { HeaderProps } from "./Header.types";

const Header = ({ activeView, projects, viewType, setViewType, isLoaded }: HeaderProps) => (
    <header className={`fixed top-0 left-72 right-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 z-20 transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white capitalize">
            {activeView === 'today' ? 'Today' : 
             activeView === 'upcoming' ? 'Upcoming' : 
             activeView === 'inbox' ? 'Inbox' :
             projects.find(p => p.id.toString() == activeView)?.name || 'TaskFlow'}
          </h1>
          
          {/* View Toggle */}
          <div className="flex items-center bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setViewType('list')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewType === 'list' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewType('board')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewType === 'board' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:bg-slate-750 transition-all duration-300 w-64"
            />
          </div>
          
          {/* Filter */}
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300">
            <Filter className="w-5 h-5" />
          </button>
          
          {/* Profile */}
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );

export default Header;