import { defineStore } from "pinia";
import type { IBanners } from "@/models/banners";
import { getBannersData } from "@/api/api";

export const useBannersStore = defineStore({
  id: "banners",
  state: () => ({
    banners: {} as IBanners,
  }),
  getters: {},
  actions: {
    async setBanners() {
      const bannersList = await getBannersData();

      const { main, second, last } = bannersList;
      this.banners.main = main;
      this.banners.second = second;
      this.banners.last = last;
    },
  },
});
