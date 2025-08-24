import { LucideIcon } from "lucide-react";

type SidebarSection = {
    title: string;
    items: { 
        id: string; 
        count: number; 
        label: string; 
        icon: LucideIcon; 
        color?: string;
        key?: string
    }[];
    id?: number;
    icon?: LucideIcon;
    label?: string;
    count?: number;
    color?: string;
    key?: string;
}

export interface SidebarProps {
    isLoaded: boolean;
    setShowQuickAdd: (show: boolean) => void;
    setAiChatOpen: (open: boolean) => void;
    activeView: string;
    setActiveView: (view: string) => void;
    sidebarSections: SidebarSection[];
}