"use client";

import { Calendar, ChevronRight, Circle, Hash } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeView, setActiveView] = useState("today");
    const [showQuickAdd, setShowQuickAdd] = useState(false);
    const [aiChatOpen, setAiChatOpen] = useState(false);

    const projects = [
        { 
          id: 1, 
          name: 'TaskFlow 2.0', 
          key: 'TF', 
          color: 'purple', 
          taskCount: 8, 
          type: 'Software Project',
          lead: 'John Doe'
        },
        { 
          id: 2, 
          name: 'Marketing Campaign', 
          key: 'MC', 
          color: 'blue', 
          taskCount: 5, 
          type: 'Marketing',
          lead: 'Jane Smith' 
        },
        { 
          id: 3, 
          name: 'Personal', 
          key: 'PER', 
          color: 'green', 
          taskCount: 12, 
          type: 'Personal',
          lead: 'You' 
        }
    ];
    
    const sidebarSections = [
        {
            title: 'Views',
            items: [
            { id: 'today', icon: Calendar, label: 'Today', count: 4 },
            { id: 'upcoming', icon: ChevronRight, label: 'Upcoming', count: 8 },
            { id: 'inbox', icon: Circle, label: 'Inbox', count: 2 }
            ]
        },
        {
            title: 'Projects',
            items: projects.map(p => ({ 
            id: p.id.toString(), 
            icon: Hash, 
            label: p.name, 
            count: p.taskCount, 
            color: p.color,
            key: p.key 
            }))
        }
    ];

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
            </div>
    
            {/* Sidebar */}
            <Sidebar 
                isLoaded={isLoaded}
                activeView={activeView}
                setActiveView={setActiveView}
                sidebarSections={sidebarSections}
                setShowQuickAdd={setShowQuickAdd}
                setAiChatOpen={setAiChatOpen}
            />
    
            {/* Header */}
            <Header 
                activeView={activeView}
                projects={projects}
                viewType="list"
                setViewType={() => {}}
                isLoaded={isLoaded}
            />
    
            {/* Main Content (page-specific injected here) */}
            <main className={`ml-72 pt-20 p-6 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="max-w-7xl mx-auto">{children}</div>
            </main>
    
            {/* Quick Add Modal (persistent) */}
            <h1 className="text-white">Add Modal</h1>
    
            {/* AI Chat Panel (persistent) */}
            <h1 className="text-white">Ai chat</h1>
      </div>
    );
}

export default DashboardLayout;