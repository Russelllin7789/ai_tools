import { defineStore } from "pinia";
import { IAIDetails, IAIWork } from "@/interface/IAIWork";
import axios from "axios";

export const useAiWorkStore = defineStore("aiWorkStore", {
  state: () => ({
    aiDetails: [] as IAIWork[],
    page: {
      total_pages: -1,
      current_page: -1,
      has_pre: false,
      has_next: false,
    },
    isLoading: false,
  }),
  actions: {
    async fetchAiDetails() {
      this.isLoading = true;
      try {
        const { data } = await axios.get<IAIDetails>(
          "https://2023-engineer-camp.zeabur.app/api/v1/works"
        );
        this.aiDetails = data.ai_works.data;
        this.page = { ...data.ai_works.page };
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
});
