import { defineStore } from "pinia";

import type { ILatestItem } from "@/models/latestItem";
import type { IFeaturedItem } from "@/models/featuredItem";
import type { ISearchForm } from "@/models/searchForm";
import type { IHotelCard } from "@/models/hotelCard";

import {
  getLatestItems,
  getFeaturedItems,
  postSearchFilter,
  getItemById,
} from "@/api/api";

export const useHotelCards = defineStore({
  id: "hotelCards",
  state: () => ({
    latestItems: [] as ILatestItem[],
    featuredItems: [] as IFeaturedItem[],
    findResultItems: [] as IFeaturedItem[],
    hotelsWithFullInfo: [] as IHotelCard[],
  }),
  getters: {},
  actions: {
    async setLatestItems() {
      this.latestItems = await getLatestItems();
    },

    async setFeaturedItems() {
      this.featuredItems = await getFeaturedItems();
    },

    async getAllSearchResult(formData: ISearchForm) {
      this.findResultItems = await postSearchFilter(formData);

      return this.findResultItems;
    },

    async getHotelInfoById(id: string) {
      const hotelForAdding = await getItemById(id);
      this.hotelsWithFullInfo.push(hotelForAdding);
    },

    async getAllHotelsInfoFromSearch(findResult: IFeaturedItem[]) {
      if (findResult.length) {
        const hotelIds = new Set([...findResult].map((item) => item._id));

        try {
          Promise.all(
            [...hotelIds].map(async (id) => {
              await this.getHotelInfoById(id);
            })
          );
        } catch (error: any) {
          console.error(error.data);
        }
      }
    },
  },
});
