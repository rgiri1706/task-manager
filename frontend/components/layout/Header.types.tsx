
type Project = {
    id: number;
    name: string;
    key: string;
    color: string;
    taskCount: number;
    type: string;
    lead: string;
}
export interface HeaderProps {
    activeView: string;
    projects: Project[];
    viewType: string;
    setViewType: (view: string) => void;
    isLoaded: boolean;
}