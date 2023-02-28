import { create } from "zustand";

interface TeamState {
  team: string;
  setTeam: (team: string) => void;
};

export const useTeamStore = create<TeamState>((set) => ({
  team: "Varsity",
  setTeam: (team) => set((state) => ({ team: team })),
}));
