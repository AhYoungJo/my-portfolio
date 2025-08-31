import {create} from 'zustand';
import {GitHubRepo} from '@/types/type';

interface ProjectStore {
  projects: GitHubRepo[];
  currentPage: number;
  hasMore: boolean;
  loading: boolean;
  error: string | null;

  addProjects: (newProjects: GitHubRepo[]) => void;
  setCurrentPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,

  addProjects: newProjects => {
    const {projects} = get();
    const uniqueProjects = new Map();
    projects.forEach(project => uniqueProjects.set(project.id, project));
    newProjects.forEach(project => uniqueProjects.set(project.id, project));
    const updatedProjects = Array.from(uniqueProjects.values());

    set({projects: updatedProjects});
  },

  setCurrentPage: page => set({currentPage: page}),

  setHasMore: hasMore => set({hasMore}),

  setLoading: loading => set({loading}),

  setError: error => set({error}),

  reset: () =>
    set({
      projects: [],
      currentPage: 1,
      hasMore: true,
      loading: false,
      error: null,
    }),
}));
