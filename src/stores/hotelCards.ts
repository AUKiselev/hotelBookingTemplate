import { defineStore } from "pinia";

import type { ILatestItem } from "@/models/latestItem";
import type { IFeaturedItem } from "@/models/featuredItem";

import { getLatestItems, getFeaturedItems } from "@/api/api";
// import type { IHotelCard } from "@/models/hotelCard";

export const useHotelCards = defineStore({
  id: "hotelCards",
  state: () => ({
    latestItems: [] as ILatestItem[],
    featuredItems: [] as IFeaturedItem[],
  }),
  getters: {},
  actions: {
    async setLatestItems() {
      this.latestItems = await getLatestItems();
    },

    async setFeaturedItems() {
      this.featuredItems = await getFeaturedItems();
    },
  },
});
