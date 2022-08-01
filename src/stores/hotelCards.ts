import { defineStore } from "pinia";
import type { IHotelCard } from "@/models/hotelCard";

export const useHotelCards = defineStore({
  id: "hotelCards",
  state: () => ({
    hotelCards: [] as IHotelCard[],
  }),
  getters: {},
  actions: {},
});
