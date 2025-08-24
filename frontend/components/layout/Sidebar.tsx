import { SidebarProps } from "./Sidebar.types";
import { Brain, MessageCircle, Plus } from "lucide-react";


const Sidebar = ({ isLoaded, setShowQuickAdd, setAiChatOpen, activeView, setActiveView, sidebarSections }: SidebarProps) => (
    <div className={`fixed left-0 top-0 h-full w-72 bg-slate-950/90 backdrop-blur-xl border-r border-white/10 z-30 transform transition-all duration-700 ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Logo */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">TaskFlow</span>
        </div>
        
        {/* Quick Add */}
        <button
          onClick={() => setShowQuickAdd(true)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      {/* AI Assistant */}
      <div className="p-4 border-b border-white/10">
        <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg p-3 border border-purple-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Brain className="w-3 h-3 text-white animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">AI Assistant</p>
              <p className="text-xs text-green-400">Ready to help</p>
            </div>
            <button 
              onClick={() => setAiChatOpen(true)}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {sidebarSections.map((section, sectionIndex) => (
          <div key={section.title} className="p-4">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-300 text-left group ${
                    activeView === item.id 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ 
                    animationDelay: `${0.05 * (sectionIndex * 5 + index)}s`,
                    transform: isLoaded ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: isLoaded ? 1 : 0
                  }}
                >
                  {item.color ? (
                    <div className={`w-4 h-4 rounded bg-${item.color}-500 flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{item.key}</span>
                    </div>
                  ) : (
                    <item.icon className="w-4 h-4" />
                  )}
                  <span className="font-medium flex-1">{item.label}</span>
                  {item.count > 0 && (
                    <span className="text-xs bg-slate-600 text-slate-300 px-2 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
);

export default Sidebar;