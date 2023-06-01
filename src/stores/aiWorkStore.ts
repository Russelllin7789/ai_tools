import { defineStore } from "pinia";
import { IAIDetails, IAIWork } from "@/interface/IAIWork";
import axios from "axios";

export const useAiWorkStore = defineStore("aiWorkStore", {
  state: () => ({
    aiDetails: [] as IAIWork[],
  }),
  actions: {
    async fetchAiDetails() {
      try {
        const { data } = await axios.get<IAIDetails>(
          "https://2023-engineer-camp.zeabur.app/api/v1/works"
        );
        this.aiDetails = data.ai_works.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
